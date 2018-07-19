const myDb = require('../managers/testDbManager');

async function getGood (ctx, next) {
    ctx.body = await myDb.getGood(ctx.params.id);
    if (ctx.status != 200){
        ctx.status = 404;
    }
    await next();
}

//curl -XPOST "http://localhost:8081/goods" -d 'Hello World!'
async function setGood (ctx, next) {
    ctx.body = await myDb.setGood(ctx.request.body);
    if (ctx.status == 200) {
        ctx.status = 201;
    }else{
        ctx.status = 400;
    }
    await next();
}

async function delGood (ctx, next) {
    ctx.body = await myDb.delGood(ctx.params.id);
    if (ctx.status == 200) {
        ctx.status = 204;
    }else{
        ctx.status = 400;
    }
    await next();
}

module.exports = {getGood, setGood, delGood};
