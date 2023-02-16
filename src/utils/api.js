import { apiConfig } from "./apiConfig";

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return res.json().then((res) => {
      throw new Error(res.message);
    });
  }

  getUserInfo() {
    const url = `${this._baseUrl}/users/me`;

    return fetch(url, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  setUserInfo({ name, about }) {
    const url = `${this._baseUrl}/users/me`;

    return fetch(url, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._checkResponse);
  }

  changeAvatar(link) {
    const url = `${this._baseUrl}/users/me/avatar`;

    return fetch(url, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      }),
    }).then(this._checkResponse);
  }

  getInitialCards() {
    const url = `${this._baseUrl}/cards`;

    return fetch(url, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  addNewCard({ name, link }) {
    const url = `${this._baseUrl}/cards`;

    return fetch(url, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    const url = `${this._baseUrl}/cards/${cardId}`;

    return fetch(url, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  _setLike(cardId) {
    const url = `${this._baseUrl}/cards/${cardId}/likes`;

    return fetch(url, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  _deleteLike(cardId) {
    const url = `${this._baseUrl}/cards/${cardId}/likes`;

    return fetch(url, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  toggleLike(cardId, isLiked) {
    if (isLiked) {
      return this._deleteLike(cardId);
    } else {
      return this._setLike(cardId);
    }
  }
}

const api = new Api(apiConfig);

export default api;
