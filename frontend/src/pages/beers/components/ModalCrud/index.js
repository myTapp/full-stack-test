import React, { useState, useEffect } from 'react';

import { Input } from '../../../../components/Input/styled';
import { Text } from '../../../../components/Text/styled';
import { Button } from '../../../../components/Button/styled';


import { 
  Backdrop,  
  Modal,
  ContainerModal,
  ModalContainer,
  InputWrapper,
  ModalFooter,
} from './styled';

const ModalCrud = ({
  type,
  handleClose,
  dataTransaction,
}) => { 
  const [empresaDetail] = useState({
    name: dataTransaction?.name,
    description: dataTransaction?.description
  });

  const [errorSubmit] = useState(false);
  const [fieldName, setFieldName] = useState('');
  const [fieldDescription, setFieldDescription] = useState('');

  useEffect(() => {
      setFieldName(empresaDetail.name);
      setFieldDescription(empresaDetail.description);
  }, [type])

  const handleChange = (e) => {
    try {
      const { value, name } = e?.target || {}

      switch (name) {
        case 'name':
          setFieldName(value);
          break;

        case 'description':
          setFieldDescription(value);
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Backdrop />
      <ContainerModal>
        <Modal>
          <ModalContainer>
            <InputWrapper>
              <Input disabled={(type === 'read')} placeholder="Nome" name="name" value={fieldName} onChange={handleChange} className={((type === 'create' || type === 'edit') && !fieldName && errorSubmit) ? 'error' : ''} />
            </InputWrapper>
            <InputWrapper>
              <Text disabled={(type === 'read')} placeholder="Descrição" name="description" value={fieldDescription} onChange={handleChange} className={((type === 'create' || type === 'edit') && !fieldDescription && errorSubmit) ? 'error' : ''} />
            </InputWrapper>
            <ModalFooter>
              <Button onClick={handleClose}>{type !== 'view' ? 'Cancelar' : 'Fechar'}</Button>
            </ModalFooter>
          </ModalContainer>
        </Modal>
      </ContainerModal>
    </>
  )
}

export default ModalCrud;