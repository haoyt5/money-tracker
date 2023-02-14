import './css/bootstrap.css'
import './css/compiled-tailwind.css'
import './css/compiled-tailwind.min.css'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
