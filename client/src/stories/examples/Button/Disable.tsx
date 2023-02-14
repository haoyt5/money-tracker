import React from 'react'
import SubmitButton from '../../../components/SubmitButton'
import { ComponentStory } from '@storybook/react'

export const DisableExamples: ComponentStory<typeof SubmitButton> = () => {
    return (
        <div>
            <SubmitButton>Default</SubmitButton>
            {'　'}
            <SubmitButton disabled={true}>Disabled</SubmitButton>
        </div>
    )
}

DisableExamples.parameters = {
    docs: {
        description: {
            story: 'Make the button looks inactive via adding the disabled prop to `SubmitButton`',
        },
    },
}
DisableExamples.storyName = 'Disabled variant'

export default DisableExamples
