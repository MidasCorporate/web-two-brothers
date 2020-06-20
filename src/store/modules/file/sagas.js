import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { uploadSucess } from './actions';

export function* upload({ payload }) {
  try {
    const { url } = payload;

    yield put(uploadSucess(url));
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
  }
}

export function* createBanner({ payload }) {
  try {
    const { id, opacity, displayLogo } = payload;

    yield call(api.post, '/files/imgBanner', {
      id,
      opacity,
      displayLogo,
    });

    toast.success('Albun gerado com sucesso');
  } catch (err) {
    toast.error('Falha ao carregar banner');
  }
}

export function* updateBanner({ payload }) {
  try {
    const { id, opacity, displayLogo } = payload;

    yield call(api.put, '/files/imgBanner', {
      id,
      opacity,
      displayLogo,
    });

    toast.success('Albun atualizado com sucesso');
  } catch (err) {
    toast.error('Falha ao carregar banner');
  }
}

export function* updateUrlSale({ payload }) {
  try {
    const { id, urlSale } = payload;
    console.tron.log(payload);

    yield call(api.put, '/files', {
      id,
      urlSale,
    });

    toast.success('Url atualizada com sucesso');
  } catch (err) {
    toast.error('Falha ao atualizar a Url');
  }
}

export default all([
  takeLatest('@file/UPLOAD_IN_REQUEST', upload),
  takeLatest('@file/SAVE_IN_REQUEST', createBanner),
  takeLatest('@file/NEW-UPDATE_IN_REQUEST', updateBanner),
  takeLatest('@file/UPDATE_IN_REQUEST', updateUrlSale),
]);
