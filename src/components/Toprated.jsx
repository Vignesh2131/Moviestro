import { useQuery } from "react-query";
import Card from "./Card";
import styled from "styled-components";
import { topRatedMovies } from "./Fetching";
import { motion } from "framer-motion";
function Toprated() {
  let Spinner = require("react-spinkit");
  const { isLoading, error, data } = useQuery("pop", topRatedMovies);
  if (isLoading)
    return (
      <Loader>
        <Spinner name="ball-scale-ripple" />
      </Loader>
    );
  if (error) return <h1>error</h1>;
  return (
    <Wrap
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card head={"Top rated"} data={data.results} />
    </Wrap>
  );
}
const Wrap = styled(motion.div)`
  text-align: center;
`;
const Loader = styled.div`
  text-align: center;
`;
export default Toprated;
