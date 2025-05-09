const db = require('../models/');

const fetchAllUsers = async () => {
    return await db.User.findAll()
}
const fetchUserByEmail = async (email: string) => {
    return await db.User.findOne({
        where: { email },
        raw: true
    })
}
const fetchUserByName = async (name: string) => {

    return await db.User.findOne({
        where: { name },
        raw: true
    })
}

const createUserService = async (name: string, email: string, password: string) => {
    return await db.User.create({
        name,
        email,
        password
    });
}

export { fetchAllUsers, fetchUserByEmail, fetchUserByName, createUserService }    