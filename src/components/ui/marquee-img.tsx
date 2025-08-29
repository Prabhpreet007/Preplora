export const MarqueImg = ({ img }: { img: string }) => {
  return (
    <img
      src={img}
      className="w-44 h-44 xl:w-52 xl:h-52 object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out mx-12 xl:mx-16"
      alt=""
    />
  );
};
