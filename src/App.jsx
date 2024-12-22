import { GoogleLogin } from "@react-oauth/google";

const App = () => {
  const handleLoginSuccess = (credentialResponse) => {
    console.log("Login exitoso:", credentialResponse);
  };

  const handleLoginFailure = () => {
    console.error("Login fallido");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Google Login App</h1>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
        type="standard"
        theme="filled_blue"
        text="signin_with"
        shape="rectangular"
        size="large"
      />
    </div>
  );
};

export default App;
