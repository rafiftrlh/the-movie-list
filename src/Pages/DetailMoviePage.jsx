import { useGetDetailMovie } from "../hooks/useGetMovie";
import { useParams } from "react-router-dom";
import { imageUrl } from "../services/api";
import { IoIosArrowBack } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import cn from "../cn";

const DetailMoviePage = () => {
  const params = useParams();
  const { detailMovie } = useGetDetailMovie(params.id);

  const handleBack = () => {
    // window.history.back();

    window.location.href = "/";
  };

  return (
    <>
      <div className={cn("w-screen h-screen overflow-x-hidden", "text-white")}>
        <button
          onClick={() => handleBack()}
          className={cn(
            "text-white",
            "bg-zinc-500 hover:bg-zinc-500 hover:brightness-90",
            "border border-zinc-300 hover:border-white",
            "transition z-[99] cursor-pointer",
            "p-2 top-5 right-5",
            "scale-110 hover:scale-125 fixed",
            "rounded-full"
          )}
        >
          <IoIosArrowBack />
        </button>
        <img
          className={cn(
            "h-full w-full",
            "brightness-[.4] contrast-75 saturate-[2]",
            "object-cover object-center",
            "fixed z-[-99]"
          )}
          src={imageUrl + detailMovie?.backdrop_path}
          alt={detailMovie.title}
        />
        <div className="z-40 w-full h-full p-10">
          <div
            className={cn(
              "flex flex-col flex-nowrap md:flex-row",
              "gap-10",
              "w-full h-full"
            )}
          >
            <div
              className={cn(
                "flex-none overflow-hidden",
                "shadow-lg aspect-potrait rounded-2xl"
              )}
            >
              <img
                src={imageUrl + detailMovie?.poster_path}
                alt={detailMovie?.title}
              />
            </div>
            <div
              className={cn(
                "items-start justify-center",
                "flex flex-col flex-initial",
                "gap-3 pb-10",
                "text-left"
              )}
            >
              <div className={cn("flex flex-wrap", "gap-2")}>
                {detailMovie?.genres?.map((genres) => {
                  return (
                    <span
                      key={genres.name}
                      className={cn(
                        "px-5 py-1",
                        "font-medium text-sm",
                        "border-2 rounded-full",
                        "bg-gray-800/80"
                      )}
                    >
                      {genres.name}
                    </span>
                  );
                })}
              </div>
              <h1 className={cn("font-bold", "text-2xl md:text-3xl ")}>
                {detailMovie?.title}
              </h1>
              <p className={cn("flex items-center", "gap-3 -mt-3")}>
                <FaStar className="text-yellow-400" />
                {detailMovie?.vote_average} / 10
              </p>
              <p
                className={cn(
                  "font-mono italic",
                  "text-slate-300",
                  "text-sm md:text-base"
                )}
              >
                release on {detailMovie?.release_date}
              </p>
              <p
                className={cn(
                  "my-2",
                  "italic text-slate-200",
                  "text-base md:text-lg"
                )}
              >
                {detailMovie?.tagline}
              </p>
              <p
                className={cn(
                  "text-base md:text-lg",
                  "text-slate-100 font-medium"
                )}
              >
                Overview
              </p>
              <p
                className={cn(
                  "-mt-3",
                  "text-slate-200",
                  "text-sm md:text-base"
                )}
              >
                {detailMovie?.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMoviePage;
