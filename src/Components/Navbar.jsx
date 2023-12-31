/* eslint-disable react/prop-types */
const Navbar = (props) => {
  const { classDisplay } = props;
  return (
    <>
      <nav className={`${classDisplay} top-0 z-50 w-full`}>
        <ul className="flex justify-between items-center gap-10 py-4 px-10 font-medium text-sm text-zinc-200  bg-zinc-800/90 ring-1 ring-white/10 shadow-md shadow-zinc-800/90 backdrop-blur">
          <li className="font-bold text-lg text-primary">The Movie List</li>
          <li className="flex items-center gap-3">
            <h1 className="font-bold tracking-wide">Popularity</h1>
            <select name="" id="" className="bg-black/20 border py-1 px-2 rounded-full">
              <option value="popularity.desc">
                popularity.desc
              </option>
              <option value="popularity.desc">
                popularity.asc
              </option>
            </select>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
