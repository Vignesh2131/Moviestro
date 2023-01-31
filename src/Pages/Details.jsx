import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import API_KEY from "../apikey";
import Similar from "../components/Similar";
import styled from "styled-components";
import { motion } from "framer-motion";
function Details() {
  let params = useParams();
  const [details, setDetails] = useState([]);
  const imgPath = "https://image.tmdb.org/t/p/original";
  const movieInfo = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${params.name}?api_key=${API_KEY}&language=en-US`
    );
    const data = await res.json();
    setDetails(data);
  };
  useEffect(() => {
    movieInfo();
  }, [params.name]);

  return (
    <Wrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <CardCont>
        <img src={imgPath + details.backdrop_path} alt={details.title} />
        <div>
          <h1>About the Movie</h1>
          <p>
            <span>
              <i>Movie name - </i>
            </span>
            {details.title}
          </p>
          <p>
            <span>
              <i>Tagline - </i>
            </span>
            {details.tagline}
          </p>
          <p>
            <span>
              <i>Runtime - </i>
            </span>
            {details.runtime} minutes
          </p>
          <p>
            <span>
              <i>Overview - </i>
            </span>
            {details.overview}
          </p>
        </div>
      </CardCont>
      <Similar />
    </Wrapper>
  );
}
const Wrapper = styled(motion.div)``;
const CardCont = styled.div`
  margin: 2rem 6rem;
  position: relative;
  display: flex;
  gap: 2rem;
  img {
    width: 60%;
    border-radius: 2rem;
  }
  div {
    h1 {
      text-decoration: underline;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.3rem;
      font-weight: 500;
    }
    span {
      font-size: 1.4rem;
      font-weight: 600;
    }
  }
`;

export default Details;
