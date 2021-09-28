export default function Component({background}) {
    return (
        <div className={`bg-${background || 'gray-200'}`}>
        <div className={"max-w-screen-lg mx-auto py-10 px-10"}>
          <div className="flex flex-wrap justify-center space-x-6">
            <a>resume</a>
            <a>github</a>
            <a>linkedin</a>
            <a>twitter</a>
            <a>email</a>
          </div>
        </div>
      </div>
    )
}