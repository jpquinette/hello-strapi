export default ({ env }: { env: (key: string, defaultValue?: string) => string | boolean }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'unSecretAdminFort') as string,
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'f1d2d2f924e986ac86fdf7b36c94bcdf') as string,
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'a1b2c3d4e5f6g7h8i9j0klmn') as string,
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY', '0123456789abcdef0123456789abcdef') as string,
  },
  flags: {
    nps: env('FLAG_NPS', 'true') === 'true',
    promoteEE: env('FLAG_PROMOTE_EE', 'true') === 'true',
  },
});
