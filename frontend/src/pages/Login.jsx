export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Fake Pronote</h1>
        <p>Connexion Professeur</p>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />

        <button>Se connecter</button>
      </div>
    </div>
  );
}
