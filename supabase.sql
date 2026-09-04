create extension if not exists pgcrypto;
create table if not exists public.diana_matches (id uuid primary key default gen_random_uuid(), created_at timestamptz default now(), product_id text not null, match_percentage int, favorite_flavor text, mood text, social_role text, consumption_moment text, intensity int, spicy_score int, social_score int, intensity_score int, chill_score int, classic_score int, source text);
alter table public.diana_matches enable row level security;
create policy "anonymous can insert matches" on public.diana_matches for insert to anon with check (true);
create or replace view public.diana_match_summary as select product_id, count(*)::int as total from public.diana_matches group by product_id;
