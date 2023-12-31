import mongoose from 'mongoose'


async function main() {
    try {
        await mongoose.connect("mongodb+srv://araiz:araiz@cluster0.ttyllxu.mongodb.net/?retryWrites=true&w=majority")
        console.log("Database has been connected successfully")
    } catch (error) {
        console.log("Database Error" + error)
    }
}

export default main;