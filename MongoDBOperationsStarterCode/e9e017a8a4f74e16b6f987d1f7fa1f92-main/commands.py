#EXAMPLE
#QUERY = 'db.names.find({name: "John Doe"})'

FIRST_QUERY = 'db.users.insertOne({name: "John Doe", email: "john@example.com"})'
SECOND_QUERY = 'db.movies.find({directors: "Christopher Nolan"})'

THIRD_QUERY = 'db.movies.find({genres: "Action"}).sort({year: -1})'

FOURTH_QUERY = 'db.movies.find({"imdb.rating": {$gt: 8}}, {title: 1, imdb: 1, _id: 0})'

FIFTH_QUERY = 'db.movies.find({cast: {$all: ["Tom Hanks", "Tim Allen"]}})'

SIXTH_QUERY = 'db.movies.find({cast: {$all: ["Tom Hanks", "Tim Allen"]}, $expr: {$eq: [{$size: "$cast"}, 2]}})'

SEVENTH_QUERY = 'db.movies.find({genres: "Comedy", directors: "Steven Spielberg"})'
EIGTH_QUERY = 'db.movies.updateOne({title: "The Matrix"}, {$set: {available_on: "Sflix"}})'

NINETH_QUERY = 'db.movies.updateOne({title: "The Matrix"}, {$inc: {"metacritic": 1}})'

TENTH_QUERY = 'db.movies.updateMany({year: 1997}, {$addToSet: {genres: "Gen Z"}})'

ELEVENTH_QUERY = 'db.movies.updateMany({"imdb.rating": {$lt: 5}}, {$inc: {"imdb.rating": 1}})'
TWELVETH_QUERY = 'db.comments.deleteOne({_id: ObjectId("5a9427648b0beebeb6957a21")})'

THIRTEENTH_QUERY = 'db.comments.deleteMany({author: "The Matrix"})'

FOURTEENTH_QUERY = 'db.movies.deleteMany({genres: "Action"})'

FIVETEENTH_QUERY = 'db.movies.aggregate([{"$group": {"_id": "$year", "count": {"$sum": 1}}}, {"$sort": {"_id": 1}}])'

SIXTEENTH_QUERY = 'db.movies.aggregate([{"$group": {"_id": "$directors", "averageRating": {"$avg": "$imdb.rating"}}}, {"$sort": {"averageRating": -1}}])'
