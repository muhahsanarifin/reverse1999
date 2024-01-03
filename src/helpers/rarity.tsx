import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";

type StarProps = {
  value: any;
  rarity: string;
};

export const Star = ({ value, rarity }: StarProps) => {
  return (
    <IconContext.Provider value={value}>
      <ul className="flex gap-x-1">
        {new Array(+rarity.split(" ")[0]).fill(1).map((_, idx) => (
          <li key={idx}>
            <FaStar />
          </li>
        ))}
      </ul>
    </IconContext.Provider>
  );
};
