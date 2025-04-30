import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <div>
            <div className="h-16 bg-[#b0c9b0] "></div>
            {/* outlet is for forms */}
            <Outlet />
            <div className="h-16 bg-[#b0c9b0] "></div>
        </div>
    )
}

export default AuthLayout