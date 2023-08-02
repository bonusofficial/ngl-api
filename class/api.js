const axios = require('axios');
class Ngl {
    send(username, message) {
        const payload = {
            "username": username,
            "question": message,
            "deviceId": "4ff457ac-dfbb-46a6-a30c-b523877312e1",
            "gameSlug": "",
            "referrer": "",
        }
        const header = {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-AS,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6,en-GB;q=0.5",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Origin": "https://ngl.link",
            "Referer": `https://ngl.link/${username}`,
            "Sec-Ch-Ua": '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
            "Sec-Ch-Ua-Mobile": "?0",
            "Sec-Ch-Ua-Platform": "Windows",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
           " Sec-Fetch-Site": "same-origin",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
            "X-Requested-With": "XMLHttpRequest",
        }
        axios.post("https://ngl.link/api/submit", payload, header)
        .then(function(res) {
            if(res.status == 200) {
                console.log("Send Success")
            }
        })
        .catch(function(error) {
            throw error;
        })
    }
}
module.exports = Ngl;
