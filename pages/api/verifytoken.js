require("dotenv").config();
const qs = require("qs")
const axios = require("axios");

export default async (req,res) => {

var client_id = process.env.NEXT_PUBLIC_CLIENT_ID
var client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

const data = { grant_type: "client_credentials" };
const options = {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(client_id + ":" + client_secret).toString("base64"),
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
      url: "https://accounts.spotify.com/api/token",
    };
    const response = await axios(options);
    const { access_token } = response.data;
    res.status(200).json({access_token})
    console.log(access_token);

}