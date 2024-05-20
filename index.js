"use strict";
// bài 1
// Định nghĩa lớp Vehicle với các thuộc tính:
//  name là tên của phương tiện,
// year là năm sản xuất,
//  company là hãng xe.
//  Tạo ra hai thực thể từ lớp đã định nghĩa,
//  truy cập trực tiếp vào từng thuộc tính và in thông tin của hai thực thể ra màn hình
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    get getVehicle() {
        return `tên: ${this.name}, năm sản xuất: ${this.year}, hãng xe: ${this.company}`;
    }
    set setVehicleName(name) {
        this.name = name;
    }
    set setVehicleYear(year) {
        this.year = year;
    }
    set setVehicleCompany(company) {
        this.company = company;
    }
}
const vehicle = new Vehicle("xe đạp", 2022, "abc");
vehicle.setVehicleName = "Mazda CX5";
vehicle.setVehicleYear = 2020;
vehicle.setVehicleCompany = "Mazda";
console.log(vehicle.getVehicle);
let studentArr = [];
class Student {
    constructor(id, email, age) {
        this.id = id;
        this.email = email;
        this.age = age;
    }
    set setId(id) {
        this.id = id;
    }
    set setAge(age) {
        this.age = age;
    }
    set setEmail(email) {
        this.email = email;
    }
}
const student1 = new Student(1, "bình", 20);
student1.setId = 2;
student1.setEmail = "binh@gmail.com";
student1.setAge = 20;
studentArr.push(student1);
// bài 3:
// Định nghĩa lớp Employee có các thuộc tính:
// name: tên nhân viên có phạm vi truy cập là public
// company: tên công ty có mức phạm vi truy cập là protected
// phone: số điện thoại có mức phạm vi truy cập cập là private
// printInfo(): phương thức để In ra tất cả thuộc tính
// Tạo ra một thực thể từ lớp Employee và gọi phương thức printInfo() để in ra các thuộc tính
class Employee {
    constructor(name, company, phone) {
        this.company = company;
        this.name = name;
        this.phone = phone;
    }
    printInfo() {
        return `tên nhân viên: ${this.name}, tên công ty: ${this.company}, số điện thoại: ${this.phone}`;
    }
    set setName(name) {
        this.name = name;
    }
    set setCompany(company) {
        this.company = company;
    }
    set setPhone(phone) {
        this.phone = phone;
    }
}
const employee = new Employee("Hương", "ABC", 3557834734);
employee.setName = "Bình";
employee.setCompany = "RikkeiSoft";
employee.setPhone = 70522239344;
console.log(employee.printInfo());
// bài 4:
// Định nghĩa lại lớp Vehicle và thêm các access modifier cho các thuộc tính của lớp.
// Thuộc tính name là public, thuộc tính year là protected và thuộc tính company là private.
// Ngoài ra hãy thêm một thuộc tính mới là id và sử dụng từ khóa readonly để đảm bảo rằng id không thể thay đổi.
// Tạo ra một thực thể và in các thông tin ra màn hình để kiểm tra
class Vehicle2 {
    constructor(id, name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    get getVehicle() {
        return `id: ${this.id}, tên: ${this.name}, năm sản xuất: ${this.year}, hãng xe: ${this.company}`;
    }
    set setVehicleName(name) {
        this.name = name;
    }
    set setVehicleYear(year) {
        this.year = year;
    }
    set setVehicleCompany(company) {
        this.company = company;
    }
}
const vehicle2 = new Vehicle2(1, "xe đạp", 2022, "abc");
vehicle2.setVehicleName = "Mazda CX5";
vehicle2.setVehicleYear = 2020;
vehicle2.setVehicleCompany = "Mazda";
console.log(vehicle2.getVehicle);
// bài 5:
// Định nghĩa lớp Department gồm ba thuộc tính:
// id có phạm vi là public và readonly
// name là tên phòng ban, phạm vi là private
// employee là mảng các nhân viên trong phòng ban, phạm vi là private. Mảng là tập hợp tên nhân viên
// Lớp có phương thức describe. Phương thức describe sẽ in ra id và tên của phòng ban.
class Department {
    constructor(id, name, employee) {
        this.id = id;
        this.employee = employee;
        this.name = name;
    }
}
