//  inderting fata inmongo db
use harrykart
db.items.insertOne({ name:"samsung", price:22000, rating: 4.5 , qty : 233, sold: 98})

db.items.insertMany([{ name:"samsung", price:22000, rating: 4.5 , qty : 233, sold: 98}, { name:"iphone", price:222000, rating: 5 , qty : 2313, sold: 198},{ name:"huawei", price:20, rating: 4 , qty : 33, sold: 8},{ name:"kphne", price:200, rating: 14 , qty : 133, sold: 18, isbig: true}
])