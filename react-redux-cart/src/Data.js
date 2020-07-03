import {v4 as uuidv4} from 'uuid';

let data = [
    {
        "name":"Table",
        "cost":1000,
        "incart":false,
        "category":"Furniture",
        "id":uuidv4()
    },
    {
        "name":"Chair",
        "cost":900,
        "incart":false,
        "category":"Furniture",
        "id":uuidv4()
    },
    {
        "name":"Sofa",
        "cost":9000,
        "incart":false,
        "category":"Furniture",
        "id":uuidv4()
    },
    {
        "name":"EarPhones",
        "cost":1000,
        "incart":false,
        "category":"Electronics",
        "id":uuidv4()
    },
    {
        "name":"Headphones",
        "cost":2000,
        "incart":false,
        "category":"Electronics",
        "id":uuidv4()
    },
    {
        "name":"Tv",
        "cost":10000,
        "incart":false,
        "category":"Electronics",
        "id":uuidv4()
    }
]

export default data;