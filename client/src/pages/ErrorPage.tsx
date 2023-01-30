import { useRouteError } from 'react-router-dom'

export type IErrorProps =
    | unknown
    | {
          statusText: string
          message: string
      }
export default function ErrorPage() {
    const error: IErrorProps = useRouteError()
    console.error(error)

    return (
        <div className="grid h-screen content-center place-content-center">
            <div className="text-center ">
                <h1 className="my-5 text-3xl font-bold">Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                {/* <p>
                <i>{error?.statusText || error?.message}</i>
            </p> */}
            </div>
        </div>
    )
}
