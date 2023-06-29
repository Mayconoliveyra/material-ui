import { useNavigate, useParams } from 'react-router-dom';

import { DetailTools } from '../../../Shared/Components/DetailTools';

import { LayoutBasePag } from '../../../Shared/Layouts/LayoutBasePag';

const prefixNavigate = '/pessoas';
const prefixNew: 'nova' | 'novo' = 'nova';

export const PersonForm: React.FC = () => {
  const { id = prefixNew } = useParams<'id'>();
  const navigate = useNavigate();

  const handleSave = () => {
    console.log('save');
  };
  const handleDelete = () => {
    console.log('delete');
  };
  return (
    <LayoutBasePag
      title={id !== prefixNew ? 'Alterar de pessoa' : 'Cadastrar pessoa'}
      toolbar={
        <DetailTools
          showBtnSaveClose
          textBtnNew={prefixNew}
          showBtnNew={id !== prefixNew}
          showBtnDelete={id !== prefixNew}
          onClickBtnNew={() => navigate(`${prefixNavigate}/detalhe/${prefixNew}`)}
          onClickBtnSave={handleSave}
          onClickBtnDelete={handleDelete}
          onClickBtnSaveClose={handleSave}
          onClickBtnBack={() => navigate(`${prefixNavigate}`)}
        />
      }
    >
      <p>ID: {id}</p>
    </LayoutBasePag>
  );
};
