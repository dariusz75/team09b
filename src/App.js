import React from "react";
import "./App.css";
import Header from "./component/header/header";
import { BrowserRouter } from "react-router-dom";
import Routing from "./component/routing/routing";

import { JATOHeading, JATOText, JATOTheme } from "@jato/ui-component-library";
import Jumbotron from "./component/headlines/Jumbotron";
import backgroundBranding from "../src/img/dashboard-brand.jpg";
import MainContainer from "./component/mainContainer/MainContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Jumbotron background={backgroundBranding} minHeight={100}>
          <JATOText
            as="p"
            fontWeight="bold"
            fontSize={JATOTheme.fontSizes[6]}
            color={JATOTheme.colors.darkBlue}
          ></JATOText>
          <JATOHeading
            as="h1"
            fontWeight="bold"
            color={JATOTheme.colors.lightBlue}
          >
            Shared Connected Mobility
          </JATOHeading>
        </Jumbotron>
        <MainContainer>
          <Routing />
        </MainContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
