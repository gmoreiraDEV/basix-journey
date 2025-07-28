# 🚀 Basix Journey

**Basix Journey** é um micro-SaaS para criar jornadas personalizadas de coleta de informações — como diagnósticos, briefings e formulários inteligentes — com geração de PDFs e automações simples.

> Pensado para profissionais como mentores, terapeutas, consultores, designers e agências que desejam captar informações de forma profissional, rápida e personalizável.

---

## 🛠️ Tecnologias

- [Next.js 15 (App Router)](https://nextjs.org/)
- [Supabase (Auth, DB, Storage)](https://supabase.com/)
- [TailwindCSS + shadcn/ui](https://ui.shadcn.com/)
- [React Hook Form + Zod](https://react-hook-form.com/)
- [@react-pdf/renderer](https://react-pdf.org/)
- Deploy: [Vercel](https://vercel.com/) ou [Railway](https://railway.app/)

---

## 🧱 Estrutura de pastas
```text
lib/
├── supabase.ts              # Supabase client com tipagem
├── database.types.ts        # Tipos gerados via supabase CLI
└── dal/
    ├── auth.ts              # Autenticação e sessão
    ├── forms.ts             # CRUD de formulários
    └── responses.ts         # CRUD de respostas (em breve)

app/
├── layout.tsx               # Layout global
├── page.tsx                 # Landing page
└── dashboard/               # Área autenticada do usuário
```

---

## 🧪 Como rodar local

```bash
git clone https://github.com/seu-usuario/basix-journey.git
cd basix-journey
pnpm install
cp .env.local.example .env.local
# Edite as variáveis de ambiente com as chaves do seu Supabase
pnpm dev
