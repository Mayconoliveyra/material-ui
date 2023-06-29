import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ListingTools } from '../../Shared/Components/ListingTools';

import { LayoutBasePag } from '../../Shared/Layouts/LayoutBasePag';

import { PersonService } from '../../Shared/Services/Api/Person';

export const PersonListing: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  useEffect(() => {
    PersonService.getAll(1, busca).then((result) => {
      if (result instanceof Error) {
        alert(result.message);
        return;
      } else {
        console.log(result);
      }
    });
  }, [busca]);

  return (
    <LayoutBasePag
      title="Listagem de pessoas"
      BarraFerramentas={
        <ListingTools
          textBtnNew="Nova"
          showInputSearch
          textSearch={busca}
          onChangeInputSearch={(text) => setSearchParams({ busca: text }, { replace: true })}
        />
      }
    >
      <p>oi</p>
    </LayoutBasePag>
  );
};
