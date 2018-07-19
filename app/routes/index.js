const
    Router = require('koa-router'),
    {getGood, setGood, delGood} = require('../controllers/goodsController');

module.exports = function routes(app) {
    var router = new Router();

    router
        .get('/goods/:id', getGood)
        .post('/goods', setGood)
        .delete ('/goods/:id', delGood);

    app.use(router.routes());
    app.use(router.allowedMethods({
        throw: true,
        notImplemented: () => new Boom.notImplemented(),
        methodNotAllowed: () => new Boom.methodNotAllowed()
    }));
};