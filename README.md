Get A Pet - README

## Descrição do Projeto

Get A Pet é uma plataforma online onde usuários podem se cadastrar para postar pets disponíveis para adoção, ou adotar pets de outros usuários. Este projeto foi desenvolvido utilizando **Node.js** para a criação da API, **React** para o frontend e **MongoDB** como banco de dados para armazenar as informações dos usuários e dos pets.

### Funcionalidades:
- Cadastro de usuários (com autenticação).
- Publicação de pets disponíveis para adoção.
- Navegação por pets disponíveis para adoção.
- Funcionalidade de adoção de pets.
- Visualização de detalhes de cada pet (nome, idade, raça, descrição, foto).

## Tecnologias Utilizadas

- **Backend**:
  - Node.js
  - Express.js (framework para construção da API)
  - MongoDB (banco de dados NoSQL)
  - Mongoose (ODM para MongoDB)
  - JWT (JSON Web Tokens) para autenticação

- **Frontend**:
  - React.js
  - React Router (para navegação entre páginas)
  - Axios (para realizar requisições HTTP)

- **Outras Ferramentas**:
  - Bcrypt.js (para criptografar senhas)
  - Multer (para upload de imagens dos pets)
  - CORS (para permitir requisições entre o frontend e backend)

## Estrutura do Projeto

### Backend (API)
A API está construída em **Node.js** utilizando o **Express.js**. Ela é responsável por fornecer as rotas que lidam com o cadastro de usuários, a criação e visualização de pets, e as funcionalidades de adoção.

#### Endpoints principais:
- `POST /api/users/register`: Cadastro de um novo usuário.
- `POST /api/users/login`: Login de um usuário já cadastrado.
- `POST /api/create`: Adicionar um novo pet disponível para adoção.
- `GET /api/pets`: Buscar pets disponíveis para adoção.
- `GET /api/pets/:id`: Visualizar detalhes de um pet.
  
### Frontend (React)
A interface de usuário foi desenvolvida com **React.js**. Ela permite que os usuários se cadastrem, visualizem pets e façam a adoção de maneira intuitiva.

#### Páginas principais:
- **Página Inicial**: Exibe uma lista de pets disponíveis para adoção.
- **Página de Cadastro/Login**: Permite que o usuário se cadastre ou faça login.
- **Página de Detalhes do Pet**: Exibe informações detalhadas sobre o pet selecionado.
- **Página de Cadastro de Pet**: Permite que o usuário cadastre um pet disponível para adoção.

## Como Rodar o Projeto

### 1. Clonando o repositório

Primeiro, clone o repositório para sua máquina local:

```bash
git clone https://github.com/FelipeSDS23/Get-A-Pet.git
cd Get-A-Pet
```

### 2. Configuração do Backend

Navegue até a pasta `backend` e instale as dependências do backend:

```bash
cd backend
npm install
```

Crie um arquivo `.env` na pasta `backend` e configure as variáveis de ambiente necessárias:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/getapet
JWT_SECRET=seu_jwt_secreto
```

Para rodar o servidor backend:

```bash
npm start
```

### 3. Configuração do Frontend

Navegue até a pasta `frontend` e instale as dependências do frontend:

```bash
cd frontend
npm install
```

Para rodar o servidor frontend:

```bash
npm start
```

O frontend estará disponível em `http://localhost:3000`.

### 4. Testando a aplicação

Após rodar o backend e o frontend, acesse o frontend no seu navegador (http://localhost:3000).

Por padrão, a aplicação vem sem nenhum usuário ou pet cadastrado. Para testar a aplicação de forma completa, siga as instruções abaixo:

1 - Criação de dois usuários:
  Acesse a página de cadastro/login e crie dois novos usuários utilizando o formulário de cadastro. Um dos usuários será responsável por cadastrar um pet, e o outro será responsável por adotar o pet.

2 - Cadastro de um pet:
  Após o login do primeiro usuário, acesse a página de cadastro de pet.
  Adicione um pet, fornecendo informações como nome, idade, peso e foto.

3 - Exploração e adoção de pets:
  Faça login com o segundo usuário.
  Acesse a página inicial para visualizar a lista de pets disponíveis para adoção.
  Clique sobre o pet cadastrado pelo primeiro usuário para visualizar seus detalhes e adote-o.

4 - Confirmação de adoção:
  O primeiro usuário (dono do pet) deverá acessar a lista de pets cadastrados e confirmar a adoção do pet.
  A adoção será finalizada após essa confirmação, completando o processo.
  
  Ao realizar esses passos, você simulará interações completas, como o cadastro de dois usuários, o cadastro de um pet e a adoção do pet de um usuário pelo outro.