import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    if (query === "") {
      return <></>;
    }
    navigate("/searched/" + query);
    setQuery("");
  }
  return (
    <Wrap>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Got something on brain? Search here"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
        />
        <button>
          <FiSearch />
        </button>
      </form>
    </Wrap>
  );
}
const Wrap = styled.div`
  text-align: center;
  padding: 2rem 0;
  input {
    position: relative;
    width: 40%;
    height: 2.5rem;
    border: none;
    outline: none;
    border-radius: 10px;
    font-size:1.1rem;
    font-weight:500;
  }
   button{
    position:absolute;
    border:none;
    background-color:white;
    height:2.5rem;
    border-radius:10px;
    width:2rem;
    right:30%;
   }
  }
`;

export default Search;
