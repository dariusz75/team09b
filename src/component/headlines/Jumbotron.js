import React, { FunctionComponent } from "react";
import { Col, Container, Row } from "react-grid-system";

import { StyledJumbotron, StyledJumbotronInner } from "./jumbotronStyles";
import { JATOVerticalSpacer } from "@jato/ui-component-library";

const Jumbotron = ({ children, background, minHeight = 280 }) => (
  <StyledJumbotron background={background} minHeight={minHeight}>
    <StyledJumbotronInner minHeight={minHeight}>
      <Container>
        <Row>
          <Col sm={12} md={10} lg={8}>
            <JATOVerticalSpacer height={40} />
            {children}
          </Col>
        </Row>
      </Container>
    </StyledJumbotronInner>
  </StyledJumbotron>
);

export default Jumbotron;
