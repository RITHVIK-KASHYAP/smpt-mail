import { useState, useEffect } from 'react';

export default function EmailPoolSelector({ onAddTo, onAddCc, onAddBcc }) {
  const [pool, setPool] = useState([]);
  const [search, setSearch] = useState('');
  const [newEmail, setNewEmail] = useState('');

  useEffect(() => {
    fetch('/api/emails')
      .then(res => res.json())
      .then(setPool);
  }, []);

  const addToPool = async () => {
    if (!newEmail) return;
    const res = await fetch('/api/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: newEmail })
    });
    const result = await res.json();
    if (!result.error) {
      setPool(prev => [...prev, { email: newEmail }]);
      setNewEmail('');
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
    const data = await res.json();
    alert(data.message || data.error);
  };

  const filtered = pool.filter(p => p.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Email Pool</h3>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search stored emails"
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <div style={{ marginBottom: '10px' }}>
        {filtered.map(({ email }) => (
          <div key={email} style={{ marginBottom: '5px' }}>
            <span>{email}</span>
            <button onClick={() => onAddTo(email)} style={{ marginLeft: '10px' }}>To</button>
            <button onClick={() => onAddCc(email)} style={{ marginLeft: '5px' }}>Cc</button>
            <button onClick={() => onAddBcc(email)} style={{ marginLeft: '5px' }}>Bcc</button>
            <button onClick={() => moveToClients(email)} style={{ marginLeft: '10px' }}>→ Clients</button>
          </div>
        ))}
      </div>

      <input
        type="email"
        value={newEmail}
        onChange={e => setNewEmail(e.target.value)}
        placeholder="Add new email"
        style={{ marginRight: '10px' }}
      />
      <button onClick={addToPool}>Add to Pool</button>
    </div>
  );
}
