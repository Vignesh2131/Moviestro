import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import API_KEY from "../apikey";
import { motion } from "framer-motion";
function GenreResults() {
  const imgPath = "https://image.tmdb.org/t/p/original";
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  let params = useParams();
  const selectedGenre = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${params.id}&page=${page}`
    );
    const data = await res.json();
    setDataSource(data.results);
    setTotalPages(data.total_pages);
  };
  useEffect(() => {
    selectedGenre();
  }, [page]);
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
    <Wrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>{params.name} movies</h1>

      <CardContainer>
        {dataSource.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={"/info/" + item.id}>
                <img src={imgPath + item.poster_path} alt={item.title} />
              </Link>
              <h3>{item.title}</h3>
              <h4>Release date - {item.release_date}</h4>
              <h5>
                Rating - {Math.round(item.vote_average) + ".0"}
                {}
              </h5>
            </Card>
          );
        })}
      </CardContainer>
      {totalPages === 1 && (
        <div>
          <h2>Empty</h2>
        </div>
      )}
      <Bottom>
        <button onClick={prevPage}>Prev</button>
        <p>
          <span>{page}</span> of <span>{totalPages}</span>
        </p>
        <button onClick={nextPage}>Next</button>
      </Bottom>
    </Wrapper>
  );
}
const Wrapper = styled(motion.div)`
  text-align: center;
  padding: 2% 5%;
  h1 {
    padding: 1.5rem 0;
  }
`;
const CardContainer = styled.div`
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
  padding: 1rem 0;
  h3,
  h4,
  h5 {
    padding: 0.3rem;
  }
  img {
    height: 20rem;
    border-radius: 2rem;
  }
  span {
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
const Bottom = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  button {
    padding: 1rem 2rem;
    font-weight: 600;
    font-size: 1.3rem;
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
    :hover {
      background: rgb(131, 58, 180);
      background: linear-gradient(
        90deg,
        rgba(131, 58, 180, 1) 0%,
        rgba(253, 29, 29, 1) 50%,
        rgba(252, 176, 69, 1) 100%
      );
    }
    color: #282a3a;
    border-radius: 20px;
  }
  p span {
    font-size: 1.3rem;
    font-weight: 700;
  }
`;
export default GenreResults;
