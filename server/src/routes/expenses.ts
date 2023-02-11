import { Router, Response } from 'express'
// import auth from '../middlewares/auth'
// import validator from '../middlewares/validator'

const app = Router()
app.post('/', (_req, res: Response) => {
    res.status(200)
    return res.status(200).json({ data: 'POST: /expenses' })
})
app.get('/', (_req, res: Response) => {
    res.status(200)
    return res.status(200).json({ data: 'GET: /expenses' })
})
app.get('/summary', (_req, res: Response) => {
    console.log('GET: /expenses/summary')
    return res.status(200).json({ data: 'GET: /expenses/summary' })
})
// app.post('/', auth, validator(POST_APP_BODY, 'body' as keyof object), createApp)
// app.patch('/:appId', auth, updateApp)
// app.get('/:appId', auth, getApp)
// app.post(
//     '/:appId/versions',
//     auth,
//     fileValidator('file'),
//     validator(POST_VERSION_PARAM, 'params' as keyof object),
//     validator(POST_VERSION_BODY, 'body' as keyof object),
//     createVersionByApp
// )
// app.get(
//     '/:appId/versions',
//     auth,
//     validator(GET_VERSIONS_BY_APP_PARAMS, 'params' as keyof object),
//     getAllVersionsByApp
// )
// app.post('/:appId/versions/check', auth, verifyAppChecksum)

export default app
