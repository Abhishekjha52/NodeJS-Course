const express = require('express')//returns a function which has lot of methods

const app = express() //to access all the methods, we need to call the express

const middlewareOne = require('./middleware1/app')
const middlewareTwo = require('./middleware2/app')

app.use(express.json()) //Express middleware

app.use(middlewareOne)
app.use(middlewareTwo)


//GET, POST, PUT, DELETE

app.get('/', (req, res)=>{
    res.send("Hello from express server-side")
})

app.get('/about', (req, res)=>{
    res.send("Hello from about section url")
})

// Route Parameters
app.get('/courses/:id', (req, res)=>{
    res.send(req.params.id)
})


//Handling Multiple Routes
let courses = [
    {id:1, name:"JS"},
    {id:2, name:"Java"},
    {id:3, name:"C++"},
]

app.get('/courses/:id', (req, res)=>{
    let course = courses.find(course => course.id === parseInt(req.params.id))
    if(!course)res.status(404).send("The course doesnot exist!!")
    res.send(course)

})  


// HTTPS Methods

app.get('/courses', (req, res)=>{
    res.send(courses);
})

app.post('/courses', (req, res)=>{
    const newCourse = {
        id : courses.length+1,
        name: req.body.name
    }

    courses.push(newCourse)
    res.send(newCourse)
})


app.put('/courses/:name', (req, res)=>{
    let course = courses.find(course => course.name === req.params.name)
    if(!course)res.status(404).send("The course doesnot exist!!")
    course.name = req.body.name
    res.send(course)
})


app.delete('/courses/:name', (req, res)=>{
    let updatedCourses = courses.filter(course => course.name !== req.params.name)
    if(!updatedCourses)res.status(404).send("The course doesnot exist!!")
    courses = updatedCourses
    res.send(courses)
})

//Efficient method to delete 
app.delete('/courses/:id', (req, res)=>{
    let course = courses.filter(course => course.id === parseInt(req.params.id))
    console.log(course)
    if(!course)res.status(404).send("The course doesnot exist!!")
    const index = courses.indexOf(course)
    courses.splice(index, 1)
    res.send(course)
})

const port = process.env.PORT || 3000

app.listen(port, ()=>console.log(`Port is running on ${port} `))