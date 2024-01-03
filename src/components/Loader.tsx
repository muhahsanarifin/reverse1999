import React from "react";
import { RootState } from "../utils/redux/store";
import { useSelector } from "react-redux";

export const Skeleton: React.FC = () => {
  const paginate = useSelector((state: RootState) => state.characters.paginate);

  return (
    <ul className="grid grid-cols-4 gap-6 xs:gap-4 xs:grid-cols-2">
      {new Array(paginate?.limit).fill(1).map((_, idx) => (
        <li key={idx}>
          <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] animate-pulse min-h-[206px]">
            <div className="rounded-[10px] p-4 sm:p-6 ">
              <div className="mt-0.5 text-xs font-medium bg-purple-100 text-left px-2.5 py-0.5 w-6"></div>
              <div className="mt-0.5 text-xs font-medium bg-purple-100 text-left px-2.5 py-0.5 w-2"></div>

              <div className="text-[10px] bg-purple-100 min-h-[75px] my-2">
                <div></div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1">
                {new Array(2).fill(1).map((_, idx) => (
                  <div
                    className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 text-[8px]"
                    key={idx}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
