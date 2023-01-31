import { useQuery } from "react-query";
import { popularMovies } from "./Fetching";
import styled from "styled-components";
import Card from "./Card";
function Popular() {
  let Spinner = require("react-spinkit");
  const { isLoading, error, data } = useQuery("pop", popularMovies);
  if (isLoading)
    return (
      <Loader>
        <Spinner name="ball-scale-ripple" />
      </Loader>
    );
  if (error) return <h1>error</h1>;
  return (
    <Wrap>
      <Card head={"Popular"} data={data.results} />
    </Wrap>
  );
}
const Wrap = styled.div`
  text-align: center;
`;
const Loader = styled.div`
  text-align: center;
`;
export default Popular;
