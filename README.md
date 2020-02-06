<p align="center">
  <img width="260" src="https://raw.githubusercontent.com/myTapp/temos-vagas/master/logo_mytapp_primario.png?raw=true">
</p>

## Teste full-stack developer
O teste consiste em criar uma aplicação com Node.js e PostgreSQL que expõe uma API REST de um CRUD de usuário contendo uma interface para login e consulta de dados de uma API externa.

Depois de logado o usuário da aplicação deve poder visualizar pelo front-end dados de uma das API's externas (da escolha do candidato) desta listagem de [API's públicas](https://github.com/toddmotto/public-apis).

### Back-end
- Os endpoints de consulta de dados devem todos ter autenticação por webtoken ou similar
- Fique a vontade para usar algum ORM de preferência ([sequelize](https://github.com/sequelize/sequelize), [typeorm](https://github.com/typeorm/typeorm), ...)

> O CRUD de usuários não necessita interface, coloque os enpoints disponíveis no README do projeto.

### Front-end
O front-end não precisa ser complexo mas deve apresentar pelo menos os seguintes requisitos:
  - Login
  - Feedbacks de usuário ou senha incorreta
  - Listagem dos dados da API escolhida
  - Paginação
  
> Pode ser utilizado qualquer framework front-end de preferência, preprocessadores de css, task runners, bundlers, ... mas nenhum deles é obrigatório.

## Critérios de avaliação
- Funcionamento do projeto
- Estrutura do código
- Uso de boas práticas
- Cumprimento dos requisitos mínimos
- Não se deve fazer o commit de pastas como `node_modules`, o projeto deve instalar suas dependências a partir do `package.json`

## Deve ser entregue:
- Um repositório git (fork deste)

## Extras:
- Versão de build / produção
