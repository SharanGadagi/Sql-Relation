import cookieParser from 'cookie-parser';
import express from 'express';
import swaggerDoc from 'swagger-ui-express';

import { PORT } from './Config/config';
import Standard from './Models/standard';
import Student from './Models/students';
import Subjects from './Models/subjects';
import Teacher from './Models/teachers';
import standardRoutes from './Routes/standards';
import studentRoutes from './Routes/students';
import subjectMarkRoutes from './Routes/subjects';
import teacherRoutes from './Routes/teachers';
import { swaggerDocs } from './swagger/swagger';
import swaggerDocumentation from './swagger/swagger.json';

require('./Connection/db')

const app: express.Application = express();

app.use(cookieParser());
app.use(express.json());


//sync
Student.sync({ force: false })
Standard.sync({ force: false })
Subjects.sync({ force: false })
Teacher.sync({ force: false })



// app.get('/',(req,res)=>{
// res.send("HIIIIIII")
// })

app.use('/documentation',swaggerDoc.serve, swaggerDoc.setup(swaggerDocumentation));




//all Routes
app.use('/api/student', studentRoutes)
app.use('/api/subjectMarks', subjectMarkRoutes)
app.use('/api/standard', standardRoutes)
app.use('/api/teacher', teacherRoutes)

app.listen(PORT, () => {
    console.log(`app listening on: http://localhost:${PORT}`)
})