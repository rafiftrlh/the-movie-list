/* eslint-disable react/prop-types */
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = (props) => {
  const { page, handlePrevPage, handleNextPage } = props;

  return (
    <>
      <div className="">
        <ul className="flex justify-center items-center gap-5">
          <li onClick={handlePrevPage}>
            <button
              className={`transition cursor-pointer bg-zinc-500/80 hover:bg-zinc-500 p-2 rounded-full hover:scale-105 ${
                page <= 1 && `hidden`
              }`}
            >
              <IoIosArrowBack />
            </button>
          </li>
          <li>{page}</li>
          <li onClick={handleNextPage}>
            <button className="transition cursor-pointer bg-zinc-500/80 hover:bg-zinc-500 p-2 rounded-full hover:scale-105">
              <IoIosArrowForward />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
