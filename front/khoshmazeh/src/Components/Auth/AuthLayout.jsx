import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <div>
            <p>header</p>
            {/* outlet is for forms */}
            <Outlet />
            <p>
                <footer></footer>
            </p>
        </div>
    )
}

export default AuthLayout