// import { useState, useEffect } from 'react';

// export default function SendMailPage() {
//   const [clients, setClients] = useState([]);
//   const [selected, setSelected] = useState([]);
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');
//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     fetch('/api/clients')
//       .then(res => res.json())
//       .then(setClients);
//   }, []);

//   const toggle = (email) => {
//     setSelected(prev =>
//       prev.includes(email)
//         ? prev.filter(e => e !== email)
//         : [...prev, email]
//     );
//   };

//   const sendMail = async () => {
//     if (!subject || !body || selected.length === 0) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append('subject', subject);
//     formData.append('body', body);
//     formData.append('recipients', JSON.stringify(selected));
//     if (file) formData.append('file', file);

//     const res = await fetch('/api/sendMail', {
//       method: 'POST',
//       body: formData
//     });

//     const data = await res.json();
//     alert(data.message || data.error);
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <h1>Send Email to Selected Clients</h1>

//       <label><b>Subject:</b></label>
//       <input value={subject} onChange={e => setSubject(e.target.value)} style={{ width: '100%' }} />

//       <label><b>Body:</b></label>
//       <textarea value={body} onChange={e => setBody(e.target.value)} style={{ width: '100%', height: '100px' }} />

//       <label><b>Attachment:</b></label>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />

//       <h3>Select Recipients:</h3>
//       <ul>
//         {clients.map(c => (
//           <li key={c.email}>
//             <label>
//               <input type="checkbox" checked={selected.includes(c.email)} onChange={() => toggle(c.email)} />
//               {c.email}
//             </label>
//           </li>
//         ))}
//       </ul>

//       <button onClick={sendMail} style={{ marginTop: '1rem' }}>
//         Send Email
//       </button>
//     </div>
//   );
// }
// import { useState, useEffect } from 'react';

// export default function SendMailPage() {
//   const [clients, setClients] = useState([]);
//   const [toList, setToList] = useState([]);
//   const [ccList, setCcList] = useState([]);
//   const [bccList, setBccList] = useState([]);
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');
//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     fetch('/api/clients')
//       .then(res => res.json())
//       .then(setClients);
//   }, []);

//   const toggleEmail = (email, listSetter, listState) => {
//     listSetter(
//       listState.includes(email)
//         ? listState.filter(e => e !== email)
//         : [...listState, email]
//     );
//   };

//   const sendMail = async () => {
//     if (!subject || !body || toList.length === 0) {
//       alert("Please provide Subject, Body, and select at least one 'To' recipient.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append('subject', subject);
//     formData.append('body', body);
//     formData.append('recipients', JSON.stringify(toList));
//     formData.append('cc', JSON.stringify(ccList));
//     formData.append('bcc', JSON.stringify(bccList));
//     if (file) formData.append('file', file);

//     const res = await fetch('/api/sendMail', {
//       method: 'POST',
//       body: formData
//     });

//     const data = await res.json();
//     alert(data.message || data.error);
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <h1>Send Email</h1>

//       <label><b>Subject:</b></label>
//       <input value={subject} onChange={e => setSubject(e.target.value)} style={{ width: '100%' }} />

//       <label><b>Body:</b></label>
//       <textarea value={body} onChange={e => setBody(e.target.value)} style={{ width: '100%', height: '100px' }} />

//       <label><b>Attachment:</b></label>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />

//       <h3>To:</h3>
//       <ul>
//         {clients.map(c => (
//           <li key={`to-${c.email}`}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={toList.includes(c.email)}
//                 onChange={() => toggleEmail(c.email, setToList, toList)}
//               />
//               {c.email}
//             </label>
//           </li>
//         ))}
//       </ul>

//       <h3>Cc:</h3>
//       <ul>
//         {clients.map(c => (
//           <li key={`cc-${c.email}`}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={ccList.includes(c.email)}
//                 onChange={() => toggleEmail(c.email, setCcList, ccList)}
//               />
//               {c.email}
//             </label>
//           </li>
//         ))}
//       </ul>

//       <h3>Bcc:</h3>
//       <ul>
//         {clients.map(c => (
//           <li key={`bcc-${c.email}`}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={bccList.includes(c.email)}
//                 onChange={() => toggleEmail(c.email, setBccList, bccList)}
//               />
//               {c.email}
//             </label>
//           </li>
//         ))}
//       </ul>

//       <button onClick={sendMail} style={{ marginTop: '1rem' }}>
//         Send Email
//       </button>
//     </div>
//   );
// }

// import { useState, useEffect } from 'react';

// export default function SendMailPage() {
//   const [clients, setClients] = useState([]);
//   const [toList, setToList] = useState([]);
//   const [ccList, setCcList] = useState([]);
//   const [bccList, setBccList] = useState([]);
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');
//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     fetch('/api/clients')
//       .then(res => res.json())
//       .then(setClients);
//   }, []);

//   const toggleEmail = (email, listSetter, listState) => {
//     listSetter(
//       listState.includes(email)
//         ? listState.filter(e => e !== email)
//         : [...listState, email]
//     );
//   };

//   const sendMail = async () => {
//     if (toList.length === 0) {
//       alert("Please select at least one 'To' recipient.");
//       return;
//     }

//     if (!body && !file) {
//       alert("Please provide either a message body or an attachment.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append('recipients', JSON.stringify(toList));
//     formData.append('cc', JSON.stringify(ccList));
//     formData.append('bcc', JSON.stringify(bccList));
//     formData.append('subject', subject || '');
//     formData.append('body', body || '');
//     if (file) formData.append('file', file);

//     const res = await fetch('/api/sendMail', {
//       method: 'POST',
//       body: formData
//     });

//     const data = await res.json();
//     alert(data.message || data.error);
//   };

//   const EmailCheckboxList = ({ label, list, listSetter, listState }) => (
//     <>
//       <h3>{label}:</h3>
//       <ul style={{ columns: 2, listStyle: 'none', padding: 0 }}>
//         {clients.map(c => (
//           <li key={`${label}-${c.email}`}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={listState.includes(c.email)}
//                 onChange={() => toggleEmail(c.email, listSetter, listState)}
//               />
//               {c.email}
//             </label>
//           </li>
//         ))}
//       </ul>
//     </>
//   );

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <h1>Send Email</h1>

//       <label><b>Subject:</b></label>
//       <input
//         type="text"
//         value={subject}
//         onChange={e => setSubject(e.target.value)}
//         style={{ width: '100%', marginBottom: '10px' }}
//       />

//       <label><b>Body:</b></label>
//       <textarea
//         value={body}
//         onChange={e => setBody(e.target.value)}
//         style={{ width: '100%', height: '100px', marginBottom: '10px' }}
//       />

//       <label><b>Attachment:</b></label>
//       <input
//         type="file"
//         onChange={(e) => setFile(e.target.files[0])}
//         style={{ marginBottom: '20px' }}
//       />

//       <EmailCheckboxList label="To" listSetter={setToList} listState={toList} />
//       <EmailCheckboxList label="Cc" listSetter={setCcList} listState={ccList} />
//       <EmailCheckboxList label="Bcc" listSetter={setBccList} listState={bccList} />

//       <button onClick={sendMail} style={{ marginTop: '20px' }}>
//         Send Email
//       </button>
//     </div>
//   );
// }
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// export default function SendMailPage() {
//   const router = useRouter();
//   const [clients, setClients] = useState([]);
//   const [toList, setToList] = useState([]);
//   const [ccList, setCcList] = useState([]);
//   const [bccList, setBccList] = useState([]);
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');
//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     fetch('/api/clients')
//       .then(res => res.json())
//       .then(setClients);
//   }, []);

//   const toggleEmail = (email, listSetter, listState) => {
//     listSetter(
//       listState.includes(email)
//         ? listState.filter(e => e !== email)
//         : [...listState, email]
//     );
//   };

//   const sendMail = async () => {
//     if (toList.length === 0) {
//       alert("Please select at least one 'To' recipient.");
//       return;
//     }

//     if (!body && !file) {
//       alert("Please provide either a message body or an attachment.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append('recipients', JSON.stringify(toList));
//     formData.append('cc', JSON.stringify(ccList));
//     formData.append('bcc', JSON.stringify(bccList));
//     formData.append('subject', subject || '');
//     formData.append('body', body || '');
//     if (file) formData.append('file', file);

//     const res = await fetch('/api/sendMail', {
//       method: 'POST',
//       body: formData
//     });

//     const data = await res.json();
//     alert(data.message || data.error);
//   };

//   const EmailCheckboxList = ({ label, list, listSetter, listState }) => (
//     <>
//       <h3>{label}:</h3>
//       <ul style={{ columns: 2, listStyle: 'none', padding: 0 }}>
//         {clients.map(c => (
//           <li key={`${label}-${c.email}`}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={listState.includes(c.email)}
//                 onChange={() => toggleEmail(c.email, listSetter, listState)}
//               />
//               {c.email}
//             </label>
//           </li>
//         ))}
//       </ul>
//     </>
//   );

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <button onClick={() => router.push('/clients')} style={{ marginBottom: '20px' }}>
//         Manage Clients
//       </button>

//       <h1>Send Email</h1>

//       <label><b>Subject:</b></label>
//       <input type="text" value={subject} onChange={e => setSubject(e.target.value)} style={{ width: '100%' }} />

//       <label><b>Body:</b></label>
//       <textarea value={body} onChange={e => setBody(e.target.value)} style={{ width: '100%', height: '100px' }} />

//       <label><b>Attachment:</b></label>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />

//       <EmailCheckboxList label="To" listSetter={setToList} listState={toList} />
//       <EmailCheckboxList label="Cc" listSetter={setCcList} listState={ccList} />
//       <EmailCheckboxList label="Bcc" listSetter={setBccList} listState={bccList} />

//       <button onClick={sendMail} style={{ marginTop: '20px' }}>
//         Send Email
//       </button>
//     </div>
//   );
// }

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// export default function SendMailPage() {
//   const router = useRouter();
//   const [clients, setClients] = useState([]);
//   const [recipients, setRecipients] = useState([]);
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');
//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     fetch('/api/clients')
//       .then(res => res.json())
//       .then(data => {
//         setClients(data);
//         setRecipients([]);
//       });
//   }, []);

//   const toggleTo = (email) => {
//     setRecipients(prev =>
//       prev.some(r => r.to === email)
//         ? prev.filter(r => r.to !== email)
//         : [...prev, { to: email, cc: [], bcc: [] }]
//     );
//   };

//   const toggleCC = (toEmail, ccEmail) => {
//     setRecipients(prev => prev.map(r => {
//       if (r.to !== toEmail) return r;
//       return {
//         ...r,
//         cc: r.cc.includes(ccEmail)
//           ? r.cc.filter(e => e !== ccEmail)
//           : [...r.cc, ccEmail]
//       };
//     }));
//   };

//   const toggleBCC = (toEmail, bccEmail) => {
//     setRecipients(prev => prev.map(r => {
//       if (r.to !== toEmail) return r;
//       return {
//         ...r,
//         bcc: r.bcc.includes(bccEmail)
//           ? r.bcc.filter(e => e !== bccEmail)
//           : [...r.bcc, bccEmail]
//       };
//     }));
//   };

//   const sendMail = async () => {
//     if (recipients.length === 0) return alert("Select at least one 'To' recipient.");
//     if (!body && !file) return alert("Provide either body or attachment.");

//     const formData = new FormData();
//     formData.append('subject', subject || '');
//     formData.append('body', body || '');
//     formData.append('recipients', JSON.stringify(recipients));
//     if (file) formData.append('file', file);

//     const res = await fetch('/api/sendMail', {
//       method: 'POST',
//       body: formData,
//     });

//     const data = await res.json();
//     alert(data.message || data.error);
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <button onClick={() => router.push('/clients')} style={{ marginBottom: '20px' }}>
//         Manage Clients
//       </button>

//       <h1>Send Email</h1>

//       <label><b>Subject:</b></label>
//       <input value={subject} onChange={e => setSubject(e.target.value)} style={{ width: '100%' }} />

//       <label><b>Body:</b></label>
//       <textarea value={body} onChange={e => setBody(e.target.value)} style={{ width: '100%', height: '100px' }} />

//       <label><b>Attachment:</b></label>
//       <input type="file" onChange={e => setFile(e.target.files[0])} />

//       <h3>To:</h3>
//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {clients.map(c => (
//           <li key={c.email}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={recipients.some(r => r.to === c.email)}
//                 onChange={() => toggleTo(c.email)}
//               /> {c.email}
//             </label>
//             {recipients.find(r => r.to === c.email) && (
//               <>
//                 <div style={{ marginLeft: '20px' }}>
//                   <b>CC:</b>
//                   {clients.map(cc => (
//                     <label key={`cc-${c.email}-${cc.email}`} style={{ marginLeft: '10px' }}>
//                       <input
//                         type="checkbox"
//                         checked={recipients.find(r => r.to === c.email)?.cc.includes(cc.email)}
//                         onChange={() => toggleCC(c.email, cc.email)}
//                       /> {cc.email}
//                     </label>
//                   ))}
//                 </div>
//                 <div style={{ marginLeft: '20px' }}>
//                   <b>BCC:</b>
//                   {clients.map(bcc => (
//                     <label key={`bcc-${c.email}-${bcc.email}`} style={{ marginLeft: '10px' }}>
//                       <input
//                         type="checkbox"
//                         checked={recipients.find(r => r.to === c.email)?.bcc.includes(bcc.email)}
//                         onChange={() => toggleBCC(c.email, bcc.email)}
//                       /> {bcc.email}
//                     </label>
//                   ))}
//                 </div>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>

//       <button onClick={sendMail} style={{ marginTop: '20px' }}>
//         Send Email
//       </button>
//     </div>
//   );
// }
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// export default function SendMailPage() {
//   const router = useRouter();
//   const [clients, setClients] = useState([]);
//   const [recipients, setRecipients] = useState([]);
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');
//   const [files, setFiles] = useState([]);

//   useEffect(() => {
//     fetch('/api/clients')
//       .then(res => res.json())
//       .then(setClients);
//   }, []);

//   const toggleTo = (email) => {
//     setRecipients(prev =>
//       prev.some(r => r.to === email)
//         ? prev.filter(r => r.to !== email)
//         : [...prev, { to: email, cc: [], bcc: [] }]
//     );
//   };

//   const toggleCC = (toEmail, ccEmail) => {
//     setRecipients(prev => prev.map(r => {
//       if (r.to !== toEmail) return r;
//       return {
//         ...r,
//         cc: r.cc.includes(ccEmail)
//           ? r.cc.filter(e => e !== ccEmail)
//           : [...r.cc, ccEmail]
//       };
//     }));
//   };

//   const toggleBCC = (toEmail, bccEmail) => {
//     setRecipients(prev => prev.map(r => {
//       if (r.to !== toEmail) return r;
//       return {
//         ...r,
//         bcc: r.bcc.includes(bccEmail)
//           ? r.bcc.filter(e => e !== bccEmail)
//           : [...r.bcc, bccEmail]
//       };
//     }));
//   };

//   const sendMail = async () => {
//     if (recipients.length === 0) return alert("Select at least one 'To' recipient.");
//     if (!body && files.length === 0) return alert("Provide either a message body or attachments.");

//     const formData = new FormData();
//     formData.append('subject', subject || '');
//     formData.append('body', body || '');
//     formData.append('recipients', JSON.stringify(recipients));
//     files.forEach(f => formData.append('file', f));

//     const res = await fetch('/api/sendMail', {
//       method: 'POST',
//       body: formData,
//     });

//     const data = await res.json();
//     alert(data.message || data.error);
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <button onClick={() => router.push('/clients')} style={{ marginBottom: '20px' }}>
//         Manage Clients
//       </button>

//       <h1>Send Email</h1>

//       <label><b>Subject:</b></label>
//       <input value={subject} onChange={e => setSubject(e.target.value)} style={{ width: '100%' }} />

//       <label><b>Body:</b></label>
//       <textarea value={body} onChange={e => setBody(e.target.value)} style={{ width: '100%', height: '100px' }} />

//       <label><b>Attachments:</b></label>
//       <input type="file" multiple onChange={(e) => setFiles([...e.target.files])} />

//       <h3>To:</h3>
//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {clients.map(c => (
//           <li key={c.email}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={recipients.some(r => r.to === c.email)}
//                 onChange={() => toggleTo(c.email)}
//               /> {c.email}
//             </label>
//             {recipients.find(r => r.to === c.email) && (
//               <>
//                 <div style={{ marginLeft: '20px' }}>
//                   <b>CC:</b>
//                   {clients.map(cc => (
//                     <label key={`cc-${c.email}-${cc.email}`} style={{ marginLeft: '10px' }}>
//                       <input
//                         type="checkbox"
//                         checked={recipients.find(r => r.to === c.email)?.cc.includes(cc.email)}
//                         onChange={() => toggleCC(c.email, cc.email)}
//                       /> {cc.email}
//                     </label>
//                   ))}
//                 </div>
//                 <div style={{ marginLeft: '20px' }}>
//                   <b>BCC:</b>
//                   {clients.map(bcc => (
//                     <label key={`bcc-${c.email}-${bcc.email}`} style={{ marginLeft: '10px' }}>
//                       <input
//                         type="checkbox"
//                         checked={recipients.find(r => r.to === c.email)?.bcc.includes(bcc.email)}
//                         onChange={() => toggleBCC(c.email, bcc.email)}
//                       /> {bcc.email}
//                     </label>
//                   ))}
//                 </div>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>

//       <button onClick={sendMail} style={{ marginTop: '20px' }}>
//         Send Email
//       </button>
//     </div>
//   );
// }

// import { useState, useEffect, useRef } from 'react';
// import { useRouter } from 'next/router';

// export default function SendMailPage() {
//   const router = useRouter();
//   const [clients, setClients] = useState([]);
//   const [recipients, setRecipients] = useState([]);
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');
//   const [files, setFiles] = useState([]);
//   const [search, setSearch] = useState('');
//   const [showAllCc, setShowAllCc] = useState(false);
//   const [showAllBcc, setShowAllBcc] = useState(false);
//   const sectionRefs = useRef({});

//   useEffect(() => {
//     fetch('/api/clients')
//       .then(res => res.json())
//       .then(setClients);
//   }, []);

//   const groupClients = () => {
//     const filtered = clients.filter(c =>
//       c.email.toLowerCase().includes(search.toLowerCase())
//     );
//     const grouped = {};
//     filtered.forEach(client => {
//       const letter = client.email[0].toUpperCase();
//       if (!grouped[letter]) grouped[letter] = [];
//       grouped[letter].push(client);
//     });
//     return grouped;
//   };

//   const groupedClients = groupClients();

//   const scrollTo = (letter) => {
//     if (sectionRefs.current[letter]) {
//       sectionRefs.current[letter].scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const toggleTo = (email) => {
//     setRecipients(prev =>
//       prev.some(r => r.to === email)
//         ? prev.filter(r => r.to !== email)
//         : [...prev, { to: email, cc: [], bcc: [] }]
//     );
//   };

//   const toggleCC = (toEmail, ccEmail) => {
//     setRecipients(prev => prev.map(r => {
//       if (r.to !== toEmail) return r;
//       return {
//         ...r,
//         cc: r.cc.includes(ccEmail)
//           ? r.cc.filter(e => e !== ccEmail)
//           : [...r.cc, ccEmail]
//       };
//     }));
//   };

//   const toggleBCC = (toEmail, bccEmail) => {
//     setRecipients(prev => prev.map(r => {
//       if (r.to !== toEmail) return r;
//       return {
//         ...r,
//         bcc: r.bcc.includes(bccEmail)
//           ? r.bcc.filter(e => e !== bccEmail)
//           : [...r.bcc, bccEmail]
//       };
//     }));
//   };

//   const getDomain = email => email.split('@')[1];

//   const sendMail = async () => {
//     if (recipients.length === 0) return alert("Select at least one 'To' recipient.");
//     if (!body && files.length === 0) return alert("Provide either a message body or attachments.");

//     const formData = new FormData();
//     formData.append('subject', subject || '');
//     formData.append('body', body || '');
//     formData.append('recipients', JSON.stringify(recipients));
//     files.forEach(f => formData.append('file', f));

//     const res = await fetch('/api/sendMail', {
//       method: 'POST',
//       body: formData,
//     });

//     const data = await res.json();
//     alert(data.message || data.error);
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif', position: 'relative' }}>
//       <button onClick={() => router.push('/clients')} style={{ marginBottom: '20px' }}>
//         Manage Clients
//       </button>

//       <h1>Send Email</h1>

//       <input
//         placeholder="Search clients..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ width: '100%', marginBottom: '15px' }}
//       />

//       <label><b>Subject:</b></label>
//       <input value={subject} onChange={e => setSubject(e.target.value)} style={{ width: '100%' }} />

//       <label><b>Body:</b></label>
//       <textarea value={body} onChange={e => setBody(e.target.value)} style={{ width: '100%', height: '100px' }} />

//       <label><b>Attachments:</b></label>
//       <input type="file" multiple onChange={(e) => setFiles([...e.target.files])} />

//       <h3>To:</h3>
//       {Object.keys(groupedClients).sort().map(letter => (
//         <div key={letter} ref={el => sectionRefs.current[letter] = el}>
//           <h4>{letter}</h4>
//           <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
//             {groupedClients[letter].map(client => (
//               <li key={client.email}>
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={recipients.some(r => r.to === client.email)}
//                     onChange={() => toggleTo(client.email)}
//                   /> {client.email}
//                 </label>
//                 {recipients.find(r => r.to === client.email) && (
//                   <>
//                     <div style={{ marginLeft: '20px' }}>
//                       <b>CC:</b>
//                       {(showAllCc ? clients : clients.filter(c => getDomain(c.email) === getDomain(client.email)))
//                         .map(cc => (
//                           <label key={`cc-${client.email}-${cc.email}`} style={{ marginLeft: '10px' }}>
//                             <input
//                               type="checkbox"
//                               checked={recipients.find(r => r.to === client.email)?.cc.includes(cc.email)}
//                               onChange={() => toggleCC(client.email, cc.email)}
//                             /> {cc.email}
//                           </label>
//                         ))}
//                       {!showAllCc && (
//                         <button onClick={() => setShowAllCc(true)} style={{ marginLeft: 10 }}>
//                           Show All
//                         </button>
//                       )}
//                     </div>
//                     <div style={{ marginLeft: '20px' }}>
//                       <b>BCC:</b>
//                       {(showAllBcc ? clients : clients.filter(c => getDomain(c.email) === getDomain(client.email)))
//                         .map(bcc => (
//                           <label key={`bcc-${client.email}-${bcc.email}`} style={{ marginLeft: '10px' }}>
//                             <input
//                               type="checkbox"
//                               checked={recipients.find(r => r.to === client.email)?.bcc.includes(bcc.email)}
//                               onChange={() => toggleBCC(client.email, bcc.email)}
//                             /> {bcc.email}
//                           </label>
//                         ))}
//                       {!showAllBcc && (
//                         <button onClick={() => setShowAllBcc(true)} style={{ marginLeft: 10 }}>
//                           Show All
//                         </button>
//                       )}
//                     </div>
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}

//       <div style={{
//         position: 'fixed', right: '10px', top: '120px',
//         display: 'flex', flexDirection: 'column', fontSize: '14px'
//       }}>
//         {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l => (
//           <button key={l} onClick={() => scrollTo(l)}>{l}</button>
//         ))}
//       </div>

//       <button onClick={sendMail} style={{ marginTop: '30px' }}>
//         Send Email
//       </button>
//     </div>
//   );
// }
// import { useState, useEffect, useRef } from 'react';
// import { useRouter } from 'next/router';
// import EmailPoolSelector from './EmailPoolSelector'; // ← adjust path if needed

// export default function SendMailPage() {
//   const router = useRouter();
//   const [clients, setClients] = useState([]);
//   const [recipients, setRecipients] = useState([]);
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');
//   const [files, setFiles] = useState([]);
//   const [search, setSearch] = useState('');
//   const sectionRefs = useRef({});

//   const [showAllCc, setShowAllCc] = useState({});
//   const [showAllBcc, setShowAllBcc] = useState({});

//   useEffect(() => {
//     fetch('/api/clients')
//       .then(res => res.json())
//       .then(setClients);
//   }, []);

//   const groupClients = () => {
//     const filtered = clients.filter(c =>
//       c.email.toLowerCase().includes(search.toLowerCase())
//     );
//     const grouped = {};
//     filtered.forEach(client => {
//       const letter = client.email[0].toUpperCase();
//       if (!grouped[letter]) grouped[letter] = [];
//       grouped[letter].push(client);
//     });
//     return grouped;
//   };

//   const groupedClients = groupClients();

//   const scrollTo = (letter) => {
//     if (sectionRefs.current[letter]) {
//       sectionRefs.current[letter].scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const toggleTo = (email) => {
//     setRecipients(prev =>
//       prev.some(r => r.to === email)
//         ? prev.filter(r => r.to !== email)
//         : [...prev, { to: email, cc: [], bcc: [] }]
//     );
//   };

//   const toggleCC = (toEmail, ccEmail) => {
//     setRecipients(prev => prev.map(r => {
//       if (r.to !== toEmail) return r;
//       return {
//         ...r,
//         cc: r.cc.includes(ccEmail)
//           ? r.cc.filter(e => e !== ccEmail)
//           : [...r.cc, ccEmail]
//       };
//     }));
//   };

//   const toggleBCC = (toEmail, bccEmail) => {
//     setRecipients(prev => prev.map(r => {
//       if (r.to !== toEmail) return r;
//       return {
//         ...r,
//         bcc: r.bcc.includes(bccEmail)
//           ? r.bcc.filter(e => e !== bccEmail)
//           : [...r.bcc, bccEmail]
//       };
//     }));
//   };

//   const getDomain = email => email.split('@')[1];

//   const sendMail = async () => {
//     if (recipients.length === 0) return alert("Select at least one 'To' recipient.");
//     if (!body && files.length === 0) return alert("Provide either a message body or attachments.");

//     const formData = new FormData();
//     formData.append('subject', subject || '');
//     formData.append('body', body || '');
//     formData.append('recipients', JSON.stringify(recipients));
//     files.forEach(f => formData.append('file', f));

//     const res = await fetch('/api/sendMail', {
//       method: 'POST',
//       body: formData,
//     });

//     const data = await res.json();
//     alert(data.message || data.error);
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif', position: 'relative' }}>
//       <button onClick={() => router.push('/clients')} style={{ marginBottom: '20px' }}>
//         Manage Clients
//       </button>

//       <h1>Send Email</h1>

//       <input
//         placeholder="Search clients..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ width: '100%', marginBottom: '15px' }}
//       />

//       <label><b>Subject:</b></label>
//       <input value={subject} onChange={e => setSubject(e.target.value)} style={{ width: '100%' }} />

//       <label><b>Body:</b></label>
//       <textarea value={body} onChange={e => setBody(e.target.value)} style={{ width: '100%', height: '100px' }} />

//       <label><b>Attachments:</b></label>
//       <input type="file" multiple onChange={(e) => setFiles([...e.target.files])} />

//       <h3>To:</h3>
//       {Object.keys(groupedClients).sort().map(letter => (
//         <div key={letter} ref={el => sectionRefs.current[letter] = el}>
//           <h4>{letter}</h4>
//           <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
//             {groupedClients[letter].map(client => (
//               <li key={client.email}>
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={recipients.some(r => r.to === client.email)}
//                     onChange={() => toggleTo(client.email)}
//                   /> {client.email}
//                 </label>
//                 {recipients.find(r => r.to === client.email) && (
//                   <>
//                     <div style={{ marginLeft: '20px' }}>
//                       <b>CC:</b>
//                       {(showAllCc[client.email]
//                         ? clients
//                         : clients.filter(c => getDomain(c.email) === getDomain(client.email)))
//                         .map(cc => (
//                           <label key={`cc-${client.email}-${cc.email}`} style={{ marginLeft: '10px' }}>
//                             <input
//                               type="checkbox"
//                               checked={recipients.find(r => r.to === client.email)?.cc.includes(cc.email)}
//                               onChange={() => toggleCC(client.email, cc.email)}
//                             /> {cc.email}
//                           </label>
//                         ))}
//                       {!showAllCc[client.email] && (
//                         <button onClick={() => setShowAllCc(prev => ({ ...prev, [client.email]: true }))}>
//                           Show All
//                         </button>
//                       )}
//                     </div>
//                     <div style={{ marginLeft: '20px' }}>
//                       <b>BCC:</b>
//                       {(showAllBcc[client.email]
//                         ? clients
//                         : clients.filter(c => getDomain(c.email) === getDomain(client.email)))
//                         .map(bcc => (
//                           <label key={`bcc-${client.email}-${bcc.email}`} style={{ marginLeft: '10px' }}>
//                             <input
//                               type="checkbox"
//                               checked={recipients.find(r => r.to === client.email)?.bcc.includes(bcc.email)}
//                               onChange={() => toggleBCC(client.email, bcc.email)}
//                             /> {bcc.email}
//                           </label>
//                         ))}
//                       {!showAllBcc[client.email] && (
//                         <button onClick={() => setShowAllBcc(prev => ({ ...prev, [client.email]: true }))}>
//                           Show All
//                         </button>
//                       )}
//                     </div>
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}

//       <div style={{
//         position: 'fixed', right: '10px', top: '120px',
//         display: 'flex', flexDirection: 'column', fontSize: '14px'
//       }}>
//         {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l => (
//           <button key={l} onClick={() => scrollTo(l)}>{l}</button>
//         ))}
//       </div>

//       <EmailPoolSelector
//         onAddTo={(email) =>
//           setRecipients(prev => [...prev, { to: email, cc: [], bcc: [] }])
//         }
//         onAddCc={(email) => {
//           const last = recipients.length - 1;
//           if (last >= 0) {
//             setRecipients(prev => {
//               const updated = [...prev];
//               updated[last].cc.push(email);
//               return updated;
//             });
//           }
//         }}
//         onAddBcc={(email) => {
//           const last = recipients.length - 1;
//           if (last >= 0) {
//             setRecipients(prev => {
//               const updated = [...prev];
//               updated[last].bcc.push(email);
//               return updated;
//             });
//           }
//         }}
//       />

//       <button onClick={sendMail} style={{ marginTop: '30px' }}>
//         Send Email
//       </button>
//     </div>
//   );
// }
// import { useState, useEffect, useRef } from 'react';
// import { useRouter } from 'next/router';

// export default function SendMailPage() {
//   const router = useRouter();
//   const [clients, setClients] = useState([]);
//   const [emailPool, setEmailPool] = useState([]);
//   const [recipients, setRecipients] = useState([]);
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');
//   const [files, setFiles] = useState([]);
//   const [search, setSearch] = useState('');
//   const sectionRefs = useRef({});
//   const [manualTo, setManualTo] = useState('');
//   const [manualCc, setManualCc] = useState('');
//   const [manualBcc, setManualBcc] = useState('');
//   const [showAllCc, setShowAllCc] = useState(false);
//   const [showAllBcc, setShowAllBcc] = useState(false);

//   useEffect(() => {
//     fetch('/api/clients')
//       .then(res => res.json())
//       .then(setClients);

//     fetch('/api/emails')
//       .then(res => res.json())
//       .then(setEmailPool);
//   }, []);

//   const groupClients = () => {
//     const filtered = clients.filter(c =>
//       c.email.toLowerCase().includes(search.toLowerCase())
//     );
//     const grouped = {};
//     filtered.forEach(client => {
//       const letter = client.email[0].toUpperCase();
//       if (!grouped[letter]) grouped[letter] = [];
//       grouped[letter].push(client);
//     });
//     return grouped;
//   };

//   const groupedClients = groupClients();

//   const scrollTo = (letter) => {
//     if (sectionRefs.current[letter]) {
//       sectionRefs.current[letter].scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const toggleTo = (email) => {
//     setRecipients(prev =>
//       prev.some(r => r.to === email)
//         ? prev.filter(r => r.to !== email)
//         : [...prev, { to: email, cc: [], bcc: [] }]
//     );
//   };

//   const toggleCC = (toEmail, ccEmail) => {
//     setRecipients(prev => prev.map(r => {
//       if (r.to !== toEmail) return r;
//       return {
//         ...r,
//         cc: r.cc.includes(ccEmail)
//           ? r.cc.filter(e => e !== ccEmail)
//           : [...r.cc, ccEmail]
//       };
//     }));
//   };

//   const toggleBCC = (toEmail, bccEmail) => {
//     setRecipients(prev => prev.map(r => {
//       if (r.to !== toEmail) return r;
//       return {
//         ...r,
//         bcc: r.bcc.includes(bccEmail)
//           ? r.bcc.filter(e => e !== bccEmail)
//           : [...r.bcc, bccEmail]
//       };
//     }));
//   };

//   const getDomain = email => email.split('@')[1];

//   const saveToPoolIfNew = async (email) => {
//     if (!emailPool.some(e => e.email === email)) {
//       await fetch('/api/emails', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email })
//       });
//     }
//   };

//   const sendMail = async () => {
//     if (recipients.length === 0) return alert("Select at least one 'To' recipient.");
//     if (!body && files.length === 0) return alert("Provide either a message body or attachments.");

//     const formData = new FormData();
//     formData.append('subject', subject || '');
//     formData.append('body', body || '');
//     formData.append('recipients', JSON.stringify(recipients));
//     files.forEach(f => formData.append('file', f));

//     const res = await fetch('/api/sendMail', {
//       method: 'POST',
//       body: formData,
//     });

//     const data = await res.json();
//     alert(data.message || data.error);

//     // Save all new manual entries to email pool
//     for (const r of recipients) {
//       await saveToPoolIfNew(r.to);
//       for (const c of r.cc) await saveToPoolIfNew(c);
//       for (const b of r.bcc) await saveToPoolIfNew(b);
//     }
//   };

//   const addManualEntry = (email, type) => {
//     if (!email) return;
//     const existing = recipients.find(r => r.to === email);
//     if (!existing) {
//       setRecipients(prev => [...prev, { to: email, cc: [], bcc: [] }]);
//     } else {
//       setRecipients(prev =>
//         prev.map(r => {
//           if (r.to !== email) return r;
//           if (type === 'cc' && !r.cc.includes(email)) r.cc.push(email);
//           if (type === 'bcc' && !r.bcc.includes(email)) r.bcc.push(email);
//           return r;
//         })
//       );
//     }
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif', position: 'relative' }}>
//       <div style={{ display: 'flex', gap: '1rem', marginBottom: '20px' }}>
//         <button onClick={() => router.push('/clients')}>Manage Clients</button>
//         <button onClick={() => router.push('/email-pool')}>Email Pool</button>
//       </div>

//       <h1>Send Email</h1>

//       <input
//         placeholder="Search clients..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ width: '100%', marginBottom: '15px' }}
//       />

//       <label><b>Subject:</b></label>
//       <input value={subject} onChange={e => setSubject(e.target.value)} style={{ width: '100%' }} />

//       <label><b>Body:</b></label>
//       <textarea value={body} onChange={e => setBody(e.target.value)} style={{ width: '100%', height: '100px' }} />

//       <label><b>Attachments:</b></label>
//       <input type="file" multiple onChange={(e) => setFiles([...e.target.files])} />

//       <h3>To:</h3>
//       {Object.keys(groupedClients).sort().map(letter => (
//         <div key={letter} ref={el => sectionRefs.current[letter] = el}>
//           <h4>{letter}</h4>
//           <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
//             {groupedClients[letter].map(client => (
//               <li key={client.email}>
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={recipients.some(r => r.to === client.email)}
//                     onChange={() => toggleTo(client.email)}
//                   /> {client.email}
//                 </label>
//                 {recipients.find(r => r.to === client.email) && (
//                   <>
//                     <div style={{ marginLeft: '20px' }}>
//                       <b>CC:</b>
//                       {(showAllCc ? clients : clients.filter(c => getDomain(c.email) === getDomain(client.email)))
//                         .map(cc => (
//                           <label key={`cc-${client.email}-${cc.email}`} style={{ marginLeft: '10px' }}>
//                             <input
//                               type="checkbox"
//                               checked={recipients.find(r => r.to === client.email)?.cc.includes(cc.email)}
//                               onChange={() => toggleCC(client.email, cc.email)}
//                             /> {cc.email}
//                           </label>
//                         ))}
//                       {!showAllCc && (
//                         <button onClick={() => setShowAllCc(true)} style={{ marginLeft: 10 }}>
//                           Show All
//                         </button>
//                       )}
//                     </div>
//                     <div style={{ marginLeft: '20px' }}>
//                       <b>BCC:</b>
//                       {(showAllBcc ? clients : clients.filter(c => getDomain(c.email) === getDomain(client.email)))
//                         .map(bcc => (
//                           <label key={`bcc-${client.email}-${bcc.email}`} style={{ marginLeft: '10px' }}>
//                             <input
//                               type="checkbox"
//                               checked={recipients.find(r => r.to === client.email)?.bcc.includes(bcc.email)}
//                               onChange={() => toggleBCC(client.email, bcc.email)}
//                             /> {bcc.email}
//                           </label>
//                         ))}
//                       {!showAllBcc && (
//                         <button onClick={() => setShowAllBcc(true)} style={{ marginLeft: 10 }}>
//                           Show All
//                         </button>
//                       )}
//                     </div>
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}

//       <div style={{
//         position: 'fixed', right: '10px', top: '120px',
//         display: 'flex', flexDirection: 'column', fontSize: '14px'
//       }}>
//         {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l => (
//           <button key={l} onClick={() => scrollTo(l)}>{l}</button>
//         ))}
//       </div>

//       <h3 style={{ marginTop: '2rem' }}>Add Manual Email Recipients</h3>
//       <div style={{ marginBottom: '10px' }}>
//         <input
//           placeholder="To"
//           list="emailSuggestions"
//           value={manualTo}
//           onChange={e => setManualTo(e.target.value)}
//           onBlur={() => {
//             addManualEntry(manualTo, 'to');
//             setManualTo('');
//           }}
//         />
//         <input
//           placeholder="Cc"
//           list="emailSuggestions"
//           value={manualCc}
//           onChange={e => setManualCc(e.target.value)}
//           onBlur={() => {
//             addManualEntry(manualCc, 'cc');
//             setManualCc('');
//           }}
//           style={{ marginLeft: '10px' }}
//         />
//         <input
//           placeholder="Bcc"
//           list="emailSuggestions"
//           value={manualBcc}
//           onChange={e => setManualBcc(e.target.value)}
//           onBlur={() => {
//             addManualEntry(manualBcc, 'bcc');
//             setManualBcc('');
//           }}
//           style={{ marginLeft: '10px' }}
//         />
//         <datalist id="emailSuggestions">
//           {emailPool.map(e => <option key={e.email} value={e.email} />)}
//         </datalist>
//       </div>

//       <button onClick={sendMail} style={{ marginTop: '30px' }}>
//         Send Email
//       </button>
//     </div>
//   );
// }
// import { useState, useEffect, useRef } from 'react';
// import { useRouter } from 'next/router';

// export default function SendMailPage() {
//   const router = useRouter();
//   const [clients, setClients] = useState([]);
//   const [emailPool, setEmailPool] = useState([]);
//   const [recipients, setRecipients] = useState([]);
//   const [manualRecipients, setManualRecipients] = useState([]);
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');
//   const [files, setFiles] = useState([]);
//   const [search, setSearch] = useState('');
//   const sectionRefs = useRef({});
//   const [showAllCc, setShowAllCc] = useState(false);
//   const [showAllBcc, setShowAllBcc] = useState(false);

//   useEffect(() => {
//     fetch('/api/clients')
//       .then(res => res.json())
//       .then(setClients);

//     fetch('/api/emails')
//       .then(res => res.json())
//       .then(setEmailPool);
//   }, []);

//   const groupClients = () => {
//     const filtered = clients.filter(c =>
//       c.email.toLowerCase().includes(search.toLowerCase())
//     );
//     const grouped = {};
//     filtered.forEach(client => {
//       const letter = client.email[0].toUpperCase();
//       if (!grouped[letter]) grouped[letter] = [];
//       grouped[letter].push(client);
//     });
//     return grouped;
//   };

//   const groupedClients = groupClients();

//   const scrollTo = (letter) => {
//     if (sectionRefs.current[letter]) {
//       sectionRefs.current[letter].scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const toggleTo = (email) => {
//     setRecipients(prev =>
//       prev.some(r => r.to === email)
//         ? prev.filter(r => r.to !== email)
//         : [...prev, { to: email, cc: [], bcc: [] }]
//     );
//   };

//   const toggleCC = (toEmail, ccEmail) => {
//     setRecipients(prev => prev.map(r => {
//       if (r.to !== toEmail) return r;
//       return {
//         ...r,
//         cc: r.cc.includes(ccEmail)
//           ? r.cc.filter(e => e !== ccEmail)
//           : [...r.cc, ccEmail]
//       };
//     }));
//   };

//   const toggleBCC = (toEmail, bccEmail) => {
//     setRecipients(prev => prev.map(r => {
//       if (r.to !== toEmail) return r;
//       return {
//         ...r,
//         bcc: r.bcc.includes(bccEmail)
//           ? r.bcc.filter(e => e !== bccEmail)
//           : [...r.bcc, bccEmail]
//       };
//     }));
//   };

//   const getDomain = email => email.split('@')[1];

//   const addManual = () =>
//     setManualRecipients(prev => [...prev, { type: 'to', email: '' }]);

//   const removeManual = (index) =>
//     setManualRecipients(prev => prev.filter((_, i) => i !== index));

//   const updateManual = (index, field, value) =>
//     setManualRecipients(prev => prev.map((r, i) =>
//       i === index ? { ...r, [field]: value } : r
//     ));

//   const sendMail = async () => {
//     const combinedRecipients = [...recipients];

//     for (const { email, type } of manualRecipients) {
//       if (!email) continue;

//       const exists = combinedRecipients.find(r => r.to === email);
//       if (!exists) {
//         combinedRecipients.push({ to: email, cc: [], bcc: [] });
//       }

//       if (type === 'cc') {
//         combinedRecipients.forEach(r => {
//           if (!r.cc.includes(email)) r.cc.push(email);
//         });
//       }

//       if (type === 'bcc') {
//         combinedRecipients.forEach(r => {
//           if (!r.bcc.includes(email)) r.bcc.push(email);
//         });
//       }
//     }

//     if (combinedRecipients.length === 0) return alert("Select at least one recipient.");
//     if (!body && files.length === 0) return alert("Provide body or attachments.");

//     const formData = new FormData();
//     formData.append('subject', subject || '');
//     formData.append('body', body || '');
//     formData.append('recipients', JSON.stringify(combinedRecipients));
//     files.forEach(f => formData.append('file', f));

//     const res = await fetch('/api/sendMail', {
//       method: 'POST',
//       body: formData
//     });

//     const data = await res.json();
//     alert(data.message || data.error);

//     for (const { email } of manualRecipients) {
//       if (email && !emailPool.some(e => e.email === email)) {
//         await fetch('/api/emails', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ email }),
//         });
//       }
//     }
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif', position: 'relative' }}>
//       <div style={{ display: 'flex', gap: '1rem', marginBottom: '20px' }}>
//         <button onClick={() => router.push('/clients')}>Manage Clients</button>
//         <button onClick={() => router.push('/email-pool')}>Email Pool</button>
//       </div>

//       <h1>Send Email</h1>

//       <input
//         placeholder="Search clients..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ width: '100%', marginBottom: '15px' }}
//       />

//       <label><b>Subject:</b></label>
//       <input value={subject} onChange={e => setSubject(e.target.value)} style={{ width: '100%' }} />

//       <label><b>Body:</b></label>
//       <textarea value={body} onChange={e => setBody(e.target.value)} style={{ width: '100%', height: '100px' }} />

//       <label><b>Attachments:</b></label>
//       <input type="file" multiple onChange={(e) => setFiles([...e.target.files])} />

//       <h3>To:</h3>
//       {Object.keys(groupedClients).sort().map(letter => (
//         <div key={letter} ref={el => sectionRefs.current[letter] = el}>
//           <h4>{letter}</h4>
//           <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
//             {groupedClients[letter].map(client => (
//               <li key={client.email}>
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={recipients.some(r => r.to === client.email)}
//                     onChange={() => toggleTo(client.email)}
//                   /> {client.email}
//                 </label>
//                 {recipients.find(r => r.to === client.email) && (
//                   <>
//                     <div style={{ marginLeft: '20px' }}>
//                       <b>CC:</b>
//                       {(showAllCc ? clients : clients.filter(c => getDomain(c.email) === getDomain(client.email)))
//                         .map(cc => (
//                           <label key={`cc-${client.email}-${cc.email}`} style={{ marginLeft: '10px' }}>
//                             <input
//                               type="checkbox"
//                               checked={recipients.find(r => r.to === client.email)?.cc.includes(cc.email)}
//                               onChange={() => toggleCC(client.email, cc.email)}
//                             /> {cc.email}
//                           </label>
//                         ))}
//                       {!showAllCc && (
//                         <button onClick={() => setShowAllCc(true)} style={{ marginLeft: 10 }}>
//                           Show All
//                         </button>
//                       )}
//                     </div>
//                     <div style={{ marginLeft: '20px' }}>
//                       <b>BCC:</b>
//                       {(showAllBcc ? clients : clients.filter(c => getDomain(c.email) === getDomain(client.email)))
//                         .map(bcc => (
//                           <label key={`bcc-${client.email}-${bcc.email}`} style={{ marginLeft: '10px' }}>
//                             <input
//                               type="checkbox"
//                               checked={recipients.find(r => r.to === client.email)?.bcc.includes(bcc.email)}
//                               onChange={() => toggleBCC(client.email, bcc.email)}
//                             /> {bcc.email}
//                           </label>
//                         ))}
//                       {!showAllBcc && (
//                         <button onClick={() => setShowAllBcc(true)} style={{ marginLeft: 10 }}>
//                           Show All
//                         </button>
//                       )}
//                     </div>
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}

//       <div style={{
//         position: 'fixed', right: '10px', top: '120px',
//         display: 'flex', flexDirection: 'column', fontSize: '14px'
//       }}>
//         {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l => (
//           <button key={l} onClick={() => scrollTo(l)}>{l}</button>
//         ))}
//       </div>

//       <h3 style={{ marginTop: '2rem' }}>Manual Recipients</h3>
//       {manualRecipients.map((entry, index) => (
//         <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
//           <select
//             value={entry.type}
//             onChange={(e) => updateManual(index, 'type', e.target.value)}
//           >
//             <option value="to">To</option>
//             <option value="cc">Cc</option>
//             <option value="bcc">Bcc</option>
//           </select>

//           <input
//             list="emailPool"
//             value={entry.email}
//             onChange={(e) => updateManual(index, 'email', e.target.value)}
//             placeholder="example@example.com"
//             style={{ flex: 1 }}
//           />

//           <button onClick={() => removeManual(index)}>Remove</button>
//         </div>
//       ))}
//       <datalist id="emailPool">
//         {emailPool.map(e => <option key={e.email} value={e.email} />)}
//       </datalist>
//       <button onClick={addManual}>Add Recipient</button>

//       <button onClick={sendMail} style={{ marginTop: '30px' }}>
//         Send Email
//       </button>
//     </div>
//   );
// }
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// export default function SendMailPage() {
//   const router = useRouter();
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');
//   const [files, setFiles] = useState([]);
//   const [emailPool, setEmailPool] = useState([]);
//   const [toList, setToList] = useState([
//     { to: '', cc: [''], bcc: [''] }
//   ]);

//   useEffect(() => {
//     fetch('/api/emails').then(res => res.json()).then(setEmailPool);
//   }, []);

//   const updateField = (i, field, value) => {
//     setToList(prev => {
//       const updated = [...prev];
//       updated[i][field] = value;
//       return updated;
//     });
//   };

//   const updateNested = (i, type, index, value) => {
//     setToList(prev => {
//       const updated = [...prev];
//       updated[i][type][index] = value;
//       return updated;
//     });
//   };

//   const addToRow = () => {
//     setToList(prev => [...prev, { to: '', cc: [''], bcc: [''] }]);
//   };

//   const removeToRow = (i) => {
//     setToList(prev => prev.filter((_, idx) => idx !== i));
//   };

//   const addNested = (i, type) => {
//     setToList(prev => {
//       const updated = [...prev];
//       updated[i][type].push('');
//       return updated;
//     });
//   };

//   const removeNested = (i, type, index) => {
//     setToList(prev => {
//       const updated = [...prev];
//       updated[i][type] = updated[i][type].filter((_, idx) => idx !== index);
//       return updated;
//     });
//   };

//   const sendMail = async () => {
//     const recipients = toList
//       .filter(row => row.to.trim())
//       .map(row => ({
//         to: row.to.trim(),
//         cc: row.cc.filter(Boolean).map(e => e.trim()),
//         bcc: row.bcc.filter(Boolean).map(e => e.trim())
//       }));

//     if (recipients.length === 0) return alert("At least one 'To' is required.");
//     if (!body && files.length === 0) return alert("Provide either body or attachments.");

//     const formData = new FormData();
//     formData.append('subject', subject);
//     formData.append('body', body);
//     formData.append('recipients', JSON.stringify(recipients));
//     files.forEach(f => formData.append('file', f));

//     const res = await fetch('/api/sendMail', {
//       method: 'POST',
//       body: formData
//     });

//     const result = await res.json();
//     alert(result.message || result.error);

//     // Save used emails
//     const used = new Set();
//     recipients.forEach(r => {
//       used.add(r.to);
//       r.cc.forEach(c => used.add(c));
//       r.bcc.forEach(b => used.add(b));
//     });

//     for (const email of used) {
//       if (!emailPool.some(e => e.email === email)) {
//         await fetch('/api/emails', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ email })
//         });
//       }
//     }
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
//         <button onClick={() => router.push('/clients')}>Manage Clients</button>
//         <button onClick={() => router.push('/email-pool')}>Email Pool</button>
//       </div>

//       <h1>Send Email</h1>

//       <label>Subject</label>
//       <input value={subject} onChange={e => setSubject(e.target.value)} style={{ width: '100%' }} />

//       <label>Body</label>
//       <textarea value={body} onChange={e => setBody(e.target.value)} style={{ width: '100%', height: '100px' }} />

//       <label>Attachments</label>
//       <input type="file" multiple onChange={(e) => setFiles([...e.target.files])} />

//       <h3 style={{ marginTop: '2rem' }}>Recipients</h3>

//       {toList.map((row, i) => (
//         <div key={i} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
//           <div>
//             <label><b>To:</b></label>
//             <input
//               list="emailSuggestions"
//               value={row.to}
//               onChange={(e) => updateField(i, 'to', e.target.value)}
//               placeholder="To email"
//               style={{ width: '100%' }}
//             />
//           </div>

//           <div>
//             <label><b>Cc:</b></label>
//             {row.cc.map((ccEmail, index) => (
//               <div key={index} style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
//                 <input
//                   list="emailSuggestions"
//                   value={ccEmail}
//                   onChange={(e) => updateNested(i, 'cc', index, e.target.value)}
//                   placeholder="Cc email"
//                   style={{ flex: 1 }}
//                 />
//                 <button onClick={() => removeNested(i, 'cc', index)}>Remove</button>
//               </div>
//             ))}
//             <button onClick={() => addNested(i, 'cc')}>Add Cc</button>
//           </div>

//           <div>
//             <label><b>Bcc:</b></label>
//             {row.bcc.map((bccEmail, index) => (
//               <div key={index} style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
//                 <input
//                   list="emailSuggestions"
//                   value={bccEmail}
//                   onChange={(e) => updateNested(i, 'bcc', index, e.target.value)}
//                   placeholder="Bcc email"
//                   style={{ flex: 1 }}
//                 />
//                 <button onClick={() => removeNested(i, 'bcc', index)}>Remove</button>
//               </div>
//             ))}
//             <button onClick={() => addNested(i, 'bcc')}>Add Bcc</button>
//           </div>

//           {toList.length > 1 && (
//             <button onClick={() => removeToRow(i)} style={{ marginTop: '10px', color: 'red' }}>
//               Remove This Recipient
//             </button>
//           )}
//         </div>
//       ))}

//       <datalist id="emailSuggestions">
//         {emailPool.map(e => <option key={e.email} value={e.email} />)}
//       </datalist>

//       <button onClick={addToRow}>Add Another To</button>

//       <div style={{ marginTop: '2rem' }}>
//         <button onClick={sendMail}>Send Email</button>
//       </div>
//     </div>
//   );
// }
// import { useState, useEffect, useRef } from 'react';
// import { useRouter } from 'next/router';

// export default function SendMailPage() {
//   const router = useRouter();
//   const [clients, setClients] = useState([]);
//   const [emailPool, setEmailPool] = useState([]);
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');
//   const [files, setFiles] = useState([]);
//   const [search, setSearch] = useState('');
//   const sectionRefs = useRef({});
//   const [clientRecipients, setClientRecipients] = useState([]);
//   const [manualTo, setManualTo] = useState([
//     { to: '', cc: [''], bcc: [''] }
//   ]);
//   const [showAllCc, setShowAllCc] = useState(false);
//   const [showAllBcc, setShowAllBcc] = useState(false);

//   useEffect(() => {
//     fetch('/api/clients').then(res => res.json()).then(setClients);
//     fetch('/api/emails').then(res => res.json()).then(setEmailPool);
//   }, []);

//   const groupClients = () => {
//     const filtered = clients.filter(c =>
//       c.email.toLowerCase().includes(search.toLowerCase())
//     );
//     const grouped = {};
//     filtered.forEach(client => {
//       const letter = client.email[0].toUpperCase();
//       if (!grouped[letter]) grouped[letter] = [];
//       grouped[letter].push(client);
//     });
//     return grouped;
//   };

//   const groupedClients = groupClients();

//   const scrollTo = (letter) => {
//     if (sectionRefs.current[letter]) {
//       sectionRefs.current[letter].scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const toggleClientTo = (email) => {
//     setClientRecipients(prev =>
//       prev.some(r => r.to === email)
//         ? prev.filter(r => r.to !== email)
//         : [...prev, { to: email, cc: [], bcc: [] }]
//     );
//   };

//   const toggleClientCC = (toEmail, ccEmail) => {
//     setClientRecipients(prev => prev.map(r => {
//       if (r.to !== toEmail) return r;
//       return {
//         ...r,
//         cc: r.cc.includes(ccEmail) ? r.cc.filter(e => e !== ccEmail) : [...r.cc, ccEmail]
//       };
//     }));
//   };

//   const toggleClientBCC = (toEmail, bccEmail) => {
//     setClientRecipients(prev => prev.map(r => {
//       if (r.to !== toEmail) return r;
//       return {
//         ...r,
//         bcc: r.bcc.includes(bccEmail) ? r.bcc.filter(e => e !== bccEmail) : [...r.bcc, bccEmail]
//       };
//     }));
//   };

//   const getDomain = email => email.split('@')[1];

//   const updateManualField = (i, field, value) => {
//     setManualTo(prev => {
//       const updated = [...prev];
//       updated[i][field] = value;
//       return updated;
//     });
//   };

//   const updateManualNested = (i, type, index, value) => {
//     setManualTo(prev => {
//       const updated = [...prev];
//       updated[i][type][index] = value;
//       return updated;
//     });
//   };

//   const addManual = () => {
//     setManualTo(prev => [...prev, { to: '', cc: [''], bcc: [''] }]);
//   };

//   const removeManual = (i) => {
//     setManualTo(prev => prev.filter((_, idx) => idx !== i));
//   };

//   const addNested = (i, type) => {
//     setManualTo(prev => {
//       const updated = [...prev];
//       updated[i][type].push('');
//       return updated;
//     });
//   };

//   const removeNested = (i, type, index) => {
//     setManualTo(prev => {
//       const updated = [...prev];
//       updated[i][type] = updated[i][type].filter((_, idx) => idx !== index);
//       return updated;
//     });
//   };

//   const sendMail = async () => {
//     const recipients = [
//       ...clientRecipients,
//       ...manualTo
//         .filter(r => r.to.trim())
//         .map(r => ({
//           to: r.to.trim(),
//           cc: r.cc.filter(Boolean).map(e => e.trim()),
//           bcc: r.bcc.filter(Boolean).map(e => e.trim())
//         }))
//     ];

//     if (recipients.length === 0) return alert("At least one recipient required.");
//     if (!body && files.length === 0) return alert("Body or attachment required.");

//     const formData = new FormData();
//     formData.append('subject', subject);
//     formData.append('body', body);
//     formData.append('recipients', JSON.stringify(recipients));
//     files.forEach(f => formData.append('file', f));

//     const res = await fetch('/api/sendMail', { method: 'POST', body: formData });
//     const result = await res.json();
//     alert(result.message || result.error);

//     // Save all used emails to pool
//     const used = new Set();
//     recipients.forEach(r => {
//       used.add(r.to);
//       r.cc.forEach(c => used.add(c));
//       r.bcc.forEach(b => used.add(b));
//     });

//     for (const email of used) {
//       if (!emailPool.some(e => e.email === email)) {
//         await fetch('/api/emails', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ email })
//         });
//       }
//     }
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
//         <button onClick={() => router.push('/clients')}>Manage Clients</button>
//         <button onClick={() => router.push('/email-pool')}>Email Pool</button>
//       </div>

//       <h1>Send Email</h1>

//       <label>Subject</label>
//       <input value={subject} onChange={e => setSubject(e.target.value)} style={{ width: '100%' }} />

//       <label>Body</label>
//       <textarea value={body} onChange={e => setBody(e.target.value)} style={{ width: '100%', height: '100px' }} />

//       <label>Attachments</label>
//       <input type="file" multiple onChange={(e) => setFiles([...e.target.files])} />

//       <input
//         placeholder="Search clients..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ width: '100%', margin: '20px 0' }}
//       />

//       <h3>Clients</h3>
//       {Object.keys(groupedClients).sort().map(letter => (
//         <div key={letter} ref={el => sectionRefs.current[letter] = el}>
//           <h4>{letter}</h4>
//           {groupedClients[letter].map(client => (
//             <div key={client.email}>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={clientRecipients.some(r => r.to === client.email)}
//                   onChange={() => toggleClientTo(client.email)}
//                 />
//                 {client.email}
//               </label>
//               {clientRecipients.find(r => r.to === client.email) && (
//                 <div style={{ marginLeft: '20px' }}>
//                   <div>
//                     <b>CC:</b>
//                     {(showAllCc ? clients : clients.filter(c => getDomain(c.email) === getDomain(client.email)))
//                       .map(cc => (
//                         <label key={`cc-${cc.email}`} style={{ marginLeft: 10 }}>
//                           <input
//                             type="checkbox"
//                             checked={clientRecipients.find(r => r.to === client.email)?.cc.includes(cc.email)}
//                             onChange={() => toggleClientCC(client.email, cc.email)}
//                           /> {cc.email}
//                         </label>
//                       ))}
//                     {!showAllCc && (
//                       <button onClick={() => setShowAllCc(true)}>Show All</button>
//                     )}
//                   </div>
//                   <div>
//                     <b>BCC:</b>
//                     {(showAllBcc ? clients : clients.filter(c => getDomain(c.email) === getDomain(client.email)))
//                       .map(bcc => (
//                         <label key={`bcc-${bcc.email}`} style={{ marginLeft: 10 }}>
//                           <input
//                             type="checkbox"
//                             checked={clientRecipients.find(r => r.to === client.email)?.bcc.includes(bcc.email)}
//                             onChange={() => toggleClientBCC(client.email, bcc.email)}
//                           /> {bcc.email}
//                         </label>
//                       ))}
//                     {!showAllBcc && (
//                       <button onClick={() => setShowAllBcc(true)}>Show All</button>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       ))}

//       <h3 style={{ marginTop: '2rem' }}>Manual Recipients</h3>

//       {manualTo.map((row, i) => (
//         <div key={i} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
//           <div>
//             <label><b>To:</b></label>
//             <input
//               list="emailSuggestions"
//               value={row.to}
//               onChange={(e) => updateManualField(i, 'to', e.target.value)}
//               placeholder="To email"
//               style={{ width: '100%' }}
//             />
//           </div>

//           <div>
//             <label><b>Cc:</b></label>
//             {row.cc.map((cc, j) => (
//               <div key={j} style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
//                 <input
//                   list="emailSuggestions"
//                   value={cc}
//                   onChange={(e) => updateManualNested(i, 'cc', j, e.target.value)}
//                   placeholder="Cc email"
//                   style={{ flex: 1 }}
//                 />
//                 <button onClick={() => removeNested(i, 'cc', j)}>Remove</button>
//               </div>
//             ))}
//             <button onClick={() => addNested(i, 'cc')}>Add Cc</button>
//           </div>

//           <div>
//             <label><b>Bcc:</b></label>
//             {row.bcc.map((bcc, j) => (
//               <div key={j} style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
//                 <input
//                   list="emailSuggestions"
//                   value={bcc}
//                   onChange={(e) => updateManualNested(i, 'bcc', j, e.target.value)}
//                   placeholder="Bcc email"
//                   style={{ flex: 1 }}
//                 />
//                 <button onClick={() => removeNested(i, 'bcc', j)}>Remove</button>
//               </div>
//             ))}
//             <button onClick={() => addNested(i, 'bcc')}>Add Bcc</button>
//           </div>

//           {manualTo.length > 1 && (
//             <button onClick={() => removeManual(i)} style={{ marginTop: '10px', color: 'red' }}>
//               Remove Recipient
//             </button>
//           )}
//         </div>
//       ))}

//       <datalist id="emailSuggestions">
//         {emailPool.map(e => <option key={e.email} value={e.email} />)}
//       </datalist>

//       <button onClick={addManual}>Add Manual To</button>

//       <div style={{ marginTop: '2rem' }}>
//         <button onClick={sendMail}>Send Email</button>
//       </div>
//     </div>
//   );
// }
// import { useState, useEffect, useRef } from 'react';
// import { useRouter } from 'next/router';

// export default function SendMailPage() {
//   const router = useRouter();
//   const [clients, setClients] = useState([]);
//   const [emailPool, setEmailPool] = useState([]);
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');
//   const [files, setFiles] = useState([]);
//   const [search, setSearch] = useState('');
//   const sectionRefs = useRef({});
//   const [clientRecipients, setClientRecipients] = useState([]);
//   const [manualTo, setManualTo] = useState([{ to: '', cc: [''], bcc: [''] }]);
//   const [showAllCc, setShowAllCc] = useState(false);
//   const [showAllBcc, setShowAllBcc] = useState(false);

//   useEffect(() => {
//     fetch('/api/clients').then(res => res.json()).then(setClients);

//     const fetchAllEmails = async () => {
//       let all = [];
//       let page = 1;
//       const per = 1000;

//       while (true) {
//         const res = await fetch(`/api/emails?page=${page}&per=${per}`);
//         const batch = await res.json();
//         all = [...all, ...batch];
//         if (batch.length < per) break;
//         page++;
//       }

//       setEmailPool(all);
//     };

//     fetchAllEmails();
//   }, []);

//   const groupClients = () => {
//     const filtered = clients.filter(c =>
//       c.email.toLowerCase().includes(search.toLowerCase())
//     );
//     const grouped = {};
//     filtered.forEach(client => {
//       const letter = client.email[0].toUpperCase();
//       if (!grouped[letter]) grouped[letter] = [];
//       grouped[letter].push(client);
//     });
//     return grouped;
//   };

//   const groupedClients = groupClients();

//   const scrollTo = (letter) => {
//     if (sectionRefs.current[letter]) {
//       sectionRefs.current[letter].scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const toggleClientTo = (email) => {
//     setClientRecipients(prev =>
//       prev.some(r => r.to === email)
//         ? prev.filter(r => r.to !== email)
//         : [...prev, { to: email, cc: [], bcc: [] }]
//     );
//   };

//   const toggleClientCC = (toEmail, ccEmail) => {
//     setClientRecipients(prev => prev.map(r => {
//       if (r.to !== toEmail) return r;
//       return {
//         ...r,
//         cc: r.cc.includes(ccEmail) ? r.cc.filter(e => e !== ccEmail) : [...r.cc, ccEmail]
//       };
//     }));
//   };

//   const toggleClientBCC = (toEmail, bccEmail) => {
//     setClientRecipients(prev => prev.map(r => {
//       if (r.to !== toEmail) return r;
//       return {
//         ...r,
//         bcc: r.bcc.includes(bccEmail) ? r.bcc.filter(e => e !== bccEmail) : [...r.bcc, bccEmail]
//       };
//     }));
//   };

//   const getDomain = email => email.split('@')[1];

//   const updateManualField = (i, field, value) => {
//     setManualTo(prev => {
//       const updated = [...prev];
//       updated[i][field] = value;
//       return updated;
//     });
//   };

//   const updateManualNested = (i, type, index, value) => {
//     setManualTo(prev => {
//       const updated = [...prev];
//       updated[i][type][index] = value;
//       return updated;
//     });
//   };

//   const addManual = () => {
//     setManualTo(prev => [...prev, { to: '', cc: [''], bcc: [''] }]);
//   };

//   const removeManual = (i) => {
//     setManualTo(prev => prev.filter((_, idx) => idx !== i));
//   };

//   const addNested = (i, type) => {
//     setManualTo(prev => {
//       const updated = [...prev];
//       updated[i][type].push('');
//       return updated;
//     });
//   };

//   const removeNested = (i, type, index) => {
//     setManualTo(prev => {
//       const updated = [...prev];
//       updated[i][type] = updated[i][type].filter((_, idx) => idx !== index);
//       return updated;
//     });
//   };

//   const sendMail = async () => {
//     const recipients = [
//       ...clientRecipients,
//       ...manualTo
//         .filter(r => r.to.trim())
//         .map(r => ({
//           to: r.to.trim(),
//           cc: r.cc.filter(Boolean).map(e => e.trim()),
//           bcc: r.bcc.filter(Boolean).map(e => e.trim())
//         }))
//     ];

//     if (recipients.length === 0) return alert("At least one recipient required.");
//     if (!body && files.length === 0) return alert("Body or attachment required.");

//     const formData = new FormData();
//     formData.append('subject', subject);
//     formData.append('body', body);
//     formData.append('recipients', JSON.stringify(recipients));
//     files.forEach(f => formData.append('file', f));

//     const res = await fetch('/api/sendMail', { method: 'POST', body: formData });
//     const result = await res.json();
//     alert(result.message || result.error);

//     // Save new emails to pool
//     const used = new Set();
//     recipients.forEach(r => {
//       used.add(r.to);
//       r.cc.forEach(c => used.add(c));
//       r.bcc.forEach(b => used.add(b));
//     });

//     for (const email of used) {
//       if (!emailPool.some(e => e.email === email)) {
//         await fetch('/api/emails', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ email })
//         });
//       }
//     }
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
//         <button onClick={() => router.push('/clients')}>Manage Clients</button>
//         <button onClick={() => router.push('/email-pool')}>Email Pool</button>
//       </div>

//       <h1>Send Email</h1>

//       <label>Subject</label>
//       <input value={subject} onChange={e => setSubject(e.target.value)} style={{ width: '100%' }} />

//       <label>Body</label>
//       <textarea value={body} onChange={e => setBody(e.target.value)} style={{ width: '100%', height: '100px' }} />

//       <label>Attachments</label>
//       <input type="file" multiple onChange={(e) => setFiles([...e.target.files])} />

//       <input
//         placeholder="Search clients..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ width: '100%', margin: '20px 0' }}
//       />

//       <h3>Clients</h3>
//       {Object.keys(groupedClients).sort().map(letter => (
//         <div key={letter} ref={el => sectionRefs.current[letter] = el}>
//           <h4>{letter}</h4>
//           {groupedClients[letter].map(client => (
//             <div key={client.email}>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={clientRecipients.some(r => r.to === client.email)}
//                   onChange={() => toggleClientTo(client.email)}
//                 />
//                 {client.email}
//               </label>
//               {clientRecipients.find(r => r.to === client.email) && (
//                 <div style={{ marginLeft: '20px' }}>
//                   <div>
//                     <b>CC:</b>
//                     {(showAllCc ? clients : clients.filter(c => getDomain(c.email) === getDomain(client.email)))
//                       .map(cc => (
//                         <label key={`cc-${cc.email}`} style={{ marginLeft: 10 }}>
//                           <input
//                             type="checkbox"
//                             checked={clientRecipients.find(r => r.to === client.email)?.cc.includes(cc.email)}
//                             onChange={() => toggleClientCC(client.email, cc.email)}
//                           /> {cc.email}
//                         </label>
//                       ))}
//                     {!showAllCc && (
//                       <button onClick={() => setShowAllCc(true)}>Show All</button>
//                     )}
//                   </div>
//                   <div>
//                     <b>BCC:</b>
//                     {(showAllBcc ? clients : clients.filter(c => getDomain(c.email) === getDomain(client.email)))
//                       .map(bcc => (
//                         <label key={`bcc-${bcc.email}`} style={{ marginLeft: 10 }}>
//                           <input
//                             type="checkbox"
//                             checked={clientRecipients.find(r => r.to === client.email)?.bcc.includes(bcc.email)}
//                             onChange={() => toggleClientBCC(client.email, bcc.email)}
//                           /> {bcc.email}
//                         </label>
//                       ))}
//                     {!showAllBcc && (
//                       <button onClick={() => setShowAllBcc(true)}>Show All</button>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       ))}

//       <h3 style={{ marginTop: '2rem' }}>Manual Recipients</h3>

//       {manualTo.map((row, i) => (
//         <div key={i} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
//           <div>
//             <label><b>To:</b></label>
//             <input
//               list="emailSuggestions"
//               value={row.to}
//               onChange={(e) => updateManualField(i, 'to', e.target.value)}
//               placeholder="To email"
//               style={{ width: '100%' }}
//             />
//           </div>

//           <div>
//             <label><b>Cc:</b></label>
//             {row.cc.map((cc, j) => (
//               <div key={j} style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
//                 <input
//                   list="emailSuggestions"
//                   value={cc}
//                   onChange={(e) => updateManualNested(i, 'cc', j, e.target.value)}
//                   placeholder="Cc email"
//                   style={{ flex: 1 }}
//                 />
//                 <button onClick={() => removeNested(i, 'cc', j)}>Remove</button>
//               </div>
//             ))}
//             <button onClick={() => addNested(i, 'cc')}>Add Cc</button>
//           </div>

//           <div>
//             <label><b>Bcc:</b></label>
//             {row.bcc.map((bcc, j) => (
//               <div key={j} style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
//                 <input
//                   list="emailSuggestions"
//                   value={bcc}
//                   onChange={(e) => updateManualNested(i, 'bcc', j, e.target.value)}
//                   placeholder="Bcc email"
//                   style={{ flex: 1 }}
//                 />
//                 <button onClick={() => removeNested(i, 'bcc', j)}>Remove</button>
//               </div>
//             ))}
//             <button onClick={() => addNested(i, 'bcc')}>Add Bcc</button>
//           </div>

//           {manualTo.length > 1 && (
//             <button onClick={() => removeManual(i)} style={{ marginTop: '10px', color: 'red' }}>
//               Remove Recipient
//             </button>
//           )}
//         </div>
//       ))}

//       <datalist id="emailSuggestions">
//         {emailPool.map(e => <option key={e.email} value={e.email} />)}
//       </datalist>

//       <button onClick={addManual}>Add Manual To</button>

//       <div style={{ marginTop: '2rem' }}>
//         <button onClick={sendMail}>Send Email</button>
//       </div>
//     </div>
//   );
// }
// import { useState, useEffect, useRef } from 'react';
// import { useRouter } from 'next/router';

// export default function SendMailPage() {
//   const router = useRouter();
//   const [clients, setClients] = useState([]);
//   const [emailPool, setEmailPool] = useState([]);
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');
//   const [files, setFiles] = useState([]);
//   const [search, setSearch] = useState('');
//   const sectionRefs = useRef({});
//   const [clientTo, setClientTo] = useState([]);

//   const [manualTo, setManualTo] = useState([{ to: '', cc: [''], bcc: [''] }]);

//   useEffect(() => {
//     fetch('/api/clients').then(r => r.json()).then(setClients);
//     const load = async () => {
//       let all = [], page = 1, per = 1000;
//       while (true) {
//         const res = await fetch(`/api/emails?page=${page}&per=${per}`);
//         const batch = await res.json();
//         all = [...all, ...batch];
//         if (batch.length < per) break;
//         page++;
//       }
//       setEmailPool(all);
//     };
//     load();
//   }, []);

//   const getDomain = e => e.split('@')[1];
//   const groupClients = () => {
//     const filtered = clients.filter(c => c.email.toLowerCase().includes(search.toLowerCase()));
//     const grouped = {};
//     filtered.forEach(c => {
//       const L = c.email[0].toUpperCase();
//       if (!grouped[L]) grouped[L] = [];
//       grouped[L].push(c);
//     });
//     return grouped;
//   };
//   const groupedClients = groupClients();

//   const addClientTo = email => {
//     setClientTo(prev => {
//       if (prev.some(r => r.to === email)) return prev;
//       return [...prev, { to: email, cc: [''], bcc: [''] }];
//     });
//   };

//   const removeClientTo = i => setClientTo(prev => prev.filter((_, idx) => idx !== i));

//   const updateClientNested = (i, field, idx, v) => {
//     setClientTo(prev => {
//       const up = [...prev];
//       up[i][field][idx] = v;
//       return up;
//     });
//   };

//   const addClientNested = (i, field) => {
//     setClientTo(prev => {
//       const up = [...prev];
//       up[i][field].push('');
//       return up;
//     });
//   };

//   const removeClientNested = (i, field, idx) => {
//     setClientTo(prev => {
//       const up = [...prev];
//       up[i][field] = up[i][field].filter((_, j) => j !== idx);
//       return up;
//     });
//   };

//   const updateManualField = (i, field, v) => {
//     setManualTo(prev => {
//       const up = [...prev];
//       up[i][field] = v;
//       return up;
//     });
//   };

//   const updateManualNested = (i, field, idx, v) => {
//     setManualTo(prev => {
//       const up = [...prev];
//       up[i][field][idx] = v;
//       return up;
//     });
//   };

//   const addManualTo = () => setManualTo(prev => [...prev, { to: '', cc: [''], bcc: [''] }]);
//   const removeManualTo = i => setManualTo(prev => prev.filter((_, idx) => idx !== i));
//   const addManualNested = (i, field) => {
//     setManualTo(prev => {
//       const up = [...prev];
//       up[i][field].push('');
//       return up;
//     });
//   };
//   const removeManualNested = (i, field, idx) => {
//     setManualTo(prev => {
//       const up = [...prev];
//       up[i][field] = up[i][field].filter((_, j) => j !== idx);
//       return up;
//     });
//   };

//   const sendMail = async () => {
//     const recips = [
//       ...clientTo.map(r => ({
//         to: r.to.trim(),
//         cc: r.cc.filter(Boolean).map(e => e.trim()),
//         bcc: r.bcc.filter(Boolean).map(e => e.trim())
//       })),
//       ...manualTo.map(r => ({
//         to: r.to.trim(),
//         cc: r.cc.filter(Boolean).map(e => e.trim()),
//         bcc: r.bcc.filter(Boolean).map(e => e.trim())
//       }))
//     ].filter(r => r.to);

//     if (recips.length === 0) return alert('Add at least one To');
//     if (!body && files.length === 0) return alert('Body or attachments needed');

//     const fd = new FormData();
//     fd.append('subject', subject);
//     fd.append('body', body);
//     fd.append('recipients', JSON.stringify(recips));
//     files.forEach(f => fd.append('file', f));

//     const res = await fetch('/api/sendMail', { method: 'POST', body: fd });
//     const j = await res.json();
//     alert(j.message || j.error);

//     const used = new Set(recips.flatMap(r => [r.to, ...r.cc, ...r.bcc]));
//     for (const e of used) {
//       if (!emailPool.find(o => o.email === e)) {
//         await fetch('/api/emails', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ email: e })
//         });
//       }
//     }
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
//         <button onClick={() => router.push('/clients')}>Manage Clients</button>
//         <button onClick={() => router.push('/email-pool')}>Email Pool</button>
//       </div>

//       <h1>Send Email</h1>
//       <label>Subject</label>
//       <input value={subject} onChange={e => setSubject(e.target.value)} style={{width:'100%'}}/>
//       <label>Body</label><textarea value={body} onChange={e=>setBody(e.target.value)} style={{width:'100%',height:'100px'}}/>
//       <label>Attachments</label><input type="file" multiple onChange={e=>setFiles([...e.target.files])}/>

//       <input placeholder="Search clients..." value={search} onChange={e=>setSearch(e.target.value)} style={{width:'100%', margin:'20px 0'}} />

//       <h3>Clients</h3>
//       {Object.keys(groupedClients).sort().map(letter => (
//         <div key={letter} ref={el => sectionRefs.current[letter]=el}>
//           <h4>{letter}</h4>
//           {groupedClients[letter].map(c => (
//             <button key={c.email} onClick={()=>addClientTo(c.email)} style={{margin: '4px'}} disabled={!!clientTo.find(r=>r.to===c.email)}>
//               {c.email} {clientTo.find(r=>r.to===c.email) && '✓'}
//             </button>
//           ))}
//         </div>
//       ))}

//       <h3 style={{marginTop:'2rem'}}>Client Recipients</h3>
//       {clientTo.map((r,i)=>(
//         <div key={i} style={{border:'1px #ddd solid', padding:'1rem', margin:'10px 0'}}>
//           <div style={{display:'flex', justifyContent:'space-between'}}>
//             <b>To:</b> {r.to}
//             <button onClick={()=>removeClientTo(i)}>Remove</button>
//           </div>

//           <div>
//             <b>Cc:</b>
//             {r.cc.map((cc,j)=>(
//               <div key={j} style={{display:'flex', gap:'8px', margin:'5px 0'}}>
//                 <input list="emailSuggestions" value={cc} onChange={e=>updateClientNested(i,'cc',j,e.target.value)} placeholder="Cc email" style={{flex:1}}/>
//                 <button onClick={()=>removeClientNested(i,'cc',j)}>–</button>
//               </div>
//             ))}
//             <button onClick={()=>addClientNested(i,'cc')}>Add Cc</button>
//           </div>

//           <div>
//             <b>Bcc:</b>
//             {r.bcc.map((bcc,j)=>(
//               <div key={j} style={{display:'flex', gap:'8px', margin:'5px 0'}}>
//                 <input list="emailSuggestions" value={bcc} onChange={e=>updateClientNested(i,'bcc',j,e.target.value)} placeholder="Bcc email" style={{flex:1}}/>
//                 <button onClick={()=>removeClientNested(i,'bcc',j)}>–</button>
//               </div>
//             ))}
//             <button onClick={()=>addClientNested(i,'bcc')}>Add Bcc</button>
//           </div>
//         </div>
//       ))}

//       <h3 style={{marginTop:'2rem'}}>Manual Recipients</h3>
//       {manualTo.map((r,i)=>(
//         <div key={i} style={{border:'1px #ccc solid', padding:'1rem', margin:'10px 0'}}>
//           <div style={{display:'flex', justifyContent:'space-between'}}>
//             <label><b>To:</b>
//               <input list="emailSuggestions" value={r.to} onChange={e=>updateManualField(i,'to',e.target.value)} placeholder="To email" style={{flex:1, marginLeft:'10px'}}/>
//             </label>
//             {manualTo.length>1 && <button onClick={()=>removeManualTo(i)}>Remove</button>}
//           </div>

//           <div><b>Cc:</b>
//             {r.cc.map((cc,j)=>(
//               <div key={j} style={{display:'flex', gap:'8px', margin:'5px 0'}}>
//                 <input list="emailSuggestions" value={cc} onChange={e=>updateManualNested(i,'cc',j,e.target.value)} placeholder="Cc email" style={{flex:1}}/>
//                 <button onClick={()=>removeManualNested(i,'cc',j)}>–</button>
//               </div>
//             ))}
//             <button onClick={()=>addManualNested(i,'cc')}>Add Cc</button>
//           </div>

//           <div><b>Bcc:</b>
//             {r.bcc.map((bcc,j)=>(
//               <div key={j} style={{display:'flex', gap:'8px', margin:'5px 0'}}>
//                 <input list="emailSuggestions" value={bcc} onChange={e=>updateManualNested(i,'bcc',j,e.target.value)} placeholder="Bcc email" style={{flex:1}}/>
//                 <button onClick={()=>removeManualNested(i,'bcc',j)}>–</button>
//               </div>
//             ))}
//             <button onClick={()=>addManualNested(i,'bcc')}>Add Bcc</button>
//           </div>
//         </div>
//       ))}

//       <datalist id="emailSuggestions">
//         {emailPool.map(e=><option key={e.email} value={e.email}/>)}
//       </datalist>

//       <button onClick={addManualTo}>Add Manual To</button>
//       <div style={{marginTop:'2rem'}}><button onClick={sendMail}>Send Email</button></div>
//     </div>
//   );
// }
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function SendMailPage() {
  const router = useRouter();
  const [clients, setClients] = useState([]);
  const [emailPool, setEmailPool] = useState([]);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [files, setFiles] = useState([]);
  const [search, setSearch] = useState('');
  const sectionRefs = useRef({});
  const [clientList, setClientList] = useState([]); // list of {to, cc[], bcc[], manualCc[], manualBcc[]}
  const [manualList, setManualList] = useState([{ to: '', cc: [''], bcc: [''] }]);

  useEffect(() => {
    fetch('/api/clients').then(r => r.json()).then(setClients);
    (async () => {
      let all = [], page = 1, per = 1000;
      while (true) {
        const res = await fetch(`/api/emails?page=${page}&per=${per}`);
        const batch = await res.json();
        all = [...all, ...batch];
        if (batch.length < per) break;
        page++;
      }
      setEmailPool(all);
    })();
  }, []);

  const domainRelated = email =>
    clients.filter(c => c.email.split('@')[1] === email.split('@')[1]);

  const groupClients = () => {
    const filtered = clients.filter(c => c.email.toLowerCase().includes(search.toLowerCase()));
    const grouped = {};
    filtered.forEach(c => {
      const L = c.email[0].toUpperCase();
      grouped[L] = grouped[L] || [];
      grouped[L].push(c);
    });
    return grouped;
  };
  const grouped = groupClients();

  const handleToggleClient = email => {
    setClientList(prev => {
      const idx = prev.findIndex(r => r.to === email);
      if (idx >= 0) {
        return prev.filter((_,i) => i !== idx);
      }
      return [...prev, { to: email, cc: [], bcc: [], manualCc: [''], manualBcc: [''] }];
    });
  };

  const updateClientField = (i, field, value, j) => {
    setClientList(prev => {
      const copy = [...prev];
      copy[i][field][j] = value;
      return copy;
    });
  };

  const addClientField = (i, field) => {
    setClientList(prev => {
      const copy = [...prev];
      copy[i][field].push('');
      return copy;
    });
  };

  const removeClientField = (i, field, j) => {
    setClientList(prev => {
      const copy = [...prev];
      copy[i][field] = copy[i][field].filter((_,k)=>k!==j);
      return copy;
    });
  };

  const group = grouped;

  const updateManualField = (i, field, value, j) => {
    setManualList(prev => {
      const copy = [...prev];
      if (field === 'to') copy[i].to = value;
      else copy[i][field][j] = value;
      return copy;
    });
  };

  const addManualField = (i, field) => {
    setManualList(prev => {
      const copy = [...prev];
      copy[i][field].push('');
      return copy;
    });
  };

  const removeManualField = (i, field, j) => {
    setManualList(prev => {
      const copy = [...prev];
      copy[i][field] = copy[i][field].filter((_,k)=>k!==j);
      return copy;
    });
  };

  const addManualRow = () => setManualList(prev => [...prev, { to: '', cc: [''], bcc: [''] }]);
  const removeManualRow = i => setManualList(prev => prev.filter((_,k)=>k!==i));

  const sendMail = async () => {
    let payload = [];

    payload = payload.concat(clientList.map(r => ({
      to: r.to,
      cc: [...r.cc, ...r.manualCc.filter(Boolean)],
      bcc: [...r.bcc, ...r.manualBcc.filter(Boolean)]
    })));

    payload = payload.concat(manualList.map(r=>({
      to: r.to,
      cc: r.cc.filter(Boolean),
      bcc: r.bcc.filter(Boolean)
    })));

    payload = payload.filter(r=>r.to);

    if (!payload.length) return alert("Add at least one 'To'");
    if (!body && !files.length) return alert("Add body or attachment");

    const fd = new FormData();
    fd.append('subject', subject);
    fd.append('body', body);
    fd.append('recipients', JSON.stringify(payload));
    files.forEach(f=>fd.append('file', f));

    const res = await fetch('/api/sendMail',{method:'POST',body:fd});
    const msg = await res.json();
    alert(msg.message || msg.error);

    const used = new Set(payload.flatMap(r=>[r.to,...r.cc,...r.bcc]));
    for (const e of used) {
      if (!emailPool.find(x=>x.email===e)) {
        await fetch('/api/emails',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:e})});
      }
    }
  };

  return (
    <div style={{padding:'2rem',fontFamily:'sans-serif'}}>
      <div style={{display:'flex',gap:'10px',marginBottom:'20px'}}>
        <button onClick={()=>router.push('/clients')}>Manage Clients</button>
        <button onClick={()=>router.push('/email-pool')}>Email Pool</button>
      </div>

      <h1>Send Email</h1>
      <label>Subject</label>
      <input value={subject} onChange={e=>setSubject(e.target.value)} style={{width:'100%'}}/>
      <label>Body</label>
      <textarea value={body} onChange={e=>setBody(e.target.value)} style={{width:'100%',height:'100px'}}/>
      <label>Attachments</label>
      <input type="file" multiple onChange={e=>setFiles([...e.target.files])}/>

      <input placeholder="Search clients..." value={search} onChange={e=>setSearch(e.target.value)} style={{width:'100%',margin:'20px 0'}} />

      <h3>Clients (A–Z grouped)</h3>
      {Object.keys(group).sort().map(letter=>(
        <div key={letter} ref={el=>sectionRefs.current[letter]=el}>
          <h4>{letter}</h4>
          {(group[letter]||[]).map(c=>(
            <label key={c.email} style={{display:'block',margin:'4px 0'}}>
              <input type="checkbox" checked={clientList.some(r=>r.to===c.email)} onChange={()=>handleToggleClient(c.email)}/>
              {c.email}
            </label>
          ))}
        </div>
      ))}

      <h3>Client Recipients</h3>
      {clientList.map((r,i)=>(
        <div key={i} style={{border:'1px solid #ddd',padding:'1rem',margin:'10px 0'}}>
          <b>To:</b> {r.to}

          <div><b>Cc (same-domain checkboxes + manual):</b>
            {domainRelated(r.to).map(c=>(
              <label key={c.email} style={{margin:'0 8px'}}>
                <input checked={r.cc.includes(c.email)} type="checkbox" onChange={()=>{
                  r.cc.includes(c.email)
                    ? updateClientField(i,'cc', '', r.cc.indexOf(c.email)) && removeClientField(i,'cc', r.cc.indexOf(c.email))
                    : setClientList(prev=>{ prev[i].cc.push(c.email); return [...prev]; });
                }}/>
                {c.email}
              </label>
            ))}
            {r.manualCc.map((m,j)=>(
              <div key={j} style={{display:'flex',gap:'8px'}}>
                <input list="emailSuggestions" value={m} onChange={e=>updateClientField(i,'manualCc', e.target.value, j)} placeholder="Cc email"/>
                <button onClick={()=>removeClientField(i,'manualCc',j)}>–</button>
              </div>
            ))}
            <button onClick={()=>addClientField(i,'manualCc')}>Add Cc</button>
          </div>

          <div><b>Bcc (same-domain checkboxes + manual):</b>
            {domainRelated(r.to).map(c=>(
              <label key={c.email} style={{margin:'0 8px'}}>
                <input checked={r.bcc.includes(c.email)} type="checkbox" onChange={()=>{
                  r.bcc.includes(c.email)
                    ? updateClientField(i,'bcc','',r.bcc.indexOf(c.email)) && removeClientField(i,'bcc', r.bcc.indexOf(c.email))
                    : setClientList(prev=>{ prev[i].bcc.push(c.email); return [...prev]; });
                }}/>
                {c.email}
              </label>
            ))}
            {r.manualBcc.map((m,j)=>(
              <div key={j} style={{display:'flex',gap:'8px'}}>
                <input list="emailSuggestions" value={m} onChange={e=>updateClientField(i,'manualBcc', e.target.value, j)} placeholder="Bcc email"/>
                <button onClick={()=>removeClientField(i,'manualBcc',j)}>–</button>
              </div>
            ))}
            <button onClick={()=>addClientField(i,'manualBcc')}>Add Bcc</button>
          </div>
        </div>
      ))}

      <h3>Manual Recipients</h3>
      {manualList.map((r,i)=>(
        <div key={i} style={{border:'1px solid #ccc',padding:'1rem',margin:'10px 0'}}>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <label><b>To:</b>
              <input list="emailSuggestions" value={r.to} onChange={e=>updateManualField(i,'to',e.target.value)} placeholder="To email" style={{flex:1}}/>
            </label>
            {manualList.length>1 && <button onClick={()=>removeManualRow(i)}>Remove</button>}
          </div>

          <div><b>Cc:</b>
            {r.cc.map((c,j)=>(
              <div key={j} style={{display:'flex',gap:'8px'}}>
                <input list="emailSuggestions" value={c} onChange={e=>updateManualField(i,'cc',e.target.value,j)} placeholder="Cc email"/>
                <button onClick={()=>removeManualField(i,'cc',j)}>–</button>
              </div>
            ))}
            <button onClick={()=>addManualField(i,'cc')}>Add Cc</button>
          </div>

          <div><b>Bcc:</b>
            {r.bcc.map((b,j)=>(
              <div key={j} style={{display:'flex',gap:'8px'}}>
                <input list="emailSuggestions" value={b} onChange={e=>updateManualField(i,'bcc',e.target.value,j)} placeholder="Bcc email"/>
                <button onClick={()=>removeManualField(i,'bcc',j)}>–</button>
              </div>
            ))}
            <button onClick={()=>addManualField(i,'bcc')}>Add Bcc</button>
          </div>
        </div>
      ))}
      <datalist id="emailSuggestions">{emailPool.map(e=><option key={e.email} value={e.email}/>)}</datalist>
      <button onClick={addManualRow}>Add Manual To</button>

      <div style={{marginTop:'2rem'}}><button onClick={sendMail}>Send Email</button></div>
    </div>
  );
}
