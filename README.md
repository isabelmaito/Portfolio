# Portfolio Pessoal

Portfolio responsivo desenvolvido com React e Vite, com foco em design moderno, boa performance e suporte a tema claro/escuro.

## Visao Geral

- Tema dark/light com alternancia dinamica
- Layout responsivo para desktop e mobile
- Componentizacao com React
- Estilizacao com CSS e variaveis de tema

## Secoes do Site

- Home
- Sobre
- Habilidades
- Portfolio
- HEA (Hoje Eu Aprendi): posts curtos com linha do tempo e filtro por data, servidos pelo [Portfolio-backend](https://github.com/isabelmaito/Portfolio-backend)

## HEA e área de publicação

- `/admin/login` e `/admin`: login da autora e painel para publicar, responder, editar e apagar posts.
- Link compartilhável de um post: `/?post=<id>#hea`.
- Configure a URL da API em `.env` (veja `.env.example`):

```bash
VITE_API_URL=http://localhost:4000
```

Em produção, a hospedagem precisa redirecionar rotas desconhecidas para `index.html` (SPA), para `/admin` abrir direto pelo endereço.

## Tecnologias

- React
- Vite
- React Router
- Material UI (timeline e menu de datas do HEA)
- Lucide React
- CSS3

## Estrutura do Projeto

```text
Portfolio/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Sobre.jsx
│   │   ├── Habilidades.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contato.jsx
│   │   ├── Footer.jsx
│   │   └── ThemeContext.jsx
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```
