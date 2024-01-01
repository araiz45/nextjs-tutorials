import mongoose from 'mongoose'


async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database has been connected successfully")
    } catch (error) {
        console.log("Database Error" + error)
    }
}

export default main;