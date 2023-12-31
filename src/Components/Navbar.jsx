import cn from "../cn";

/* eslint-disable react/prop-types */
const Navbar = (props) => {
  const { classDisplay } = props;
  return (
    <>
      <nav className={cn(classDisplay, "top-0 z-50 w-full")}>
        <ul
          className={cn(
            "flex items-center justify-between",
            "font-medium text-zinc-200",
            "text-sm",
            "bg-zinc-800/90 ring-1 ring-white/10",
            "gap-10 px-10 py-4",
            "shadow-md shadow-zinc-800/90 backdrop-blur"
          )}
        >
          <li className="text-lg font-bold text-primary">The Movie List</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
