import { useGetDetailMovie } from "../hooks/useGetMovie";
import { useParams } from "react-router-dom";
import { imageUrl } from "../services/api";
import { IoIosArrowBack } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const DetailMoviePage = () => {
  const params = useParams();
  const { detailMovie } = useGetDetailMovie(params.id);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden text-white">
        <button
          onClick={() => handleBack()}
          className="transition z-[99] cursor-pointer text-white bg-zinc-500 hover:bg-zinc-500 hover:brightness-90 p-2 rounded-full scale-110 hover:scale-125 border border-zinc-300 hover:border-white fixed top-5 right-5"
        >
          <IoIosArrowBack />
        </button>
        <img
          className="object-cover object-center h-full w-full brightness-[.4] contrast-75 saturate-[2] fixed z-[-99]"
          src={imageUrl + detailMovie?.backdrop_path}
          alt={detailMovie.title}
        />
        <div className="w-full h-full p-10 z-40">
          <div className="flex flex-nowrap gap-10 w-full h-full">
            <div className="aspect-potrait h-full rounded-2xl overflow-hidden shadow-lg flex-none">
              <img
                src={imageUrl + detailMovie?.poster_path}
                alt={detailMovie?.title}
              />
            </div>
            <div className="text-left flex flex-col flex-initial justify-center items-start gap-3">
              <div className="flex gap-2">
                {detailMovie?.genres?.map((genres) => {
                  return (
                    <span
                      key={genres.name}
                      className="font-medium px-5 py-1 bg-gray-800/80 rounded-full border-2"
                    >
                      {genres.name}
                    </span>
                  );
                })}
              </div>
              <h1 className="text-3xl font-bold">{detailMovie?.title}</h1>
              <p className="flex items-center gap-3 -mt-3">
                <FaStar className="text-yellow-400" />{" "}
                {detailMovie?.vote_average}
              </p>
              <p className="font-mono italic text-slate-300">
                release on {detailMovie?.release_date}
              </p>
              <p className="text-slate-200 italic text-lg my-2">
                {detailMovie?.tagline}
              </p>
              <p className="text-slate-100 font-medium text-lg">Overview</p>
              <p className="text-slate-200 -mt-3">{detailMovie?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMoviePage;
