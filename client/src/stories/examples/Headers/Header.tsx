import { ComponentStory } from '@storybook/react'
import Header from '../../../components/Header'

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />
export const Default = Template.bind({})
Default.args = {
    title: 'Header Title',
    className: '',
    left: <button className="btn-info btn-sm">{'＜'}</button>,
}

Default.argTypes = {
    title: {
        description: `Places the title in the center of the header`,
        defaultValue: `${null}`,
    },
    className: {
        description: 'Appends new `className`',
    },
    left: {
        description: `Add element to stick in the left`,
    },
}
export default Default
