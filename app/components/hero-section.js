import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-row justify-center mt-10">
      <div className="w-1/2">
        <Image
          src="/images/image-ones.png"
          alt="Branded clothing"
          width={800} // specify width
          height={600} // specify height
          className="rounded-md w-full"
          priority // optional: load this image as high priority for LCP
        />
      </div>
      <div className="w-1/2 flex flex-col gap-6">
        <span className="font-bold text-5xl text-gray-800">
          Wear Branded
          <br />
          Pay Less
        </span>
        <span className="text-gray-500">
          Authentic branded collections at ukay prices.
          <br />
          Style doesn’t have to be expensive.
        </span>
        <span className="text-gray-500">
          Explore our wide range of clothing and accessories for every style and
          budget.
        </span>
        <span className="cursor-pointer bg-berry text-white px-4 py-2 rounded-md inline-flex items-center gap-2 w-fit">
          {/* <Image
            src="/icons/location-pin.svg"
            alt="Pin Icon"
            width={20}
            height={20}
          /> */}
          Find Branch
        </span>
        <div className="flex flex-wrap gap-2">
          <div className="flex gap-1 items-center text-sm">
            <Image
              src="/icons/facebook.svg"
              alt="Facebook"
              width={20}
              height={20}
              className="bg-berry py-1 px-1 box-border rounded-md"
            />
            {/* <span className="text-gray-500">jamsbrandedcollection</span> */}
          </div>
          <div className="flex gap-1 items-center text-sm">
            <Image
              src="/icons/instagram.svg"
              alt="Facebook"
              width={20}
              height={20}
              className="bg-berry py-1 px-1 box-border rounded-md"
            />
            {/* <span className="text-gray-500">jamsbrandedcollection</span> */}
          </div>
          <div className="flex gap-1 items-center text-sm">
            <Image
              src="/icons/tiktok.svg"
              alt="Facebook"
              width={20}
              height={20}
              className="bg-berry py-1 px-1 box-border rounded-md"
            />
            {/* <span className="text-gray-500">jamsbrandedcollection</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
