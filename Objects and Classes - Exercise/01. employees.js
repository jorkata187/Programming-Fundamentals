function employees(arr) {
    for (let employeeName of arr) {
        let employee = {name: employeeName, personalNum: employeeName.length};
         
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    }
}

employees(['Samuel Jackson', 'George Donchev', 'Janetta Doncheva']);