/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Abhishek Suresh.
Licensed under the  Apache License 2.0;
you may not use this file except in compliance with the License.
Phoenix-MD - Abhishek Suresh 


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



const config = require('../../config');
const { DataTypes } = require('sequelize');

const PluginDB = config.DATABASE.define('Plugin', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

async function installPlugin(adres, file) {
    var Plugin = await PluginDB.findAll({
        where: {url: adres}
    });

    if (Plugin.length >= 1) {
        return false;
    } else {
        return await PluginDB.create({ url: adres, name: file });
    }
}

module.exports = { PluginDB ,installPlugin};

