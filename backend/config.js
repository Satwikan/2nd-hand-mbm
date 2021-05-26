const admin = { username: "satwikan_", password: "satwikan" };
module.exports = {
  secretKey: "Satwikan-Rocks",
  mongoUri: `mongodb+srv://${admin.username}:${admin.password}@cluster0.7dmsc.mongodb.net/dataFarm?retryWrites=true&w=majority`,
};
