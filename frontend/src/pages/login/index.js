import React, { useState } from 'react';

import { Page } from '../../components/Page/styled';
import { Container } from '../../components/Container/styled';
import { Input } from '../../components/Input/styled';
import { Button } from '../../components/Button/styled';
import * as LoginStyle from './styled';
import { Link, useHistory } from 'react-router-dom';
import { POST } from '../../services';

const LoginPage = () => {
  const history = useHistory();

  function setToken(data) {
    sessionStorage.setItem('token', JSON.stringify('Bearer ' + data.token));
    sessionStorage.setItem('username', JSON.stringify(data.user.email));
  }
  
  const initialFormData = Object.freeze({
    email:"",
    password: "",
  });

  const [user, setUser] = useState(initialFormData);

  const handleSubmitConfirm = async (e) => {    
    e.preventDefault()
    try {
          const response = await POST('api/v1/login', user);
          console.log('handleSubmitConfirm response:', response);  
 
          const body = await response.json();
          if (response?.status === 200) {
              setToken(body);
              history.push('/beers')          
            }
      } catch (error) {
        console.log(error);
      }
    }

    const handleChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value.trim()
        });
      };


  return (
    <Page>
      <Container>
        <LoginStyle.ContainerLogin>
          <LoginStyle.RowLogin>
            <Input type="text" placeholder="Usuário" name="email" onChange={handleChange} />
          </LoginStyle.RowLogin>
          <LoginStyle.RowLogin>
            <Input type="password" placeholder="Senha" name="password" onChange={handleChange}/>
          </LoginStyle.RowLogin>
          <LoginStyle.RowLogin>
            <Link to="beers">            
            <Button type="button" onClick={handleSubmitConfirm}>ENTRAR</Button>
            </Link>
            <Link to="register">            
            <Button type="button">CADASTRAR</Button>
            </Link>
          </LoginStyle.RowLogin>
        </LoginStyle.ContainerLogin>
      </Container>
    </Page>
  )
}

export default LoginPage;