/* eslint-disable react/prop-types */
import cn from "../cn";
import { imageUrl } from "../services/api";
import { FaStar } from "react-icons/fa";

const Card = ({ title, image, popularity, release }) => {
  return (
    <>
      <div className="flex flex-col">
        <div
          className={cn(
            "w-full overflow-hidden aspect-potrait",
            "bg-gray-200",
            "rounded-md cursor-pointer"
          )}
        >
          <img
            src={imageUrl + image}
            alt={title}
            className={cn(
              "object-cover object-center",
              "transition-all scale-105 group-hover:scale-110 group-hover:rotate-1"
            )}
          />
        </div>
      </div>
      <div
        className={cn("w-full aspect-cinema", "flex flex-col justify-between")}
      >
        <h3
          className={cn(
            "text-sm md:text-base font-medium line-clamp-2",
            "transition cursor-pointer",
            "text-zinc-100 hover:text-primary"
          )}
        >
          {title}
        </h3>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-300" />
            <p
              className={cn(
                "text-xs md:text-sm",
                "text-zinc-100",
                "font-mono font-medium"
              )}
            >
              {popularity}
            </p>
          </div>
          <p
            className={cn(
              "text-xs md:text-sm",
              "text-zinc-400",
              "font-mono font-medium"
            )}
          >
            {release}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
