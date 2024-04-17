const { pnix } = require("../lib");
const got = require("got");
const fs = require("fs");
const { PluginDB, installPlugin } = require("../lib/database/plugins");


pnix(
  {
    pattern: "plugin",
    fromMe: true,
    desc: "Installs External plugins",
    type: "owner",
  },
  async (message, match) => {
    if (!match) return await message.reply("_Enter A Plugin Url_");

    try {
      var url = new URL(match);
    } catch (e) {
      console.log(e);
      return await message.reply("_Invalid Url_");
    }

    if (url.host === "gist.github.com") {
      url.host = "gist.githubusercontent.com";
      url = url.toString() + "/raw";
    } else {
      url = url.toString();
    }
    var plugin_name;
    var { body, statusCode } = await got(url);
    if (statusCode == 200) {
      var comand = body.match(/(?<=pattern:) ["'](.*?)["']/);
      plugin_name = comand[0].replace(/["']/g, "").trim().split(" ")[0];
      if (!plugin_name) {
        plugin_name = "__" + Math.random().toString(36).substring(8);
      }
      fs.writeFileSync(__dirname + "/" + plugin_name + ".js", body);
      try {
        require("./" + plugin_name);
      } catch (e) {
        fs.unlinkSync(__dirname + "/" + plugin_name + ".js");
        return await message.reply("Invalid Plugin\n ```" + e + "```");
      }

      await installPlugin(url, plugin_name);

      await message.reply(`_New Plugin Installed: ${plugin_name}_`);
    }
  }
);



pnix(
  { pattern: "listplugin", fromMe: true, desc: "plugin list", type: "owner" },
  async (message, match) => {
    var mesaj = "";
    var plugins = await PluginDB.findAll();
    if (plugins.length < 1) {
      return await message.reply("_No External Plugins Installed_");
    } else {
      plugins.map((plugin) => {
        mesaj +=
          "```" +
          plugin.dataValues.name +
          "```: " +
          plugin.dataValues.url +
          "\n";
      });
      return await message.reply(mesaj);
    }
  }
);



pnix(
  {
    pattern: "remove(?: |$)(.*)",
    fromMe: true,
    desc: "Remove external plugins",
    type: "user",
  },
  async (message, match) => {
    if (!match) return await message.reply("_Enter The Name Of The Plugin You Want To Remove_");

    var plugin = await PluginDB.findAll({ where: { name: match } });

    if (plugin.length < 1) {
      return await message.reply("_No Plugin Found_");
    } else {
      await plugin[0].destroy();
      delete require.cache[require.resolve("./" + match + ".js")];
      fs.unlinkSync(__dirname + "/" + match + ".js");
      await message.reply(`_Plugin *${match}* Deleted Successfully ✅_`);
    }
  }
);
