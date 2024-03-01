module.exports = (_config, { strapi }) => {
    const redirects = ['/admin'].map((path) => ({
        method: 'GET',
        path,
        handler: (ctx) => ctx.redirect('/strapi-plugin-sso/oidc'),
        config: { auth: false },
    }));

    strapi.server.routes(redirects);
};

// module.exports = (_config, { strapi }) => {
//     return async (ctx, next) => {
//         console.log(ctx.req)
//         if (ctx.path === '/' || ctx.path === '/admin/auth/login' || ctx.path === '/admin') {
//             ctx.redirect(strapi.config.get('server.admin.url', '/strapi-plugin-sso/oidc'));
//             return
//         }
//         await next()
//     };
// };