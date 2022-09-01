import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../../database";

import SubjectCard from "../../components/SubjectCard";
import { Container, Content, Header, Button } from "./styles";

import logoImg from "../../assets/logo.svg";
import { IconCirclePlus } from "@tabler/icons";

export default function Home() {
  const [subjects, setSubjects] = useState([]);

  const history = useHistory();

  useEffect(() => {
    getSubjects();
  }, []);

  const getSubjects = async () => {
    try {
      const subjects = await db.subjects.toArray();
      setSubjects(subjects);
      console.log(subjects);
    } catch (err) {
      console.log(err);
    }
  };

  const addSubject = async () => {
    try {
      const id = await db.subjects.add({
        name: "Orientação a Objetos II",
        workload: 68,
        absenceMaxtTax: 0.25,
        absenceCount: 0,
        presencyCount: 0,
      });

      alert("Nova disciplina criada!");
    } catch (err) {
      alert("Erro ao criar nova disciplina.");
      console.log(err);
    }
  };

  const addPresency = async () => {
    try {
      await db.subjects.update(1, {
        name: "Teste",
        workload: 68,
        absenceMaxtTax: 0.25,
        absenceCount: 0,
        presencyCount: 0,
      });

      alert("Nova disciplina criada!");
    } catch (err) {
      alert("Erro ao criar nova disciplina.");
      console.log(err);
    }
  };

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="freqacad" />
      </Header>

      <Content>
        {subjects?.map((subject) => (
          <SubjectCard
            key={subject.id}
            name={subject.name}
            onClick={() => history.push(`/subject/${subject.id}`)}
          />
        ))}

        <Button onClick={() => history.push("/subject/new")}>
          <IconCirclePlus size={24} /> Nova disciplina
        </Button>
      </Content>
    </Container>
  );
}
