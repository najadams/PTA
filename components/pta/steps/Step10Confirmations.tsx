'use client'
import { useRef, useState } from 'react'
import { PtaField }    from '../shared/PtaField'
import { PtaInput }    from '../shared/PtaInput'
import { PtaTextarea } from '../shared/PtaTextarea'
import { PtaCheckbox } from '../shared/PtaCheckbox'
import { InlineAlert } from '../shared/InlineAlert'
import { C, type Step10Props, type UploadedFile } from '../shared/portal'

const g   = (fd: Record<string, unknown>, k: string) => (fd[k] ?? '') as string
const gb  = (fd: Record<string, unknown>, k: string) => fd[k] === true

const ACCEPTED = '.pdf,.doc,.docx,.xlsx,.xls'
const LABEL_STYLE = { fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: C.textMuted, marginBottom: 12 }

export function Step10Confirmations({ formData: fd, onChange: oc, errors: e, slug, uploadedFiles, onFilesChange }: Step10Props) {
  const fileRef             = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')

  const handleUpload = async (file: File) => {
    setUploading(true)
    setUploadError('')
    const form = new FormData()
    form.append('file', file)
    try {
      const res  = await fetch(`/api/intake/sessions/${slug}/upload`, { method: 'POST', body: form })
      const data = await res.json() as { file_id?: string; file_name?: string; storage_path?: string; error?: string }
      if (!res.ok) throw new Error(data.error ?? 'Upload failed')
      const newFile: UploadedFile = { file_id: data.file_id!, file_name: data.file_name!, storage_path: data.storage_path! }
      onFilesChange([...uploadedFiles, newFile])
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (fileId: string) => {
    await fetch(`/api/intake/sessions/${slug}/upload/${fileId}`, { method: 'DELETE' })
    onFilesChange(uploadedFiles.filter(f => f.file_id !== fileId))
  }

  return (
    <div>
      {/* Upload */}
      <p style={LABEL_STYLE}>Supporting documents</p>
      <div
        onClick={() => fileRef.current?.click()}
        style={{
          border: `1.5px dashed ${C.border}`, borderRadius: 4,
          padding: '28px 20px', textAlign: 'center', cursor: 'pointer',
          background: C.surfaceAlt, marginBottom: 12,
          transition: 'border-color 150ms',
        }}
      >
        <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>
          {uploading ? 'Uploading...' : 'Click to upload'}
        </p>
        <p style={{ margin: '4px 0 0', fontSize: 12, color: C.textMuted }}>
          PDF, DOC, DOCX, XLS, XLSX — max 20 MB per file
        </p>
        <p style={{ margin: '2px 0 0', fontSize: 12, color: C.textMuted }}>
          Upload any draft agreements, company certificates, board resolutions, or prior GIPC correspondence.
        </p>
      </div>
      <input ref={fileRef} type="file" accept={ACCEPTED} style={{ display: 'none' }}
        onChange={ev => { if (ev.target.files?.[0]) handleUpload(ev.target.files[0]) }} />
      {uploadError && <p style={{ fontSize: 12, color: C.error, marginBottom: 8 }}>{uploadError}</p>}
      {uploadedFiles.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
          {uploadedFiles.map(f => (
            <div key={f.file_id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: C.surface, border: `1px solid ${C.border}`, borderRadius: 3, padding: '8px 14px' }}>
              <span style={{ fontSize: 13, color: C.text, fontFamily: 'var(--font-dm-sans)' }}>{f.file_name}</span>
              <button type="button" onClick={() => handleDelete(f.file_id)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.textMuted, fontSize: 18, lineHeight: 1 }}>&times;</button>
            </div>
          ))}
        </div>
      )}

      {/* Timeline */}
      <p style={{ ...LABEL_STYLE, marginTop: 28 }}>Target timeline</p>
      <PtaField label="Target agreement completion date or timeframe">
        <PtaInput value={g(fd,'target_completion')} onChange={ev => oc('target_completion', ev.target.value)}
          placeholder="e.g. End of Q2 2025, within 8 weeks" />
      </PtaField>

      {/* Notes */}
      <p style={{ ...LABEL_STYLE, marginTop: 28 }}>Additional notes</p>
      <PtaField label="Anything else our team should know">
        <PtaTextarea value={g(fd,'additional_notes')} onChange={ev => oc('additional_notes', ev.target.value)}
          placeholder="Prior negotiations, specific sensitivities, constraints, or instructions that will help us structure accurately." rows={4} />
      </PtaField>

      {/* Confirmations */}
      <p style={{ ...LABEL_STYLE, marginTop: 28 }}>Confirmations</p>
      {e.confirm_accuracy && <InlineAlert variant="error">Please complete all confirmations before submitting.</InlineAlert>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 14 }}>
        <PtaCheckbox checked={gb(fd,'confirm_accuracy')} onChange={v => oc('confirm_accuracy', v)} hasError={!!e.confirm_accuracy}>
          I confirm that the information provided is accurate to the best of my knowledge
        </PtaCheckbox>
        <PtaCheckbox checked={gb(fd,'confirm_authority')} onChange={v => oc('confirm_authority', v)} hasError={!!e.confirm_authority}>
          I confirm I am authorised to submit this information on behalf of the entities named
        </PtaCheckbox>
        <PtaCheckbox checked={gb(fd,'confirm_confidentiality')} onChange={v => oc('confirm_confidentiality', v)} hasError={!!e.confirm_confidentiality}>
          I understand this submission is confidential and will be used solely for the purpose of structuring a Technology Transfer Agreement
        </PtaCheckbox>
        <PtaCheckbox checked={gb(fd,'confirm_engagement')} onChange={v => oc('confirm_engagement', v)} hasError={!!e.confirm_engagement}>
          I understand that submission of this form does not constitute a binding engagement and that PTA will confirm scope and fees separately
        </PtaCheckbox>
      </div>
    </div>
  )
}
