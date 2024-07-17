const nodemailer = require('nodemailer');


const html = `
<h1> hello world </h1>
</p> welcome to my new email sent via nodemailer</h1>
      /////// <img src = 'cid:unique@openjavascript.info' width='400'>//////
`;

async function main() {
 const transporter = nodemailer.createTransport({ 
        host : 'mail.openjavascript.info',
        port : 465,
        secure : true,
        auth : {
            user: 'test@openjavascript.info',
            pass: 'NodeMailer123!'
        }

});

const info = await transporter.sendMail({
        from: 'test@openjavascript.info',
        to: 'test@openjavascript.info',
        subject: 'testing ,testing 123',
        html: html,
        // adding attachments to a mail
        // attachments:[{
        //filename: './img1.jpg',
        //path: './img2.jpg
        //cid:unique@openjavascript.info
    
    //}]


});

console.log("Message sent: " + info.messageId);

};

main() 
.catch(err => console.log(err));