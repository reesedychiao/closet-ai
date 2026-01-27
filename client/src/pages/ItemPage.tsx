import { useParams } from "react-router-dom";
import { Card } from "../components/ui/card";
import { NavLink } from "react-router-dom";

export default function ItemPage() {
  const { id } = useParams();

  const similarItems = ["1", "3", "4"];

  const similarItemsElements = similarItems.map((item) => (
    <NavLink to={"/items/" + item}>
      <Card
        key={item}
        className="
            w-32 
            aspect-square 
            flex 
            items-center 
            justify-center 
            bg-white 
            text-sm 
            shadow-sm 
            hover:shadow-lg 
            hover:-translate-y-1 
            transition
            cursor-pointer
        "
      >
        {item}
      </Card>
    </NavLink>
  ));

  return (
    <div className="flex flex-col lg:flex-row gap-16 px-8 py-12">
      {/* Main Item Card */}
      <Card
        className="
          w-full 
          max-w-md 
          aspect-square 
          flex 
          items-center 
          justify-center 
          text-4xl 
          font-semibold 
          bg-white 
          shadow-lg
        "
      >
        {id}
      </Card>

      {/* Item Details */}
      <div className="flex-1 max-w-xl space-y-6">
        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Item Name</h1>
          <p className="text-sm text-muted-foreground">
            Uploaded on Jan 27, 2026
          </p>
        </div>

        {/* Attributes */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
          <p>
            <span className="font-medium">Category:</span> —
          </p>
          <p>
            <span className="font-medium">Color:</span> —
          </p>
          <p>
            <span className="font-medium">Material:</span> —
          </p>
          <p>
            <span className="font-medium">Brand:</span> —
          </p>
          <p>
            <span className="font-medium">Price:</span> —
          </p>
        </div>

        {/* Similar Items */}
        <div className="pt-6">
          <h2 className="text-lg font-semibold mb-4">Similar items</h2>
          <div className="flex flex-row gap-6 flex-wrap">
            {similarItemsElements}
          </div>
        </div>
      </div>
    </div>
  );
}
