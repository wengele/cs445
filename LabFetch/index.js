window.onload = function () {
    fetchUser();
    document.getElementById('btn').onclick = fetchUser;
}
async function fetchUser() {
    let result = await fetch('https://randomuser.me/api/?results=5');
    let data = await result.json();
    let users = data.results;
    console.log(users);
    findUser(users);

}
function findUser(users) {
    for (let i = 0; i < users.length; i++) {
        let employee = users[i];
        console.log(employee.gender);
        console.log(employee.name.first + " " + employee.name.last);
        console.log(employee.email);
        console.log(employee.picture.large);
        document.getElementById('img' + (i + 1)).src = employee.picture.large;
        document.getElementById('person-name-' + (i + 1)).textContent = employee.name.first + " " + employee.name.last;
        document.getElementById('gender' + (i + 1)).textContent = "Gender: " + employee.gender;
        document.getElementById("email" + (i + 1)).textContent = employee.email;
    }
}