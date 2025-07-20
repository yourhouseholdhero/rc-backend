const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/analyze', (req, res) => {
  res.json({ description: 'Vintage Wood Mirror', value: '85', tags: ['mirror', 'wood', 'vintage'] });
});

app.post('/api/qrcode', (req, res) => {
  res.json({ url: `https://rc-items.netlify.app/${encodeURIComponent(req.body.title)}` });
});

app.post('/api/sync', (req, res) => {
  console.log('Syncing to Sheets:', req.body);
  res.json({ success: true });
});

app.listen(3000, () => console.log('RC Backend running at http://localhost:3000'));
