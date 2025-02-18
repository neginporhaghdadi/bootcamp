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

let output = [];

addUser = (user) => output.includes(user) ? false : output.push(user)
removeUser = (user) => output.includes(user) ? output.splice(output.indexOf(user),1) : false
showUsers = () => output


module.exports = { addUser, removeUser, showUsers };
