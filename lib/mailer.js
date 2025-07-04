// import nodemailer from 'nodemailer';
// import fs from 'fs';
// import path from 'path';

// export async function sendMailToAllClients(subject, body, filePath, filterEmails = null) {
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   });

//   const fileData = fs.readFileSync(path.resolve('clients.json'), 'utf8');
//   const allClients = JSON.parse(fileData);
//   const clients = filterEmails
//     ? allClients.filter(c => filterEmails.includes(c.email))
//     : allClients;

//   for (const client of clients) {
//     if (filePath) {
//       console.log(`📦 Sending to ${client.email} with attachment: ${filePath}`);
//     } else {
//       console.log(`📨 Sending to ${client.email} with no attachment`);
//     }

//     console.log('🧪 typeof filePath:', typeof filePath);
//     console.log('🛠 filePath value:', filePath);

//     await transporter.sendMail({
//       from: `"YES AND YES REALTOR" <${process.env.SMTP_USER}>`,
//       to: client.email,
//       subject,
//       text: body,
//       attachments: filePath && typeof filePath === 'string'
//         ? [{ path: filePath }]
//         : [],
//     });
//   }
// }
// import nodemailer from 'nodemailer';
// import fs from 'fs';
// import path from 'path';

// export async function sendMailToAllClients(subject, body, filePath, filterEmails = null) {
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   });

//   const fileData = fs.readFileSync(path.resolve('clients.json'), 'utf8');
//   const allClients = JSON.parse(fileData);
//   const clients = filterEmails
//     ? allClients.filter(c => filterEmails.includes(c.email))
//     : allClients;

//   for (const client of clients) {
//     if (filePath) {
//       console.log(`📦 Sending to ${client.email} with attachment: ${filePath}`);
//     } else {
//       console.log(`📨 Sending to ${client.email} with no attachment`);
//     }

//     await transporter.sendMail({
//       from: `"YES AND YES REALTOR" <${process.env.SMTP_USER}>`,
//       to: client.email,
//       subject,
//       text: body,
//       attachments: filePath && typeof filePath === 'string'
//         ? [{
//             path: filePath,
//             filename: path.basename(filePath) // ✅ Show only original filename
//           }]
//         : [],
//     });
//   }
// }
// import nodemailer from 'nodemailer';
// import fs from 'fs';
// import path from 'path';

// export async function sendMailToAllClients(subject, body, filePath, filterEmails = null, ccList = [], bccList = []) {
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   });

//   const fileData = fs.readFileSync(path.resolve('clients.json'), 'utf8');
//   const allClients = JSON.parse(fileData);
//   const clients = filterEmails
//     ? allClients.filter(c => filterEmails.includes(c.email))
//     : allClients;

//   for (const client of clients) {
//     console.log(`📧 To: ${client.email}`);
//     if (filePath) console.log(`📎 Attachment: ${filePath}`);

//     await transporter.sendMail({
//       from: `"YES AND YES REALTORS" <${process.env.SMTP_USER}>`,
//       to: client.email,
//       cc: ccList,
//       bcc: bccList,
//       subject,
//       text: body,
//       attachments: filePath && typeof filePath === 'string'
//         ? [{
//             path: filePath,
//             filename: path.basename(filePath)
//           }]
//         : [],
//     });
//   }
// }
// import nodemailer from 'nodemailer';
// import path from 'path';

// export async function sendMailToAllClients(subject, body, filePath, recipientsList) {
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   });

//   let failures = [];

//   for (const { to, cc = [], bcc = [] } of recipientsList) {
//     try {
//       console.log(`📧 Sending to: ${to}`);
//       const result = await transporter.sendMail({
//         from: `"YES AND YES REALTORS" <${process.env.SMTP_USER}>`,
//         to,
//         cc,
//         bcc,
//         subject,
//         text: body,
//         html: `
//         <p>${body.replace(/\n/g, '<br>')}</p>
//         <hr>
//         <p style="color:blue; font-family:MV Boli, sans-serif; white-space:pre-line;">
//         --
//         Regards:
//         yesandyesrealtor
//         B.S.SHEKAR
//         MOBILE NOS. 90198 00985
//                     94480 61583
//         </p>
//       `,
//         attachments: filePath ? [{
//           path: filePath,
//           filename: path.basename(filePath)
//         }] : [],
//       });

//       console.log(`✅ Sent to ${to}: ${result.messageId}`);
//     } catch (err) {
//       console.error(`❌ Failed to send to ${to}:`, err.message);
//       failures.push({ to, error: err.message });
//     }
//   }

//   if (failures.length > 0) {
//     throw new Error(`Failed to send to: ${failures.map(f => f.to).join(', ')}`);
//   }
// }
import nodemailer from 'nodemailer';
import path from 'path';

export async function sendMailToAllClients(subject, body, filePaths = [], recipientsList) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  let failures = [];

  for (const { to, cc = [], bcc = [] } of recipientsList) {
    try {
      console.log(`📧 Sending to: ${to}`);

      const result = await transporter.sendMail({
        from: `"YES AND YES REALTORS" <${process.env.SMTP_USER}>`,
        to,
        cc,
        bcc,
        subject,
        text: body,
        html: `
          <p>${body.replace(/\n/g, '<br>')}</p>
          <hr>
          <p style="color:blue; font-family:MV Boli, sans-serif; white-space:pre-line;">
          --
          Regards:
          yesandyesrealtor
          B.S.SHEKAR
          MOBILE NOS. 90198 00985
                      94480 61583
          </p>
        `,
        attachments: filePaths.map(fp => ({
          path: fp,
          filename: path.basename(fp)
        }))
      });

      console.log(`✅ Sent to ${to}: ${result.messageId}`);
    } catch (err) {
      console.error(`❌ Failed to send to ${to}:`, err.message);
      failures.push({ to, error: err.message });
    }
  }

  if (failures.length > 0) {
    throw new Error(`Failed to send to: ${failures.map(f => f.to).join(', ')}`);
  }
}
