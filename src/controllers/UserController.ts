import { Request, Response } from 'express'

import User from '../schemas/User'

class UserController {
    public async index (req: Request, res: Response): Promise<Response> {
        const users = await User.find()

        return res.json(users)
    }

    public async store (req: Request, res: Response): Promise<Response> {
        const user = await User.create(req.body)

        console.log(user.firstName)
        console.log(user.fullName())

        return res.json(user)
    }

    public async delete (req: Request, res: Response): Promise<Response> {
        const user = await User.remove({'_id': req.body.id})
        console.log(req.body.id)
        return res.json("")
    }
}

export default new UserController()
