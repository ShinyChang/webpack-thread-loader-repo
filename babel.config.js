module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV);

  const presets = ['@babel/env', '@babel/react'];
  return {
    presets
  };
};
