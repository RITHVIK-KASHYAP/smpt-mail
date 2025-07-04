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
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function SendMailPage() {
  const router = useRouter();
  const [clients, setClients] = useState([]);
  const [emailPool, setEmailPool] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [files, setFiles] = useState([]);
  const [search, setSearch] = useState('');
  const sectionRefs = useRef({});
  const [manualTo, setManualTo] = useState('');
  const [manualCc, setManualCc] = useState('');
  const [manualBcc, setManualBcc] = useState('');
  const [showAllCc, setShowAllCc] = useState(false);
  const [showAllBcc, setShowAllBcc] = useState(false);

  useEffect(() => {
    fetch('/api/clients')
      .then(res => res.json())
      .then(setClients);

    fetch('/api/emails')
      .then(res => res.json())
      .then(setEmailPool);
  }, []);

  const groupClients = () => {
    const filtered = clients.filter(c =>
      c.email.toLowerCase().includes(search.toLowerCase())
    );
    const grouped = {};
    filtered.forEach(client => {
      const letter = client.email[0].toUpperCase();
      if (!grouped[letter]) grouped[letter] = [];
      grouped[letter].push(client);
    });
    return grouped;
  };

  const groupedClients = groupClients();

  const scrollTo = (letter) => {
    if (sectionRefs.current[letter]) {
      sectionRefs.current[letter].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTo = (email) => {
    setRecipients(prev =>
      prev.some(r => r.to === email)
        ? prev.filter(r => r.to !== email)
        : [...prev, { to: email, cc: [], bcc: [] }]
    );
  };

  const toggleCC = (toEmail, ccEmail) => {
    setRecipients(prev => prev.map(r => {
      if (r.to !== toEmail) return r;
      return {
        ...r,
        cc: r.cc.includes(ccEmail)
          ? r.cc.filter(e => e !== ccEmail)
          : [...r.cc, ccEmail]
      };
    }));
  };

  const toggleBCC = (toEmail, bccEmail) => {
    setRecipients(prev => prev.map(r => {
      if (r.to !== toEmail) return r;
      return {
        ...r,
        bcc: r.bcc.includes(bccEmail)
          ? r.bcc.filter(e => e !== bccEmail)
          : [...r.bcc, bccEmail]
      };
    }));
  };

  const getDomain = email => email.split('@')[1];

  const saveToPoolIfNew = async (email) => {
    if (!emailPool.some(e => e.email === email)) {
      await fetch('/api/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
    }
  };

  const sendMail = async () => {
    if (recipients.length === 0) return alert("Select at least one 'To' recipient.");
    if (!body && files.length === 0) return alert("Provide either a message body or attachments.");

    const formData = new FormData();
    formData.append('subject', subject || '');
    formData.append('body', body || '');
    formData.append('recipients', JSON.stringify(recipients));
    files.forEach(f => formData.append('file', f));

    const res = await fetch('/api/sendMail', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    alert(data.message || data.error);

    // Save all new manual entries to email pool
    for (const r of recipients) {
      await saveToPoolIfNew(r.to);
      for (const c of r.cc) await saveToPoolIfNew(c);
      for (const b of r.bcc) await saveToPoolIfNew(b);
    }
  };

  const addManualEntry = (email, type) => {
    if (!email) return;
    const existing = recipients.find(r => r.to === email);
    if (!existing) {
      setRecipients(prev => [...prev, { to: email, cc: [], bcc: [] }]);
    } else {
      setRecipients(prev =>
        prev.map(r => {
          if (r.to !== email) return r;
          if (type === 'cc' && !r.cc.includes(email)) r.cc.push(email);
          if (type === 'bcc' && !r.bcc.includes(email)) r.bcc.push(email);
          return r;
        })
      );
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', position: 'relative' }}>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '20px' }}>
        <button onClick={() => router.push('/clients')}>Manage Clients</button>
        <button onClick={() => router.push('/email-pool')}>Email Pool</button>
      </div>

      <h1>Send Email</h1>

      <input
        placeholder="Search clients..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', marginBottom: '15px' }}
      />

      <label><b>Subject:</b></label>
      <input value={subject} onChange={e => setSubject(e.target.value)} style={{ width: '100%' }} />

      <label><b>Body:</b></label>
      <textarea value={body} onChange={e => setBody(e.target.value)} style={{ width: '100%', height: '100px' }} />

      <label><b>Attachments:</b></label>
      <input type="file" multiple onChange={(e) => setFiles([...e.target.files])} />

      <h3>To:</h3>
      {Object.keys(groupedClients).sort().map(letter => (
        <div key={letter} ref={el => sectionRefs.current[letter] = el}>
          <h4>{letter}</h4>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {groupedClients[letter].map(client => (
              <li key={client.email}>
                <label>
                  <input
                    type="checkbox"
                    checked={recipients.some(r => r.to === client.email)}
                    onChange={() => toggleTo(client.email)}
                  /> {client.email}
                </label>
                {recipients.find(r => r.to === client.email) && (
                  <>
                    <div style={{ marginLeft: '20px' }}>
                      <b>CC:</b>
                      {(showAllCc ? clients : clients.filter(c => getDomain(c.email) === getDomain(client.email)))
                        .map(cc => (
                          <label key={`cc-${client.email}-${cc.email}`} style={{ marginLeft: '10px' }}>
                            <input
                              type="checkbox"
                              checked={recipients.find(r => r.to === client.email)?.cc.includes(cc.email)}
                              onChange={() => toggleCC(client.email, cc.email)}
                            /> {cc.email}
                          </label>
                        ))}
                      {!showAllCc && (
                        <button onClick={() => setShowAllCc(true)} style={{ marginLeft: 10 }}>
                          Show All
                        </button>
                      )}
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                      <b>BCC:</b>
                      {(showAllBcc ? clients : clients.filter(c => getDomain(c.email) === getDomain(client.email)))
                        .map(bcc => (
                          <label key={`bcc-${client.email}-${bcc.email}`} style={{ marginLeft: '10px' }}>
                            <input
                              type="checkbox"
                              checked={recipients.find(r => r.to === client.email)?.bcc.includes(bcc.email)}
                              onChange={() => toggleBCC(client.email, bcc.email)}
                            /> {bcc.email}
                          </label>
                        ))}
                      {!showAllBcc && (
                        <button onClick={() => setShowAllBcc(true)} style={{ marginLeft: 10 }}>
                          Show All
                        </button>
                      )}
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div style={{
        position: 'fixed', right: '10px', top: '120px',
        display: 'flex', flexDirection: 'column', fontSize: '14px'
      }}>
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l => (
          <button key={l} onClick={() => scrollTo(l)}>{l}</button>
        ))}
      </div>

      <h3 style={{ marginTop: '2rem' }}>Add Manual Email Recipients</h3>
      <div style={{ marginBottom: '10px' }}>
        <input
          placeholder="To"
          list="emailSuggestions"
          value={manualTo}
          onChange={e => setManualTo(e.target.value)}
          onBlur={() => {
            addManualEntry(manualTo, 'to');
            setManualTo('');
          }}
        />
        <input
          placeholder="Cc"
          list="emailSuggestions"
          value={manualCc}
          onChange={e => setManualCc(e.target.value)}
          onBlur={() => {
            addManualEntry(manualCc, 'cc');
            setManualCc('');
          }}
          style={{ marginLeft: '10px' }}
        />
        <input
          placeholder="Bcc"
          list="emailSuggestions"
          value={manualBcc}
          onChange={e => setManualBcc(e.target.value)}
          onBlur={() => {
            addManualEntry(manualBcc, 'bcc');
            setManualBcc('');
          }}
          style={{ marginLeft: '10px' }}
        />
        <datalist id="emailSuggestions">
          {emailPool.map(e => <option key={e.email} value={e.email} />)}
        </datalist>
      </div>

      <button onClick={sendMail} style={{ marginTop: '30px' }}>
        Send Email
      </button>
    </div>
  );
}
