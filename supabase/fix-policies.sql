-- Remover políticas existentes
drop policy if exists "User can manage own record" on users;

-- Políticas para a tabela users
create policy "Enable insert for registration" on users
  for insert
  with check (auth.uid() = id);

create policy "Enable read own profile" on users
  for select
  using (auth.uid() = id);

create policy "Enable update own profile" on users
  for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Manter as outras políticas existentes
create policy "User can manage their forms" on forms
  for all
  using (auth.uid() = user_id);

create policy "User can view responses to their forms" on responses
  for select
  using (
    form_id in (
      select id from forms where user_id = auth.uid()
    )
  );

create policy "Anyone can insert a response" on responses
  for insert
  with check (true); 