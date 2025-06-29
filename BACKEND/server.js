const express=require("express");
const cors=require("cors")
const nodemailer=require("nodemailer");
const dotenv=require("dotenv");
dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());



app.post("/send-email",async(req,res)=>{
    const {name,email,message}=req.body;
    console.log(name,email,message)
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,  
                pass: process.env.PASSWORD 
            }
        });

        let mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error("Email Sending Error:", error);
        res.status(500).json({ message: "Failed to send email", error: error.message });
    }
});

app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`);
})