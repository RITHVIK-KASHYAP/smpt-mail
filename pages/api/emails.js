import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  const { email } = req.body || {};

  if (req.method === 'GET') {
    const { data, error } = await supabase.from('emails').select('email');
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    if (!email) return res.status(400).json({ error: 'Email is required' });

    const { error } = await supabase.from('emails').insert({ email });
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ message: 'Email added to pool' });
  }

  if (req.method === 'PUT') {
    if (!email) return res.status(400).json({ error: 'Email is required' });

    const { error } = await supabase.from('clients').insert({ email });
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ message: 'Email moved to clients' });
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
