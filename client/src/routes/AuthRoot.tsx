import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import PageBackwardButton from '../components/PageBackwardButton'
import Header from '../components/Header'

interface AuthRootProps {}

const AuthRoot: FunctionComponent<AuthRootProps> = () => {
    const { pathname, state } = useLocation()
    return (
        <>
            <Header
                left={
                    <PageBackwardButton
                        pathname={pathname}
                        from={state?.from ? state.from : ''}
                    />
                }
                title={pathname === '/' ? 'Money Tracker' : 'Expenses'}
            />
            <div className="px-3">
                <Outlet />
            </div>
        </>
    )
}

export default AuthRoot
