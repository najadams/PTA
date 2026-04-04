-- Utility RPC used by the intake portal PATCH handler
-- to merge partial form_data updates without overwriting sibling fields.
create or replace function jsonb_merge(target jsonb, source jsonb)
returns jsonb
language sql
immutable
as $$
  select target || source
$$;
