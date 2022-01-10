const tableInfo = [
  {
    studentName: "John",
    age: 19,
    phone: "455 - 983 - 0903",
    address: "123 Ave, San Francisco, CA, 94011",
  },
  {
    studentName: "Alex",
    age: 21,
    phone: "455 - 983 - 0912",
    address: "456 Rd, San Francisco, CA, 94012",
  },
  {
    studentName: "Josh",
    age: 22,
    phone: "455 - 345 - 0912",
    address: "789 Dr, Newark, CA, 94016",
  },
  {
    studentName: "Matt",
    age: 23,
    phone: "321 - 345 - 0912",
    address: "223 Dr, Sunnyvale, CA, 94016",
  },
];
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const table = document.getElementById("tableData");
for (let data of tableInfo) {
  let tr = document.createElement("tr");
  table.appendChild(tr);
  for (let prop in data) {
    let td = document.createElement("td");
    td.innerText = data[prop];
    tr.appendChild(td);
  }
}

const numList = document.getElementById("numList");
let ol = document.createElement("ol");
numList.appendChild(ol);
for (let data of list) {
  let li = document.createElement("li");
  li.innerText = data;
  ol.appendChild(li);
}
const pointList = document.getElementById("pointList");
let ul = document.createElement("ul");
pointList.appendChild(ul);
for (let data of list) {
  let li = document.createElement("li");
  li.innerText = data;
  ul.appendChild(li);
}

const dropdown = document.getElementById("dropdown");
let mySelect = document.createElement("select");
mySelect.id = "city";
dropdown.appendChild(mySelect);
for (let drop of dropDownList) {
  let option = document.createElement("option");
  for (let obj in drop) {
    option.text = drop[obj];
    option.value = drop[obj];
    mySelect.appendChild(option);
  }
}
