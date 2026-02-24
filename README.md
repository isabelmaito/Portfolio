# 🎨 Portfolio Pessoal

Portfolio moderno e responsivo desenvolvido com React, apresentando um design elegante com suporte a tema dark/light mode.

## ✨ Características

- 🌓 **Dark/Light Mode** - Alternância entre temas claro e escuro com cores roxo/lilás/violeta
- 📱 **Totalmente Responsivo** - Design adaptável para todos os dispositivos
- ⚡ **Performance Otimizada** - Construído com Vite para carregamento rápido
- 🎯 **Navegação Suave** - Transições animadas entre páginas
- 🎨 **Design Moderno** - Interface limpa e profissional com animações sutis
- ♿ **Acessível** - Seguindo práticas de acessibilidade web

## 📄 Páginas

- **Início** - Introdução com apresentação e links sociais
- **Quem sou eu** - Sobre mim, experiência e qualidades
- **Habilidades** - Skills técnicas organizadas por categoria
- **Contato** - Formulário de contato e informações de contato

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **React Router** - Navegação entre páginas
- **Vite** - Build tool moderna e rápida
- **Lucide React** - Ícones modernos e elegantes
- **CSS3** - Estilização com variáveis CSS e animações

## 🚀 Como Executar

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd Portfolio
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra o navegador em `http://localhost:3000`

## 📦 Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

Para visualizar o build de produção:

```bash
npm run preview
```

## 🎨 Temas

### Dark Mode

- Fundo: Preto (#0a0a0a)
- Accent: Roxo/Lilás (#a855f7, #c084fc)
- Texto: Branco com variações

### Light Mode

- Fundo: Branco (#ffffff)
- Accent: Roxo/Violeta (#7c3aed, #a855f7)
- Texto: Preto com variações

## 📁 Estrutura do Projeto

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Sobre.jsx
│   │   ├── Sobre.css
│   │   ├── Habilidades.jsx
│   │   ├── Habilidades.css
│   │   ├── Contato.jsx
│   │   └── Contato.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Personalização

### Alterar Cores

Edite as variáveis CSS em `src/index.css`:

```css
/* Light Mode */
body.light {
    --accent-primary: #7c3aed;
    --accent-secondary: #a855f7;
    /* ... outras cores */
}

/* Dark Mode */
body.dark {
    --accent-primary: #a855f7;
    --accent-secondary: #c084fc;
    /* ... outras cores */
}
```

### Alterar Conteúdo

- **Informações pessoais**: Edite os componentes em `src/pages/`
- **Links sociais**: Atualize os URLs em `Home.jsx` e `Contato.jsx`
- **Habilidades**: Modifique o array `skills` em `Habilidades.jsx`

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📧 Contato

Para mais informações, entre em contato através do formulário no portfolio.

---

Desenvolvido com ❤️ e React
