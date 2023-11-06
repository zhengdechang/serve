module.exports = (app) => {
  const mongoose = require("mongoose");
  mongoose.set("useFindAndModify", false);
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};


//MONGODB_URL : mongodb+srv://user:password@cluster0.b9vurxx.mongodb.net/node-vue-moba?retryWrites=true&w=majority
