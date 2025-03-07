

function showLogin(event){
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




document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginButton").addEventListener("click", () => {
        let username = document.getElementById("username").value;
        console.log(username); // This will log the input value to the console
        verifyLogin(username);
    });
});
function verifyLogin (username) {
    let loginMessage = document.getElementById("loginText");
    let userFound = false;

    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username){
            userFound = true;

            loginMessage.classList.add("fadeIn");
            loginMessage.innerText = `${users[i].fName} ${users[i].lName}`;
            // successfulLogin();
            break;
        }
    }
    if(!userFound) {
        loginMessage.innerText = "Invalid Username";
    }
}

function successfulLogin() {
    let loginCard = document.getElementById("loginCard");
    loginCard.classList.add("fadeIn");

    loginCard.innerHTML = ""
    loginCard.innerHTML += `
    <div class="card-body">
        <h5 class="card-title">Welcome</h5>
        <p class="card-text">You have successfully logged in</p>
        <button id="logoutButton" class="btn btn-primary">Logout</button>
    </div>
    `;

}





class User {
    constructor(_fName, _lName, _email, _username, _roleIndicator, _visualId) {
        this._fName = _fName;
        this._lName = _lName;
        this._email = _email;
        this._username = _username;
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

//15 Users...
const house = new User("Gregory","House","ghouse@pptch.org","Monstertrucksrcool", true, "ghouseVID");
const wilson = new User("James", "Wilson","jwilson@pptch.org","JWilson", true, "jwilsonVID");
const cuddy = new User("Lisa", "Cuddy", "lcuddy@apptch.org", "lCuddy", true, "lcuddyVID");
const foreman = new User("Eric", "Foreman", "eforeman@pptch.org", "eForeman", false, "foremanVID");
const cameron = new User("Allison", "Cameron", "acameron@pptch.org", "2nice4you", false, "cameronVID");
const chase = new User("Robert", "Chase", "rchase@pptch.org", "nineisfine", false, "chaseVID");
const thirteen = new User("Remy", "Hadley", "rhadley@pptch.org", "thirteen", false, "thirteenVID");
const taub = new User("Chris", "Taub", "ctaub@pptch.org", "plasticman", false, "taubVID");
const kutner = new User("Lawrence", "Kutner", "lkutner@pptch.org", "chillguy", false, "kutnerVID");
//Idk who thse are havent watched later seasons
const adams = new User("Jessica", "Adams", "jadams@pptch.org", "jAdams", false, "adamsVID");
const park = new User("Chi", "Park", "cpark@pptch.org", "cPark", false, "parkVID");
// Detective guy
const tritter = new User("Michael", "Tritter", "mtritter@police.gov", "bullypatrol", false, "tritterVID");
//PI guy
const lucas = new User("Lucas", "Douglas", "lucasPI@yahoo.com", "PrivateGuy", false, "lucasVID");
//Money guy
const vogler = new User("Edward", "Vogler", "evogler@money.net", "moneybags", false, "voglerVID");
const amber = new User("Amber", "Volakis", "avolakis@heaven.edu", "xthroatb", false, "amberVID");

const users = [
    house, wilson, cuddy, foreman, cameron, chase, thirteen, taub, kutner, adams, park, tritter, lucas, vogler, amber
];
console.log(users.length);

