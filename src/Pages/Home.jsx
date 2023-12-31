/* eslint-disable no-unused-vars */
import cn from "../cn";
import React, { Suspense, useState } from "react";
import Navbar from "../Components/Navbar";
import { useGetMovie } from "../hooks/useGetMovie";
import { Link } from "react-router-dom";

import PaginationComp from "../Components/Pagination";
import CardSkeleton from "../utils/CardSkeleton";

const CarouselComp = React.lazy(() => import("../Components/Carousel"));
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
        {/* {page === 1 && <CarouselComp />} */}
        <Navbar classDisplay="sticky" />
        <h3 className={cn("mt-5 ml-5", "font-bold text-lg")}>Popularity</h3>
        <div
          className={cn(
            "w-full h-full",
            "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
            "gap-5 px-5 pb-10 pt-5"
          )}
        >
          {dataMovies?.results?.map((item) => (
            <Link
              key={item.id}
              to={`/movie/${item.id}`}
              className={cn(
                "relative group",
                "flex flex-col gap-2",
                "h-full",
                "mb-5"
              )}
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
        <PaginationComp
          page={page}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          totalPages={dataMovies?.total_pages}
        />
      </div>
    </>
  );
};

export default Home;
