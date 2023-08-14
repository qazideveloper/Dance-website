// delete data from mongo database
db.items.deleteOne({rating:4.5})

db.items.deleteMany({price:222000})
db.items.deleteMany({name:"huawei"},{rating:{$gte:4},price:{$gte:2}})

db.items.deleteMany({name:"samsung"},{$or:[{rating:{$gt:4.5}}, {price:{$gt:1000001}}]})