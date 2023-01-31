import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { Link } from "react-router-dom";
function Card(props) {
  const image_path = "https://image.tmdb.org/t/p/w500";
  return (
    <Wrapper>
      <h1>{props.head} movies</h1>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "3rem",
          // type: "loop",
          autoWidth: true,
          autoHeight: true,
        }}
      >
        {props.data.map((item) => {
          return (
            <SplideSlide key={item.id}>
              <CardContainer>
                <Link to={"/info/" + item.id}>
                  <img src={image_path + item.poster_path} alt="" />
                </Link>

                <h3>{item.title}</h3>
                <h4>Release : {item.release_date.slice(0, 4)}</h4>
                <h5>Rating : {Math.round(item.vote_average) + ".0"}</h5>
              </CardContainer>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 3% 7%;
  h1 {
    padding: 1rem;
  }
`;
const CardContainer = styled.div`
  position: relative;
  text-align: center;
  border-radius: 50px;
  background: rgb(36, 0, 0);
  background: rgb(0, 117, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 117, 255, 1) 0%,
    rgba(255, 255, 255, 1) 51%,
    rgba(0, 212, 255, 1) 100%
  );
  color: #282a3a;
  padding: 1rem 1rem;
  h3,
  h4,
  h5 {
    padding: 1%;
  }
  img {
    height: 40vh;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
export default Card;
