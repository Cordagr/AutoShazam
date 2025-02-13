const express = require("express")
const multer= require("multer")
const axios = require("axios")
const fs = require("fs")

const app = express()
const upload = multer({dest:"uploads/})

app.post("/recognize", upload.single("file"), async(req,res) =>
  {
    const filePath = req.file.path
  }

        
