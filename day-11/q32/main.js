var current_users = ["Bilal", "Raza", "Qasam", "Zoya", "Carton"];
var new_users = ["Carton", "Rajab", "Raza", "Fazal", "Qari"];
var current_users_lower = current_users.map(function (user) {
    return user.toLowerCase();
});
// Loop through each new user
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // Check if the new username is already taken (case insensitive)
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Sorry, the username '".concat(new_user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_user, "' is available."));
    }
}
