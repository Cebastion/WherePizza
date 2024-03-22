import mongoose from 'mongoose'
export class db {
    constructor(ID) {
        this.ID = ID
    }

    async connect() {
        await mongoose.connect(this.ID)
    }

    async disconnect() {
        await mongoose.disconnect()
    }
}