const LdapStrategy = require("passport-ldapauth");

module.exports = ({ env }) => ({
  url: 'admin/',
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    provider: [
      {
        uid: "google",
        displayName: "Ldap",
        icon: "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png",
        createStrategy: (strapi) => new LdapStrategy({
          server: {
            url: 'ldap.sabay.com:389',
            searchBase: "dc=sabay,dc=test",
            searchFilter: ""
          }
        }, (req, user, done) => {
          done(null, user)
        })
      }
    ]
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
