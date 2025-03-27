// utils/handlePropertiesEngine.js
const ENGINE_DB = process.env.ENGINE_DB;

const getProperties = () => {
  return {
    nosql: { id: "_id" },
    mysql: { id: "id" },
  }[ENGINE_DB];
};

module.exports = getProperties;
