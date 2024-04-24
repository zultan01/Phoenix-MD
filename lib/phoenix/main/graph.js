const fs = require('fs');
const axios = require("axios");
const FormData = require('form-data');
const { pnix, isPrivate } = require("../lib/");

const upload = async (fileName) => {
    try {
        if (!fs.existsSync(fileName)) throw new Error("File not found");

        const form = new FormData();
        form.append("file", fs.createReadStream(fileName));

        const { data } = await axios.post("https://graph.org/upload", form, {
            headers: form.getHeaders()
        });

        console.log("Response data:", data);

        if (Array.isArray(data) && data.length > 0 && data[0].src) {
            return "https://graph.org" + data[0].src;
        } else {
            throw new Error("Error uploading file or getting response data");
        }
    } catch (err) {
        console.error('Error uploading file or getting response data:', err);
        throw new Error(err.toString());
    }
};

module.exports = { upload };
