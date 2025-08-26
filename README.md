# Adapta Biotech - Sistema de Login e Cadastro de Produtos

Sistema web desenvolvido em React para gerenciamento de produtos da Adapta Biotech.

## 🚀 Funcionalidades

### Tela de Login
- Autenticação simples com email e senha
- Validação de campos obrigatórios
- Interface moderna e responsiva
- Redirecionamento automático após login

### Tela de Cadastro de Produtos
- Formulário completo com todos os campos solicitados:
  - Nome do produto
  - Descrição
  - Pontos
  - Valor do produto (R$)
  - Upload de imagem com preview
- Validações de campos obrigatórios
- Interface intuitiva e responsiva
- Mensagens de sucesso e erro

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **React Router** - Navegação entre páginas
- **Styled Components** - Estilização CSS-in-JS
- **Context API** - Gerenciamento de estado de autenticação

## 📦 Instalação

1. **Clone o repositório:**
```bash
git clone [URL_DO_REPOSITORIO]
cd adapta-biotech
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o projeto:**
```bash
npm start
```

4. **Acesse no navegador:**
```
http://localhost:3000
```

## 🔑 Credenciais de Teste

Para testar o sistema, use as seguintes credenciais:

- **Email:** admin@adapta.com
- **Senha:** 123456

## 📱 Como Usar

### Login
1. Acesse a tela de login
2. Digite seu email e senha
3. Clique em "Entrar"
4. Será redirecionado para a tela de produtos

### Cadastro de Produtos
1. Após o login, você será direcionado para a tela de cadastro
2. Preencha todos os campos obrigatórios:
   - Nome do produto
   - Descrição detalhada
   - Pontos (número inteiro)
   - Valor em reais
   - Imagem do produto (opcional)
3. Clique em "Cadastrar Produto"
4. Aguarde a confirmação de sucesso

## 🎨 Características da Interface

- **Design Responsivo:** Funciona perfeitamente em desktop e mobile
- **Tema Moderno:** Gradientes e sombras para uma aparência profissional
- **Animações Suaves:** Transições e hover effects para melhor UX
- **Validação em Tempo Real:** Feedback imediato para o usuário
- **Mensagens Claras:** Notificações de sucesso e erro bem definidas

## 🔒 Segurança

- Rotas protegidas para usuários não autenticados
- Contexto de autenticação para gerenciar sessões
- Validação de formulários no frontend
- Logout automático ao sair da aplicação

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Login.js                 # Tela de login
│   └── ProductRegistration.js   # Tela de cadastro de produtos
├── contexts/
│   └── AuthContext.js           # Contexto de autenticação
├── styles/
│   └── GlobalStyle.js           # Estilos globais
├── App.js                       # Componente principal com roteamento
└── index.js                     # Ponto de entrada da aplicação
```

## 🚀 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm build` - Cria build de produção
- `npm test` - Executa testes
- `npm eject` - Ejetar configurações do Create React App

## 🔮 Próximos Passos

- Integração com backend real
- Sistema de usuários com perfis
- Listagem e edição de produtos
- Dashboard administrativo
- Sistema de busca e filtros
- Relatórios e analytics

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato com a equipe de desenvolvimento da Adapta Biotech.

---

**Desenvolvido com ❤️ para Adapta Biotech** # Adapta-Biotech
