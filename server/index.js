import express from "express"
import path from 'path';
import { fileURLToPath } from "url";

const app = express()
const PORT = process.env.PORT || 9000
const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename);
app.use(express.static(path.resolve(__dirname, "../client/build")))


app.use(express.static(path.resolve()))

app.get("/", (req,res)=>{
    res.json({
        msg: "server is running !"
    })
})
app.get("/api", (req,res)=>{
    res.json({
        msg: "welcome api route"
    })
});

app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html" ))
})

app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${PORT}`);
})


