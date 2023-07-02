import { loader } from "../assets";

const Loader = () => {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-slate-50/[.70]">
      <img src={loader} alt="loader" className="h-36 w-36" />
    </div>
  );
};

export default Loader;
