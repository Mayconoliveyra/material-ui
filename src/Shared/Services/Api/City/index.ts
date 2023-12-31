import { Environment } from '../../../Environment';

import { api } from '../Axios-config';

const urlPrefix = '/city';

export type CityProps = {
  id: number;
  city: string;
  uf: string;
};

type ListCityProps = {
  data: CityProps[];
  totalCount: number;
};

const getAll = async (page = 1, filter = ''): Promise<ListCityProps | Error> => {
  try {
    const url = `${urlPrefix}?_page=${page}&_limit=${Environment.LIMIT_LINKY}&city_like=${filter}`;

    const { data, headers } = await api.get(url);

    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count']),
      };
    }

    /* Error() é uma função padrão do react */
    return new Error('Erro ao listar os registros.');
  } catch (error) {
    console.error(error);
    /* Se o Error() retornar um objeto com atributo {message: string}, será exibido retornado a mensagem. Caso contrario retorna a mensagem padrão 'Erro ao listar...' */
    return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
  }
};

const getById = async (id: number): Promise<CityProps | Error> => {
  try {
    const { data } = await api.get(`${urlPrefix}/${id}`);

    if (data) return data;

    /* Error() é uma função padrão do react */
    return new Error('Erro ao consultar registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao consultar registro');
  }
};

const create = async (newData: Omit<CityProps, 'id'>): Promise<number | Error> => {
  try {
    const { data } = await api.post<CityProps>(urlPrefix, newData);

    if (data) return data.id;

    /* Error() é uma função padrão do react */
    return new Error('Erro ao criar registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao criar registro.');
  }
};

const updateById = async (id: number, newData: Omit<CityProps, 'id'>): Promise<void | Error> => {
  try {
    await api.put(`${urlPrefix}/${id}`, newData);
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao atualizar registro.');
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await api.delete(`${urlPrefix}/${id}`);
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao apagar registro.');
  }
};

export const CityService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
