import Link from 'next/link';

export default function Component() {
    return (
        <div className="max-w-screen-lg mx-auto px-8 py-2 flex">
            <Link href="/">
                <a className="font-medium mr-8 py-2">Patrick Hultquist</a>
            </Link>
            <Link href="/projects">
                <a className="hover:bg-gray-100 py-2 rounded-md px-4 transition-all">Projects</a>
            </Link>
            <Link href="/resume">
                <a className="hover:bg-gray-100 py-2 rounded-md px-4 transition-all">Resume</a>
            </Link>
        </div>
    )
}