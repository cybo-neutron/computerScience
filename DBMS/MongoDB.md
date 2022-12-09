ERD -> Entity Relationship Diagram

ERDs are all about visualizing relationships.

NoSQl databases are all about fully composed documents, not mapping relationships between dieparate, normalized data.


Aggregation pipleline

```json
db. posts. aggregate([
    {
        $match:{
        _id : Objectld ( "p1122 " )
        }
    },
    {
        $lookup:{
        from: 'people' ,
        localField: 'user' ,
        foreignField:"_id"
        as: 'user'
    }
    }
])

```

Validation

```json

db. createCotlection( ' customers ' ,{
    validator: {
    $jsonSchema: {
    bsonType: 'object',
    titte:' customers' ,
    required: ['name','hair' ],
    properties: {
    name: {
    bsonType : ' string'},
    hair: {
    enum: ['Black', 'Grey', 'Blonde']
    },
    friends: {
    bsonType: 'array' ,
    maxltems: 15,
    items: { type: 'string'}
    }
}}}}})
```

