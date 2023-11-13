export const categories = [
    {
        "categoryID": 1,
        "categoryName": "Beverages",
        "description": "Soft drinks coffees teas beers and ales"
    },
    {
        "categoryID": 2,
        "categoryName": "Condiments",
        "description": "Sweet and savory sauces relishes spreads and seasonings"
    },
    {
        "categoryID": 3,
        "categoryName": "Confections",
        "description": "Desserts candies and sweet breads"
    },
    {
        "categoryID": 4,
        "categoryName": "Dairy Products",
        "description": "Cheeses"
    },
    {
        "categoryID": 5,
        "categoryName": "Grains/Cereals",
        "description": "Breads crackers pasta and cereal"
    },
    {
        "categoryID": 6,
        "categoryName": "Meat/Poultry",
        "description": "Prepared meats"
    },
    {
        "categoryID": 7,
        "categoryName": "Produce",
        "description": "Dried fruit and bean curd"
    },
    {
        "categoryID": 8,
        "categoryName": "Seafood",
        "description": "Seaweed and fish"
    }
]

export const regions  = [
    {
        "regionID": 1,
        "regionDescription": "Eastern"
    },
    {
        "regionID": 2,
        "regionDescription": "Western"
    },
    {
        "regionID": 3,
        "regionDescription": "Northern"
    },
    {
        "regionID": 4,
        "regionDescription": "Southern"
    }
]

export const orders = [
    {
        "orderID": 10248,
        "productID": 11,
        "unitPrice": 14,
        "quantity": 12,
        "discount": 0
    },
    {
        "orderID": 10248,
        "productID": 42,
        "unitPrice": 9.8,
        "quantity": 10,
        "discount": 0
    },
    {
        "orderID": 10248,
        "productID": 72,
        "unitPrice": 34.8,
        "quantity": 5,
        "discount": 0
    },
    {
        "orderID": 10249,
        "productID": 14,
        "unitPrice": 18.6,
        "quantity": 9,
        "discount": 0
    },
    {
        "orderID": 10249,
        "productID": 51,
        "unitPrice": 42.4,
        "quantity": 40,
        "discount": 0
    },
    {
        "orderID": 10250,
        "productID": 41,
        "unitPrice": 7.7,
        "quantity": 10,
        "discount": 0
    }
]

export const selectedCategories = [
    {
        "categoryID": 1,
        "categoryName": "Beverages",
        "description": "Soft drinks coffees teas beers and ales"
    },
    {
        "categoryID": 2,
        "categoryName": "Condiments",
        "description": "Sweet and savory sauces relishes spreads and seasonings"
    },
    {
        "categoryID": 3,
        "categoryName": "Confections",
        "description": "Desserts candies and sweet breads"
    }
];
export const selectedOrders = [
    {
        "orderID": 10248,
        "productID": 42,
        "unitPrice": 9.8,
        "quantity": 10,
        "discount": 0
    },
    {
        "orderID": 10250,
        "productID": 41,
        "unitPrice": 7.7,
        "quantity": 10,
        "discount": 0
    }
];

export const queryOptions = [
    {
        name: 'select * from categories',
        value: 0,
    },
    {
        name: 'select * from categories limit 3',
        value: 1,
    },
    {
        name: 'select * from regions',
        value: 2,
    },
    {
        name: 'select * from orders where quantity = 10',
        value: 3,
    }
]


export const dummyOutputMapping = {
    0: categories,
    1: selectedCategories,
    2: regions,
    3: selectedOrders,
  }