import React from "react";
import { IconCircleCheck } from "@tabler/icons";

import { Container, ProgressBar } from "./styles";

export default function SubjectCard({ name, ...rest }) {
  return (
    <Container {...rest}>
      <section>
        <strong>{name}</strong>
        <IconCircleCheck size={24} />
      </section>

      <section>
        <ProgressBar type="presence">
          <span>20%</span>
          <div>
            <div style={{ width: 100 }} />
          </div>
        </ProgressBar>

        <ProgressBar type="absence">
          <span>20%</span>
          <div>
            <div style={{ width: 100 }} />
          </div>
        </ProgressBar>
      </section>
    </Container>
  );
}
