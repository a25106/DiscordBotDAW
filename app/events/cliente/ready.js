module.exports = async client => {

      console.log(`Hey, ${client.user.username}`);

    client.user.setPresence({
        status: "online",
        activity: {
            name: `!help para más info`,
            type: "WATCHING"
        }
    });
}