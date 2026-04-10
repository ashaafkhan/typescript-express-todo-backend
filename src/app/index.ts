//this handle the request doesn't carea about how request is coming and on which port we are running or port is up or not.
import express from 'express'
import type {Application} from 'express'
import todoRouter from './to-do/routes.js'

export function createServerApplication():Application{
    const app = express()

    app.use(express.json())
    app.use('/todos',todoRouter)

    //#region //*========== Routes ==========
    app.get('/',function(req,res) {
        return res.json({message: 'Hello jii kaise hoo'})
    })

    app.get('/hello',function(req,res) {
        return res.json({message: 'Bye'})
    })
    //#endregion //*========== Routes ==========

    return app
}