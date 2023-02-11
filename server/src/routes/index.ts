import { Application } from 'express'
import { default as expensesRoutes } from '../routes/expenses'

const routes = (app: Application) => {
    app.use('/expenses', expensesRoutes)
}

export default routes
