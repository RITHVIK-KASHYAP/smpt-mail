// import { sendMailToAllClients } from '../../lib/mailer.js';
// import { formidable } from 'formidable';
// import fs from 'fs';
// import path from 'path';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   if (req.method !== 'POST') return res.status(405).end();

//   const form = formidable({
//     uploadDir: path.join(process.cwd(), 'uploads'),
//     keepExtensions: true,
//     multiples: false,
//   });

//   try {
//     const { fields, files } = await new Promise((resolve, reject) => {
//       form.parse(req, (err, fields, files) => {
//         if (err) reject(err);
//         else resolve({ fields, files });
//       });
//     });

//     const subject = String(fields.subject || '');
//     const body = String(fields.body || '');
//     const recipients = JSON.parse(fields.recipients || '[]');

//     const file = files.file;
//     const filePath = Array.isArray(file) ? file[0]?.filepath : file?.filepath || null;

//     console.log('📤 Subject:', subject);
//     console.log('📨 Body:', body);
//     console.log('📧 Recipients:', recipients);
//     console.log('📁 FilePath:', filePath);

//     if (filePath && typeof filePath !== 'string') {
//       return res.status(400).json({ error: 'Invalid file path type' });
//     }

//     await sendMailToAllClients(subject, body, filePath, recipients);
//     return res.status(200).json({ message: 'Emails sent successfully' });

//   } catch (error) {
//     console.error('❌ Email send error:', error);
//     return res.status(500).json({ error: 'Failed to send email' });
//   }
// }
// import { sendMailToAllClients } from '../../lib/mailer.js';
// import { formidable } from 'formidable';
// import fs from 'fs';
// import path from 'path';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   if (req.method !== 'POST') return res.status(405).end();

//   const form = formidable({
//     uploadDir: path.join(process.cwd(), 'uploads'),
//     keepExtensions: true,
//     multiples: false,
//   });

//   try {
//     const { fields, files } = await new Promise((resolve, reject) => {
//       form.parse(req, (err, fields, files) => {
//         if (err) reject(err);
//         else resolve({ fields, files });
//       });
//     });

//     const subject = String(fields.subject || '');
//     const body = String(fields.body || '');
//     const recipients = JSON.parse(fields.recipients || '[]');

//     let filePath = null;

//     const file = files.file;
//     if (file) {
//       const fileObj = Array.isArray(file) ? file[0] : file;
//       const oldPath = fileObj.filepath;
//       const originalName = fileObj.originalFilename.replace(/[^a-zA-Z0-9_.-]/g, '_');
//       const newPath = path.join(path.dirname(oldPath), originalName);

//       // Rename the file to its original name
//       fs.renameSync(oldPath, newPath);
//       filePath = newPath;

//       console.log(`📝 Renamed ${oldPath} → ${newPath}`);
//     }

//     await sendMailToAllClients(subject, body, filePath, recipients);
//     return res.status(200).json({ message: 'Emails sent successfully' });

//   } catch (error) {
//     console.error('❌ Email send error:', error);
//     return res.status(500).json({ error: 'Failed to send email' });
//   }
// }
// import { sendMailToAllClients } from '../../lib/mailer.js';
// import { formidable } from 'formidable';
// import fs from 'fs';
// import path from 'path';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   if (req.method !== 'POST') return res.status(405).end();

//   const form = formidable({
//     uploadDir: path.join(process.cwd(), 'uploads'),
//     keepExtensions: true,
//     multiples: false,
//   });

//   try {
//     const { fields, files } = await new Promise((resolve, reject) => {
//       form.parse(req, (err, fields, files) => {
//         if (err) reject(err);
//         else resolve({ fields, files });
//       });
//     });

//     const subject = String(fields.subject || '');
//     const body = String(fields.body || '');
//     const recipients = JSON.parse(fields.recipients || '[]');
//     const cc = fields.cc ? JSON.parse(fields.cc) : [];
//     const bcc = fields.bcc ? JSON.parse(fields.bcc) : [];

//     const file = files.file;
//     const fileObj = Array.isArray(file) ? file[0] : file;
//     let filePath = fileObj?.filepath || null;

//     if (fileObj && fileObj.originalFilename) {
//       const originalName = fileObj.originalFilename.replace(/[^a-zA-Z0-9_.-]/g, '_');
//       const renamedPath = path.join(path.dirname(filePath), originalName);
//       fs.renameSync(filePath, renamedPath);
//       filePath = renamedPath;
//     }

//     await sendMailToAllClients(subject, body, filePath, recipients, cc, bcc);
//     return res.status(200).json({ message: 'Emails sent successfully' });

//   } catch (error) {
//     console.error('❌ Email send error:', error);
//     return res.status(500).json({ error: 'Failed to send email' });
//   }
// }
// import { sendMailToAllClients } from '../../lib/mailer.js';
// import { formidable } from 'formidable';
// import fs from 'fs';
// import path from 'path';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).send('Method Not Allowed');
//   }

//   const form = formidable({
//     uploadDir: path.join(process.cwd(), 'uploads'),
//     keepExtensions: true,
//   });

//   try {
//     const [fields, files] = await form.parse(req);

//     // Safely extract string values from fields (handles arrays, undefined)
//     const getFieldString = (val) => Array.isArray(val) ? val[0] : val || '';

//     const body = getFieldString(fields.body);
//     const subject = getFieldString(fields.subject);
//     const recipients = JSON.parse(getFieldString(fields.recipients) || '[]');

//     const file = files.file;
//     const hasAttachment = file && fs.existsSync(file[0].filepath);
//     const hasBody = body.trim().length > 0;

//     if (!hasBody && !hasAttachment) {
//       return res.status(400).json({
//         error: 'You must provide either a message body or an attachment.',
//       });
//     }

//     let finalPath = null;
//     if (hasAttachment) {
//       const originalName = file[0].originalFilename;
//       const oldPath = file[0].filepath;
//       finalPath = path.join(process.cwd(), 'uploads', originalName);
//       const rawData = fs.readFileSync(oldPath);
//       fs.writeFileSync(finalPath, rawData);
//     }

//     await sendMailToAllClients(subject, body, finalPath, recipients);

//     // Cleanup uploaded file(s)
//     if (hasAttachment) {
//       fs.unlinkSync(file[0].filepath); // delete temp file
//       fs.unlinkSync(finalPath);        // delete renamed file
//     }

//     return res.status(200).json({ message: 'Emails sent successfully' });
//   } catch (error) {
//     console.error('Email send error:', error);
//     return res.status(500).json({ error: 'Error sending emails' });
//   }
// }
// import { sendMailToAllClients } from '../../lib/mailer.js';
// import { formidable } from 'formidable';
// import fs from 'fs';
// import path from 'path';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).send('Method Not Allowed');
//   }

//   const form = formidable({
//     uploadDir: '/tmp', // ✅ Vercel-safe temp directory
//     keepExtensions: true,
//   });

//   try {
//     const [fields, files] = await form.parse(req);

//     const getFieldString = (val) => Array.isArray(val) ? val[0] : val || '';
//     const body = getFieldString(fields.body);
//     const subject = getFieldString(fields.subject);
//     const recipients = JSON.parse(getFieldString(fields.recipients) || '[]');

//     const file = files.file;
//     const hasAttachment = file && fs.existsSync(file[0].filepath);
//     const hasBody = body.trim().length > 0;

//     if (!hasBody && !hasAttachment) {
//       return res.status(400).json({
//         error: 'You must provide either a message body or an attachment.',
//       });
//     }

//     let finalPath = null;
//     if (hasAttachment) {
//       const originalName = file[0].originalFilename;
//       const tempPath = file[0].filepath;
//       finalPath = path.join('/tmp', originalName);
//       const rawData = fs.readFileSync(tempPath);
//       fs.writeFileSync(finalPath, rawData);
//     }

//     await sendMailToAllClients(subject, body, finalPath, recipients);

//     // Clean up temp files
//     if (hasAttachment) {
//       fs.unlinkSync(file[0].filepath); // Temp name
//       fs.unlinkSync(finalPath);        // Renamed file
//     }

//     return res.status(200).json({ message: 'Emails sent successfully' });
//   } catch (error) {
//     console.error('Email send error:', error);
//     return res.status(500).json({ error: 'Error sending emails' });
//   }
// }
// import { sendMailToAllClients } from '../../lib/mailer.js';
// import { formidable } from 'formidable';
// import fs from 'fs';
// import path from 'path';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).send('Method Not Allowed');
//   }

//   const form = formidable({
//     uploadDir: '/tmp',
//     keepExtensions: true,
//   });

//   try {
//     const [fields, files] = await form.parse(req);

//     const getFieldString = (val) => Array.isArray(val) ? val[0] : val || '';

//     const body = getFieldString(fields.body);
//     const subject = getFieldString(fields.subject);
//     const rawRecipients = getFieldString(fields.recipients);

//     let recipientsList;
//     try {
//       recipientsList = JSON.parse(rawRecipients);
//     } catch (err) {
//       return res.status(400).json({ error: 'Invalid recipients format' });
//     }

//     const file = files.file;
//     const hasAttachment = file && fs.existsSync(file[0].filepath);
//     const hasBody = body.trim().length > 0;

//     if (!hasBody && !hasAttachment) {
//       return res.status(400).json({
//         error: 'You must provide either a message body or an attachment.',
//       });
//     }

//     let finalPath = null;
//     if (hasAttachment) {
//       const originalName = file[0].originalFilename;
//       const oldPath = file[0].filepath;
//       finalPath = path.join('/tmp', originalName);
//       const rawData = fs.readFileSync(oldPath);
//       fs.writeFileSync(finalPath, rawData);
//     }

//     await sendMailToAllClients(subject, body, finalPath, recipientsList);

//     if (hasAttachment) {
//       fs.unlinkSync(file[0].filepath);
//       fs.unlinkSync(finalPath);
//     }

//     return res.status(200).json({ message: 'Emails sent successfully' });
//   } catch (error) {
//     console.error('Email send error:', error);
//     return res.status(500).json({ error: 'Error sending emails' });
//   }
// }
import { sendMailToAllClients } from '../../lib/mailer.js';
import { formidable } from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const form = formidable({
    uploadDir: '/tmp',
    keepExtensions: true,
    multiples: true,
  });

  try {
    const [fields, files] = await form.parse(req);

    const getField = (v) => Array.isArray(v) ? v[0] : v || '';

    const body = getField(fields.body);
    const subject = getField(fields.subject);
    const recipientsRaw = getField(fields.recipients);

    let recipientsList;
    try {
      recipientsList = JSON.parse(recipientsRaw);
    } catch {
      return res.status(400).json({ error: 'Invalid JSON in recipients' });
    }

    const uploadedFiles = Array.isArray(files.file) ? files.file : files.file ? [files.file] : [];
    const filePaths = [];

    for (const file of uploadedFiles) {
      const finalPath = path.join('/tmp', file.originalFilename);
      fs.copyFileSync(file.filepath, finalPath);
      filePaths.push(finalPath);
    }

    if (!body.trim() && filePaths.length === 0) {
      return res.status(400).json({ error: 'Must provide a body or at least one attachment.' });
    }

    await sendMailToAllClients(subject, body, filePaths, recipientsList);

    for (const file of filePaths) fs.unlinkSync(file);

    return res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
