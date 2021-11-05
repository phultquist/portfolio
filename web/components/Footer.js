import Link from 'next/link'

export default function Component({ background, metadata }) {
  return metadata ? (
    <div className={`bg-${background || 'gray-200'}`}>
      <div className={"max-w-screen-lg mx-auto py-10 px-10"}>
        <div className="flex flex-wrap justify-center space-x-2">
          {/* <Link href="/resume">
            <a>Resume</a>
          </Link> */}
          {
            [{
              link: '/resume',
              text: 'Resume',
              newTab: false
            },
            {
              link: metadata.github.url,
              text: 'GitHub'
            }, {
              link: metadata.linkedin.url,
              text: 'LinkedIn'
            }, {
              link: metadata.twitter.url,
              text: 'Twitter'
            }, {
              link: 'mailto:' + metadata.email,
              text: 'Email'
            }].map((ref, index) => (
              <Link key={index} href={ref.link}>
              <a target={ref.newTab === false ? "" : "_blank" } className="p-2" rel="noopener noreferrer" >
                {ref.text}
              </a>
              </Link>
            ))
          }
          {/* <a href={metadata.github.url}>GitHub</a>
          <a href={metadata.linkedin.url}>LinkedIn</a>
          <a href={metadata.twitter.url}>Twitter</a>
          <a href={'mailto:' + metadata.email}>Email</a> */}
        </div>
      </div>
    </div>
  ) : <></>
}