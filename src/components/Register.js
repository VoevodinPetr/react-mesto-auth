import { Link } from "react-router-dom";
import { useFormAndValidation } from "../hooks/useFormAndValidation";
import Header from "./Header";

function Register({ handleInfoMessage, handleRegister }) {
  const { values, handleChange, isValid, resetForm, errors } = useFormAndValidation({});

  function handleSubmit(e) {
    e.preventDefault();

    handleRegister(values)
      .then(() => {
        handleInfoMessage({
          text: "Вы успешно зарегистрировались!",
          isSuccess: true,
        });
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
              value={values.email}
              onChange={handleChange}
              required
            />
            {errors?.email && <span className="login__input-error">{errors.email}</span>}
            <input
              type="password"
              className="login__input"
              placeholder="Пароль"
              name="password"
              minLength="6"
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
