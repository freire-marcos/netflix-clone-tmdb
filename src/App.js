import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import './App.css'
import FeaturedMovie from "./components/FeaturedMovie";

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=>i.slug === 'originals');
      let ramdomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[ramdomChosen];

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);

  return (
  <div className="page">
    {/* header */}
    {/* destaque */}
    {featuredData && 
      <FeaturedMovie item={featuredData} />
    }
    {/* listas */}
    <section className="lists">
      {
        movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))
      }
    </section>
    {/* rodapé basico */}
    </div>
    );
};
