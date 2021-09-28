import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Component() {
    return (<>
        <Navbar />
        <div className="bg-gray-200">
            <div className="max-w-screen-lg mx-auto py-10 px-10">
                <h1 className="font-medium text-2xl mb-4">Project Title</h1>
                <div className="flex">
                    <div className="flex-grow">
                        <p>
                            lorem ipsum
                        </p>
                    </div>
                    <div className="flex-none min-w-min w-40 bg-red-400 text-right">
                        <h2 className="text-md font-medium">Resources</h2>
                        <a>GitHub</a> <br />
                        <a>Website</a>
                    </div>
                </div>
            </div>
        </div>
        <Footer background="white" />
    </>)
}