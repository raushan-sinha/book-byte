const AuthButtons = () => {
    return (
        <div className="hidden lg:flex items-center gap-3">

            <a className="px-5 py-2 text-sm font-semibold text-white bg-red-700 rounded-md hover:bg-red-600 transition cursor-pointer">
                Login
            </a>

            <a className="px-5 py-2 text-sm font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-600 transition cursor-pointer">
                Sign Up
            </a>

        </div>
    );
}

export default AuthButtons;