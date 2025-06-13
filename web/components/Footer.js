import Link from "next/link";

export default function Component({ className, metadata, linkClassName }) {
  if (className && className.includes('bg-white')) {
    linkClassName = 'hover:bg-gray-100'
  }
  return metadata ? (
    <div className={`${className || "bg-gray-200"}`}>
      <div className={"max-w-screen-lg mx-auto py-10 px-10"}>
        <div className="flex flex-wrap justify-center space-x-2">
          {[
            {
              link: "/resume",
              text: "Resume",
              newTab: false,
            },
            {
              link: metadata.github.url,
              text: "GitHub",
            },
            {
              link: metadata.linkedin.url,
              text: "LinkedIn",
            },
            {
              link: metadata.twitter.url,
              text: "Twitter",
            },
            {
              link: "mailto:hi@patrick.app",
              text: "Email",
            },
          ].map((ref, index) => (
            <Link key={index} href={ref.link}>
              <a
                target={ref.newTab === false ? "" : "_blank"}
                className={`py-2 px-4 ${linkClassName || "hover:bg-gray-250"} transition-all rounded-md`}
                rel="noopener noreferrer"
              >
                {ref.text}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
