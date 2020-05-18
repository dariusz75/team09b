import React from "react";
import { Col, Container, Row } from "react-grid-system";
import glamorous from "glamorous";
import Tabs from "../component/tabs/Tabs";

import {
  JATOTheme,
  JATOHeading,
  JATOVerticalSpacer,
  JATOList,
  JATOListItem,
} from "@jato/ui-component-library";

const Home = () => {
  return (
    <div className="home-page">
      <Tabs
        activeTab={{
          id: "tab1",
        }}
      >
        <Tabs.Tab id="tab1" title="Market">
          <glamorous.Div padding={20}>
            <Container>
              <Row>
                <Col md={8}>
                  <div className="tab1-left-section">
                    <JATOHeading as="h3">Market outlook</JATOHeading>
                    <JATOVerticalSpacer />
                    <JATOList className="tab-1-list">
                      <JATOListItem>
                        &#8226; 152 million actively connected cars on global
                        roads by 2020
                      </JATOListItem>
                      <JATOListItem>
                        &#8226; 2 billion connected cars on the world’s roadways
                        by 2025
                      </JATOListItem>
                      <JATOListItem>
                        &#8226; Average car will produce up to 30 terabytes of
                        data each day
                      </JATOListItem>
                      <JATOListItem>
                        &#8226; Car-generated data may become a USD 450 - 750
                        billion market by 2030
                      </JATOListItem>
                    </JATOList>
                    <JATOVerticalSpacer height={12} />
                  </div>
                </Col>
                <Col md={4}>
                  <div className="tab1-right-section"></div>
                </Col>
              </Row>
            </Container>
          </glamorous.Div>
        </Tabs.Tab>

        <Tabs.Tab id="tab2" title="Audience">
          <glamorous.Div padding={20}>
            <Container>
              <Row>
                <Col md={8}>
                  <JATOHeading as="h3">Audience or customer</JATOHeading>
                  <JATOVerticalSpacer />
                  <div className="home-page-left-section">
                    <JATOHeading as="h4">OEM </JATOHeading>
                    <JATOList className="tab-2-list">
                      <JATOListItem>&#8226; Vehicle efficiency</JATOListItem>
                      <JATOListItem>
                        &#8226; Report vehicle reliability
                      </JATOListItem>
                      <JATOListItem>
                        &#8226; Comparison with other makes and models
                      </JATOListItem>
                    </JATOList>
                    <JATOVerticalSpacer height={12} />

                    <JATOHeading as="h4">Dealer</JATOHeading>
                    <JATOList className="tab-2-list">
                      <JATOListItem>&#8226; Servicing and parts</JATOListItem>
                      <JATOListItem>
                        &#8226; Customer service / support
                      </JATOListItem>
                      <JATOListItem>
                        &#8226; Plan for parts inventory
                      </JATOListItem>
                      <JATOListItem>
                        &#8226; Plan vehicles requiring service plan for parts
                        inventory
                      </JATOListItem>
                      <JATOListItem>
                        &#8226; Gain insight on how customer utilising car
                        (upsell opportunity)
                      </JATOListItem>
                    </JATOList>
                    <JATOVerticalSpacer height={12} />

                    <JATOHeading as="h4">
                      Fleet operator or leasing{" "}
                    </JATOHeading>
                    <JATOList className="tab-2-list">
                      <JATOListItem>&#8226; Mileage</JATOListItem>
                      <JATOListItem>&#8226; Maintenance</JATOListItem>
                      <JATOListItem>&#8226; Location of vehicles </JATOListItem>
                      <JATOListItem>&#8226; Vehicle efficiency </JATOListItem>
                      <JATOListItem>
                        &#8226; Running costs based on mileage{" "}
                      </JATOListItem>
                    </JATOList>
                    <JATOVerticalSpacer height={12} />

                    <JATOHeading as="h4">Finance</JATOHeading>
                    <JATOList className="tab-2-list">
                      <JATOListItem>
                        &#8226; Current adjusted value of vehicle based on
                        current mileage
                      </JATOListItem>
                      <JATOListItem>
                        &#8226; Vehicle service state insurance
                      </JATOListItem>
                    </JATOList>
                    <JATOVerticalSpacer height={12} />

                    <JATOHeading as="h4">Insurance </JATOHeading>
                    <JATOList className="tab-2-list">
                      <JATOListItem>&#8226; Mileage</JATOListItem>
                      <JATOListItem>&#8226; Maintenance</JATOListItem>
                      <JATOListItem>&#8226; Location of vehicles </JATOListItem>
                      <JATOListItem>&#8226; Vehicle efficiency </JATOListItem>
                      <JATOListItem>
                        &#8226; Running costs based on mileage{" "}
                      </JATOListItem>
                    </JATOList>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="home-page-right-section"></div>
                </Col>
              </Row>
            </Container>
          </glamorous.Div>
        </Tabs.Tab>

        <Tabs.Tab id="tab3" title="Data Flow">
          <glamorous.Div padding={20}>
            <Container>
              <Row>
                <Col md={12}>
                  <div className="tab3">
                    <JATOHeading as="h3">
                      Connected Car Data Acquisition and Ingestion - Share
                      Connected Mobility
                    </JATOHeading>
                    <div className="homepage-tab3-diagram"></div>
                  </div>
                </Col>
              </Row>
            </Container>
          </glamorous.Div>
        </Tabs.Tab>

        <Tabs.Tab id="tab4" title="JATO Opportunities">
          <glamorous.Div padding={20}>
            <Container>
              <Row>
                <Col md={12}>
                  <div className="tab3">
                    <JATOHeading as="h3">Opportunity landscape</JATOHeading>
                    <JATOVerticalSpacer />
                    <JATOList className="tab-1-list">
                      <JATOListItem>
                        &#8226; Be the data aggregator/transformer
                      </JATOListItem>
                      <JATOListItem>
                        &#8226; Provide normalised data sets across multiple
                        brands
                      </JATOListItem>
                      <JATOListItem>
                        &#8226; Enrich and curate ingested data
                      </JATOListItem>
                      <JATOListItem>
                        &#8226; Provide connectivity system comparisons between
                        brands, who provides the best granular data for
                        customer's purpose
                      </JATOListItem>
                      <JATOListItem>
                        &#8226; Comparison of published data to actual data such
                        as performance over time
                      </JATOListItem>
                      <JATOListItem>
                        &#8226; Possibilities with data science of predicting
                        fuel efficiency and anomalies compared to predictions
                      </JATOListItem>
                    </JATOList>
                    <JATOVerticalSpacer height={12} />
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

export default Home;
