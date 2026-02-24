import { useState, useRef } from "react";

export default function Login() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	function handleSubmit(e) {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		if (!email || !password) {
			alert("Missing data");
		}

		fetch("http://localhost:5000/api/auth/register", {
			method: "POST",
			body: JSON.stringify({ email, password }),
		})
			.then((data) => data.json())
			.then((data) => {
				console.log(data);
			});
	}

	return (
		<div className="login-container">
			<div className="login-box">
				<h1>Fake Pronote</h1>
				<p>Connexion Professeur</p>

				<input ref={emailRef} required type="email" placeholder="Email" />
				<input ref={passwordRef} required type="password" placeholder="Mot de passe" />

				<button onClick={handleSubmit}>Se connecter</button>
			</div>
		</div>
	);
}
