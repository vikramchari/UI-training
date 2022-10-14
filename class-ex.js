// // class Shape {
// //     constructor(name,sides,sidelength) {
// //         this.name=name;
// //         this.sides=sides;
// //         this.sidelength=sidelength;
// //     }
// //     calcPerimeter() {
// //         let perimeter= this.sides * this.sidelength;
// //         console.log(perimeter);
// //     }
// // }

// // const square = new Shape('square',4,5);
// // const triangle = new Shape('triangle',3,8);

// // square.calcPerimeter();
// // triangle.calcPerimeter();



// class Employee {
//     constructor(id,name,desg,dept,isMarried,joininDate) {
//         this.id=id;
//         this.name=name;
//         this.desg=desg;
//         this.dept=dept;
//         this.isMarried=isMarried;
//         this.joininDate=joininDate;
//         }
//         static allEmployeeDetails() {
//           console.log("showing all employee details");

//         }
//     showDetails() {
//         console("employee details is"+ this.id, '\t' + this.name  );
//     }
//     swipeIn() {
//         const {id,name,dept} = Employee;
//         console.log(this.id)
//     }
//     static showAllEmployeeDetails(){
//         console.log("Details Of All the Employee");
//         console.log("ID\tName\tDept\tDesg\tSal");
//         for(let i=0;i<this.employees.length;i++){
//             console.log(this.employees[i].id+"\t"+this.employees[i].name+"\t"+this.employees[i].dept+"\t"+this.employees[i].desg+"\t"+this.employees[i].sal+"\t");
//         }
//     }

//     static employees = [];

//     static addEmployee(employee){
//         this.employees.push(employee);
//     }
// }

// const employee1 = new Employee(1,'hari','teacher','cse',true,new Date());
// const employee2 = new Employee(1,'kari','assistent','eee',true,new Date());
// const employee3 = new Employee(1,'vari','lecturer','civil',true,new Date());
// const employee4 = new Employee(1,'nadi','teacher','cse',true,new Date());
// const employee5 = new Employee(1,'madi','poen','mech',true,new Date());

// Employee.addEmployee(employee1);
// Employee.addEmployee(employee2);
// Employee.addEmployee(employee3);
// Employee.addEmployee(employee4);
// Employee.addEmployee(employee5);

// console.log(employee1);
// employee1.swipeIn();
// Employee.showAllEmployeeDetails();



var mobJson='{"productId":1000,"product":{"name":"Moto","series":"G5+","color":"NightSky"},"price":14900,"category":"Electronics","shippingDetails":{"shipmentNo":"1DEL009","company":"Intel Marketing","receivedOn":"2018-6-19"},"seller":{"name":"xyz Mobile","location":"New York","stock":17}}'

var js = JSON.parse(mobJson);
console.log(js.seller['name'] +" has shipped a "+js.product.name+js.product.series+" worth"+ js.price+" product ID:"+js.productId);