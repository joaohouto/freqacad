import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { db } from "../../database";

import Button from "../../components/Button";
import { Container, Content, Header, Form } from "./styles";

import { IconArrowLeft } from "@tabler/icons";

export default function Subject() {
  const [subject, setSubject] = useState({});

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getSubject();
  }, []);

  const getSubject = async () => {
    try {
      const subject = await db.subjects.get(parseInt(id));
      setSubject(subject);
      console.log(subject);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const type = e.target[0].value;
    const quantity = parseInt(e.target[1].value);

    const newData =
      type === "presence"
        ? {
            presenceCount: subject.presenceCount + parseInt(quantity),
          }
        : {
            absenceCount: subject.absenceCount + parseInt(quantity),
          };

    try {
      await db.subjects.update(parseInt(id), newData);

      alert("Registro adicionado!");

      history.goBack();
    } catch (err) {
      alert("Erro ao adicionar registro.");
      console.log(err);
    }
  };

  return (
    <Container>
      <Header>
        <button onClick={() => history.goBack()}>
          <IconArrowLeft size={24} />
        </button>
      </Header>

      <Content>
        <h1>Novo registro</h1>
        <p>{subject?.name}</p>

        <Form onSubmit={handleSubmit}>
          <label>Tipo</label>
          <select>
            <option value="presence">Presença</option>
            <option value="absence">Ausência</option>
          </select>

          <label>Quantidade (h/a)</label>
          <input
            type="number"
            name="quantity"
            placeholder="Ex.: 4"
            step={1}
            required
          />

          <Button>Salvar</Button>
        </Form>
      </Content>
    </Container>
  );
}
