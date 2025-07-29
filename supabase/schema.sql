-- Table: users (autenticados pelo Supabase Auth)
-- Dados complementares, caso queira salvar nome, avatar, etc
create table if not exists users (
  id uuid primary key references auth.users (id) on delete cascade,
  name text,
  created_at timestamp with time zone default timezone('utc', now())
);

-- Table: forms
create table if not exists forms (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  title text not null,
  description text,
  questions jsonb not null, -- Ex: [{ label, type, options }]
  created_at timestamp with time zone default timezone('utc', now())
);

-- Table: responses
create table if not exists responses (
  id uuid primary key default gen_random_uuid(),
  form_id uuid references forms(id) on delete cascade,
  answers jsonb not null, -- Ex: [{ question, answer }]
  created_at timestamp with time zone default timezone('utc', now())
);
