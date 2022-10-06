import React from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../database";

import Button from "../../components/Button";
import { Container, Content, Header, Form, InfoCard } from "./styles";

import { IconArrowLeft, IconInfoCircle } from "@tabler/icons";

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

          <label>Porcentagem de carga horária necessária (%)</label>
          <input
            type="number"
            name="presenceMinTax"
            placeholder="Ex.: 75"
            step={1}
            min={0}
            max={100}
            required
          />

          <InfoCard>
            <IconInfoCircle size={20} />
            <p>
              1 h/a (hora/aula) equivale a 1 tempo do quadro de horários do dia.
            </p>
          </InfoCard>

          <InfoCard>
            <IconInfoCircle size={20} />
            <p>
              Geralmente, escolas e universidades requisitam 75% de frequência
              nas aulas para poder aprovar um aluno.
            </p>
          </InfoCard>

          <Button>Salvar</Button>
        </Form>
      </Content>
    </Container>
  );
}
