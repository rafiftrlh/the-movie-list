import cn from "../cn";

export default function CardSkeleton() {
  return (
    <div
      className={cn("flex flex-col justify-between", "h-full animate-pulse")}
    >
      <div className="flex flex-col gap-3">
        <div
          className={cn("w-full ", "rounded-md aspect-potrait", "bg-gray-300")}
        ></div>
      </div>
      <div
        className={cn("flex flex-col justify-between", "w-full aspect-cinema")}
      >
        <div className={cn("h-4 rounded", "bg-gray-300")}></div>
        <div className="flex justify-between">
          <div className={cn("h-4 w-[40%] rounded", "bg-gray-300")}></div>
          <div className={cn("h-4 w-[30%] rounded", "bg-gray-300")}></div>
        </div>
      </div>
    </div>
  );
}
