import React from "react";
import { useParams, Link } from "react-router-dom";
import API_KEY from "../apikey";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
function Results() {
  const image_path = "https://image.tmdb.org/t/p/w500";
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  let params = useParams();
  const searchQuery = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.name}&page=${page}`
    );
    const data = await res.json();
    setSearch(data.results);
    setTotalPages(data.total_pages);
  };
  useEffect(() => {
    searchQuery();
  }, [params.name, page]);

  function nextPage() {
    if (page === totalPages) {
      return;
    }
    setPage(page + 1);
    window.scrollTo(0, 0);
  }
  function prevPage() {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
    window.scrollTo(0, 0);
  }

  return (
    <Wrapper>
      <h1>Results for "{params.name}"</h1>
      <CardContainer
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {search.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={"/info/" + item.id}>
                <img src={image_path + item.poster_path} alt={item.title} />
              </Link>
              <h2>{item.title}</h2>
              <h3>Release date - {item.release_date}</h3>
              <h4>
                Rating - {Math.round(item.vote_average) + ".0"}
                {}
              </h4>
            </Card>
          );
        })}
      </CardContainer>
      {totalPages !== 1 && (
        <Bottom>
          <button onClick={prevPage}>Prev</button>
          <p>
            <span>{page} </span>of <span>{totalPages}</span>
          </p>
          <button onClick={nextPage}>Next</button>
        </Bottom>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  text-align: center;
  padding: 2% 5%;
  h1 {
    padding: 1.5rem;
  }
`;
const CardContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Card = styled.div`
  position: relative;
  text-align: center;
  border-radius: 50px;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  padding: 1% 2%;

  img {
    height: 50vh;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
    color: black;
  }
  h2,
  h3,
  h4 {
    padding: 1% 0;
  }
  @media (max-width: 600px) {
  }
`;
const Bottom = styled.div`
  padding: 2% 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  button {
    padding: 1rem 2rem;
    font-weight: 600;
    font-family: "Alex Brush", cursive;
    font-size: 2rem;
    border: none;
    background: rgb(36, 0, 0);
    background: rgb(0, 117, 255);
    background: linear-gradient(
      90deg,
      rgba(0, 117, 255, 1) 0%,
      rgba(255, 255, 255, 1) 51%,
      rgba(0, 212, 255, 1) 100%
    );
    color: #282a3a;
    border-radius: 20px;
    :hover {
      background: rgb(131, 58, 180);
      background: linear-gradient(
        90deg,
        rgba(131, 58, 180, 1) 0%,
        rgba(253, 29, 29, 1) 50%,
        rgba(252, 176, 69, 1) 100%
      );
    }
  }
  p span {
    font-size: 1.3rem;
    font-weight: 700;
  }
`;
export default Results;
