import { useNavigate } from "react-router-dom";
import { db } from "../../database";

import Button from "../../components/Button";
import { Container, Content, Header, Form } from "./styles";

import { IconArrowLeft } from "@tabler/icons";

export default function Subject() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const workload = parseInt(e.target[1].value);
    const presenceMinTax = parseInt(e.target[2].value) / 100;

    try {
      await db.subjects.add({
        name,
        workload,
        presenceMinTax,
        absenceCount: 0,
        presenceCount: 0,
      });

      alert("Nova disciplina criada!");

      navigate(-1);
    } catch (err) {
      alert("Erro ao criar nova disciplina.");
      console.log(err);
    }
  };

  return (
    <Container>
      <Header>
        <button onClick={() => navigate(-1)}>
          <IconArrowLeft size={24} />
        </button>
      </Header>

      <Content>
        <h1>Nova disciplina</h1>

        <Form onSubmit={handleSubmit}>
          <label>Nome</label>
          <input type="text" name="name" required />

          <label>Carga horária total (h/a)</label>
          <input
            type="number"
            name="workload"
            placeholder="Ex.: 68"
            step={1}
            min={0}
            required
          />

          <label>Porcentagem de carga horária necessária</label>
          <input
            type="number"
            name="presenceMinTax"
            placeholder="Ex.: 75"
            step={1}
            min={0}
            max={100}
            required
          />

          <Button>Salvar</Button>
        </Form>
      </Content>
    </Container>
  );
}
