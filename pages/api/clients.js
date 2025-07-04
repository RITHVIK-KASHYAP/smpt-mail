import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  const email = req.body?.email;

  if (req.method === 'GET') {
    const { data, error } = await supabase.from('clients').select('email');
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    if (!email) return res.status(400).json({ error: 'Email required' });
    const { error } = await supabase.from('clients').insert({ email });
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ message: 'Client added' });
  }

  if (req.method === 'DELETE') {
    if (!email) return res.status(400).json({ error: 'Email required' });
    const { error } = await supabase.from('clients').delete().eq('email', email);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ message: 'Client deleted' });
  }

  res.status(405).end();
}
