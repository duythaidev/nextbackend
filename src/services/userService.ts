// @ts-ignore
import db from '../models/index.js'
const fetchAllUsers = async () => {
    const data = await db.User.findAll()
    // console.log("service data: ", data)
    return data
}

export { fetchAllUsers }