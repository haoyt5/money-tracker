import React from 'react'
import { FunctionComponent } from 'react'
import { Button } from 'reactstrap'
interface SubmitButtonProps {
    disabled?: boolean
    className?: string
    children?: React.ReactNode
}

const SubmitButton: FunctionComponent<SubmitButtonProps> = ({
    disabled,
    className,
    children,
}) => {
    return (
        <Button
            color="primary"
            disabled={disabled}
            style={
                disabled
                    ? {
                          color: 'rgb(63 63 70)',
                          backgroundColor: 'rgb(212 212 216)',
                          boxShadow: 'none',
                      }
                    : {}
            }
            className={`ring active:ring border-0 bg-blue-500 font-medium disabled:text-zinc-600 disabled:bg-gray-400 disabled:ring-0 hover:bg-blue-500 hover:text-gray-900 hover:ring hover:font-semi-bold  focus:text-black focus:bg-blue-500 focus:ring ${className}`}
            type="submit"
        >
            {children}
        </Button>
    )
}

export default SubmitButton
