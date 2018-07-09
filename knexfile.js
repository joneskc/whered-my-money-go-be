module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///whered-my-money-go'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
