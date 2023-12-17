module.exports = {
  apps: [
    // First application
    {
      name: "ecoshop", // name of the process in PM2
      script: "build/index.js",
      env_production: {
        NODE_ENV: "production",
        PORT: 5173, // port the app will be lauy_restart: '1G',
      },
    },
  ],
};
