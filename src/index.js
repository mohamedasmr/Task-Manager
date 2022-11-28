const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT || 3000



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('638382433bfc3e34162adb91')
    // await task.populate({ path:'owner' })
    // console.log(task.owner)
    const user = await User.findById('638380bdd3a0996b8e3f3966')
    await user.populate('tasks')
    console.log(user.tasks)
}

main()