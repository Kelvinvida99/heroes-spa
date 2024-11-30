import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navegation = useNavigate();
  console.log(navegation)
  const onLogin = () => {
    navegation("/", {
      replace: true,
    })
  }

  return (
    <>
      <div className="container">
        <h2>Login</h2>
        <hr />

        <button
          className="btn btn-primary"
          onClick={ onLogin }
        >
          Login
        </button>
      </div>
    </>
  )
}
