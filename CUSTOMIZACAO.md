# 🎨 Guia de Customização - Portfolio

Este guia ajudará você a personalizar o portfolio de acordo com suas necessidades.

## 📝 Informações Pessoais

### Home (Introdução)

Arquivo: `src/pages/Home.jsx`

```jsx
// Altere estas partes:
<div className="greeting">Olá, eu sou</div>
<h1 className="title">
  <span className="gradient-text">Desenvolvedor</span>
  <br />
  Full Stack
</h1>
<p className="description">
  Transformando ideias em experiências digitais...
</p>
```

**Links Sociais:**

```jsx
<a href="https://github.com" ...> // Seu GitHub
<a href="https://linkedin.com" ...> // Seu LinkedIn
<a href="mailto:contato@email.com" ...> // Seu Email
```

### Sobre (Quem sou eu)

Arquivo: `src/pages/Sobre.jsx`

- **Textos**: Edite os parágrafos dentro de `<p className="sobre-text">`
- **Estatísticas**: Modifique o array `stats` com seus números
- **Qualidades**: Personalize o array `qualities` com suas características

### Habilidades

Arquivo: `src/pages/Habilidades.jsx`

Edite o objeto `skills`:

```jsx
const skills = {
  frontend: [
    { name: 'React', level: 90 }, // Seu nível de 0-100
    { name: 'JavaScript', level: 85 },
    // Adicione ou remova conforme necessário
  ],
  backend: [...],
  tools: [...]
};
```

**Tecnologias em Aprendizado:**

```jsx
<div className="learning-tags">
    <span className="tag">Next.js</span>
    // Adicione suas tecnologias
</div>
```

### Contato

Arquivo: `src/pages/Contato.jsx`

```jsx
const contactInfo = [
    {
        icon: <Mail size={24} />,
        title: "Email",
        content: "seu@email.com", // Seu email
        link: "mailto:seu@email.com",
    },
    // Atualize telefone e localização
]
```

## 🎨 Personalização de Cores

### Arquivo: `src/index.css`

#### Light Mode:

```css
body.light {
    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --accent-primary: #7c3aed; /* Cor principal */
    --accent-secondary: #a855f7; /* Cor secundária */
    --text-primary: #1a1a1a;
    /* ... */
}
```

#### Dark Mode:

```css
body.dark {
    --bg-primary: #0a0a0a;
    --bg-secondary: #1a1a1a;
    --accent-primary: #a855f7; /* Cor principal */
    --accent-secondary: #c084fc; /* Cor secundária */
    --text-primary: #ffffff;
    /* ... */
}
```

### Sugestões de Paletas de Cores:

**Roxo/Violeta (Atual):**

- Primary: `#7c3aed` / `#a855f7`
- Secondary: `#a855f7` / `#c084fc`

**Azul:**

- Primary: `#3b82f6` / `#2563eb`
- Secondary: `#60a5fa` / `#93c5fd`

**Verde:**

- Primary: `#10b981` / `#059669`
- Secondary: `#34d399` / `#6ee7b7`

**Rosa:**

- Primary: `#ec4899` / `#db2777`
- Secondary: `#f472b6` / `#f9a8d4`

## 🖼️ Imagens e Ícones

### Adicionar Foto de Perfil

1. Coloque sua imagem em `public/profile.jpg`
2. Em `src/pages/Sobre.jsx`, substitua:

```jsx
<div className="profile-placeholder">
    <div className="profile-icon">👨‍💻</div>
</div>
```

Por:

```jsx
<div className="profile-placeholder">
    <img src="/profile.jpg" alt="Seu Nome" />
</div>
```

3. Adicione no CSS (`Sobre.css`):

```css
.profile-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.75rem;
}
```

### Alterar Logo

Arquivo: `src/components/Header.jsx`

```jsx
<Link to="/" className="logo">
    <span className="logo-bracket">{"<"}</span>
    Seu Nome {/* Altere aqui */}
    <span className="logo-bracket">{"/>"}</span>
</Link>
```

## 📱 Ajustes Responsivos

Os breakpoints estão definidos em:

- Mobile: `max-width: 640px`
- Tablet: `max-width: 768px`
- Desktop: `max-width: 968px`

Para ajustar, edite as media queries nos arquivos CSS de cada página.

## ⚡ Animações

### Ajustar Velocidade das Animações

Arquivo: `src/index.css`

```css
:root {
    --transition: all 0.3s ease; /* Altere a duração */
}
```

### Desabilitar Animações

Remova ou comente estas classes nos componentes:

- `animation: fadeInUp ...`
- `animation: fadeIn ...`
- `animation: bounce ...`

## 🔗 Integração com Backend

Para conectar o formulário de contato a um backend:

Arquivo: `src/pages/Contato.jsx`

```jsx
const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")

    try {
        const response = await fetch("SUA_API_URL", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            setStatus("success")
            setFormData({ name: "", email: "", subject: "", message: "" })
        }
    } catch (error) {
        setStatus("error")
    }
}
```

## 📊 Analytics

Para adicionar Google Analytics:

1. Instale: `npm install react-ga4`

2. Em `src/main.jsx`:

```jsx
import ReactGA from "react-ga4"

ReactGA.initialize("YOUR-GA-MEASUREMENT-ID")

// Resto do código...
```

## 🚀 Deploy

### Vercel

1. Instale: `npm install -g vercel`
2. Execute: `vercel`

### Netlify

1. Build: `npm run build`
2. Arraste a pasta `dist` para Netlify

### GitHub Pages

1. Instale: `npm install gh-pages --save-dev`
2. Em `package.json`:

```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```

3. Execute: `npm run deploy`

## 📝 Meta Tags para SEO

Arquivo: `index.html`

```html
<head>
    <meta
        name="description"
        content="Portfolio de [Seu Nome] - Desenvolvedor Full Stack"
    />
    <meta name="keywords" content="desenvolvedor, react, portfolio" />
    <meta property="og:title" content="[Seu Nome] - Portfolio" />
    <meta
        property="og:description"
        content="Desenvolvedor apaixonado por tecnologia"
    />
    <meta property="og:image" content="/preview.jpg" />
</head>
```

## 🎯 Dicas Finais

1. **Mantenha o código limpo**: Siga os padrões já estabelecidos
2. **Teste em múltiplos dispositivos**: Use o DevTools para simular
3. **Otimize imagens**: Use formatos modernos como WebP
4. **Atualize regularmente**: Mantenha suas informações e projetos atualizados
5. **Peça feedback**: Mostre para amigos e colegas

## 🆘 Problemas Comuns

**Problema**: Página em branco  
**Solução**: Verifique o console do navegador para erros

**Problema**: Tema não muda  
**Solução**: Limpe o localStorage: `localStorage.clear()`

**Problema**: Build falha  
**Solução**: Remova `node_modules` e reinstale: `rm -rf node_modules && npm install`

---

Boa sorte com seu portfolio! 🚀
