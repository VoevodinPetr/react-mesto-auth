import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

function Login({ handleInfoMessage, onLogin }) {
  const defaultValues = {
    email: "",
    password: "",
  };

  const [inputs, setInputs] = useState(defaultValues);

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setInputs((state) => ({ ...state, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    onLogin(inputs)
      .then(() => {
        resetForm();
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
