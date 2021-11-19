import Icon from "supercons";
import Link from "next/link";

export default function Component({ glyph, size, href }) {
  return (
    <>
      <Link href={href || ""}>
        <div className="mr-2 cursor-pointer w-min">
          <Icon glyph={glyph} size={size || 45} />
        </div>
      </Link>
    </>
  );
}
