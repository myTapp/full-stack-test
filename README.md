<p align="center">
  <img width="260" src="https://github.com/myTapp/front-end-test/blob/master/mytapp.png?raw=true">
</p>

- O teste consiste em criar uma aplicação:
  - em node.js
  - utilizando o banco de dados PostgreSQL
  - que expõe uma API REST de um CRUD simples de usuários
  
- E uma interface web:
  - para login
  - consulta de dados de uma API externa
  
- O front-end não deve ser complexo mas deve apresentar funcionalidades básicas como login e mensagens de usuário / senha incorretos, ...
- O CRUD não necessita de interface, coloque os enpoints disponíveis no readme
- Depois de logado o usuário irá consumir pela interface dados de qualquer uma das API's externas (de sua escolha) da listagem de [API's públicas](https://github.com/toddmotto/public-apis), uma delas inclsuive te entrega [cervejas e não necessita autenticação](https://punkapi.com/)
  - Deve se apresentar os dados numa listagem simples com paginação e opcionalmente filtros
  - Os endpoints de consulta de dados devem todos ser protegidos por uma webtoken ou similar
- Pode ser utilizado qualquer ORM de preferência, aconselhamos o uso do [sequelize](https://github.com/sequelize/sequelize), [typeorm](https://github.com/typeorm/typeorm), ...
- Pode ser utilizado qualquer framework front-end de preferência, preprocessadores de css, task runners, bundlers, ... mas nenhum deles é obrigatório, quanto mais simples e direto ao ponto o código melhor (KISS) - se algum for utilizado, não se deve fazer o commit de pastas como node_modules, o projeto deve instalar suas dependências a partir do package.json
- Será julgado além do funcionamento a estrutura do código, o uso de boas práticas no js, css e html


- Deve ser entregue:
  - um repositório git (fork deste) contendo o projeto
  
- Opcional:
  - versão de build / produção do front-end
