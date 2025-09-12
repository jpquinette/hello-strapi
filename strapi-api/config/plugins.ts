export default ({ env }) => ({
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET', 'u3b+8r4LkQf5Z2w9hJt6gA=='),
      },
    },
  });
  