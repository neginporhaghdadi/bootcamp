/**
 * Problem:
 * Write a simple user management system that allows adding and removing users,
 * and showing the list of users.
 *
 * Your task:
 * Implement the functions `addUser`, `removeUser`, and `showUsers` that
 * manage a list of users.
 *
 * Example:
 * addUser("Alice");
 * showUsers() should return ["Alice"].
 * removeUser("Alice");
 * showUsers() should return [].
 */

let userdata = [];
function addUser(user) {
    userdata.push(user);
    console.log(`${user}`);
}
function showUsers() {
    if (userdata.length === 0) {
        console.log("No users found.");
    } else {
        userdata.forEach((user, index) => {
            console.log(`${index + 1}. ${user}`);
        });
    }
}
function removeUser(user) {
    const index = userdata.indexOf(user); 
    if (index !== -1) {
        userdata.splice(index, 1);
        console.log(`${user} has been removed.`);
    } else {
        console.log(`${user} not found.`);
    }
}


module.exports = { addUser, removeUser, showUsers };
