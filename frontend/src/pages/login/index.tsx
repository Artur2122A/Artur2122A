import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import "./login.css";

export function Login() {
  return (
    <>
      <div className="container">
        <div className="content primary-container">
          <div className="logo-branding">
            <div className="logo-icon">T</div>
            <div className="logo-text">Tool-Master</div>
          </div>
          <h1>Entre na sua conta</h1>
          <p>
            Organize eventos, comunidades e muito mais. Tudo em um só lugar, de forma fácil e rápida.
          </p>
        </div>

        <div className="content login-container">
          <h2>Bem-vindo de volta</h2>
          <p>Faça o login para continuar</p>
          <div className="label">
            <label>Usuario</label>
          </div>
          <Input type="text" placeholder="Usuario" />
          <div className="label">
            <label>Senha</label>
          </div>
          <Input type="password" placeholder="Digite sua senha" />
          <Button type="submit">Entrar</Button>
        </div>
      </div>
    </>
  );
}
