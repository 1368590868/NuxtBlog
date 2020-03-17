
"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main (email, subject, html) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'i.ranlin@qq.com',
      pass: 'uzvahzhqxuguiihh'
    }
  });

  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"帅气的木木 👻" <i.ranlin@qq.com>', // sender address
      to: email, // list of receivers
      subject: subject, // Subject line
      text: " ", // plain text body
      html: html // html body
    });
  

    // console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }catch(err){console.log("联系人为定义，或错误");}}

main().catch(console.error);

// 定义main
exports.sendMail = main
