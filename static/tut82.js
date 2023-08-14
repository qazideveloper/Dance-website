use harrykart
//  searching data in mongodb
db.items.find({rating:4.5})
db.items.find({rating:{$gte:4.5}})
db.items.find({rating:{$lte:4.5}})
// adding/AND  operator
db.items.find({rating:{$gte:4.5}, price:{$gte:22000}})
db.items.find({rating:{$gte:4.5}, price:{$gte:2000}})
db.items.find({rating:{$lte:4}, price:{$lte:2}})
// or operator
db.items.find({$or:[{rating:{$gt:4.5}}, {price:{$gt:1000001}}]})

db.items.find({rating:{$gte:4.5}},{rating:1})
db.items.find({rating:{$gte:4.5}},{rating:1,qty:1})
db.items.find({price:{$gte:222000}},{rating:1,qty:1})zzzz