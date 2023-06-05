import React from "react";
import "./FeaturedMovie.css";

export default function FeaturedMovie({ item }) {
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }
  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horisontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons}
              {item.number_of_seasons > 1 ? " temporadas" : " temporada"}
            </div>
          </div>
          <div className="featured--overview">{item.overview.length > 300 ? `${item.overview.slice(0, 300)}...` : item.overview}</div>
          <div className="featured--buttons">
            <a className="featured--whatchbutton" href="">Assistir</a>
            <a className="featured--mylistbutton" href="">+ Minha Lista</a>
          </div>
          <div className="featured--genres">
            <strong>Gêneros:</strong> {genres.join(", ")};
          </div>
        </div>
      </div>
    </section>
  );
}
