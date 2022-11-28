require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6378d306c84c70140e33ad5d').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ status: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ status: false })
    return count
}


deleteTaskAndCount('6375ef20d5ef029a1e8d380d').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})