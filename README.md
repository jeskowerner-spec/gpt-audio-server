gpt-audio-upload/
├── api/
│   └── upload.js   ← der oben gezeigte Code
├── vercel.json     ← Konfigurationsdatei für Vercel
├── README.md       ← (optional)
{
  "version": 2,
  "builds": [
    { "src": "api/upload.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/api/upload", "dest": "api/upload.js" }
  ]
}
