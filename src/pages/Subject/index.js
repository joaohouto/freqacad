import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../database";

import Button from "../../components/Button";
import { Container, Content, Header, Details, ProgressBar } from "./styles";

import { IconArrowLeft, IconTrash } from "@tabler/icons";
import AlertCard from "../../components/AlertCard";

export default function Subject() {
  const [subject, setSubject] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

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
        navigate(-1);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const roundNumber = (number) => {
    return Math.round(number * 100) / 100;
  };

  return (
    <Container>
      <Header>
        <button onClick={() => navigate(-1)}>
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
            <strong>
              {roundNumber(subject?.workload * subject?.presenceMinTax)}h/a
            </strong>
          </div>
          <div>
            <span>Máximo de faltas</span>{" "}
            <strong>
              {roundNumber(subject?.workload * (1 - subject?.presenceMinTax))}
              h/a
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
              <span>{subject?.presenceCount} presenças</span>

              <span>
                {roundNumber(
                  subject?.workload * subject?.presenceMinTax -
                    subject?.presenceCount
                )}{" "}
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
              <span>{subject?.absenceCount} faltas</span>

              <span>
                {roundNumber(
                  subject?.workload * (1 - subject?.presenceMinTax) -
                    subject?.absenceCount
                )}{" "}
                restantes
              </span>
            </div>
          </ProgressBar>
        </section>

        <AlertCard type="fine" />

        <Button onClick={() => navigate(`/event/${id}`)}>Novo registro</Button>
      </Content>
    </Container>
  );
}
