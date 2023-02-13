import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import PageBackwardButton from '../components/PageBackwardButton'

interface AuthRootProps {}

const AuthRoot: FunctionComponent<AuthRootProps> = () => {
    const { pathname, state } = useLocation()
    return (
        <>
            <div className="nav flex p-3 text-zinc-700 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 shadow-sm ">
                <PageBackwardButton
                    pathname={pathname}
                    from={state?.from ? state.from : ''}
                />
                <h1 className="flex-grow font-bold text-2xl text-center">
                    {pathname === '/' ? 'Money Tracker' : 'Expense History'}
                </h1>
            </div>
            <div className="px-3">
                <Outlet />
            </div>
        </>
    )
}

export default AuthRoot
