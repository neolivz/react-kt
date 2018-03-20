const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const router = new Router()

const userList =  {}
const users  = {
	list: async (ctx, next) => {
		ctx.body = userList
		next()
	},
	create: async (ctx, next) => {
		console.log(ctx.request.body)
		const body = ctx.request.body
		const {userId, password} = body
		if(userList[userId] === undefined) {
			userList[userId] = password
			ctx.body = {
				userId,
				message: 'User Successfully Created'
			}
		} else {
			ctx.status = 400
			ctx.body ={
				userId,
				message: 'User already exist'
			}
		}
	},
	login: async (ctx, next) => {
		
		const body = ctx.request.body
		const {userId, password} = body
		console.log(userId, password)
		if(!userList[userId] || userList[userId] !== password){
			ctx.status = 401
			ctx.body = {
				userId,
				message: 'Username or password invalid'
			}
		} else {
			ctx.status = 200
			ctx.body = {
				userId,
				message: 'Successfully login'
			}
		}
		next()
	}
}

router
	.get('/users/', users.list)
	.post('/login/', users.login)
	.post('/create/', users.create)

app
	.use(cors())
	.use(bodyParser())
	.use(router.routes())
	.use(router.allowedMethods())

app.listen(4000)
	console.log('listening on port 4000')


