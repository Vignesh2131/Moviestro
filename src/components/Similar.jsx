import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import API_KEY from "../apikey";
import styled from "styled-components";
import { motion } from "framer-motion";
function Similar() {
  let Spinner = require("react-spinkit");
  let params = useParams();
  const [similar, setSimilar] = useState([]);
  const fetchSimilar = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${params.name}/similar?api_key=${API_KEY}&language=en-US`
    );
    const data = await res.json();
    setSimilar(data.results);
  };
  useEffect(() => {
    fetchSimilar();
  }, [params.name]);

  return (
    <Wrap
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Card data={similar} head={"Similar"} />
    </Wrap>
  );
}
const Wrap = styled(motion.div)`
  text-align: center;
`;
export default Similar;
