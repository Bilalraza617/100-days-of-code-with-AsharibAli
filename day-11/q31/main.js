var user_name = [
    "Bilal",
    "Hussain",
    "Qari",
    "Samandar Khan",
    "Admin",
    "Bahadur Khan",
    "Haji",
    "Qasam",
];
user_name.forEach(function (user) {
    if (user === "Admin") {
        console.log("Hello " + user + ", would you like to see a status report?");
    }
    else
        console.log("Hello " + user + ",  thank you for logging in again.");
});
user_name.length = 0;
if (user_name.length === 0)
    console.log("\nWe need to find some users!\n");
