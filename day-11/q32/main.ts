let current_users: string[] = ["Bilal", "Raza", "Qasam", "Zoya", "Carton"];
let new_users: string[] = ["Carton", "Rajab", "Raza", "Fazal", "Qari"];

let current_users_lower: string[] = current_users.map((user) =>
  user.toLowerCase()
);

// Loop through each new user
for (let new_user of new_users) {
  // Check if the new username is already taken (case insensitive)
  if (current_users_lower.includes(new_user.toLowerCase())) {
    console.log(
      `Sorry, the username '${new_user}' is not available. Please enter a new username.`
    );
  } else {
    console.log(`Congratulations! The username '${new_user}' is available.`);
  }
}
