import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { PulseLoader } from "react-spinners";

const SignIn = ({ loadUser, onRouteChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { dictionary } = useLanguage();

  const onSubmitSignIn = (event) => {
    setIsLoading(true);
    setError("");
    event.preventDefault();
    fetch("https://smart-brain-api-414a.onrender.com/signin", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then((response) => {
        if (response.ok) {
            return response.json();
        } else if (response.status === 401) {
            throw new Error(`${dictionary.loginError}`);
        } else {
            throw new Error(`${dictionary.serverError}`);
        }
      })
      .then(user => {
        if (user.id) {
          loadUser(user)
          onRouteChange("home");
        }
      })
      .catch((err) => {
        setError(err.message);
        setShowModal(true);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <article className="br3 ba b--black-10 mv4 w-75 w-50-m w-25-l mw6 shadow-5 center" style={{userSelect: 'none'}}>
      <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1-l f2 fw6 ph0 mh0 center">{dictionary.signIn}</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                {dictionary.email}
              </label>
              <input
                className="pa2-l pa1 input-reset ba bg-transparent hover-bg-black hover-white w-100-l w-90"
                type="email"
                name="email-address"
                id="email-address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                {dictionary.password}
              </label>
              <input
                className="b pa2-l pa1 input-reset ba bg-transparent hover-bg-black hover-white w-100-l w-90"
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </fieldset>
          <div >
            {!isLoading ? (
              <input
              onClick={onSubmitSignIn}
              disabled={isLoading}
              className="b ph3-l ph2 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value={dictionary.signInButton}
              />
            ) : (
              <div className="pv2">
                <PulseLoader color="black" size="10" />
              </div>
            )}
          </div>
          <div className="lh-copy mt3">
            <p
              onClick={() => onRouteChange("register")}
              className="f6 link dim black db pointer underline"
            >
              {dictionary.register}
            </p>
          </div>
        </form>
      </main>
      {showModal && (
        <div className="modal">
            <div className="modal-content">
                <p>{error}</p>
                <button onClick={() => setShowModal(false)}>{dictionary.close}</button>
            </div>
        </div>
      )}
    </article>
  );
};

export default SignIn;
