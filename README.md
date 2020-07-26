Instruções do backend
=======================


Requisitos:
------------

- Node.js versão 12.13.0
- Npm versão 6.4.1
- Docker e docker-composer para rodar projeto em ambiente de desenvolvimento.

Rodar projeto em ambiente de desenvolvimento:
----------------------------------------------

- Clona projeto.
- Acessar o diretório *server*
- Executar o comando: **npm install** para instalar as dependências do projeto.
- Criar um arquivo chamado **.env** na raiz do diretório *server* usando o arquivo **.env.example** como base e alterar as informações.
- Executar o comando: **npm run start:dev** esse comando irá criar os containers docker com redis e postgres é depois iniciar a aplicação.
- Após executar o comando acima irá exibir o console o endereço em que aplicação está rodando acesse o endereço no navegador, mas antes acrescente ao endereço a seguinte parte: **/api/docs** isso irá exibir a documentação da api é permitirá fazer testes.
