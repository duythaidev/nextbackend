import bcrypt from 'bcrypt';
const saltRounds = 10;
export const hashPassword = async (password: string) => {
    try {
        return await bcrypt.hash(password, saltRounds)
    } catch (error) {
        console.log("hash error", error)
        throw new Error('hash error')
    }
}
export const compare = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword);
}