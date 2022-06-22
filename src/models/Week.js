import mongoose from "mongoose";

const WeekSchema = new mongoose.Schema({
    date: String,
    unixDate: Date,
    data: [],
    result: [],
    tagCount: []
})

const Week = mongoose.Model("Week", WeekSchema);

export default Week;