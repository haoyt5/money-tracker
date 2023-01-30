import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
interface AuthRootProps {}

const AuthRoot: FunctionComponent<AuthRootProps> = () => {
    return (
        <>
            <div className="nav bg-blue-300 text-gray-700">
                <h1 className="w-100 py-3 font-bold text-2xl text-center">
                    Money Tracker
                </h1>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default AuthRoot
