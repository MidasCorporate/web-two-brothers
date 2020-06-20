export function uploadFileRequest(url) {
  return {
    type: '@file/UPLOAD_IN_REQUEST',
    payload: { url },
  };
}

export function uploadSucess(url) {
  return {
    type: '@file/SIGN_IN_SUCCESS',
    payload: { url },
  };
}

export function createNewBanner(id, opacity, displayLogo) {
  return {
    type: '@file/SAVE_IN_REQUEST',
    payload: { id, opacity, displayLogo },
  };
}
export function updateBanner(id, opacity, displayLogo) {
  return {
    type: '@file/NEW-UPDATE_IN_REQUEST',
    payload: { id, opacity, displayLogo },
  };
}

export function updateUrlBanner(id, urlSale) {
  return {
    type: '@file/UPDATE_IN_REQUEST',
    payload: { id, urlSale },
  };
}
