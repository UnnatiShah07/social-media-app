import { useDispatch, useSelector } from "react-redux";
import { updateFilterPostType } from "../redux";

const FilterPostPopup = () => {
  const dispatch = useDispatch();
  const { filterPostType } = useSelector((state) => state.postReducer);

  return (
    <div className="absolute top-8 right-0 w-auto h-auto py-3 flex flex-col items-start gap-2 rounded-md bg-white shadow-gray-500 shadow-lg z-10">
      <div className="flex gap-3 px-3">
        <input
          type="radio"
          name="latest"
          id="latest"
          value={"latest"}
          checked={filterPostType === "latest"}
          onChange={(e) => dispatch(updateFilterPostType(e.target.value))}
        />
        <label htmlFor="latest">Latest</label>
      </div>
      <div className="border-b-2 border-gray- w-full"></div>
      <div className="flex gap-3 px-3">
        <input
          type="radio"
          name="trending"
          id="trending"
          value={"trending"}
          checked={filterPostType === "trending"}
          onChange={(e) => dispatch(updateFilterPostType(e.target.value))}
        />
        <label htmlFor="trending">Trending</label>
      </div>
    </div>
  );
};

export default FilterPostPopup;
