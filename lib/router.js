Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

/*home page routes*/
Router.route('/', {
    name: 'homeIndex',
    data: function () {
        return {
            message: ' Welcome to RocketShops'
        }
    }
});
Router.route('/about', {
    name: 'homeAbout'
});
Router.route('/contact', {
    name: 'homeContact'
});

/*product page routes*/
Router.route('/products/:sku', {
    name: 'productsShow',
    data: function () {
        return Products.findOne({sku:this.params.sku});
    }
});