module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b313d5f208b9e0104ec8a0e1f818eadf'),
  },
});
