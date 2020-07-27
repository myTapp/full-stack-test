Instruções do backend
=======================


Requisitos:
------------

- Node.js versão 12.13.0
- Npm versão 6.4.1
- Git
- Docker e docker-composer para rodar projeto em ambiente de desenvolvimento.

Rodar projeto em ambiente de desenvolvimento:
----------------------------------------------

- Clonar projeto.
- Acessar o diretório *server*
- Executar o comando: **npm install** para instalar as dependências do projeto.
- Criar um arquivo chamado **.env** na raiz do diretório *server* usando o arquivo **.env.example** como base e altere as informações do arquivo **.env**.
- Executar o comando: **npm run start:dev** esse comando irá criar os containers docker com redis e postgres é depois iniciar a aplicação.
- Executar o comando: **npm run db:migrate** esse comando irá criar as tabelas do banco de dados.
- Executar o comando: **npm run db:seed** esse commando irá criar um usuário na tabela users. O usuário criado possui as seguintes informações:
  - email: admin@gmail.com
  - senha: admin

- Após executar o comando acima irá exibir o console o endereço em que aplicação está rodando acesse o endereço no navegador, mas antes acrescente ao endereço a seguinte parte: **/api/docs** isso irá exibir a documentação da api é permitirá fazer testes.

Rodar projeto em ambiente de produção:
----------------------------------------------

- Clonar projeto.
- Acessar o diretório *server*
- Executar o comando: **npm install** para instalar as dependências do projeto.
- Criar um arquivo chamado **.env** na raiz do diretório *server* usando o arquivo **.env.example** como base e altere as informações do arquivo **.env**.
- Executar o comando: **npm run db:migrate** esse comando irá criar as tabelas do banco de dados.
- Executar o comando: **npm run db:seed** esse commando irá criar um usuário na tabela users. O usuário criado possui as seguintes informações:
  - email: admin@gmail.com
  - senha: admin
- Instalar o **pm2** que é o gerenciador de processo node.js para quando estamos rodando aplicação node.js em produção.
- Executar o comando: **npm start** que irá rodar a aplicação usando pm2.
- Após executar o comando acima irá exibir o console o endereço em que aplicação está rodando acesse o endereço no navegador, mas antes acrescente ao endereço a seguinte parte: **/api/docs** isso irá exibir a documentação da api é permitirá fazer testes.
