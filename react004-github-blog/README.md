# 🚀 GitHub Blog

> Aplicação React para explorar e visualizar repositórios do GitHub com busca em tempo real e navegação intuitiva.

![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4.1.12-blue?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.1.2-purple?logo=vite)

## 📋 Sobre o Projeto

O **GitHub Blog** é uma aplicação web moderna que consome a API pública do GitHub para criar uma interface intuitiva de navegação entre repositórios. O projeto oferece uma experiência rica com busca em tempo real, paginação customizada e design responsivo.

## ✨ Funcionalidades

- 📊 **Dashboard de repositórios** com informações detalhadas
- 🔍 **Busca instantânea** por nome e descrição
- 🔗 **URLs compartilháveis** (SEO-friendly)
- 📄 **Paginação** de 10 itens por página
- 🌙 **Tema claro/escuro**
- 📱 **Design totalmente responsivo**
- ⚡ **Cache inteligente** para melhor performance
- 🎯 **Loading states** personalizados

## 🛠️ Tecnologias

### Frontend

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework de CSS utilitário
- **React Router** - Roteamento para SPAs

### Gerenciamento de Estado

- **TanStack Query** - Cache e sincronização de dados
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas

### Ferramentas de Desenvolvimento

- **Vite** - Build tool e dev server
- **ESLint** - Linting de código
- **Axios** - Cliente HTTP
- **Date-fns** - Manipulação de datas

### UI/UX

- **Phosphor Icons** - Biblioteca de ícones
- **Lucide React** - Ícones adicionais
- **Radix UI** - Componentes primitivos acessíveis

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/react004-github-blog.git
cd react004-github-blog
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o projeto**

```bash
npm run dev
```

4. **Acesse no navegador**

```
http://localhost:5173
```

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Visualiza o build de produção
npm run lint     # Executa o linting do código
```

## 🎯 Funcionalidades Técnicas

### Performance

- ⚡ **Cache inteligente** com React Query (30min para dados estáticos)
- 🔄 **Debounce** na busca (300ms)
- 📦 **Code splitting** por rotas
- 🧠 **Memoização** com useMemo/useCallback

### UX/UI

- 🌐 **URLs semânticas** com searchParams
- 📱 **Mobile-first** design
- 🎨 **Micro-interações** e hover effects
- 📜 **Scrollbars** customizadas

### Integração GitHub API

- 📊 **Rate limit**: 60 req/h (público) → 5.000 req/h (autenticado)
- ⚡ **Response time**: ~300ms
- 🔗 **Endpoints**: perfil, repositórios, detalhes

## 📁 Estrutura do Projeto

```
src/
├── api/              # Funções para consumir APIs
├── app/pages/        # Páginas da aplicação
├── components/       # Componentes reutilizáveis
├── context/          # Contextos React
├── hooks/            # Custom hooks
├── lib/              # Utilitários
└── assets/           # Arquivos estáticos
```

## 🌐 GitHub API

O projeto utiliza os seguintes endpoints da API do GitHub:

- `GET /users/{username}` - Informações do perfil
- `GET /users/{username}/repos` - Lista de repositórios
- `GET /repos/{owner}/{repo}` - Detalhes do repositório

### Rate Limiting

- **Sem autenticação**: 60 requisições/hora
- **Com token**: 5.000 requisições/hora

## 🔮 Próximas Funcionalidades

- [ ] 🔐 Autenticação OAuth GitHub
- [ ] 📊 Analytics detalhados de repositórios
- [ ] 🔍 Busca global entre repositórios
- [ ] 📱 Progressive Web App (PWA)
- [ ] 🌍 Internacionalização (i18n)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Guilherme** - [GitHub](https://github.com/Guilherme2405)

---

⭐ **Se este projeto te ajudou, deixe uma estrela!**
