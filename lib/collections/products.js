Products = [
    {
        sku: "illudium-q36",
        name: 'Explosive Space Modulator',
        image: 'illudium-q36.jpg',
        summary: 'Need to destroy a planet ? The new improved Illudium',
        description: " <b>g </b>and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 5995,
        vendor: {
            id: 1,
            slug: 'martian-armaments',
            name: 'Martian Armaments 1 td'
        }
    },
    {
        sku: "Mars-Mobile",
        name: 'Mars Mobile',
        image: 'mars-mobile.jpg',
        summary: 'Need to destroy a planet ? The new improved Illudium',
        description: "g and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 5995,
        vendor: {
            id: 1,
            slug: 'martian-armaments',
            name: 'Martian Armaments 1 td'
        }
    },
    {
        sku: "jhony-LiftOff",
        name: 'Jhony Liftoff',
        image: 'johnny-liftoff.jpg',
        summary: 'Need to destroy a planet ? The new improved Illudium',
        description: "g and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 5995,
        vendor: {
            id: 1,
            slug: 'martian-armaments',
            name: 'Martian Armaments 1 td'
        }
    },
    {
        sku: "HoneyMoon-mars",
        name: 'HoneyMoon-Mars',
        image: 'honeymoon-mars.jpg',
        summary: 'Need to destroy a planet ? The new improved Illudium',
        description: "g and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 5995,
        vendor: {
            id: 1,
            slug: 'martian-armaments',
            name: 'Martian Armaments 1 td'
        }
    }
];

Products.featured = function () {
    var featuredSkus = ['illudium-q36', 'HoneyMoon-mars', 'jhony-LiftOff'];
    return _.filter(Products, function (product) {
        return featuredSkus.indexOf(product.sku) > -1;
    });

}

Products.findOne = function (args) {
    return _.find(Products, function (product) {
        if(product.sku === args.sku){
            return product;
        }
    });
}