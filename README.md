<p align="center">
  <img width="300" src="https://raw.githubusercontent.com/myTapp/temos-vagas/master/logo_mytapp_primario.png?raw=true">
</p>

- O teste consiste em criar uma aplicação:
  - em node.js
  - utilizando PostgreSQL
  - que expõe uma API REST de um CRUD de usuário
  - contendo uma interface web para login e consulta de dados de uma API externa

- Depois de logado o usuário da aplicação deve poder visualizar pelo browser dados de uma das API's externas (da escolha do candidato) desta listagem de [API's públicas](https://github.com/toddmotto/public-apis).

- O front-end não necessita ser complexo mas deve apresentar pelo menos os seguintes requisitos:
  - login
  - feedbacks de usuário ou senha incorreto
  - listagem dos dados da API escolhida
  - paginação
  
- o CRUD não necessita interface, coloque os enpoints disponíveis no readme do projeto
- uma das API's entrega [cervejas e não necessita autenticação](https://punkapi.com/)
- os endpoints de consulta de dados devem todos ter autenticação por webtoken ou similar
- pode ser utilizado qualquer ORM de preferência, aconselhamos o uso do [sequelize](https://github.com/sequelize/sequelize) ou [typeorm](https://github.com/typeorm/typeorm)
- pode ser utilizado qualquer framework front-end de preferência, preprocessadores de css, task runners, bundlers, ... mas nenhum deles é obrigatório
- não se deve fazer o commit de pastas como node_modules, o projeto deve instalar suas dependências a partir do package.json
- será julgado:
  - funcionamento do projeto
  - estrutura do código
  - uso de boas práticas
  - cumprimento dos requisitos mínimos

- Deve ser entregue:
  - um repositório git (fork deste)
  
- Extras:
  - versão de build / produção
