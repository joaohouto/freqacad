import React from "react";
import { IconCircleCheck, IconAlertCircle } from "@tabler/icons";

import { Container, ProgressBar } from "./styles";

export default function SubjectCard({
  name,
  presenceCount,
  absenceCount,
  workload,
  ...rest
}) {
  return (
    <Container {...rest}>
      <section>
        <strong>{name}</strong>
        {absenceCount / workload >= 0.2 ? (
          <IconAlertCircle size={20} />
        ) : (
          <IconCircleCheck size={20} />
        )}
      </section>

      <section>
        <ProgressBar>
          <div
            style={{
              width: `${(presenceCount / workload) * 100}%`,
            }}
          />
          <div
            style={{
              width: `${(absenceCount / workload) * 100}%`,
            }}
          />
        </ProgressBar>
      </section>
    </Container>
  );
}
