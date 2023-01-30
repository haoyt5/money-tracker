import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import PageBackwardButton from '../components/PageBackwardButton'

interface AuthRootProps {}

const AuthRoot: FunctionComponent<AuthRootProps> = () => {
    const { pathname, state } = useLocation()
    console.log('location', pathname, state)

    return (
        <>
            <div className="nav flex p-3 bg-blue-300 text-gray-700">
                <PageBackwardButton
                    pathname={pathname}
                    from={state?.from ? state.from : ''}
                />
                <h1 className="flex-grow font-bold text-2xl text-center">
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
