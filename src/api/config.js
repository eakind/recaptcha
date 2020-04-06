const ENV = process.env.http_env;

// let apiAddr = 'http://132.232.50.184/blog';
// let apiAddr = 'http://localhost:3000';
let apiAddr = '/blog';

if (ENV === 'production') {
  apiAddr = '/blog';
}

export {
  apiAddr
};
