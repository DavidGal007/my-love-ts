import React, { ChangeEvent, FC, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { login } from "../features/auth/authSlice";
import "../style/modal.scss";

type ModalProps = {
  active: boolean;
  setActive: (any: boolean) => void;
};
interface LogubmitResult {
  email: string;
  password: string;
}

const Modal = ({ active, setActive }: ModalProps) => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate()
  const [values, setValues] = React.useState<LogubmitResult>({
    email: "",
    password: "",
  });

  const handleChange =
    (prop: any) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const { email, password } = values;
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const userData = { email, password };
    dispatch(login(userData))
    navigate("../", {replace: true})
  };
  return (
    <div
      className={active ? "modal active " : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active " : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="signin">
            <h5 className="signup__title">
                Sign In
            </h5>
        <form onSubmit={handleSubmit}>
          <div className="form__container">
            <div className="signup__block">
              <input
                type="text"
                placeholder="Email"
                className="signup__field"
                name="email"
                onChange={handleChange("email")}
              />
            </div>
            <div className="signup__block">
              <input
                type="password"
                placeholder="Password"
                className="signup__field"
                name="password"
                onChange={handleChange("password")}
              />
            </div>

            <div className="form__btn">
              <button type="submit">Enter</button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
