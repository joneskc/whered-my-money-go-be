// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///whered-my-money-go'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
