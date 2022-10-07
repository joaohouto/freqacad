import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../database";

import SubjectCard from "../../components/SubjectCard";
import { Container, Content, Header, Button } from "./styles";

import { IconCirclePlus } from "@tabler/icons";
import logoImg from "../../assets/logo.svg";

export function Home() {
  let [subjects, setSubjects] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getSubjects();
  });

  const getSubjects = async () => {
    try {
      const subjects = await db.subjects.toArray();
      setSubjects(subjects);
    } catch (err) {
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
            absenceCount={subject.absenceCount}
            presenceCount={subject.presenceCount}
            workload={subject.workload}
            onClick={() => navigate(`/subject/${subject.id}`)}
          />
        ))}

        <Button onClick={() => navigate("/subject/new")}>
          <IconCirclePlus size={24} /> Nova disciplina
        </Button>
      </Content>
    </Container>
  );
}
