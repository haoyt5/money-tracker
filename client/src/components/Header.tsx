import { ReactNode, FunctionComponent } from 'react'

interface HeaderProps {
    title?: string
    left?: ReactNode
    className?: string
}

const Header: FunctionComponent<HeaderProps> = ({ title, left, className }) => {
    return (
        <div
            className={`nav flex p-3 bg-info bg-blue-300 text-zinc-700 bg-gradient-to-r from-blue-300 via-blue-300 to-blue-400 shadow-sm ${className}`}
        >
            {left}
            <h1 className="flex-grow font-bold text-2xl text-center">
                {title}
            </h1>
        </div>
    )
}

export default Header
