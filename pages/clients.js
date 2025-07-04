// import { useState, useEffect } from 'react';

// export default function ClientsPage() {
//   const [clients, setClients] = useState([]);
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     fetch('/api/clients')
//       .then(res => res.json())
//       .then(setClients);
//   }, []);

//   const addClient = async () => {
//     if (!email) return;
//     const res = await fetch('/api/clients', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email }),
//     });

//     if (!res.ok) {
//       const data = await res.json();
//       alert(`Error: ${data.error || 'Unknown'}`);
//       return;
//     }

//     setEmail('');
//     location.reload();
//   };


//   const deleteClient = async (email) => {
//     await fetch('/api/clients', {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email }),
//     });
//     location.reload();
//   };

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>Client List</h1>
//       <ul>
//         {clients.map(c => (
//           <li key={c.email}>
//             {c.email}
//             <button style={{ marginLeft: '1rem' }} onClick={() => deleteClient(c.email)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <input
//         type="email"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//         placeholder="Client email"
//       />
//       <button onClick={addClient}>Add Client</button>
//     </div>
//   );
// }
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ClientsPage() {
  const router = useRouter();
  const [clients, setClients] = useState([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch('/api/clients')
      .then(res => res.json())
      .then(setClients);
  }, []);

  const addClient = async () => {
    if (!email) return;
    await fetch('/api/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    setEmail('');
    location.reload();
  };

  const deleteClient = async (email) => {
    await fetch('/api/clients', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    location.reload();
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <button onClick={() => router.push('/send')} style={{ marginBottom: '20px' }}>
        Go to Send Email
      </button>

      <h1>Client List</h1>
      <ul>
        {clients.map(c => (
          <li key={c.email}>
            {c.email}
            <button onClick={() => deleteClient(c.email)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Client email"
      />
      <button onClick={addClient}>Add Client</button>
    </div>
  );
}
