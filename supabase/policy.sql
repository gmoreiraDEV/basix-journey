-- Usuário só vê seus próprios registros

create policy "User can manage own record"
  on users
  for all
  using (auth.uid() = id);

create policy "User can manage their forms"
  on forms
  for all
  using (auth.uid() = user_id);

create policy "User can view responses to their forms"
  on responses
  for select
  using (
    form_id in (
      select id from forms where user_id = auth.uid()
    )
  );

-- (Opcional) permitir inserir respostas publicamente
create policy "Anyone can insert a response"
  on responses
  for insert
  with check (true);
