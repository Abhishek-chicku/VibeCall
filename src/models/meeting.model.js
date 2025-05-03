import mongoose from "mongoose"



const meetingSchema = new Schema(
    {
        user_id :{type  : String},
        mettingCode : {type: String, required : true},
        date : {type : Date , default:Date.now , required : true}

    }
)

const Meeting = mongoose.Model("Meeting" ,  meetingSchema);

export { "meeting"}