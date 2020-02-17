

### Back-end
Foi utilizado o ORM sequelize com postgress.
A api publica utilizada foi do Morty and Rick.
Foi implementado arquitetura em camadas. Divdindo as responsabilidades em controllers, services e Daos.


| config        ---- Todos arquivos relacionados a configuração.
| database      ---- Arquivos de contendo as migrations e conexção com banco.
| middlewares   ---- Midllewares, no caso onde está implementado JWT.
| models        ---- As classes entidades e classes DAO.
| routes        ---- As rotas que aplicação possui.
| service       ---- Os serviçoes reposaveis pro acessar os DAO's.
| utils         -----Classes de utilidades.


### Iniciando a plicação back-end
Para iniciar a aplicação primeiro é necessário checar a conhexão com banco de dados. No pacte de config temos a configuração com endereço e credenciais para o banco de dados. Na pasta database temos  a conexão com banco de dados. Caso escolha outro banco SQL essa parte do codigo precisa ser configurada. Após configuração completa.
Rode os seguintes scripts:

1 - npm start
2 - yarn sequelize db: migrate
3 - yarn dev
### Rotas para criar e deleter usuarios;

Criar - 

http://localhost:3333/api/users
body: 
{
	"name": "NomeDoUsusuario",
	"password": "12345678"

}

Deletar -

http://localhost:3333/api/users
body: 

{
  id: 10
}


### Front-end
Frot end foi utilizado react com seu eco sistema. Redux, Redux-Saga, React Routes e  SCSS.
A utilização de Redux foi para separar dos componentes dos dados que passam pela aplicação. 
A plicação ja está com integração com ferramentas de testes para funções e componentes.(testes não foram implementados)

| config ---------------------  web-pack e configurações do jest, enzyme.
| public --------------------- arquivos publicos.
| src     
  | assets ------------------- os assest, styles e imagens da aplicação.
  | component ---------------- os componentes da aplicação.
  | pages -------------------- as paginas. 
  | routes ------------------- definição de rotas.
  | service ------------------ serviços para http request.
  | store --------------------  controlar os dados e estados da aplicação. Configuração do Redux e Redux-saga.
    | actions ---------------- onde temos as ações que aplicação pode disparar.
    | reducer ---------------- orquestrador do store.
    | sotre ------------------ armazena os estados.
    | saga ------------------- middleware utilizado junto ao redux para interceptar as ações asyncronas. 


### Statartando Front end
1 - npm install
2 - npm start


