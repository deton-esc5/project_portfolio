import express from 'express'

const routes = express.Router()

routes.get('/', (request, response) => {
    return response.json({message: 'HelloWorld'})
})

routes.post('/post', (request, response) => {
    return response.json({message: 'New post'})
})

export default routes