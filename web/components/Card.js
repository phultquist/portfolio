import Image from "next/image";
import Link from 'next/link'

export default function Component({ src, children, href }) {
    return (
        <div className="my-6 px-6 w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div className="bg-white card rounded-xl overflow-hidden transition-all group">
                <Link href={href}>
                    <a>
                        <div className="m-0 p-0 overflow-hidden">
                            <Image className={"p-0 m-0 object-cover"} unoptimized={true} loader={() => src} src={src} width={800} height={500} alt="Project" />
                        </div>
                        <div className="p-4 pt-2">
                            {children}
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    );
}