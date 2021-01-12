import bcrypt from 'bcryptjs'

const users = [
    {
        name: "Admin User",
        email: "example@gmail.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: "Albus Brian Dumbledore",
        email: "example1@gmail.com",
        password: bcrypt.hashSync('123456', 10),

    },
    {
        name: "Neville Longbottom",
        email: "example2@gmail.com",
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users