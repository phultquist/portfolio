export default function Component({ url }) {
    const { hostname } = new URL(url);
    return (
        <div className="site w-full shadow rounded-t-md overflow-hidden bg-white">
            <div className="flex justify-center border-b" style={{ backgroundColor: "#fefefe" }}>
                <div className="w-2/5 flex justify-center my-2 py-1 rounded text-sm" style={{ backgroundColor: "#f6f6f6" }}>
                    <a href={url}>{hostname}</a>
                </div>
            </div>
            <div className="overflow-hidden rounded-md">
                <iframe src={url}
                    className="w-full h-screen overflow-hidden"
                    title="YouTube video player" >
                </iframe>

            </div>
        </div>
    )
}