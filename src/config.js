module.exports = {
    token: process.env.TOKEN || "",  // your bot token
    prefix: process.env.PREFIX || "!", // bot prefix
    ownerID: process.env.OWNERID || "340479704962301952", //your discord id
    SpotifyID: process.env.SPOTIFYID || "", // spotify client id
    SpotifySecret: process.env.SPOTIFYSECRET || "", // spotify client secret
    mongourl: process.env.MONGO_URI || "", // MongoDb URL
    embedColor: process.env.COlOR || "#303236", // embed colour
    logs: process.env.LOGS || "", // channel id for guild create and delete logs 

  nodes: {
     
      host: "linklava.cjstevenson.com",
      port: 25600,
      password: "lookbehindyou",
      //id: "Sakura",
      retryDelay: 30000,
      //secure: true
    
    },
 
}
