const env = process.env;

// do not put password or any sensitive info here, done only for demo
const config = {
   PORT: env.PORT || 3306,
   db: {
       DB_USERNAME: env.USERNAME || 'root',
       DB_PASSWORD: env.PASSWORD || 'familia1',
       DB_HOST: env.HOST || '127.0.0.1',
       NAME: env.NAME || 'megic'
  },
   listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;