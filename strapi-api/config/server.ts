export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // Clés d'application pour sécuriser les sessions
    keys: env.array('APP_KEYS', [
      '20689219461d6408ce6867c1ca6adf0a5eb1e0eed54ef1cad6b27bd22e3cf0ee',
    ]),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'defaultAdminSecret'),
    },
  },
});
