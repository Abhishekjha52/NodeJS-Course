const mongoose = require ('mongoose');

mongoose
  .connect ('mongodb://localhost/testDatabase')
  .then (() => console.log ('Connection is Successful'))
  .catch (err => console.log ('Couldnot connect to mongodb', err));

// Schema

const courseSchema = new mongoose.Schema ({
  name: {type: String, required: true, minlength: 4, maxlength: 10}, // Inbuilt Validation
  creator: {type: String, required: true},
  tags :  {type : Array, validate : {
        validator : function(tags){
            return tags.length > 1
        }
  }},
  category : { //Inbuilt validators
    type: String,
    required : true,
    enum : ["DSA", "Web", "Mobile", "DEVOPS"]
  },
  publishedDate: {type: Date, default: Date.now},
  isPublished: {type:Boolean, required: true},
  rating : {type: Number, required : function(){return this.isPublished}} //validate using condition
});

// Model

const Course = mongoose.model ('Course', courseSchema);

async function createCourse () {
  const course = new Course ({
    name: 'Java',
    creator: 'Rohit Roy',
    tags : ["HTML", "CSS"],
    category : "Web",
    isPublished: true,
    rating : 10
  });

  try{
    // const result = await course.save ();
    // console.log(result)

    // Inbuilt validator
    await course.validate()
    console.log(course)

  }catch(err){
    //console.log(err.message) 
    //Error validators

    for (field in err.errors){
        console.log(err.errors[field])
    }
  }
}

createCourse ();

// Querying a document

async function getCourses () {
  const courses = await Course.find ({creator: 'Abhishek Jha'}); //.select({name: 1, publishedDate : 1}).sort()
  console.log (courses);
}

getCourses ();

// Comparisional query operator

/*
    eq
    gt
    gte
    lt
    lte
 */

// Logical operators

//  or and and

async function getCourses () {
  const courses = await Course.find ({rating: {$in: [3, 4.4, 4.5, 4.3]}}).or ([
    {creator: 'Abhishek Jha'},
    {rating: 4.5},
  ]);
  //.select({name: 1, publishedDate : 1}).sort()
  console.log (courses);
}

getCourses ();

// Update a document

async function updateCourse (id) {
  let course = await Course.findById (id);
  if (!course) return;

  course.name = 'HTML';
  course.creator = 'Steve';

  const updatedCourse = await course.save ();

  console.log (updatedCourse);
}

updateCourse ('657a9923b3b63df68754e8d2');

// Delete a Document

async function deleteCourse (id) {
  let course = await Course.findByIdAndDelete (id);

  console.log (course);
}

deleteCourse ('657a99e0afde7dcbd5df353c');
