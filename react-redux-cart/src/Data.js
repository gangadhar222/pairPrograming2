import {v4 as uuidv4} from 'uuid'


let data = [
    {
        "name":"Table",
        "cost":1000,
        "category":"Furniture",
        "img":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg",
        "id":uuidv4()
    },
    {
        "name":"Chair",
        "cost":900,
        "category":"Furniture",
        "img":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg",
        "id":uuidv4()
    },
    {
        "name":"Sofa",
        "cost":9000,
        "category":"Furniture",
        "img":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg",
        "id":uuidv4(),
        "counter":1
    },
    {
        "name":"EarPhones",
        "cost":1000,
        "category":"Electronics",
        "img":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg",
        "id":uuidv4()
    },
    {
        "name":"Headphones",
        "cost":2000,
        "category":"Electronics",
        "img":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg",
        "id":uuidv4()
    },
    {
        "name":"Tv",
        "cost":10000,
        "category":"Electronics",
        "img":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg",
        "id":uuidv4()
    }
]

export default data;