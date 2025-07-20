const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ RC Backend Running!');
});

app.post('/api/analyze', (req, res) => {
  res.json({
    description: 'Vintage wood mirror',
    value: 85,
    tags: ['mirror', 'wood', 'vintage'],
  });
});

app.post('/api/qrcode', (req, res) => {
  const { title } = req.body;
  res.json({
    url: `https://rc-items.netlify.app/${encodeURIComponent(title)}`,
  });
});

app.post('/api/sync', (req, res) => {
  console.log('Syncing to Sheets:', req.body);
  res.json({ success: true });
});

// ✅ Works on Render & locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ RC Backend running at http://localhost:${PORT}`);
});
