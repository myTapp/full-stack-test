import React, { useEffect, useState } from 'react';

import { Page } from '../../components/Page/styled';
import { Container } from '../../components/Container/styled';
import { Button } from '../../components/Button/styled';
import { useHistory } from 'react-router-dom';
import Banner from '../../components/Banner';

import { 
  Header, 
  Body, 
  BodyHeader, 
  HeaderColLeft,
  HeaderColCenter,
  HeaderColRight, 
  Brand, 
  Search,
  SearchBox,
  Profile,
  ProfileAvatar,
  ProfileUser,
  BodyHeaderColLefth,
  BodyHeaderColRight,
  BodyHeaderTitle,
  ContainerTransacoesList,
  ContainerTransacoesListWrapper,
  ContentTransacoesListWrapper,
  ContainerTransacoesListWrapperFoto,
  ContainerTransacoesListWrapperHeader,
  ContainerTransacoesListWrapperBody,
  ContainerTransacoesListWrapperTitle,
  ContainerTransacoesListWrapperSobre,
  Message,
  Paginate,
  PaginateItem,
  MessageLabel,
  LabelInput,
  LabelPerPage,
  BoxSelect,
} from './styled';

import ModalCrud from './components/ModalCrud';
import { GET } from '../../services';

const BeersPage = () => {

  const [formData, setFormData] = useState();
 
  const username = JSON.parse(sessionStorage.getItem('username'))

  const history = useHistory();
  function getToken() {
    const tokenString = sessionStorage.getItem('token');
    return tokenString;
  }

  const token = getToken();

  if(!token) {
    history.push('/login')          
  }

  const [paginate, setPaginate] = useState({
    perPage: 40,
    currentPage: 0,  
  });

  const [TransacoesList, setTransacoesList] = useState({ 
      listProducts: [],
      listPages: null
  });  

  const getBeers = async(page) => {
    try {
      let queryString = "";
      const searchParams = new URLSearchParams();
      if (formData) {
        Object.keys(formData).forEach(key => {
          if(formData[key]) {
            searchParams.append(key, formData[key])
          } 
        });
        if (searchParams.toString()) {
          queryString = `&${searchParams.toString()}`
        } 
      }  
      const response = await GET(`api/v1/beers?page=${page}&per_page=${paginate?.perPage}${queryString}`);
      const responseResolved = await response.json(); 
      return responseResolved;
    } catch (error) {
      console.log(error)
    }
  }

  //verifica pagina
  async function checkPage(page) {
    const _result = await getBeers(page);
    if (_result?.length > 0) {
      return true;
    } 
    return false; 
  }

  //paginate item
  const paginateItem = (number, label) => {
    return (<PaginateItem 
        key={label || number} 
        className={paginate.currentPage === number ? 'selected' : ''} 
        onClick={() => handlePaginate(number)}
      > {label || number}
      </PaginateItem> 
    )
  }

  //paginacao
  const resolvePaginate = async() => {
    let pages = [];
    const currentPage = paginate.currentPage;
    if (currentPage > 1) {
      if (currentPage > 1) {
        pages.push(paginateItem(paginate.currentPage - 1, '<<'))
      }    
      pages.push(paginateItem(paginate.currentPage - 1))
    }
    pages.push(paginateItem(paginate.currentPage))
    if (currentPage > 0) {
      if (await checkPage(paginate.currentPage + 1)) {
        pages.push(paginateItem(paginate.currentPage + 1))    
      }
      if (await checkPage(paginate.currentPage + 2)) {
        pages.push(paginateItem(paginate.currentPage + 2, '>>'))    
      }
    }
    return pages;
    //setListPages(pages);
  }

  const handleGetBeers = async () => {
    try {
      const _result = await getBeers(paginate.currentPage); 
      if (_result?.length) {
        const _pagesNumbers = await resolvePaginate(); 
        setTransacoesList({
          ...TransacoesList,
          listProducts: _result,
          listPages: _pagesNumbers
        })   
      } else {
        setTransacoesList({
          ...TransacoesList,
          listProducts:[],
          listPages: null,
        })  
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => { 
    //* inicia a paginacao
    setPaginate({
      ...paginate,
      currentPage: 1
    })
  }, []);

  useEffect(() => {
    //* toda vez que alterar a pagina ele busca novamente
    if (paginate.currentPage > 0) {
      handleGetBeers();
    } 
  }, [paginate]);

  const [viewModalCrud, setViewModalCrud] = useState(false);
  const [typeModalCrud, setTypeModalCrud] = useState(null);
  const [dataTransaction, setDataTransaction] = useState(null);
  const [message, setMessage] = useState(null);

  const handleOpenModalCrud = async(type, empresa) => { 
    try {
      const idEmpresa = empresa?.id; 
      const response = await GET(`api/v1/beers/${idEmpresa}`); 
      const responseResolved = await response.json(); 
      if (responseResolved?.length > 0) { 
        setDataTransaction(responseResolved[0]);
        setViewModalCrud(true);
        setTypeModalCrud(type); 
      } else {
        setMessage('Não foi possivel recuperar os dados do produto!'); 
        setTimeout(() => setMessage(null), 3000);
      } 
    } catch (error) {
      console.log(error)
    } 
  } 
  const handleCloseModalCrud = (refresh, messageCrud) => {
    setViewModalCrud(false);
    setTypeModalCrud(null);

    if (messageCrud) {
      setMessage(messageCrud);
      setTimeout(() => setMessage(null), 3000);
      window.scrollTo(0, 0);
    }

    if (refresh) handleGetBeers();
  }

  const handlePaginate = (page) => {   
    try { 
      setPaginate({
        ...paginate,
        currentPage: page
      })
    } catch (error) {
      console.log(error);
    }
  }

  const handleExitSession = () => {
    sessionStorage.clear();
    history.push('/login')          
  } 
 
  const renderPages = () => { 
    return TransacoesList?.listPages;
  }

  /*image*/
  const renderImage = (image) => {
    if (image) {
      return (<ContainerTransacoesListWrapperFoto src={image} />)
    }
    return (<ContainerTransacoesListWrapperFoto className="noPhoto" src="http://localhost:3000/no-photo.jpg" alt="Sem foto"  />)
  }

  //form 
  const handleChange = (e) => {
    let value = e.target.value.trim();
    if (e.target.type === 'text') {
      value = value.replace(/ /g,"_");
    } 
    else if (e.target.type === 'month' && value) { 
      let data = value
      data = value.split('-');
      value = data[1]+"-"+data[0]
    }  
    setFormData({
      ...formData, 
      [e.target.name]: value.trim()
    });
  };

  useEffect(() => { 
    if (formData) {
      handlePaginate(1);
    } 
  }, [formData])


  const handlePerPages = (numPages) => { 
    setPaginate({
      ...paginate,
      currentPage: 1,
      perPage: numPages
    })
  }
 
  /**
   * Render
  */ 
  const renderPagesProducts = () => {
    if (TransacoesList?.listProducts.length <= 0) {
      return (<MessageLabel>Nenhum produto encontrado!</MessageLabel>)
    } 
    return (TransacoesList?.listProducts.map((empresa, i) => (
      <ContainerTransacoesListWrapper key={String(i)} onClick={() => handleOpenModalCrud('read', empresa)}>
        <ContentTransacoesListWrapper>
          <ContainerTransacoesListWrapperHeader>
            {renderImage(empresa.image_url)}
          </ContainerTransacoesListWrapperHeader>
          <ContainerTransacoesListWrapperBody>
            <ContainerTransacoesListWrapperTitle>{empresa.name}</ContainerTransacoesListWrapperTitle>
            <ContainerTransacoesListWrapperSobre>{empresa.description}</ContainerTransacoesListWrapperSobre>
          </ContainerTransacoesListWrapperBody>
          </ContentTransacoesListWrapper>
      </ContainerTransacoesListWrapper>
    )))
  }

  return (
    <Page>
      <Container>
        <Header>
          <HeaderColLeft>
            <Brand src="http://localhost:3000/logo192.png" alt="Brand" />
          </HeaderColLeft> 
          <HeaderColCenter>
            <form>
              <SearchBox>
                <Search 
                  type="number" 
                  placeholder="abv_gt"
                  name="abv_gt" 
                  onChange={handleChange}
                />
                <Search 
                  type="number" 
                  placeholder="abv_lt"
                  name="abv_lt"
                  onChange={handleChange}
                />
                <Search 
                  type="number" 
                  placeholder="ibu_gt" 
                  name="ibu_gt"
                  onChange={handleChange}
                />
              </SearchBox>
              <SearchBox>
                <Search 
                  type="number" 
                  placeholder="ibu_lt" 
                  name="ibu_lt"
                  onChange={handleChange}
                />
                <Search
                  type="number" 
                  placeholder="ebc_gt" 
                  name="ebc_gt"
                  onChange={handleChange}
                />
                <Search 
                  type="number"
                  placeholder="ebc_lt"
                  name="ebc_lt" 
                  onChange={handleChange}
                />
              </SearchBox>
              <SearchBox>
                <Search
                  type="text" 
                  placeholder="beer_name"
                  name="beer_name" 
                  onChange={handleChange}
                />
                <Search 
                  type="text" 
                  placeholder="yeast"
                  name="yeast" 
                  onChange={handleChange}
                />
                <Search
                  type="text"
                  placeholder="hops"
                  name="hops" 
                  onChange={handleChange}
                />
                <Search 
                  type="text"
                  placeholder="malt"
                  name="malt" 
                  onChange={handleChange}
                />
                <Search 
                  type="text"
                  placeholder="food"
                  name="food" 
                  onChange={handleChange}
                />
                <Search 
                  type="text" 
                  placeholder="ids" 
                  name="ids"
                  onChange={handleChange}
                />
              </SearchBox>
              <SearchBox>
                <LabelInput>Brewed Before</LabelInput>
                <Search
                  type="month"
                  placeholder="brewed_before"
                  name="brewed_before" 
                  onChange={handleChange}
                />
                <LabelInput>Brewed After</LabelInput>
                <Search
                  type="month"
                  placeholder="brewed_after"
                  name="brewed_after"
                  onChange={handleChange}
                />
              </SearchBox> 
            </form>
          </HeaderColCenter>
          <HeaderColRight>
             <Profile>
              <ProfileAvatar src="http://localhost:3000/logo192.png" alt="Profile user avatar" />
              <ProfileUser>{username }</ProfileUser>
             </Profile>
             <BodyHeaderColRight>
              <Button style={{height: '20px'}} onClick={() => handleExitSession()}>Sair</Button>
            </BodyHeaderColRight>
          </HeaderColRight>
        </Header> 
        <Body> 
          <Banner handleClick={handleOpenModalCrud}/>
          <BodyHeader>
            <BodyHeaderColLefth>
              <BodyHeaderTitle>MyTapp</BodyHeaderTitle> 
            </BodyHeaderColLefth>
            <BodyHeaderColRight>
              <LabelPerPage>Total por página: </LabelPerPage>
              <BoxSelect name="perPage" onChange={(e) => handlePerPages(e.target.value)}>
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="32">32</option>
                <option value="40">40</option>
                <option value="60">60</option>
                <option value="80">80</option>
              </BoxSelect>
            </BodyHeaderColRight>
          </BodyHeader> 
          
          <ContainerTransacoesList>
            {renderPagesProducts()} 
          </ContainerTransacoesList>
          {paginate?.currentPage > 0 && (
            <Paginate className='paginate'>   
              {renderPages()}
            </Paginate>
          )}
        </Body>
      </Container> 
      {viewModalCrud && (
        <ModalCrud 
          type={typeModalCrud}
          handleType={setTypeModalCrud}
          handleClose={handleCloseModalCrud}
          dataTransaction={dataTransaction}
        />
      )}
      <Message className={message ? "active": ""}><label>{message}</label></Message>
    </Page>
  )
}

export default BeersPage;