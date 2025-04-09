const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')

const app=express()
app.use(bodyParser.json());

const MONGO_URI = "Add url and password";

mongoose.connect(MONGO_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(" MongoDB Connected"))
    .catch((err) => console.log(" MongoDB Connection Error:", err));


const StudentSchema=new mongoose.Schema({
    name:String,
    marks:Number
})

const Student=mongoose.model('Student',StudentSchema);

app.get('/student',async(req,res)=>{
    
    const stud=await Student.find();
    res.send(stud);
    
});


app.post('/add-student',async(req,res)=>{
        const{name,marks}=req.body;
        const newStudent=new Student({name,marks});
        await newStudent.save();
        console.log(req.body);



})
app.delete('/del-student/:name',async(req,res)=>{
    const {name}=req.params;
    const student=await Student.findOneAndDelete({name});


})

app.put('/update-stud/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, marks } = req.body;
        const updatedStudent = await Student.findByIdAndUpdate(
            id,
            { name, marks },
            { new: true }
        );
        if (updatedStudent) {
            res.status(200).json({ message: 'Student updated', student: updatedStudent });
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error updating student' });
    }
});


    app.listen(3000, () => console.log(" Server running on port 3000"));
