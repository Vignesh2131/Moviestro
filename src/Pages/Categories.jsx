import styled from "styled-components";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import API_KEY from "../apikey";
import { motion } from "framer-motion";
function Categories() {
  const genreList = async () => {
    const res = await fetch(`
https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    return res.json();
  };
  const { isLoading, error, data } = useQuery("genres", genreList);
  if (isLoading) return <h1>Loading..</h1>;
  if (error) return <h1>Error</h1>;
  return (
    <Wrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Categories</h1>
      <div>
        {data.genres.map((item) => {
          return (
            <SLink to={"/genre/" + item.name + "/" + item.id} key={item.id}>
              <Button>{item.name}</Button>
            </SLink>
          );
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled(motion.div)`
  position: relative;
  margin: 4rem 5rem;
  text-align: center;
  h1 {
    margin-bottom: 1.4rem;
  }
  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 1rem;
    column-gap: 1rem;
    align-items: center;
  }
`;
const SLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const Button = styled.button`
  border: none;
  padding: 1rem 2rem;
  font-weight: 500;
  border-radius: 20px;
  font-family: "Alex Brush", cursive;
  font-size: 2rem;
  :hover {
    background: rgb(238, 174, 202);
    background: radial-gradient(
      circle,
      rgba(238, 174, 202, 1) 0%,
      rgba(98, 0, 246, 1) 100%
    );
  }
`;
export default Categories;
