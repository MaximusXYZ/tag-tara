
setInterval(() => {
    const server = client.guilds.cache.get("server id"); 
    server.members.cache.forEach(async member => {
        if (member.roles.cache.has("special id") || member.roles.cache.has("booster id")) return; //vip ve boosterleri kayıtsıza atmasını istiyorsanız burayı silin

 if (member.user.username.includes("taginiz")) {
            await member.roles.add("taglı rol id").catch(() => {})
        }
        if (!member.user.username.includes("taginiz")) {
            await member.roles.set("kayıtsız rol id")
        }
    })
}, 60 * 1000)// 60 yazan yere kac dakikada bir tarama yapacagini yazin.
