// @ts-ignore
import db from '../models/index.js'
const fetchAllUsers = async () => {
    return await db.User.findAll()
}
const fetchUserByEmail = async (email: string) => {

    return await db.User.findOne({ where: { email } })
}
const fetchUserByName = async (name: string) => {

    return await db.User.findOne({ where: { name } })
}

const createUserService = async (name: string, email: string, password: string) => {
    return await db.Todo.create({
        name,
        email,
        password
    });
}

export { fetchAllUsers, fetchUserByEmail, fetchUserByName, createUserService }    