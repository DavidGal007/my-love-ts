import React, { ChangeEvent, FormEvent } from "react";
import '../style/sign.scss'
import Image from '../assets/images/bg.jpg'
import { useAppDispatch } from "../app/hooks";
import { registration } from "../features/auth/authSlice";
import Modal from "../components/Modal";
export interface ISubmitResult {
  username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const [modalActive, setModalActive] = React.useState(false)
  const [values, setValues] = React.useState<ISubmitResult>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (prop: any) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };
const {email, password, username} = values;
const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    
        const userData = {email, password, username}
        dispatch(registration(userData)) 
   
    
};


  return (
    <React.Fragment>
      <div className="startup">
        <div className="startup__wrpper">
          <div className="startup__inner">
            <div className="startup__image-body" >
              <img style={{width: 400}} src={Image} alt="img" />
            </div>
            <div className="startup__content-body">
              <div className="signup-head">
                <div className="signup-head__paragraph">
                have an account?<span onClick={() => setModalActive(true)} style={{
                  cursor: 'pointer'
                }}>Sign In!</span>
                </div>
              </div>
              <div className="signup">
                <h3 className="signup__title">Get Started With MAKER</h3>
                <p className="signup__sub">Getting started is easy</p>
                <form onSubmit={handleSubmit}>
                  <div className="form__container">
                    <div className="signup__block">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="signup__field"
                        name="username"
                        onChange={handleChange('username')}
                      />
                    </div>
                    <div className="signup__block">
                      <input
                        type="text"
                        placeholder="Enter Email"
                        className="signup__field"
                        name="email"
                        onChange={handleChange('email')}
                      />
                    </div>
                    <div className="signup__block">
                      <input
                        type="text"
                        placeholder="Password"
                        className="signup__field"
                        name="password"
                        onChange={handleChange('password')}
                      />
                    </div>
                    <div className="signup__block">
                      <input
                        type="text"
                        placeholder="Confirm Password"
                        className="signup__field"
                        name="confirmPassword"
                        onChange={handleChange('confirmPassword')}
                      />
                    </div>
                    <div className="form__btn">
                      <button type="submit">Create Account</button>
                    </div>
                  </div>
                </form>
                <div className="form-subtitle">
                  <p style={{
                    fontSize: 15,
                    fontWeight: 300
                  }}>
                    By continuing you indicate that you read and agreed to the
                    Terms of Use
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </React.Fragment>
  );
}

export default SignUp;
