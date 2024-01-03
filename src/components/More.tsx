import React from "react";
import { charactersAction } from "../utils/redux/reducers/characters";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../utils/redux/store";

const More: React.FC = () => {
  const usAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = usAppDispatch();
  const getCharacters = useSelector((state: RootState) => state.characters.get);
  const paginate = useSelector((state: RootState) => state.characters.paginate);

  const handleMore = async () => {
    dispatch(
      charactersAction.pagination({
        ...getCharacters?.data?.pagination?.pagination,
        limit: paginate.limit + 8,
      })
    );
  };

  const handleReset = async () => {
    dispatch(
      charactersAction.pagination({
        ...getCharacters?.data?.pagination?.pagination,
        limit: 8,
      })
    );
  };

  return (
    <>
      {getCharacters?.data?.pagination?.pagination?.limit >
      getCharacters?.data?.pagination?.pagination?.totalItems ? (
        <button
          className="group inline-block rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 w-fit mx-auto my-6"
          onClick={handleReset}
        >
          <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
            Reset
          </span>
        </button>
      ) : (
        <>
          <button
            className="group inline-block rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 w-fit mx-auto my-6"
            onClick={handleMore}
          >
            <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
              More
            </span>
          </button>
          {/* <button
            className="group inline-block rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 w-fit mx-auto my-6"
            onClick={handleToUp}
          >
            <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
              to Up
            </span>
          </button> */}
        </>
      )}
    </>
  );
};

export default More;
