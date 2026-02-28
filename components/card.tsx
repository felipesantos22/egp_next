import card from "@/interfaces/card";
import Image from "next/image";
import Link from "next/link";

export default function Card({ title, description, image, href }: card) {
  return (
    <Link href={href} className="group">
      <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
        <div className="relative h-64">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-4 bg-white">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
}
