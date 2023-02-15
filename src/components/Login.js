import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "./Header";
import * as auth from "../utils/auth";

function Login({ handleInfoMessage, onLogin }) {
  const defaultValues = {
    email: "",
    password: "",
  };

  const [inputs, setInputs] = useState(defaultValues);
  const navigate = useNavigate();

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setInputs((state) => ({ ...state, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    auth
      .authorize(inputs)
      .then(res => {
        if (res.token) localStorage.setItem("token", res.token);
        resetForm();
        onLogin();
        navigate("/");
      })
      .catch((err) => {
        const text = err.message || "Что-то пошло не так! Попробуйте еще раз.";
        handleInfoMessage({
          text: text,
          isSuccess: false,
        });
      });
  }

  function resetForm() {
    setInputs({ ...defaultValues });
  }

  return (
    <>
      <Header>
        <Link to="/sign-up" className="header__menu-item">
          Регистрация
        </Link>
      </Header>

      <main>
        <div className="login root__element">
          <h2 className="login__title">Вход</h2>
          <form className="login__form" onSubmit={handleSubmit} noValidate>
            <input
              className="login__input"
              type="email"
              placeholder="Email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              required
            />
            <input
              className="login__input"
              type="password"
              placeholder="Пароль"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              required
            />
            <button className="button button_type_login" type="submit">
              Войти
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
