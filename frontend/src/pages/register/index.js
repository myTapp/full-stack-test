import React, { useState } from 'react';

import { Page } from '../../components/Page/styled';
import { Container } from '../../components/Container/styled';
import { Input } from '../../components/Input/styled';
import { Button } from '../../components/Button/styled';
import * as LoginStyle from './styled';
import { Link, useHistory } from 'react-router-dom';
import { POST } from '../../services';

const Register = () => {
  const history = useHistory();

  const initialFormData = Object.freeze({
    login:"",
    password: "",
    email: "",
    name: "",
    birthDate: ""
  });

  const [user, setUser] = useState(initialFormData);

  const handleSubmitConfirm = async (e) => {    
    e.preventDefault()
    try {
        // const response = null;
          const response = await POST('api/v1/create-user', user);
          console.log('handleSubmitConfirm response:', response);  
       
          if (response?.status === 200) {
            history.push('/login')          
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
            <Input type="text" placeholder="Usuário" name="login" onChange={handleChange} />
          </LoginStyle.RowLogin>
          <LoginStyle.RowLogin>
            <Input type="password" placeholder="Senha" name="password"  onChange={handleChange}/>
          </LoginStyle.RowLogin>
          <LoginStyle.RowLogin>
            <Input type="text" placeholder="E-mail" name="email"  onChange={handleChange} />
          </LoginStyle.RowLogin>
          <LoginStyle.RowLogin>
            <Input type="text" placeholder="Name" name="name" onChange={handleChange} />
          </LoginStyle.RowLogin>
          <LoginStyle.RowLogin>
            <Input type="text" placeholder="Data de Nascimento" name="birthDate" onChange={handleChange} />
          </LoginStyle.RowLogin>
          <LoginStyle.RowLogin>
            <Link to="register">            
            <Button type="button" onClick={handleSubmitConfirm}>CRIAR</Button>
            </Link>
          </LoginStyle.RowLogin>
        </LoginStyle.ContainerLogin>
      </Container>
    </Page>
  )
}

export default Register;