module.exports = app => {
    const mongoose = require("mongoose");
    mongoose.set('useFindAndModify', false);
    mongoose.connect("mongodb+srv://dechang:dechang@cluster0.b9vurxx.mongodb.net/node-vue-moba?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
