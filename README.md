<p align="center">
  <img width="260" src="https://github.com/myTapp/front-end-test/blob/master/mytapp.png?raw=true">
</p>

- O teste consiste em criar um back-end em node.js utilizando o banco de dados PostgresSQL que expõe uma API REST de um CRUD simples de usuários e uma interface para login e consulta de dados
- O front-end não deve ser complexo mas deve apresentar funcionalidades básicas como login e mensagens de usuário / senha incorretos, ...
- O CRUD em si pode ser acessado diretamente pelos endpoints e não necessita uma interface
- Depois de logado o usuário irá consumir pela interface dados de qualquer uma das API's abertas na listagem de [API's públicas](https://github.com/toddmotto/public-apis) (de sua escolha), uma delas inclsuive te entrega [cervejas e não necessita autenticação](https://punkapi.com/)
  - Apresentar os dados numa listagem simples com paginação e opcionalmente filtros
- Pode ser utilizado qualquer ORM de preferência, aconselhamos o uso do [sequelize](https://github.com/sequelize/sequelize), [typeorm](https://github.com/typeorm/typeorm), ...
- Pode ser utilizado qualquer framework front-end de preferência, preprocessadores de css, task runners, bundlers, ... mas nenhum deles é obrigatório, quanto mais simples e direto ao ponto o código melhor (KISS) - se algum for utilizado, não se deve commitar pastas como node_modules, o projeto deve instalar suas dependências a partir do package.json
- Será julgado além do funcionamento a estrutura do código, o uso de boas práticas no js, css e html


- Deve ser entregue:
  - um repositório git (fork deste) contendo o projeto
  
- Opcional:
  - versão de build / produção do front-end
