export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'unSecretAdminFort'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'f1d2d2f924e986ac86fdf7b36c94bcdf'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'a1b2c3d4e5f6g7h8i9j0klmn'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY', '0123456789abcdef0123456789abcdef'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
