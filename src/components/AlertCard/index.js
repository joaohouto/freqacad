/*
  TODO: fix this component
*/

import React, { useEffect, useState } from "react";
import {
  IconCircleCheck,
  IconAlertCircle,
  IconCircleX,
  IconAward,
} from "@tabler/icons";

import { Container, Icon } from "./styles";

export default function AlertCard({ subject }) {
  const [type, setType] = useState("fine");

  useEffect(() => {
    const { workload, presenceMinTax, presenceCount, absenceCount } = subject;

    const maxAbsence = workload * (1 - presenceMinTax);
    const requiredPresence = workload * presenceMinTax;

    if (absenceCount / workload >= 0.2) {
      if (absenceCount >= maxAbsence) {
        return setType("flunked");
      }

      return setType("warning");
    } else {
      if (presenceCount >= requiredPresence) {
        return setType("passed");
      } else {
        return setType("fine");
      }
    }
  }, [subject]);

  const cardIcons = {
    fine: {
      icon: <IconCircleCheck size={24} />,
      title: "Tudo certo",
      message:
        "Mantenha a frequência de presença constante para não ter problemas no futuro.",
    },
    passed: {
      icon: <IconAward size={24} />,
      title: "Tudo certo",
      message:
        "Você concluiu o número mínimo de horas/aula para esta disciplina.",
    },
    warning: {
      icon: <IconAlertCircle size={24} />,
      title: "Atenção!",
      message:
        "O número de faltas está muito próximo do limite. Não falte mais para não reprovar.",
    },
    flunked: {
      icon: <IconCircleX size={24} />,
      title: "Opa!",
      message:
        "Você ultrapassou a quantide máxima de faltas para esta disciplina.",
    },
  };

  return (
    <Container>
      <Icon type={type}>{cardIcons[type].icon}</Icon>
      <div>
        <h3>{cardIcons[type].title}</h3>
        <p>{cardIcons[type].message}</p>
      </div>
    </Container>
  );
}
