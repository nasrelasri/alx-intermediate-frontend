interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Bob",
    lastName: "Smith",
    age: 22,
    location: "London"
};

const studentsList: Student[] = [student1, student2];

// Create table element
const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "50%";

// Optional: Add table header
const headerRow = document.createElement("tr");

const thName = document.createElement("th");
thName.textContent = "First Name";
thName.style.border = "1px solid black";
thName.style.padding = "5px";

const thLocation = document.createElement("th");
thLocation.textContent = "Location";
thLocation.style.border = "1px solid black";
thLocation.style.padding = "5px";

headerRow.appendChild(thName);
headerRow.appendChild(thLocation);
table.appendChild(headerRow);

// Loop through students and create rows
studentsList.forEach((student: Student) => {
    const row = document.createElement("tr");

    const cellName = document.createElement("td");
    cellName.textContent = student.firstName;
    cellName.style.border = "1px solid black";
    cellName.style.padding = "5px";

    const cellLocation = document.createElement("td");
    cellLocation.textContent = student.location;
    cellLocation.style.border = "1px solid black";
    cellLocation.style.padding = "5px";

    row.appendChild(cellName);
    row.appendChild(cellLocation);

    table.appendChild(row);
});

// Append table to the body
document.body.appendChild(table);