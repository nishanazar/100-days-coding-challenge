// Creating a blueprint (interface) for student information

interface Student {
  name: string;
  age: number;
  courses: string[];
}
// Filling in the blueprint with an example student

let student: Student = {
  name: "Ali",
  age: 25,
  courses: ["Math", "Science", "English"],
};
console.log(student);

// we're using the blueprint to make sure our student has a
// name, age, and list of courses.
