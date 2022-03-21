import Button from "../button/index";
import Input from "../input";
import { Container } from "./styles";
import { buttonThemes } from "../../styles/themes";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEvents } from "../../provider/Events";

const FormAddEvent = ({ handleClose }) => {
  const { handleCreateEvent, userEvents } = useEvents();

  const Schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const onSubmitFunction = (data) => {
    console.log(data);
    handleCreateEvent(data);
    handleClose();
  };

  console.log(userEvents);

  return (
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Novo Evento</h2>
      <Input
        label="Nome"
        register={register}
        name="name"
        error={!!errors.name?.message}
        helperText={errors.name?.message}
      />
      <Button theme={buttonThemes.add} children="Adicionar" type="submit" />
    </Container>
  );
};

export default FormAddEvent;
