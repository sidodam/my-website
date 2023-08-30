import Image from "next/image";
interface CardContentProps {
  title: string;
  description: string;
  imagesrc: string;
}

const CardContent: React.FC<CardContentProps> = ({
  title,
  description,
  imagesrc,
}) => (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <Image
        className="rounded-t-lg"
        width={400}
        height={400}
        src={imagesrc}
        alt=""
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="text-xl mb-5 text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </div>
  </div>
);

export default CardContent;
