/* eslint-disable no-unused-vars */
import React, { Suspense, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Pagination from "../Components/Pagination";
import { useGetMovie } from "../hooks/useGetMovie";
import { Link } from "react-router-dom";
import cn from "../cn";
// import CarouselComp from "../Components/Carousel";
import CardSkeleton from "../utils/CardSkeleton";

const Card = React.lazy(() => import("../Components/Card"));

const Home = () => {
  const [page, setPage] = useState(1);
  const { dataMovies } = useGetMovie(page);

  const handlePrevPage = () => {
    setPage(page - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    setPage(page + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={cn("relative w-full pb-10", "text-white bg-zinc-900")}>
        <Navbar classDisplay="sticky" />
        {/* <CarouselComp /> */}
        <div className="grid w-full h-full grid-cols-4 gap-5 px-5 py-10">
          {dataMovies?.results?.map((item) => (
            <Link
              key={item.id}
              to={`/movie/${item.id}`}
              className="relative flex flex-col justify-between gap-2 mb-5 h-[530px] group"
            >
              <Suspense fallback={<CardSkeleton />}>
                <Card
                  key={item.id}
                  image={item.poster_path}
                  id={item.id}
                  title={item.title}
                  popularity={item.popularity}
                  release={item.release_date}
                />
              </Suspense>
            </Link>
          ))}
        </div>
        <Pagination
          page={page}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          total={dataMovies.total_pages}
        />
      </div>
    </>
  );
};

export default Home;
