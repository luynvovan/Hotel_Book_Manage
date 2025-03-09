import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-blue-900 py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl text-white font-bold tracking-tight">
                    <Link  to="/">LynaStay.com</Link>
                </span>
                <span className="flex space-x-2">
                    <Link to="/sign-in" className="bg-white flex items-center text-blue-600 px-3 font-bold hover:bg-gray-300"
                    >
                        Sign in
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Header;