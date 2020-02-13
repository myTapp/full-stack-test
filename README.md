<p align="center">
  <img width="260" src="https://raw.githubusercontent.com/myTapp/temos-vagas/master/logo_mytapp_primario.png?raw=true">
</p>

## Teste full-stack developer (v1.2.0)
O teste consiste em criar uma aplicação com Node.js e PostgreSQL que expõe uma API REST de um CRUD de usuário e uma aplicação web contendo uma interface para login e acesso a dados de uma API externa.
Depois de logado o usuário da aplicação web deve poder acessar dados da [Punk API v2](https://punkapi.com/) - uma API aberta da cervejaria BrewDog.

### Back-end
- Todos os endpoints de consulta de dados devem ter autenticação por webtoken ou similar
- Fique a vontade para usar algum ORM de preferência ([sequelize](https://github.com/sequelize/sequelize), [typeorm](https://github.com/typeorm/typeorm), ...)

> O CRUD de usuários não necessita interface, coloque os enpoints disponíveis no README do projeto.

### Front-end
O front-end deve apresentar pelo menos os seguintes requisitos:
  - Interface de login
    - Feedbacks de usuário ou senha incorreta
  - Listagem dos dados da Punk API v2
  - Paginação dos dados
  
> Pode ser utilizado qualquer framework front-end, preprocessadores de css, task runners, bundlers, ... de preferência mas nenhum deles é obrigatório.

## Critérios de avaliação
- Funcionamento do projeto
- Estrutura do código
- Uso de boas práticas
- Cumprimento dos requisitos mínimos

## Deve ser entregue:
- Um repositório git (fork deste)
> Não se deve fazer o commit de pastas como `node_modules`, o projeto deve instalar suas dependências a partir do `package.json`

## Extras:
- Build para produção
