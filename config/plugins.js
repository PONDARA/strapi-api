module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  'strapi-plugin-sso': {
    enabled: true,
    // Local keycloak config
    config: {
      // Either sets token to session storage if false or local storage if true
      REMEMBER_ME: false,

      // OpenID Connect
      OIDC_REDIRECT_URI: 'http://localhost:1337/strapi-plugin-sso/oidc/callback', // URI after successful login
      OIDC_CLIENT_ID: 'space_stone_strapi',
      OIDC_CLIENT_SECRET: 'O7UnjYFVGgjDvNAiYUai9iiyT7Q6NG85',

      OIDC_SCOPES: 'openid profile roles', // https://oauth.net/2/scope/
      // API Endpoints required for OIDC
      OIDC_AUTHORIZATION_ENDPOINT: 'http://localhost:8080/realms/strapi/protocol/openid-connect/auth',
      OIDC_TOKEN_ENDPOINT: 'http://localhost:8080/realms/strapi/protocol/openid-connect/token',
      OIDC_USER_INFO_ENDPOINT: 'http://localhost:8080/realms/strapi/protocol/openid-connect/userinfo',
      OIDC_USER_INFO_ENDPOINT_WITH_AUTH_HEADER: true,
    }
  }
});
