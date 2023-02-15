import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import Header from "./Header";
import * as auth from "../utils/auth";

function Register({ handleInfoMessage }) {
  const defaultValues = {
    email: "",
    password: "",
  };

  const [inputs, setInputs] = useState(defaultValues);
  const navigate = useNavigate();

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setInputs((state) => ({ ...state, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    auth
      .register(inputs)
      .then(() => {
        handleInfoMessage({
          text: "Вы успешно зарегистрировались!",
          isSuccess: true,
        });
        resetForm();
        navigate("/sign-in");
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
        <Link to="/sign-in" className="header__menu-item">
          Войти
        </Link>
      </Header>

      <main>
        <div className="login root__element">
          <h2 className="login__title">Регистрация</h2>
          <form className="login__form" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              className="login__input"
              placeholder="Email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              className="login__input"
              placeholder="Пароль"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="button button_type_login">
              Зарегистрироваться
            </button>
          </form>
          <p className="login__text">
            Уже зарегистрированы?{" "}
            <Link className="login__link" to="/sign-in">
              Войти
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}

export default Register;
