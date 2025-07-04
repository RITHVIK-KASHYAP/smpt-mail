import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function EmailPoolPage() {
  const router = useRouter();
  const [emails, setEmails] = useState([]);
  const [search, setSearch] = useState('');
  const [newEmail, setNewEmail] = useState('');

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    const res = await fetch('/api/emails');
    const data = await res.json();
    setEmails(data || []);
  };

  const addEmail = async () => {
    if (!newEmail) return;
    const res = await fetch('/api/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: newEmail })
    });
    const result = await res.json();
    if (!result.error) {
      setNewEmail('');
      fetchEmails();
    } else {
      alert(result.error);
    }
  };

  const moveToClients = async (email) => {
    const res = await fetch('/api/emails', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    const result = await res.json();
    alert(result.message || result.error);
  };

  const filtered = emails.filter(e =>
    e.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <button onClick={() => router.push('/send')} style={{ marginBottom: '20px' }}>
        ← Back to Send
      </button>

      <h1>Email Pool</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search emails"
        style={{ width: '100%', marginBottom: '1rem' }}
      />

      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {filtered.map(({ email }) => (
          <li key={email} style={{ marginBottom: '10px' }}>
            {email}
            <button
              onClick={() => moveToClients(email)}
              style={{ marginLeft: '10px' }}
            >
              Move to Clients
            </button>
          </li>
        ))}
      </ul>

      <h3>Add New Email</h3>
      <input
        type="email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        placeholder="example@example.com"
        style={{ marginRight: '10px' }}
      />
      <button onClick={addEmail}>Add to Pool</button>
    </div>
  );
}
