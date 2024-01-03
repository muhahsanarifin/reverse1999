import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../utils/redux/store";
import { IoIosArrowBack } from "react-icons/io";
import { Star } from "../helpers/rarity";
import * as Lodader from "../components/Loader";
import More from "./More";
import {
  charactersThunks,
  charactersBySlugThunks,
} from "../utils/redux/actions/characters";

import { useNavigate } from "react-router-dom";

const Card: React.FC = () => {
  const navigate = useNavigate();

  const usAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = usAppDispatch();
  const getCharacters = useSelector((state: RootState) => state.characters.get);
  const paginate = useSelector((state: RootState) => state.characters.paginate);

  // Render characters data 🚀
  useEffect(() => {
    dispatch(charactersThunks({ query: `?limit=${paginate.limit}` }));
  }, [dispatch, paginate.limit]);

  const handleSlug = async (slug: string) => {
    const cbFulfilled = () => {
      navigate(`/characters/${slug}`, { preventScrollReset: true });
    };

    await dispatch(charactersBySlugThunks({ slug: slug, cbFulfilled }));
  };

  return (
    <>
      {getCharacters?.isLoading && <Lodader.Skeleton />}

      {getCharacters?.isFulfilled && (
        <ul className="grid grid-cols-4 gap-6 xs:gap-4 xs:grid-cols-2">
          {getCharacters?.data?.data.map((data: any) => (
            <li key={data.id}>
              <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                <div className="rounded-[10px] bg-white p-4 sm:p-6">
                  <p className="block text-[10px] text-gray-500">
                    {data.birthday}
                  </p>

                  <button
                    onClick={() => handleSlug(data.slug)}
                    className="transition hover:scale-110"
                  >
                    <h3 className="mt-0.5 text-xs font-medium text-gray-900 text-left">
                      {data?.name}
                    </h3>
                  </button>

                  <div className="text-[10px] text-gray-600 min-h-[75px] my-2">
                    <p>
                      {data?.description.length === 0
                        ? "🙈 🙉 🙊"
                        : data?.description}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1">
                    {data?.tags?.map((tag: string) => (
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 text-[8px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
      <More />
    </>
  );
};

export default Card;

export const Character = () => {
  const navigate = useNavigate();
  const getCharactersBySlug = useSelector(
    (state: RootState) => state.characters.getBySlug
  );

  return (
    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 m-4 border">
      <button
        className="p-1 transition hover:scale-110"
        onClick={() => navigate("/", { replace: true })}
      >
        <IoIosArrowBack />
      </button>
      <div className="mt-2">
        <dl className="flex">
          <div>
            <dt className="sr-only">Name</dt>

            <dd className="font-medium">
              {getCharactersBySlug?.data?.data?.name}
            </dd>
          </div>

          <div className="ml-auto">
            <dt className="text-[10px] font-semibold">Birthday</dt>
            <dd className=" text-gray-500 ml-auto text-[10px]">
              {getCharactersBySlug?.data?.data?.birthday}
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-4">
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Damage Type</p>
              <p className="font-medium">
                {getCharactersBySlug?.data?.data?.damage_type}
              </p>
            </div>
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Medium</p>
              <p className="font-medium">
                {getCharactersBySlug?.data?.data?.medium}
              </p>
            </div>
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Afflatus</p>
              <p className="font-medium">
                {getCharactersBySlug?.data?.data?.afflatus}
              </p>
            </div>
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Rarity</p>
              <p className="font-medium">
                <Star
                  rarity={getCharactersBySlug?.data?.data?.rarity}
                  value={{ color: "#F5E627" }}
                />
              </p>
            </div>
          </div>
        </div>

        <div className="my-4 text-sm">
          <p className="my-4 text-xs">
            {getCharactersBySlug?.data?.data?.description}
          </p>
        </div>
      </div>
    </div>
  );
};
