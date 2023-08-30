import Image from "next/image";
interface CardContentProps {
  imagesrc: string;
}

const CardContent: React.FC<CardContentProps> = ({ imagesrc }) => (
  <div className="max-w-sm  border-gray-200 rounded-lg  ">
    <a className="cursor-pointer">
      <img src={imagesrc} height="100"></img>
    </a>
  </div>
);

export default CardContent;
