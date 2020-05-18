import React from "react";
import { Col, Container, Row } from "react-grid-system";
import glamorous from "glamorous";
import Tabs from "../component/tabs/Tabs";

import { JATOVerticalSpacer } from "@jato/ui-component-library";

const Page3 = () => {
  return (
    <div className="home-page">
      <Tabs
        activeTab={{
          id: "tab1",
        }}
      >
        <Tabs.Tab id="tab1" title="Product Discovery">
          <glamorous.Div padding={20}>
            <Container>
              <Row>
                <Col md={12}>
                  <div className="product-main-wrapper">
                    <div className="documentation-tab1-slide1"></div>
                    <div className="documentation-tab1-slide2"></div>
                    <div className="documentation-tab1-slide3"></div>
                  </div>
                </Col>
              </Row>
            </Container>
          </glamorous.Div>
        </Tabs.Tab>

        <Tabs.Tab id="tab2" title="Architecture">
          <glamorous.Div padding={20}>
            <Container>
              <Row>
                <Col md={12}>
                  <div className="documentation-tab2">
                    <div className="documentation-tab2-diagram"></div>
                  </div>
                </Col>
              </Row>
            </Container>
          </glamorous.Div>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default Page3;
