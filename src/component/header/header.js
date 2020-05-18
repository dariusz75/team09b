import React from "react";
import {
  JATONavBar,
  JATOLogo,
  JATOTheme,
  JATONavGroup,
  JATONavItem,
} from "@jato/ui-component-library";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <JATONavBar
      className="header"
      left={() => (
        <>
          <Link to="/">
            <JATOLogo
              style={{
                marginRight: JATOTheme.space[6],
                marginTop: JATOTheme.space[1],
              }}
            />
          </Link>
          <JATONavGroup>
            <JATONavItem isActive={false}>
              <Link to="/">Home</Link>
            </JATONavItem>
            <JATONavItem isActive={false}>
              <Link to="/page1">Fuel Efficiency</Link>
            </JATONavItem>
            <JATONavItem isActive={false}>
              <Link to="/page2">FE Over Time</Link>
            </JATONavItem>
            <JATONavItem isActive={false}>
              <Link to="/page3">Distance Travelled</Link>
            </JATONavItem>
            <JATONavItem isActive={false}>
              <Link to="/page4">Supporting Documentation</Link>
            </JATONavItem>
          </JATONavGroup>
        </>
      )}
    />
  );
};

export default Header;
