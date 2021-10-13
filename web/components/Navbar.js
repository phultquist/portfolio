import Link from 'next/link';

export default function Component() {
    return (
        <div className="max-w-screen-lg mx-auto py-4 px-8 flex space-x-6">
            <Link href="/">
                <a className="font-medium mr-8">Patrick Hultquist</a>
            </Link>
            <Link href="/projects">
                <a className="">Projects</a>
            </Link>
            <Link href="/resume">
                <a className="">Resume</a>
            </Link>
        </div>
    )
}