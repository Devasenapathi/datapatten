const mongoose = require('mongoose');

const tableSchema = mongoose.Schema({
    date:{type:String},
    teamLead:{type:String},
    shift:{type:String},
    ehs:{type:String},        
    production:{type:String},
    megaMill:{type:String},
    megaMillComments:{type:String},
    acmMills:{type:String},
    acm1CurrentRate:{type:String},
    acm1MillsComment:{type:String},
    acm2CurrentRate:{type:String},
    acm2MillsComment:{type:String},
    acm3CurrentRate:{type:String},
    acm3MillsComment:{type:String},
    msmMills:{type:String},
    msm1CurrentRate:{type:String},
    msm1MillsComment:{type:String},
    msm2CurrentRate:{type:String},
    msm2MillsComment:{type:String},
    msm3CurrentRate:{type:String},
    msm3MillsComment:{type:String},
    quality:{type:String},
    qualitySummary:{type:String},
    Maintanence:{type:String},
    issues:{type:String},    
})

const Tables = mongoose.model("Table",tableSchema);
module.exports = Tables;