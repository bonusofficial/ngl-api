const axios = require('axios');
const express = require('express');
const app = express();
const Ngl = require('./class/api');
const ngl = new Ngl();

app.use(express.json());

app.post('/api/ngl', (req,res) => {
    const { message } = req.body;
    if(message != '') {
        ngl.send("bon.usok",message);
        res.json({"messgae": "สำเร็จแล้วววว!"})
    } else {
        res.json({"message": "มีบางอย่างผิดอ้ายว่า!!"});
    }
})

app.listen(3000, () => {
    console.log('api NGL Online!');
})