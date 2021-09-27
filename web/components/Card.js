import Image from "next/image";

export default function Component({ image, children, href }) {
    return (
        <div className="my-6 px-6 w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div className="bg-white card rounded-xl shadow-lg  scale-102 overflow-hidden hover:shadow-xl transition-all">
                <a href={href} className="card-image" target="_blank">
                    <div className="bg-red-500 max-h-48 overflow-hidden">
                        <Image src={image} alt="" />
                    </div>
                    <div className="p-4">
                        {children}
                    </div>
                </a>
            </div>
        </div>
    );
}