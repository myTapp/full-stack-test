# Projeto Full-Stack com Node.js, PostgreSQL e React (Teste myTapp)

Sobre o Projeto:

Este projeto é uma aplicação full-stack que utiliza Node.js para o back-end e React para o front-end. O projeto tem como objetivo fornecer um sistema de gerenciamento de usuários (CRUD) e uma interface para login e acesso a dados de uma API externa. Após o login, os usuários podem visualizar os dados fornecidos pela API externa com paginação.

Back-end

    Node.js (v14 ou superior)
    npm (v6 ou superior)
    PostgreSQL (v12 ou superior)

Front-end

    Node.js (v14 ou superior)
    npm (v6 ou superior)

Configuração do Projeto
Instalação do PostgreSQL

Instalar PostgreSQL no Ubuntu:

```bash
    sudo apt update
    sudo apt install postgresql postgresql-contrib
```

Configurar o Banco de Dados:

```bash
    sudo -i -u postgres
    psql
    CREATE USER myuser WITH PASSWORD 'mypassword';
    CREATE DATABASE mydatabase OWNER myuser;
    \q
    exit
```

Configuração do Back-end

Clone o repositório:

```bash
    git clone <URL_DO_REPOSITORIO>
    cd myapp-backend
```

Instale as dependências:

```bash
    npm install
```

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

    .env

    DB_NAME=mydatabase
    DB_USER=myuser
    DB_PASSWORD=mypassword
    DB_HOST=localhost
    JWT_SECRET=secretkey

Inicie o servidor:

```bash
    npm start
```

Configuração do Front-end

Navegue até o diretório do front-end:

```bash
    cd myapp-frontend
```

Instale as dependências:

```bash
    npm install
```

Inicie o servidor de desenvolvimento:

```bash
    npm start
```

Rotas da API
Back-end

1. Registro de Usuário

   Método: POST

   URL: /api/register

   Body: {"username": "testuser",
   "password": "password123"}

Resposta de Sucesso:

    {
    "id": 1,
    "username": "testuser",
    "password": "$2a$10$..."
    }

Resposta de Erro:

    {
      "message": "Error registering user"
    }

2. Login

   Método: POST

   URL: /api/login

   Body: {"username": "testuser", "password": "password123"}

Resposta de Sucesso:

    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }

Resposta de Erro:

    {
        "message": "Invalid credentials"
    }

3.  Obter Dados do Usuário

        Método: GET

        URL: /api/user/:id

        Headers: {"Authorization": "Bearer <token>"

    }

Resposta de Sucesso:

    {
    "id": 1,
    "username": "testuser",
    "password": "$2a$10$..."
    }

Resposta de Erro:

    {
        "message": "Access denied"
    }

Front-end

1. Rota de Registro

URL: /register

Componente: Register

Descrição: Permite ao usuário criar uma nova conta.

2. Rota de Login

URL: /login

Componente: Login

Descrição: Permite ao usuário fazer login na aplicação.

3. Rota de Dashboard

URL: /dashboard

Componente: Dashboard

Descrição: Exibe os dados da API externa para o usuário logado com paginação.

Exemplos de Requisições
Insomnia

1. Registro de Usuário

Método: POST

URL: ${base_url}/register

Body:{"username": "testuser","password": "password123"}

Resposta Esperada:

    {
        "id": 1,
        "username": "testuser",
        "password": "$2a$10$..."
    }

2. Login

Método: POST

URL: ${base_url}/login

Body: {
"username": "testuser",
"password": "password123"
}

Resposta Esperada:

    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }

3. Obter Dados do Usuário

Método: GET
URL: ${base_url}/user/1
Headers: {
"Authorization": "Bearer ${auth_token}"
}

Resposta Esperada:

    {
      "id": 1,
      "username": "testuser",
      "password": "$2a$10$..."
    }

Conclusão

Este projeto demonstra como criar uma aplicação full-stack com Node.js, PostgreSQL e React, utilizando autenticação JWT e integração com uma API externa. Siga as instruções acima para configurar e testar o projeto em seu ambiente local.
