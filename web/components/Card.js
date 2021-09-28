import Image from "next/image";

export default function Component({ src, children, href }) {
    return (
        <div className="my-6 px-6 w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div className="bg-white card rounded-xl shadow-lg  scale-102 overflow-hidden hover:shadow-xl transition-all">
                <a href={href} target="_blank">
                    <div className="bg-white m-0 p-0 overflow-hidden">
                        <Image className={"p-0 m-0"} loader={() => src} src="project.png" width={800} height={500} alt="Project" />
                    </div>
                    <div className="p-4 pt-2">
                        {children}
                    </div>
                </a>
            </div>
        </div>
    );
}