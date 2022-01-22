const {Client} = require("discord.js")
const mongoose = require("mongoose");
const { type } = require("os");
const {DataBase} = require("../../config.json");

module.exports = {
    name: "ready",
    once:  true,
    /**
     *  @param {Client} client 
     */
    execute(client) {
        console.log("The client is now ready!")
        client.user.setActivity("Hello!", {type: "WATCHING"});

        if(!DataBase) return;
        mongoose.connect(DataBase, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("The client is now connected to database!")
        }).catch((err) => {
            console.log(err)
        })

    }
}