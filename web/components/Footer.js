export default function Component({ background, metadata }) {
  return metadata ? (
    <div className={`bg-${background || 'gray-200'}`}>
      <div className={"max-w-screen-lg mx-auto py-10 px-10"}>
        <div className="flex flex-wrap justify-center space-x-6">
          <a href="/resume">Resume</a>
          <a href={metadata.github.url}>GitHub</a>
          <a href={metadata.linkedin.url}>LinkedIn</a>
          <a href={metadata.twitter.url}>Twitter</a>
          <a href={'mailto:'+metadata.email}>Email</a>
        </div>
      </div>
    </div>
  ) : <></>
}