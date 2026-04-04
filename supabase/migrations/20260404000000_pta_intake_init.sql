-- ============================================================
-- PTA Intake Portal — Initial Schema
-- Migration: 20260404000000_pta_intake_init.sql
-- ============================================================

-- ------------------------------------------------------------
-- 1. TABLES
-- ------------------------------------------------------------

create table if not exists pta_intake_sessions (
  id               uuid        primary key default gen_random_uuid(),
  slug             text        unique not null,
  client_name      text        not null,
  company_name     text        not null,
  client_email     text        not null,
  status           text        not null default 'in_progress'
                               check (status in ('in_progress', 'submitted')),
  current_step     integer     not null default 1,
  form_data        jsonb       not null default '{}',
  submitted_at     timestamptz,
  reference_number text        unique,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

create table if not exists pta_intake_uploads (
  id           uuid        primary key default gen_random_uuid(),
  session_id   uuid        not null references pta_intake_sessions(id) on delete cascade,
  file_name    text        not null,
  storage_path text        not null,
  file_size    integer     not null,
  mime_type    text        not null,
  uploaded_at  timestamptz not null default now()
);

-- ------------------------------------------------------------
-- 2. INDEXES
-- ------------------------------------------------------------

create index if not exists idx_pta_intake_sessions_slug
  on pta_intake_sessions (slug);

create index if not exists idx_pta_intake_uploads_session_id
  on pta_intake_uploads (session_id);

-- ------------------------------------------------------------
-- 3. UPDATED_AT TRIGGER
-- ------------------------------------------------------------

create or replace function pta_set_updated_at()
returns trigger
language plpgsql
as $$
begin 
  new.updated_at = now();
  return new;
end;
$$;

create trigger trg_pta_intake_sessions_updated_at
  before update on pta_intake_sessions
  for each row
  execute function pta_set_updated_at();

-- ------------------------------------------------------------
-- 4. ROW LEVEL SECURITY
-- ------------------------------------------------------------

alter table pta_intake_sessions enable row level security;
alter table pta_intake_uploads   enable row level security;

-- pta_intake_sessions policies
-- (slug acts as an unguessable access token — no user auth required)

create policy "sessions_insert_public"
  on pta_intake_sessions
  for insert
  to anon, authenticated
  with check (true);

create policy "sessions_select_public"
  on pta_intake_sessions
  for select
  to anon, authenticated
  using (true);

create policy "sessions_update_public"
  on pta_intake_sessions
  for update
  to anon, authenticated
  using (true)
  with check (true);

-- pta_intake_uploads policies

create policy "uploads_insert_public"
  on pta_intake_uploads
  for insert
  to anon, authenticated
  with check (true);

create policy "uploads_select_public"
  on pta_intake_uploads
  for select
  to anon, authenticated
  using (true);

-- ------------------------------------------------------------
-- 5. STORAGE — pta-intake-docs bucket
-- ------------------------------------------------------------

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'pta-intake-docs',
  'pta-intake-docs',
  false,
  20971520,
  array[
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ]
)
on conflict (id) do nothing;

-- Storage RLS policies for pta-intake-docs

create policy "storage_intake_insert_public"
  on storage.objects
  for insert
  to anon, authenticated
  with check (bucket_id = 'pta-intake-docs');

create policy "storage_intake_select_public"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'pta-intake-docs');
