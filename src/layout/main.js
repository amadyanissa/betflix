import React from 'react';
import Navbar from "../components/navbar"
const Layout = ({ children }) => {
  return (
  <React.Fragment>
      <Navbar />
      <div className={"container"}>{children}</div>
  </React.Fragment>
  );
};
export default Layout;