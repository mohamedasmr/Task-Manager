const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mohamedasmr98@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welocome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mohamedasmr98@gmail.com',
        subject: 'Thanks for using our services',
        text: `Thank you ${name}. We would love to work again together in the future.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}