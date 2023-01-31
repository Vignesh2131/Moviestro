import React from "react";
import styled from "styled-components";
import { MdOutlineMovieFilter } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
function Footer() {
  return (
    <Wrapper>
      <div>
        <h1>
          <MdOutlineMovieFilter />
          Moviestro
        </h1>
        <small>&copy; Copyright 2022, Moviestro. All rights reserved.</small>
      </div>
      <main>
        <h5>Created by Sadhu Vignesh</h5>
        <p>Connect with me</p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/vignesh-sadhu-b85b9b217/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/Vignesh2131">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/imVignesh21">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://app.netlify.com/teams/vignesh2131/overview">
              <SiNetlify />
            </a>
          </li>
        </ul>
      </main>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2% 3%;
  div {
    h1 {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
  }
  main h5 {
    font-size: 2rem;
    font-family: "Alex Brush", cursive;
  }
  main p {
    margin: 0.7rem 0;
    font-weight: 500;
  }
  main ul {
    margin: 0.7rem 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  li {
    font-size: 1.5rem;
    :hover {
      transform: scale(0.9);
    }
    a {
      text-decoration: none;
      color: white;
    }
  }
  @media (max-width: 768px) {
  }
`;
export default Footer;
