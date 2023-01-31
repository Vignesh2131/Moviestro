import { useQuery } from "react-query";
import { trending } from "./Fetching";
import styled from "styled-components";
import { motion } from "framer-motion";
import Card from "./Card";
function Trending() {
  let Spinner = require("react-spinkit");
  const { status, data } = useQuery("trend", trending);
  return (
    <div>
      {status === "loading" && (
        <Loader>
          <Spinner name="ball-scale-ripple" />
        </Loader>
      )}
      {status === "error" && <div>Error</div>}
      {status === "success" && (
        <Wrap
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card head={"Trending"} data={data.results} />
        </Wrap>
      )}
    </div>
  );
}
const Wrap = styled(motion.div)`
  text-align: center;
`;
const Loader = styled.div`
  text-align: center;
`;
export default Trending;
