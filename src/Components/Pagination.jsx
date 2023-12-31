/* eslint-disable react/prop-types */
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import cn from "../cn";

const Pagination = (props) => {
  const { page, totalPages, handlePrevPage, handleNextPage } = props;

  return (
    <>
      <div className="">
        <ul
          className={cn(
            "flex items-center justify-center gap-5",
            "font-mono text-sm md:text-base"
          )}
        >
          <li onClick={handlePrevPage}>
            <button
              className={`
              ${cn(
                "bg-zinc-500/80 hover:bg-zinc-500",
                "transition cursor-pointer p-2 rounded-full",
                "hover:scale-105"
              )}
              ${page <= 1 && `hidden`}`}
            >
              <IoIosArrowBack />
            </button>
          </li>
          <li>
            {page} of {totalPages}
          </li>
          <li onClick={handleNextPage}>
            <button
              className={cn(
                "bg-zinc-500/80 hover:bg-zinc-500",
                "p-2 transition rounded-full cursor-pointer",
                "hover:scale-105"
              )}
            >
              <IoIosArrowForward />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
