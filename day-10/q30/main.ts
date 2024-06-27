let user_name = [
  "Bilal",
  "Hussain",
  "Qari",
  "Samandar Khan",
  "Admin",
  "Bahadur Khan",
  "Haji",
  "Qasam",
];

user_name.forEach((user) => {
  if (user === "Admin") {
    console.log("Hello " + user + ", would you like to see a status report?");
  } else console.log("Hello " + user + ",  thank you for logging in again.");
});
