import { ComponentStory } from '@storybook/react'
import SubmitButton from '../../../components/SubmitButton'

const Template: ComponentStory<typeof SubmitButton> = (args) => (
    <SubmitButton {...args} />
)
export const Default = Template.bind({})
Default.args = {
    children: 'Button',
    disabled: false,
    className: '',
}

Default.argTypes = {
    children: {
        description: `Pass children so this component can wrap them`,
        defaultValue: `${null}`,
    },
    disabled: {
        description: 'Disables the button',
        defaultValue: `fall`,
    },
    className: {
        description: `Appends new className`,
    },
}
export default Default
