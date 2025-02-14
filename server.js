const express = require("express")
const multer= require("multer")
const axios = require("axios")
const fs = require("fs")
const FormData = require("form-data")
const crypto = require("crypto")
const app = express()
const upload = multer({dest:"uploads/})
const ACR_HOST = "https://idenity-us-west-2.acrcloud.com/v1/identify"; // Region based replace if diffent

function generateSignedSignature(secret, timestamp)
{
  return crypto.createHmax("sha1",secret).update(timestamp.toString()).digest("base64")
}

async function recognizeSong(filePath)
{
const form = new FormData()
form.append("sample", fs.createReadStream(filepath))
form.append("access_key",process.env.ACR_ACCESS_SECRET)
form.append("data_type","audio")
form.append(signature_version","1")

const timestamp = Math.floor(Data.now()/1000)
const signature = generateSignature(process.env.ACR_ACCESS_SECRET, timestamp)
form.append("signature",signature)
form.append("timestamp",timestamp)

try
{
  const response = await axios.post(ACR_HOST, form, {
  headers: form.getHeaders(),
})
  return response.data.metadata?.music[0] || null
} catch(error)
{
  console.error('ACRCloud Error:, error.reponse?.data || error.message)
  return null
}  
}

app.post("/recognize", upload.single("file"), async(req,res) =>
  {
    if(!req.file)
      return res.status(400).json({error: "No audio file uploaded"})
    const filePath = req.file.path
    const songData = await recognizeSong(filePath)
    fs.unlinkSync(filePath)
    // Json formatted payload
    if(songData)
    {
      res.json({title: songData.title, artist: songData.artists?.map(a => a.name).join(", "), album: songData.album?.name || "Unknown",
    })
  }
    else
    {
      res.status(500).json({error: "Song recognition failed"})
    }

    app.listen(3000, () => console.log("Server running on port 3000")


        
