import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { DetailTools } from '../../../Shared/Components/DetailTools';

import { LayoutBasePag } from '../../../Shared/Layouts/LayoutBasePag';

import { PersonService } from '../../../Shared/Services/Api/Person';

import { LinearProgress } from '@mui/material';

const prefixNavigate = '/pessoas';
const prefixNew: 'nova' | 'novo' = 'nova';

export const PersonForm: React.FC = () => {
  const { id = prefixNew } = useParams<'id'>();
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState('');

  const handleSave = () => {
    console.log('save');
  };

  const handleDelete = (id: number) => {
    if (confirm('Realmente deseja apagar?')) {
      PersonService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
          return;
        } else {
          alert('Registro apagado com sucesso!');
          navigate(prefixNavigate);
        }
      });
    }
  };

  useEffect(() => {
    if (id !== prefixNew) {
      setLoading(true);
      PersonService.getById(Number(id)).then((result) => {
        setLoading(false);

        if (result instanceof Error) {
          alert(result.message);
          navigate(prefixNavigate);
        } else {
          setName(result.name);
          console.log(result);
        }
      });
    }
  }, [id]);
  return (
    <LayoutBasePag
      title={id === prefixNew ? 'Cadastrar pessoa' : name}
      toolbar={
        <DetailTools
          showBtnSaveClose
          textBtnNew={prefixNew}
          showBtnNew={id !== prefixNew}
          showBtnDelete={id !== prefixNew}
          onClickBtnNew={() => navigate(`${prefixNavigate}/detalhe/${prefixNew}`)}
          onClickBtnSave={handleSave}
          onClickBtnDelete={() => handleDelete(Number(id))}
          onClickBtnSaveClose={handleSave}
          onClickBtnBack={() => navigate(`${prefixNavigate}`)}
        />
      }
    >
      {isLoading && <LinearProgress variant="indeterminate" />}
      <p>ID: {id}</p>
    </LayoutBasePag>
  );
};
