import React from "react";
import {
  IconCircleCheck,
  IconAlertCircle,
  IconCircleX,
  IconAward,
} from "@tabler/icons";

import { Container, Icon } from "./styles";

export default function AlertCard({ type }) {
  const cardIcons = {
    fine: <IconCircleCheck size={24} />,
    warning: <IconAlertCircle size={24} />,
    danger: <IconCircleX size={24} />,
    good: <IconAward size={24} />,
  };

  return (
    <Container>
      <Icon type={type}>{cardIcons[type]}</Icon>
      <div>
        <h3>Tudo certo</h3>
        <p>
          Mantenha a frequência de presença constante para não ter problemas no
          futuro.
        </p>
      </div>
    </Container>
  );
}
