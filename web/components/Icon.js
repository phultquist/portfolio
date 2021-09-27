import Icon from 'supercons'
import Link from 'next/link'

export default function Component({ glyph, size, href }) {
    return (
        <>
            <div className="mr-2 scale-110 cursor-pointer">
                <Link href={href || ""}>
                    <Icon glyph={glyph} size={size || 45} />
                </Link>
            </div>
        </>
    )
}