function Employee(name = "", dept = "general") {
	this.name = name;
	this.dept = dept;
}
function Manager(name = "", dept = "general", reports = []) {
	Employee.call(this, name, dept);
	this.reports = reports;
}
function WorkerBee(name = "", dept = "general", projects = []) {
	Employee.call(this, name, dept);
	this.projects = projects;
}
function SalesPerson(name = "", projects = [], quota = 100) {
	WorkerBee.call(this, name, "sales", projects);
	this.quota = quota;
}
function Engineer(name = "", projects = [], machine = "") {
	WorkerBee.call(this, name, "engineering", projects);
	this.machine = machine;
}
var e1 = new Employee();
var m1 = new Manager();
var w1 = new WorkerBee();
var s1 = new SalesPerson();
var eng1 = new Engineer();
console.log(e1, m1, w1, s1, eng1);
class Employee1 {
	constructor(name = "", dept = "general") {
		this.name = name;
		this.dept = dept;
	}
}
class Manager1 extends Employee1 {
	constructor(name = "", dept = "general", reports = []) {
		super(name, dept);
		this.reports = reports;
	}
}
class WorkerBee1 extends Employee1 {
	constructor(name = "", dept = "general", projects = []) {
		super(name, dept);
		this.projects = projects;
	}
}
class SalesPerson1 extends WorkerBee1 {
	constructor(name = "", projects = [], quota = 100) {
		super(name, "sales", projects);
		this.quota = quota;
	}
}
class Engineer1 extends WorkerBee1 {
	constructor(name = "", projects = [], machine = "") {
		super(name, "engineering", projects);
		this.machine = machine;
	}
}
var e2 = new Employee1();
var m2 = new Manager1();
var w2 = new WorkerBee1();
var s2 = new SalesPerson1();
var eng2 = new Engineer1();
console.log(e2, m2, w2, s2, eng2);
var write = document.getElementById("blog");

fetch("https://jsonplaceholder.typicode.com/users").then((x) => {
	x.text().then((txt) => {
		var resp = JSON.parse(txt);
		resp.forEach((element) => {
			fetch(
				`https://jsonplaceholder.typicode.com/users/${element.id}/posts`
			).then((y) => {
				y.text().then((post) => {
					var gg = JSON.parse(post);
					write.innerHTML += `<h2>${element.name}<h2>`;
					gg.forEach((index) => {
						write.innerHTML += `<ul><h4><li>${index.title}<h4>`;
						write.innerHTML += `<p>${index.body}<p></li>`;
						write.innerHTML += "</ul>";
					});
				});
			});
		});
	});
});
