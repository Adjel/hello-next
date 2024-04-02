import React from "react";
import styled from "styled-components";

function Footer() {
  const timestamp = new Date().toLocaleString();

  return <footer>Page rendered on {timestamp}</footer>;
}

export default Footer;
