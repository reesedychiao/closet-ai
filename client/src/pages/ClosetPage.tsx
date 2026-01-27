import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { NavLink } from "react-router-dom";

export default function ClosetPage() {
  const filters = ["Category", "Color", "Material"];

  const filterElements = filters.map((filter) => {
    return (
      <Button key={filter} className="mx-4 mb-16 mt-8">
        {filter}
      </Button>
    );
  });

  const clothes = ["1", "2", "3", "4"];

  const clothesElements = clothes.map((id) => {
    return (
      <NavLink key={id} to={"/items/" + id}>
        <Card
          className="
          w-80 
          aspect-square 
          flex 
          items-center 
          justify-center 
          bg-white 
          shadow-sm 
          hover:shadow-md 
          transition
        "
        >
          {id}
        </Card>
      </NavLink>
    );
  });

  return (
    <div className="mx-8">
      <div className="flex flex-row">{filterElements}</div>
      <div className="flex flex-row justify-around flex-wrap gap-6 px-4">
        {clothesElements}
      </div>
    </div>
  );
}
