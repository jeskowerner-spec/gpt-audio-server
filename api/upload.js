export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Nur POST erlaubt' });
  }

  try {
    const buffer = await req.arrayBuffer();

    const uploadRes = await fetch('https://tmpfiles.org/api/v1/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'audio/mpeg'
      },
      body: buffer
    });

    const result = await uploadRes.json();

    if (!uploadRes.ok || !result?.data?.url) {
      return res.status(500).json({ error: 'Upload fehlgeschlagen' });
    }

    res.status(200).json({ audioUrl: result.data.url });
  } catch (err) {
    res.status(500).json({ error: 'Serverfehler', details: err.message });
  }
}
