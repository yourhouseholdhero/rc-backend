const backendUrl = 'https://rc-backend-b307.onrender.com';

async function analyzeItem() {
  const title = document.getElementById('title').value;

  const res = await fetch(`${backendUrl}/api/analyze`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });

  const data = await res.json();
  document.getElementById('description').innerText = data.description;
  document.getElementById('value').innerText = data.value;
  document.getElementById('tags').innerText = data.tags.join(', ');
  document.getElementById('result').classList.remove('hidden');
}

async function generateQRCode() {
  const title = document.getElementById('title').value;

  const res = await fetch(`${backendUrl}/api/qrcode`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });

  const data = await res.json();
  const qrImage = document.getElementById('qrCodeImage');
  qrImage.src = data.url;
  qrImage.classList.remove('hidden');
}
