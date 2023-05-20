import { Link } from "react-router-dom";
import { useFormAndValidation } from "../hooks/useFormAndValidation";
import Header from "./Header";

function Login({ handleInfoMessage, onLogin }) {
  const { values, handleChange, isValid, resetForm, errors } = useFormAndValidation({});

  function handleSubmit(e) {
    e.preventDefault();

    onLogin(values)
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
              value={values.email}
              onChange={handleChange}
              required
            />
            {errors?.email && <span className="login__input-error">{errors.email}</span>}
            <input
              className="login__input"
              type="password"
              placeholder="Пароль"
              name="password"
              value={values.password}
              onChange={handleChange}
              required
            />
            {errors?.password && <span className="login__input-error">{errors.password}</span>}
            <button
              type="submit"
              className={
                isValid
                  ? "button button_type_login"
                  : "button button_type_login button_type_disabled"
              }
              disabled={!isValid}
            >
              Войти
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
