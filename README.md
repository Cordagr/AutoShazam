# Overview
Simple web application that continiously sends audio to identify songs through ACRCloud API (to add desktop audio in the near future, only external currently) In addition will try deploying as a fully deployed tool
- Automatic song recognition
- Simple Web interface
- Backend uses Node.js + Express

# Installation 
- Clone the repository
  gt clone https://github.com/yourusername/auto-shazamer.git
  cd auto-shazamer
- Install dependencies
  npm install
- Set up API keys
  ACR_ACCESS_KEY = your_acrcloud_access_secret
  ACR_HOST = https://identify-us-west-2.acrcloud.com/v1/identify
  - Run server
  node server.js

# Front end usage
1. Open index.html in browser
2. Click "Start Listening" to capture audio
3. App receives audio and relays to backend
4. Recognized song details will be displayed
