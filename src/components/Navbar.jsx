import React from "react";

import { MdOutlineMovieFilter } from "react-icons/md";

import styled from "styled-components";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <Nav>
      <h1>
        <MdOutlineMovieFilter />
        Moviestro
      </h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/genre/">Categories</Link>
      </ul>
    </Nav>
  );
}
const Nav = styled.nav`
  padding: 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
  }
  h1 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 2rem;
  }
  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 1.1rem;
  }
`;
export default Navbar;
