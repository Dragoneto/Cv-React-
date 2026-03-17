# AV1 — Aplicativo Mobile com React Native e Firebase

Aplicativo mobile desenvolvido com Expo e React Native, integrando Firebase Firestore para persistência em nuvem, AsyncStorage para armazenamento local e a API pública do TMDB para listagem de filmes populares.

---

## Tecnologias

| Tecnologia | Versão | Finalidade |
|---|---|---|
| Expo | ~55.0.4 | Plataforma de desenvolvimento |
| React Native | 0.76.9 | Framework mobile |
| React Navigation (Stack) | ^6.0.0 | Navegação entre telas |
| Firebase / Firestore | ^12.10.0 | Banco de dados em nuvem |
| AsyncStorage | 1.23.1 | Persistência local de dados |
| TMDB API | — | Listagem de filmes populares |
| Expo Vector Icons | ~14.0.4 | Ícones (MaterialCommunityIcons) |

---

## Estrutura de Telas

```
App.jsx               — Roteador principal (Stack Navigator)
│
├── Home.jsx          — Tela inicial com menu de navegação
├── Contato.jsx       — Formulário de contato (salva no Firestore + AsyncStorage)
├── MensagemSalva.jsx — Exibe a última mensagem salva localmente
├── Perfil.jsx        — Perfil do usuário com links sociais
├── Config.jsx        — Configurações (alterar senha, editar perfil, logout)
├── Cadastro.jsx      — Formulário de criação de conta
└── Filmes.jsx        — Lista de filmes populares via API do TMDB
```

---

## Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Expo CLI](https://docs.expo.dev/get-started/installation/) instalado globalmente
- Aplicativo **Expo Go** no dispositivo físico (opcional)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm start
```

Para executar em plataformas específicas:

```bash
npm run android   # Emulador Android
npm run ios       # Simulador iOS (requer macOS)
npm run web       # Versão web no navegador
```

---

## Configuração do Firebase

As credenciais do Firebase estão definidas em `firebaseConfig.js`:

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```


As regras e índices do Firestore estão definidos em:
- `firestore.rules` — Regras de segurança de leitura e escrita
- `firestore.indexes.deploy` — Índices compostos

---

## API de Filmes (TMDB)

A tela **Filmes** consome a [API do TMDB](https://www.themoviedb.org/documentation/api) para listar os filmes mais populares em português.

Endpoint utilizado:

```
GET https://api.themoviedb.org/3/movie/popular?api_key={API_KEY}&language=pt-BR&page=1
```

> A chave da API está atualmente definida em `Filmes.jsx`. Para ambientes de produção, mova-a para variáveis de ambiente.

---

## Funcionalidades

- Navegação entre telas com stack navigator
- Formulário de contato com envio para o Firestore e persistência local via AsyncStorage
- Visualização da última mensagem enviada
- Listagem de filmes populares com poster, descrição e avaliação
- Tela de perfil com links para GitHub e LinkedIn
- Tela de configurações com alterar senha, editar perfil e logout
- Tela de cadastro de nova conta
- Layout responsivo com suporte a iOS, Android e Web

---

## Design System

O tema visual está centralizado em `Styles.js` e exportado como objeto `theme`:

```js
export const theme = {
  bg_primary:     '#0F0F17',  // Fundo principal
  bg_card:        '#1F2030',  // Cards e inputs
  accent:         '#FF6B6B',  // Cor primária de ação
  accent2:        '#4ECDC4',  // Cor de destaque secundária
  text_primary:   '#F0F0F5',  // Texto principal
  text_secondary: '#8B8C9E',  // Texto secundário e placeholders
  border:         '#2A2B3D',  // Bordas
};
```

---

## Licença

Este projeto foi desenvolvido para fins acadêmicos por Davi Alencar Guimarães de almeida.
