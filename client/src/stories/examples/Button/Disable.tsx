import React from 'react'
import SubmitButton from '../../../components/SubmitButton'
import { ComponentStory } from '@storybook/react'

export const DisableExamples: ComponentStory<typeof SubmitButton> = () => {
    return (
        <>
            <SubmitButton>Default</SubmitButton>
            <SubmitButton disabled={true}>Disabled</SubmitButton>
        </>
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

// export default {
//     parameter: {
//         docs: {
//             description: {
//                 story: 'Make the button looks inactive via adding the disabled prop to `SubmitButton`',
//             },
//         },
//     },
// } as ComponentMeta<typeof DisableExamples>

// export default {
//     docs: {
//         description: {
//             story: 'Make the button looks inactive via adding the disabled prop to `SubmitButton`',
//         },
//     },
// }
// eslint-disable-next-line import/no-anonymous-default-export
