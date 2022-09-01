import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { db } from "../../database";

import Button from "../../components/Button";
import { Container, Content, Header, Details, ProgressBar } from "./styles";

import { IconArrowLeft, IconTrash } from "@tabler/icons";
import AlertCard from "../../components/AlertCard";

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

  const deleteSubject = async () => {
    if (window.confirm("Tem certeza de que deseja excluir?")) {
      try {
        await db.subjects.delete(parseInt(id));
        alert("Disciplina excluída!");
        history.goBack();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Container>
      <Header>
        <button onClick={() => history.goBack()}>
          <IconArrowLeft size={24} />
        </button>

        <button onClick={deleteSubject}>
          <IconTrash color="#999" size={24} />
        </button>
      </Header>

      <Content>
        <h1>{subject?.name}</h1>

        <Details>
          <label>Detalhes da carga horária</label>

          <div>
            <span>Necessária</span>{" "}
            <strong>{subject?.workload * subject?.presenceMinTax}h/a</strong>
          </div>
          <div>
            <span>Máximo de faltas</span>{" "}
            <strong>
              {subject?.workload * (1 - subject?.presenceMinTax)}h/a
            </strong>
          </div>
          <div>
            <span>Total</span> <strong>{subject?.workload}h/a</strong>
          </div>
        </Details>

        <section>
          <label>Sua situação</label>

          <ProgressBar type="presence">
            <div
              style={{
                width: `${
                  (subject?.presenceCount /
                    (subject?.workload * subject?.presenceMinTax)) *
                  100
                }%`,
              }}
            />

            <div>
              <span>{subject?.presenceCount} Presenças</span>

              <span>
                {subject?.workload * subject?.presenceMinTax -
                  subject?.presenceCount}{" "}
                restantes
              </span>
            </div>
          </ProgressBar>

          <ProgressBar type="absence">
            <div
              style={{
                width: `${
                  (subject?.absenceCount /
                    (subject?.workload * (1 - subject?.presenceMinTax))) *
                  100
                }%`,
              }}
            />

            <div>
              <span>{subject?.absenceCount} Faltas</span>

              <span>
                {subject?.workload * (1 - subject?.presenceMinTax) -
                  subject?.absenceCount}{" "}
                restantes
              </span>
            </div>
          </ProgressBar>
        </section>

        <AlertCard type="fine" />

        <Button onClick={() => history.push(`/event/${id}`)}>
          Novo registro
        </Button>
      </Content>
    </Container>
  );
}
