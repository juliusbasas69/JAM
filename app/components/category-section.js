import Image from "next/image";

const clothingCategories = [
  { name: "T-Shirts", image: "/images/t-shirt.png" },
  { name: "Hoodies", image: "/images/hoodie.png" },
  { name: "Pants", image: "/images/pants.png" },
  { name: "Polo T Shirt", image: "/images/polo-shirt.png" },
  { name: "Shorts", image: "/images/shorts.png" },
  { name: "Crop Top", image: "/images/crop-top.png" },
];

const accessoryCategories = [
  { name: "Caps", image: "/images/caps.png" },
  { name: "Shoes", image: "/images/shoes.png" },
];

export default function CategorySection() {
  return (
    <div className="mt-10 w-full py-10 bg-berry text-center">
      {/* CLOTHING */}
      <h2 className="text-2xl font-semibold mb-6 text-white">Clothing</h2>
      <div className="flex justify-center gap-10 flex-wrap">
        {clothingCategories.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="rounded-full p-1">
              <div className="w-24 h-24 relative rounded-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-3 text-sm text-white">{item.name}</p>
          </div>
        ))}
      </div>

      {/* ACCESSORIES */}
      <h2 className="text-2xl font-semibold mt-12 mb-6 text-white ">
        Accessories
      </h2>
      <div className="flex justify-center gap-10 flex-wrap">
        {accessoryCategories.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="rounded-full p-1">
              <div className="w-24 h-24 relative rounded-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-3 text-sm text-white">{item.name}</p>
          </div>
        ))}
      </div>

      {/* MESSAGE */}
      <p className="mt-8 text-gray-600 text-sm max-w-md mx-auto text-white">
        These are the items we sell in our ukay-ukay shop — affordable, stylish,
        and carefully selected for you.
      </p>
    </div>
  );
}
