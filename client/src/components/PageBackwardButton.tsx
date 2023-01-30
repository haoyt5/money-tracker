import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

interface PageBackWardButtonProps {
    from: string
    pathname: string
}

const PageBackWardButton: FunctionComponent<PageBackWardButtonProps> = ({
    from,
    pathname,
}) => {
    return (
        <div className={`${[pathname === '/' && 'opacity-0']}`}>
            <Link to={from}>
                <Button
                    color="info"
                    className="font-medium bg-blue-300 hover:bg-white font-semibold border-0 "
                    size="sm"
                >
                    {'＜'}
                </Button>
            </Link>
        </div>
    )
}

export default PageBackWardButton
