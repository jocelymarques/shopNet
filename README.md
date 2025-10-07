# 🛍️ Shop.Net - E-commerce Moderno

<div align="center">

![Shop.Net](https://img.shields.io/badge/Shop.Net-E--commerce-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=for-the-badge&logo=vite)

**Uma aplicação e-commerce completa e responsiva, desenvolvida com as mais modernas tecnologias do mercado.**

[🚀 Ver Demo](#-demonstração) • [📋 Funcionalidades](#-funcionalidades) • [🛠️ Tecnologias](#️-tecnologias-utilizadas) • [⚡ Instalação](#-como-executar)

</div>

---

## 🎯 **Sobre o Projeto**

O **Shop.Net** é um e-commerce moderno e completo que demonstra minhas habilidades em desenvolvimento frontend. A aplicação integra com a **FakeStore API** para simular um ambiente real de produção, oferecendo uma experiência de usuário fluida e intuitiva.

### 🌟 **Diferenciais Técnicos**

- **🔥 Performance Otimizada**: Construído com Vite para builds ultra-rápidos
- **📱 Design Responsivo**: Interface adaptável para todos os dispositivos
- **🎨 UI/UX Moderno**: Design clean e profissional com Tailwind CSS
- **⚡ Type Safety**: 100% TypeScript para código mais robusto
- **🔄 Estado Gerenciado**: React Hooks para controle eficiente do estado
- **🌐 API Integration**: Integração completa com REST API externa

---

## 🚀 **Demonstração**

### 📸 **Screenshots**

| Página Inicial | Detalhes do Produto | Carrinho de Compras |
|:--------------:|:------------------:|:------------------:|
| ![Home](https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Home) | ![Product](https://via.placeholder.com/300x200/059669/FFFFFF?text=Product) | ![Cart](https://via.placeholder.com/300x200/DC2626/FFFFFF?text=Cart) |

### 🎥 **Demo **
```bash
# Clone e execute para ver a magia acontecer! ✨
git clone https://github.com/jocelymarques/shopNet.git
cd shopNet
npm install
npm run dev
```

---

## 📋 **Funcionalidades**

### 🛒 **E-commerce Completo**
- ✅ **Catálogo de Produtos**: Listagem dinâmica com filtros
- ✅ **Detalhes do Produto**: Página dedicada com informações completas
- ✅ **Carrinho de Compras**: Adicionar, remover e gerenciar produtos
- ✅ **Sistema de Avaliações**: Exibição de ratings e comentários
- ✅ **Navegação Intuitiva**: Routing com React Router DOM

### 🎨 **Interface & Experiência**
- ✅ **Design Responsivo**: Mobile-first approach
- ✅ **Animations Suaves**: Hover effects e transições
- ✅ **Loading States**: Feedback visual durante carregamentos
- ✅ **Notificações**: Alerts elegantes para ações do usuário
- ✅ **SEO Friendly**: Estrutura otimizada para buscadores

### 🔧 **Recursos Técnicos**
- ✅ **API REST Integration**: Comunicação com FakeStore API
- ✅ **Error Handling**: Tratamento robusto de erros
- ✅ **Performance**: Otimizações de rendering e memória
- ✅ **Code Splitting**: Carregamento otimizado de componentes
- ✅ **TypeScript**: Tipagem estática para maior confiabilidade

---

## 🛠️ **Tecnologias Utilizadas**

### **Frontend Core**
```json
{
  "⚛️ React": "18.3.1",
  "🔷 TypeScript": "5.6.2", 
  "⚡ Vite": "5.4.8",
  "🎨 Tailwind CSS": "3.4.13",
  "🧭 React Router": "6.26.2"
}
```

### **Ferramentas de Desenvolvimento**
```json
{
  "🔍 ESLint": "9.11.1",
  "📦 npm": "Package Manager",
  "🚀 Vite": "Build Tool",
  "🎯 PostCSS": "CSS Processing"
}
```

### **APIs & Serviços**
- 🌐 **FakeStore API**: Dados de produtos e carrinho
- 📡 **Fetch API**: Requisições HTTP nativas
- 🔄 **React Hooks**: useState, useEffect, useNavigate

---

## ⚡ **Como Executar**

### **Pré-requisitos**
- Node.js 18+ ⚙️
- npm ou yarn 📦
- Git 🔀

### **Instalação Rápida**

```bash
# 1️⃣ Clone o repositório
git clone https://github.com/jocelymarques/shopNet.git

# 2️⃣ Navegue para o diretório
cd shopNet

# 3️⃣ Instale as dependências
npm install

# 4️⃣ Inicie o servidor de desenvolvimento
npm run dev

# 🎉 Aplicação rodando em http://localhost:5173
```

### **Scripts Disponíveis**

```bash
npm run dev      # 🚀 Servidor de desenvolvimento
npm run build    # 📦 Build para produção
npm run preview  # 👀 Preview do build
npm run lint     # 🔍 Verificação de código
```

---

## 📁 **Estrutura do Projeto**

```
shopNet/
├── 📁 src/
│   ├── 📁 components/     # Componentes reutilizáveis
│   │   ├── 🎴 CardProduct.tsx
│   │   └── 🧭 Navbar.tsx
│   ├── 📁 pages/          # Páginas da aplicação
│   │   ├── 🏠 home.tsx
│   │   ├── 📦 product.tsx
│   │   └── 🛒 cart.tsx
│   ├── 🎨 App.css
│   ├── 📱 index.css
│   ├── ⚛️ App.tsx
│   └── 🚀 main.tsx
├── 📦 package.json
├── ⚙️ vite.config.ts
├── 🔷 tsconfig.json
└── 📖 README.md
```

---

## 🎯 **Próximos Passos**

### **🚀 Melhorias Planejadas**
- [ ] 🔐 Sistema de Autenticação
- [ ] 💳 Integração com Payment Gateway
- [ ] 🔍 Sistema de Busca Avançada
- [ ] ⭐ Sistema de Favoritos
- [ ] 📧 Newsletter e Notificações
- [ ] 🌍 Internacionalização (i18n)

### **🧪 Testes**
- [ ] Unit Tests com Jest
- [ ] Integration Tests com Testing Library
- [ ] E2E Tests com Cypress

---

## 👨‍💻 **Sobre o Desenvolvedor**

**Jocelymarques** - Desenvolvedor Frontend apaixonado por criar experiências digitais incríveis.

### **🛠️ Habilidades Técnicas**
- **Frontend**: React, TypeScript, JavaScript, HTML5, CSS3
- **Styling**: Tailwind CSS, SASS, Styled Components
- **Tools**: Vite, Webpack, Git, npm/yarn
- **APIs**: REST, GraphQL, Fetch API
- **Metodologias**: Mobile-first, Component-driven development

### **📞 Contato**
- 🌐 **GitHub**: [@jocelymarques](https://github.com/jocelymarques)
- 💼 **LinkedIn**: [linkedin.com/in/jocelymarques](https://linkedin.com/in/jocelymarques)
- 📧 **Email**: jocelymarques@email.com

---

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**⭐ Se você gostou do projeto, não esqueça de dar uma estrela! ⭐**

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open%20Source-💚-brightgreen?style=for-the-badge)

</div>
