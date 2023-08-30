module.exports = (app) => {
  const mongoose = require("mongoose");
  mongoose.set("useFindAndModify", false);
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
