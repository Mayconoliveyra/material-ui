import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ListingTools } from '../../Shared/Components/ListingTools';

import { Environment } from '../../Shared/Environment';

import { useDebounce } from '../../Shared/Hooks/UseDebounce';

import { LayoutBasePag } from '../../Shared/Layouts/LayoutBasePag';

import { PersonProps, PersonService } from '../../Shared/Services/Api/Person';

import {
  Box,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableFooter,
  LinearProgress,
  Pagination,
  IconButton,
  Icon,
} from '@mui/material';

export const PersonListing: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce();
  const navigate = useNavigate();

  const [rows, setRows] = useState<PersonProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  const pagina = useMemo(() => {
    return Number(searchParams.get('pagina') || '1');
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);

    debounce(() => {
      PersonService.getAll(pagina, busca).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
          return;
        } else {
          setTotalCount(result.totalCount);
          setRows(result.data);
        }
      });
    });
  }, [busca, pagina]);

  const handleDelete = (id: number) => {
    if (confirm('Realmente deseja apagar?')) {
      PersonService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
          return;
        } else {
          setRows((oldRows) => {
            return [...oldRows.filter((oldRow) => oldRow.id !== id)];
          });
          alert('Registro apagado com sucesso!');
        }
      });
    }
  };

  return (
    <LayoutBasePag
      title="Listagem de pessoas"
      BarraFerramentas={
        <ListingTools
          textBtnNew="Nova"
          showInputSearch
          textSearch={busca}
          onChangeInputSearch={(text) =>
            setSearchParams({ busca: text, pagina: '1' }, { replace: true })
          }
        />
      }
    >
      <Box margin={1}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Código</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Email</TableCell>
                <TableCell width={85} align="center">
                  Ações
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell width={85} align="center">
                      <IconButton onClick={() => handleDelete(row.id)} size="small" color="error">
                        <Icon fontSize="small">delete</Icon>
                      </IconButton>
                      <IconButton
                        onClick={() => navigate(`/pessoas/detalhe/${row.id}`)}
                        size="small"
                        color="warning"
                      >
                        <Icon fontSize="small">edit</Icon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>

            {totalCount === 0 && <caption>{Environment.EMPTY_LISTING}</caption>}

            <TableFooter>
              {isLoading && (
                <TableRow>
                  <TableCell colSpan={12} height={32}>
                    <LinearProgress variant="indeterminate" />
                  </TableCell>
                </TableRow>
              )}
              {!isLoading && totalCount > 0 && totalCount > Environment.LIMIT_LINKY && (
                <TableRow>
                  <TableCell colSpan={12}>
                    <Pagination
                      page={pagina}
                      count={Math.ceil(totalCount / Environment.LIMIT_LINKY)}
                      onChange={(_, newPage) =>
                        setSearchParams({ busca, pagina: newPage.toString() }, { replace: true })
                      }
                      variant="outlined"
                      shape="rounded"
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </LayoutBasePag>
  );
};
