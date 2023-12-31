// "use client";
import { Carousel } from "flowbite-react";
import { useGetMovie } from "../hooks/useGetMovie";

export default function CarouselComp() {
  const { dataMovies } = useGetMovie(1, true);

  return (
    <div className="w-full aspect-video">
      <Carousel pauseOnHover>
        {dataMovies?.results?.slice(0, 5).map((item) => (
          <div className="w-full h-full overflow-hidden" key={item.id}>
            <img src={item.poster_path} alt={item.title} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
