export default function Component({ url }) {
    const { hostname } = new URL(url);
    return (
        <div className="site w-full shadow rounded-t-md overflow-hidden bg-white">
            <div className="border-b" style={{ backgroundColor: "#fefefe" }}>
                <div className="absolute flex flex-row space-x-2 py-4 px-6">
                    {["bg-red-400", "bg-yellow-400", "bg-green-400"].map(color => {
                        return <div className={`rounded-full ${color} w-3 h-3 ring-1 ring-gray-200 ring-opacity-50`}></div>
                    })}
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-3/5 flex justify-center my-2 py-1 rounded text-sm" style={{ backgroundColor: "#f1f1f1" }}>
                        <a href={url} target="_blank">{hostname}</a>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden rounded-md">
                <iframe src={url} 
                    className="w-full h-screen"
                    allow="autoplay"
                    title="Website Preview" >
                </iframe>
            </div>
        </div>
    )
}