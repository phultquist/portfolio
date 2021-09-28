import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Component() {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-200">
                <div className={"max-w-screen-lg mx-auto py-10 px-10"}>
                    <h1 className="font-medium text-2xl">Resume</h1>
                </div>
            </div>
            <Footer background="white" />
        </div>
    )
}