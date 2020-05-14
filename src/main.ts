import * as Koa from 'koa';
import * as koaLogger  from 'koa-logger';
import * as koaStatic from 'koa-static';
import * as koaMount from 'koa-mount';
import * as koaRoute from 'koa-route';

const app = new Koa();
app.use(koaLogger());

const webKoa = new Koa();
webKoa.use(koaStatic('public'));

const apiKoa = new Koa();
apiKoa.use(koaRoute.post('/pets/:a/:b', (ctx, b, a) => {
    ctx.body = a + b;
}));

app.use(koaMount('/web', webKoa));
app.use(koaMount('/api', apiKoa));

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);