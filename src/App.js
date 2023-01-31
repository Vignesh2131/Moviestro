import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { QueryClientProvider, QueryClient } from "react-query";
import Navbar from "./components/Navbar";
import Results from "./Pages/Results";
import Search from "./components/Search";
import Categories from "./Pages/Categories";
import GenreResults from "./Pages/GenreResults";
import Footer from "./components/Footer";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Search />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searched/:name" element={<Results />} />
          <Route path="/info/:name" element={<Details />} />
          <Route path="/genre" element={<Categories />} />
          <Route path="/genre/:name/:id" element={<GenreResults />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
