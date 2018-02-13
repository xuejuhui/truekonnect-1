const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
    ? 'pk_test_byPrlZKXyoevtxbYU9rjQyrT'
    : 'pk_test_byPrlZKXyoevtxbYU9rjQyrT';

export default STRIPE_PUBLISHABLE;