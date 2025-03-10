function showLogin(event) {
    let login = document.getElementById("loginCard");
    let video = document.getElementById("introVid");

    if (event.currentTime >= 4.3) {
        Promise.resolve().then(() => {
            video.classList.add("blurVideo");
            login.style.display = "block";
            login.classList.add("fadeInRight");
        }).catch(reject => {
            login.style.display = "block";
        });
    }
}

document.getElementById("loginButton").addEventListener("click", () => {
    let username = document.getElementById("username").value;
    verifyLogin(username);
});

function verifyLogin(username) {

    if (username !== "[a-zA-Z0-9]+") {
        alert("Please enter a valid username.");
    }
    for (let i = 0; i < users.length; i++) {
        if (username === users[i].userName || username === users[i].userName.toLowerCase()){
            if (users[i].roleIndicator === true) {
                alert(`Welcome ${users[i].fName} ${users[i].lName}. You have successfully logged in as an admin.`);
                return true;
            } else {
                alert(`Welcome ${users[i].fName} ${users[i].lName}. You have successfully logged in as a user.`);
                return true;
            }
        }
    }
    alert("Please enter a valid username.");
    return false;
}

class User {
    constructor(_fName, _lName, _email, _userName, _roleIndicator, _visualId) {
        this._fName = _fName;
        this._lName = _lName;
        this._email = _email;
        this._userName = _userName;
        this._roleIndicator = _roleIndicator;
        this._visualId = _visualId;
    }

    get fName() {
        return this._fName;
    }

    set fName(value) {
        this._fName = value;
    }

    get lName() {
        return this._lName;
    }

    set lName(value) {
        this._lName = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get userName() {
        return this._userName;
    }

    set userName(value) {
        this._userName = value;
    }

    get roleIndicator() {
        return this._roleIndicator;
    }

    set roleIndicator(boolean) {
        this._roleIndicator = boolean;
    }

    get visualId() {
        return this._visualId;
    }

    set visualId(value) {
        this._visualId = value;
    }
}

const house = new User("Gregory", "House", "ghouse@pptch.org", "Monstertrucksrcool", true, "ghouseVID");
const wilson = new User("James", "Wilson", "jwilson@pptch.org", "JWilson", true, "jwilsonVID");
const cuddy = new User("Lisa", "Cuddy", "lcuddy@apptch.org", "lCuddy", true, "lcuddyVID");
const foreman = new User("Eric", "Foreman", "eforeman@pptch.org", "eForeman", false, "foremanVID");
const cameron = new User("Allison", "Cameron", "acameron@pptch.org", "2nice4you", false, "cameronVID");
const chase = new User("Robert", "Chase", "rchase@pptch.org", "nineisfine", false, "chaseVID");
const thirteen = new User("Remy", "Hadley", "rhadley@pptch.org", "thirteen", false, "thirteenVID");
const taub = new User("Chris", "Taub", "ctaub@pptch.org", "plasticman", false, "taubVID");
const kutner = new User("Lawrence", "Kutner", "lkutner@pptch.org", "chillguy", false, "kutnerVID");
const adams = new User("Jessica", "Adams", "jadams@pptch.org", "jAdams", false, "adamsVID");
const park = new User("Chi", "Park", "cpark@pptch.org", "cPark", false, "parkVID");
const tritter = new User("Michael", "Tritter", "mtritter@police.gov", "bullypatrol", false, "tritterVID");
const lucas = new User("Lucas", "Douglas", "lucasPI@yahoo.com", "PrivateGuy", false, "lucasVID");
const vogler = new User("Edward", "Vogler", "evogler@money.net", "moneybags", false, "voglerVID");
const amber = new User("Amber", "Volakis", "avolakis@heaven.edu", "xthroatb", false, "amberVID");

let users = [
    house, wilson, cuddy, foreman, cameron, chase, thirteen, taub, kutner, adams, park, tritter, lucas, vogler, amber
];
console.log(users.length);