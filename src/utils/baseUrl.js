const ENV = {
  dev: {
    API_URL: "http://18.219.100.144:80/api/",
    env: "dev",
  },
};

function getEnvVars(env = "") {
  if (env === null || env === undefined || env === "") {
    return ENV.dev;
  }
  if (env.indexOf("dev") !== -1) {
    return ENV.dev;
  }
}

export default getEnvVars("dev");
