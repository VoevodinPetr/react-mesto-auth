const token = "4b403b24-4f85-4172-998c-15fc38a409ea";
const cohortId = 'cohort-55';

export const apiConfig = {
  baseUrl: `https://mesto.nomoreparties.co/v1/${cohortId}`,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
};