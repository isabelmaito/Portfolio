<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="src/assets/logoHorizontalBranco.png">
    <img src="src/assets/logoHorizontal.png" alt="Isabel Maito, Developer & Designer" width="420">
  </picture>
</p>

<p align="center">
  Portfólio pessoal de <strong>Isabel Maito</strong>, desenvolvedora full stack e designer.<br>
  Responsivo, com tema claro e escuro, em 5 idiomas e com um diário de estudos, o HEA.
</p>

<p align="center">
  <a href="https://www.isabelmaito.com.br"><strong>www.isabelmaito.com.br</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Material_UI-007FFF?logo=mui&logoColor=white" alt="Material UI">
  <img src="https://img.shields.io/badge/i18next-26A69A?logo=i18next&logoColor=white" alt="i18next">
  <img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white" alt="Vercel">
</p>

---

## ✨ O que tem no site

| Seção | O que mostra |
| --- | --- |
| 🏠 **Início** | Apresentação e links de contato |
| 👩‍💻 **Quem sou eu** | Minha história, formação e cursos |
| 🧰 **Habilidades** | Tecnologias e ferramentas que uso |
| 🎨 **Portfólio** | Projetos de desenvolvimento e design |
| 📓 **HEA** | *Hoje Eu Aprendi*: posts curtos sobre o que aprendo a cada dia |

## 📓 HEA: Hoje Eu Aprendi

Um diário de estudos em formato de linha do tempo. Muitos posts vêm de exercícios e trabalhos da faculdade.

- 🧵 **Continuações**: um post pode ganhar novas partes com o tempo, como uma conversa.
- 🏷️ **Navegar por tema**: um botão abre os temas como caixinhas. Marcar vários mostra os posts de **qualquer um** deles. O feed espera **1,5 s** depois do último clique para buscar, assim vários cliques seguidos viram uma busca só.
- 📅 **Navegar por data**: anos e meses com a quantidade de posts. Combina com o filtro de tema.
- 🔖 **Temas no post**: ficam ao lado da data. No celular, ganham uma linha própria. Clicar num tema filtra o feed por ele.
- 🔗 **Links compartilháveis**:
  - um post: `/?post=<id>#hea`
  - temas marcados: `/?temas=1,4#hea`
- 🌎 **Traduzido**: cada post aparece no idioma escolhido no site.

Os posts vêm de uma API própria, num repositório separado. A autora publica por uma área protegida por login.

## 🌎 Idiomas

| Idioma | Código |
| --- | --- |
| Português (BR) | `pt-BR` |
| English | `en` |
| Español | `es` |
| 中文 | `zh-CN` |
| Pinyin | `zh-Latn-pinyin` |

Os textos da interface ficam em `src/locales/resources.js`. O Pinyin é gerado a partir do chinês antes de cada build (`npm run i18n:pinyin`), então a biblioteca de pinyin não vai para o navegador de quem visita.

## 🚀 Rodando localmente

```bash
npm install
cp .env.example .env   # endereço da API do HEA
npm run dev            # http://localhost:3000
```

```bash
npm run build          # gera o Pinyin e a versão de produção em dist/
npm run preview        # serve o build localmente
```

| Variável | Uso |
| --- | --- |
| `API_URL` | Endereço da API do HEA, sem barra no final. Padrão: `http://localhost:4000` |

Em produção, a hospedagem redireciona rotas desconhecidas para `index.html` (SPA), configurado em `vercel.json`.

## 🛠️ Tecnologias

- **React** + **Vite**
- **React Router**
- **Material UI**: linha do tempo e menu de datas do HEA
- **i18next** + **react-i18next**
- **Lucide React**: ícones
- **CSS3** com variáveis de tema claro e escuro

## 🗂️ Estrutura

```text
Portfolio/
├── scripts/                  # geração do Pinyin no build
├── src/
│   ├── assets/               # logos, fotos e imagens dos projetos
│   ├── components/
│   │   ├── hea/              # feed, linha do tempo, menus de tema e data
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Sobre.jsx
│   │   ├── Formacao.jsx
│   │   ├── Habilidades.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contato.jsx
│   │   └── Footer.jsx
│   ├── locales/              # textos da interface nos 5 idiomas
│   ├── pages/admin/          # área de publicação do HEA
│   ├── services/heaApi.js    # chamadas à API do HEA
│   ├── utils/heaDates.js     # datas e idioma dos posts
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vercel.json
└── vite.config.js
```

---

<p align="center">
  Feito com 💜 por <a href="https://www.isabelmaito.com.br">Isabel Maito</a>
</p>
