/* eslint-disable react/prop-types */
import cn from "../cn";
import { imageUrl } from "../services/api";
import { FaStar } from "react-icons/fa";

const Card = ({ title, image, popularity, release }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="w-full overflow-hidden bg-gray-200 rounded-md cursor-pointer aspect-potrait">
          <img
            src={imageUrl + image}
            alt={title}
            className={cn(
              "object-cover object-center",
              "transition-all scale-105 group-hover:scale-110 group-hover:rotate-1"
            )}
          />
        </div>
        <h3 className="text-lg font-medium text-zinc-100">
          <p className="transition cursor-pointer hover:text-primary">
            {title}
          </p>
        </h3>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-300" />
          <p className="text-sm font-medium text-zinc-100">{popularity}</p>
        </div>
        <p className="mt-1 text-sm font-medium text-zinc-500">{release}</p>
      </div>
    </>
  );
};

export default Card;
