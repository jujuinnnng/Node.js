const { error, info } = require('console');
const nodemailer = require('nodemailer');
const { text } = require('stream/consumers');
const email = {
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4ab4eef878709d",
      pass: "5d0d9106aacb2b"
    }
};

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error){
            console.log(error)
        } else {
            console.log(info)

            return info.response;
        }
    });
};

let email_data = {
    from: 'seosj3104a@gmail.com',
    to: 'seosj3104a@gmail.com',
    subject: '테스트 메일 입니다.',
    text: 'node.js 메일 test'
}

send(email_data);