

function showLogin(event) {
    let login = document.getElementById("loginCard");
    let video = document.getElementById("introVid");
    video.volume = 0.5;
        
    if (event.currentTime >= 4.3) {
        video.classList.add("blurVideo");
        login.style.display = "block";
        login.classList.add("fadeInRight");
    }
    video.onended = () => {
        video.muted = true;
        video.currentTime = 0;
        video.play();
    };

    video.onerror = () => {
        video.style.display = "none";
        document.getElementById("heroPage").style.backgroundImage = "url('assets/houseBackground.jpg')";
        login.style.display = "block";
        login.classList.add("fadeInRight");
    };

}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginButton").addEventListener("click", () => {
        let username = document.getElementById("username").value;
        verifyLogin(username)
            .then((userFound) => {userView(userFound);})
            .catch((error) => {console.log(error);})
    });
});

let stupidCounter = 0;
function verifyLogin (username) {
    let loginMessage = document.getElementById("loginText");
    let houseInsult = document.getElementById("houseInsult");

    return new Promise((resolve, reject) => {
        try{
            if (!/^[a-zA-Z0-9.-_ ]*$/.test(username)) {
                throw new Error("Invalid characters");
            }
            if (username.length < 5 || username.length > 20) {
                throw new Error("Invalid Username Length.");
            }
            for (let i = 0; i < users.length; i++) {
                if (username === users[i].username){
                    loginMessage.classList.add("fadeTextIn");
                    loginMessage.innerText = `Welcome ${users[i].fName} ${users[i].lName}`;
                    resolve(users[i]);
                    break;
                }
            }
            throw new Error("Username not found");

        } catch (e) {
            stupidCounter++;
            loginMessage.innerText = e.message;
            loginMessage.style.color = "red";
            loginMessage.classList.add("text-warning");
            loginMessage.classList.add("shake");
            setTimeout(() => {
                loginMessage.classList.remove("shake");
            }, 600);
            if(stupidCounter === 3){
                houseInsult.play();
                stupidCounter = 0;
            }
            reject(e);
        }
    });
}


function userView (userFound) {
    stupidCounter++;
    document.getElementById("heroPage").style.display = "none";
    document.getElementById("introVid").pause();
    let userView = document.getElementById("userView");
    let login = document.getElementById("loginCard");
  
    userView.style.display = "block";
    login.style.display = "none";
}

















class User {
    constructor(_fName, _lName, _email, _userName, _roleIndicator, _visualId) {
        this._fName = _fName;
        this._lName = _lName;
        this._email = _email;
        this._username = _userName;
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

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
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