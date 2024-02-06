import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  // os melhores filmes e os com melhor nota na API  
  const [topMovies, setTopMovies] = useState([])
  // função assincrona para fazer a requisição onde vai esperar um url da api
  const getTopRatedMovies = async (url) => {
  // aqui será uma resposta baseado no await fetch
    const res = await fetch(url);
  // aqui vou receber dados mas preciso transformar esses dados em await de objetos em js
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {

    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(topRatedUrl);
  }, [])

  return (
    <div clasName="container">
        <h2 clasName="title">Melhores Filmes:</h2>
        <div className="movies-container">
            {topMovies.length === 0 && <p>Carregando...</p>}
            {topMovies.length > 0 && 
                topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    </div>
  );
};

export default Home
