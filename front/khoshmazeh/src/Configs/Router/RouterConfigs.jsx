import { Route, Routes } from "react-router-dom"

import Start from "../../Components/Start"

const RouterConfigs = () => {
    return (
        <Routes>
            <Route path="/" element={<Start />} />
        </Routes>
    )
}

export default RouterConfigs