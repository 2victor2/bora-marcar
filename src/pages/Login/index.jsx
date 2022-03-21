import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/input";
import Button from "../../components/button";
import { Container } from "./styles";
import { buttonThemes } from "../../styles/themes";
import { useAuth } from "../../provider/Auth";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/registerImg.png"

const Login = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    password: yup.string().required("Senha inválida"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { handleLogin } = useAuth();

  const onSubmitFunction = data => {
    handleLogin(data);
  };

  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Login</h2>
        <Input
          label="Seu e-mail"
          error={!!errors.email?.message}
          helperText={errors.email?.message}
          name={"email"}
          register={register}
        />
        <Input
          label="Sua senha"
          error={!!errors.password?.message}
          helperText={errors.password?.message}
          name={"password"}
          register={register}
          type="password"
        />
        <Button type="submit" theme={buttonThemes.default}>
          Entrar
        </Button>
        <p>Não possui uma conta?</p>
        <Button
          type="button"
          theme={buttonThemes.header}
          onClick={() => history.push("/register")}
        >
          Cadastre-se
        </Button>
      </form>
    </Container>
  );
};

export default Login;
