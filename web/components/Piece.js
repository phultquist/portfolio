import Image from "next/image";
import Link from "next/link";
import { VscArrowRight } from "react-icons/vsc";

export default function Component({ href, header, description, className }) {
  return (
    <Link href={href}>
      <div
        className={`py-4 px-4 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 ${
          className || "hover:bg-gray-250"
        } transition-all rounded-lg group`}
      >
        <a>
          <h3 className="font-medium text-lg">
            {header}{" "}
            <VscArrowRight className="inline opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all mb-1" />
          </h3>
          <p className="text-sm">{description}</p>
        </a>
      </div>
    </Link>
  );
}
