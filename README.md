

### Back-end
Foi utilizado o ORM sequelize com postgress.
A api publica utilizada foi do Morty and Rick.
Foi implementado arquitetura em camadas. Divdindo as responsabilidades em controllers, services e Daos. </br> </br>


| config        ---- Todos arquivos relacionados a configuração. </br>
| database      ---- Arquivos de contendo as migrations e conexção com banco. </br>
| middlewares   ---- Midllewares, no caso onde está implementado JWT. </br>
| models        ---- As classes entidades e classes DAO. </br>
| routes        ---- As rotas que aplicação possui. </br>
| service       ---- Os serviçoes reposaveis pro acessar os DAO's. </br>
| utils         -----Classes de utilidades. </br>


### Iniciando a plicação back-end
Para iniciar a aplicação primeiro é necessário checar a conhexão com banco de dados. No pacte de config temos a configuração com endereço e credenciais para o banco de dados. Na pasta database temos  a conexão com banco de dados. Caso escolha outro banco SQL essa parte do codigo precisa ser configurada. Após configuração completa.
Rode os seguintes scripts: </br> </br>

1 - npm start </br>
2 - yarn sequelize db: migrate </br>
3 - yarn dev </br>
### Rotas para criar e deleter usuarios; </br>

Criar -  </br>

http://localhost:3333/api/users </br>
body:  </br>
{ </br>
	"name": "NomeDoUsusuario", </br>
	"password": "12345678" </br>

} </br>

Deletar - </br>

http://localhost:3333/api/users </br>
body:  </br>

{
  id: 10 </br>
}


### Front-end
Frot end foi utilizado react com seu eco sistema. Redux, Redux-Saga, React Routes e  SCSS.
A utilização de Redux foi para separar dos componentes dos dados que passam pela aplicação. 
A plicação ja está com integração com ferramentas de testes para funções e componentes.(testes não foram implementados) </br>

| config ---------------------  web-pack e configurações do jest, enzyme. </br>
| public --------------------- arquivos publicos. </br>
| src     
  | assets ------------------- os assest, styles e imagens da aplicação. </br>
  | component ---------------- os componentes da aplicação. </br>
  | pages -------------------- as paginas.  </br>
  | routes ------------------- definição de rotas. </br>
  | service ------------------ serviços para http request. </br>
  | store --------------------  controlar os dados e estados da aplicação. Configuração do Redux e Redux-saga. </br>
    | actions ---------------- onde temos as ações que aplicação pode disparar. </br>
    | reducer ---------------- orquestrador do store. </br>
    | sotre ------------------ armazena os estados. </br>
    | saga ------------------- middleware utilizado junto ao redux para interceptar as ações asyncronas.  </br> </br> </br


### Statartando Front end
1 - npm install </br>
2 - npm start </br>


