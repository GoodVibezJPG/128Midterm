class User {
    constructor(_fName, _lName, _email, _userName, _roleIndicator, _visualId, _description) {
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

    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
}

const house = new User("Gregory", "House", "ghouse@pptch.org", "speedDemon", true, "houseVID");
const wilson = new User("James", "Wilson", "jwilson@pptch.org", "JWilson", true, "wilsonVID");
const cuddy = new User("Lisa", "Cuddy", "lcuddy@apptch.org", "lCuddy", true, "cuddyVID");
const foreman = new User("Eric", "Foreman", "eforeman@pptch.org", "eForeman", false, "foremanVID");
const cameron = new User("Allison", "Cameron", "acameron@pptch.org", "2nice4you", false, "cameronVID");
const chase = new User("Robert", "Chase", "rchase@pptch.org", "aussie", false, "chaseVID");
const thirteen = new User("Remy", "Hadley", "rhadley@pptch.org", "thirteen", false, "thirteenVID");
const taub = new User("Chris", "Taub", "ctaub@pptch.org", "plasticman", false, "taubVID");
const kutner = new User("Lawrence", "Kutner", "lkutner@pptch.org", "chillguy", false, "kutnerVID");
const adams = new User("Jessica", "Adams", "jadams@pptch.org", "jAdams", false, "adamsVID");
const park = new User("Chi", "Park", "cpark@pptch.org", "cPark", false, "parkVID");
const tritter = new User("Michael", "Tritter", "mtritter@police.gov", "bullypatrol", false, "tritterVID");
const lucas = new User("Lucas", "Douglas", "lucasPI@yahoo.com", "PrivateGuy", false, "lucasVID");
const vogler = new User("Edward", "Vogler", "evogler@money.net", "moneybags", false, "voglerVID");
const amber = new User("Amber", "Volakis", "avolakis@heaven.edu", "xthroatb", false, "amberVID");

// array of user objects
let users = [
    house, wilson, cuddy, foreman, cameron, chase, thirteen, taub, kutner, adams, park, tritter, lucas, vogler, amber
];

//User Descriptions
house.description = "Everybody lies."
wilson.description = "The health department. They frown on topless oncology."
cuddy.description = "Okay, let's just get this patient healthy. I want her going out the front door and not the back."
foreman.description = "This vexes me"
cameron.description = "I miss my dead husband."
chase.description = "Fair dinkum, this is as crook as a kangaroo's back leg!"
thirteen.description = "I go both ways."
taub.description = "I hate my wife."
kutner.description = "I'm just a chill guy"
adams.description = "Hello im a doctor"
park.description = "I am also a doctor" 
tritter.description = "I hate bullies"
lucas.description = "I can lie, but im not good at it"
vogler.description = "💰💰💰"
amber.description = "What color was my necklace?"




function showLogin(event) {
    let login = document.getElementById("loginCard");
    let video = document.getElementById("introVid");
    //turn it down a little bit
    video.volume = 0.5;
        
    //On the weee, fly fade in
    if (event.currentTime >= 4.3) {
        video.classList.add("blurVideo");
        login.style.display = "block";
        login.classList.add("fadeInRight");
    }
    //After first loop mute
    video.onended = () => {
        video.muted = true;
    };
}


//Houses stupid counter
let stupidCounter = 0;
//Verify login from the username
async function verifyLogin (username) {
    let loginMessage = document.getElementById("loginText");
    let houseInsult = document.getElementById("houseInsult");

    //Resolve or reject on user login
    return new Promise((resolve, reject) => {
        try{
            //no injections Regex
            if (!/^[a-zA-Z0-9.-_ @]*$/.test(username)) {
                throw new Error("Invalid characters");
            }
            //wrong length
            if (username.length < 5 || username.length > 25) {
                throw new Error("Invalid Username Length.");
            }
            for (let i = 0; i < users.length; i++) {
                if (username.toLowerCase() === users[i].username.toLowerCase() || username.toLowerCase() === users[i].email.toLowerCase()) {
                    //Unique login for certain users
                    switch (username) {
                        case house.username:
                            loginMessage.innerText = `Everybody lies, except your login. Welcome back Dr. ${users[i].lName}`;
                            break;
                        case wilson.username:
                            loginMessage.innerText = `Dr. ${users[i].lName}, welcome back.`;
                            break;
                        case cuddy.username:
                            loginMessage.innerText = `Welcome the boss ${users[i].fName} ${users[i].lName}`;
                            break;
                        case foreman.username:
                            loginMessage.innerText = `Welcome the vexed ${users[i].fName} ${users[i].lName}`;
                            break;
                        case chase.username:
                            loginMessage.innerText = `G'Day Mate ${users[i].fName} ${users[i].lName}`;
                            break;
                        case thirteen.username:
                            loginMessage.innerText = `Who are you? Oh welcome back 13.`;
                            break;
                        case tritter.username:
                            loginMessage.innerText = `Welcome detective ${users[i].fName} ${users[i].lName}`;
                            break;
                        default:
                            loginMessage.innerText = `Welcome ${users[i].fName} ${users[i].lName}`;
                    }
                    loginMessage.classList.add("fadeIn");
                    return resolve(users[i]);
                }
            }
            throw new Error("Username not found");
        } catch (e) {
            stupidCounter++;
            loginMessage.style.color = "red";
            loginMessage.classList.add("errorText");
            loginMessage.classList.add("shake");
            setTimeout(() => {
                loginMessage.classList.remove("errorText");
                loginMessage.classList.remove("shake");
            }, 600);
            //House calls you stupid if you get 3 wrong
            if(stupidCounter === 3){
                houseInsult.play();
                stupidCounter = 0;
            }
            return reject(e);
        }
    });
}

async function userView (userFound) {
    let userView = document.getElementById("userView");
    //Pause the video so it doesnt make noise, ande hide heroPAge, and show our userView
    document.getElementById("introVid").pause();
    document.getElementById("heroPage").style.display = "none";

    document.getElementById("navbar").style.display = "block";
    userView.classList.add("fadeIn");
    userView.style.display = "block";


    let masonry = document.getElementById("masonryRow");
    //Show user logged in as first user
    masonry.innerHTML = "";
    masonry.innerHTML += `
        <div class="col-sm-6 col-lg-4 mb-4">
            <div class="card rounded-0">
                <div class="mx-auto d-block card-img-top"><img src="includes/assets/${userFound.visualId}.jpg" alt="a picture of ${userFound.fName} ${userFound.lName}" style="width: 100%; height: auto; object-fit: cover;"></div>
                <div class="card-body rounded-0">
                    <h5 class="card-title text-center">${userFound.fName} ${userFound.lName}</h5>
                    <p class="card-text">${userFound.description}</p>
                    <p class="card-text"><span class="fw-bold">Email: </span>${userFound.email}</p>
                </div>
            </div>
          </div>
        `;
    if (userFound.roleIndicator === true) {
        //if admin show all users and ability to delete users
        for (let i = 0; i < users.length; i++) {
            let user = users[i];
            if(user !== userFound){
                masonry.innerHTML += `
                <div class="col-sm-6 col-lg-4 mb-4" id="userCard${user.username}">
                    <div class="card rounded-0">
                        <div class="mx-auto d-block card-img-top"><img src="includes/assets/${user.visualId}.jpg" alt="a picture of ${user.fName} ${user.lName}" style="width: 100%; height: auto; object-fit: cover;"></div>
                        <div class="card-body">
                            <h5 class="card-title text-center">${user.fName} ${user.lName}</h5>
                            <p class="card-text">${user.description}</p>
                            <p class="card-text"><span class="fw-bold">Email: </span>${user.email}</p>
                            <a onclick="deleteUser('${user.username}')" class="btn btn-primary mx-auto " type="button">Delete User</a>
                        </div>
                    </div>
                </div>
                `;
            }
        }
    } else {
        //Else only show the user and admins
        for (let i = 0; i < users.length; i++) {
            let user = users[i]
            if (user.roleIndicator === true) {
            masonry.innerHTML += `
                <div class="col-sm-6 col-lg-4 mb-4">
                    <div class="card rounded-0">
                        <div class="mx-auto d-block card-img-top"><img src="includes/assets/${user.visualId}.jpg" alt="a picture of ${user.fName} ${user.lName}" style="width: 100%; height: auto; object-fit: cover;"></div>
                        <div class="card-body">
                            <h5 class="card-title text-center">${user.fName} ${user.lName}</h5>
                            <p class="card-text">${user.description}</p>
                            <p class="card-text"><span class="fw-bold">Email: </span>${user.email}</p>
                        </div>
                    </div>
                </div>
            `;
            }
        }
    }
    // Refresh the masonry layout
    // Credit to https://imagesloaded.desandro.com/ and the stackOverflow I found to fix my masonry
    //my images were too high res... I couldnt get my masonry to work really otherwise, i dont like masonry
    const grid = document.getElementById("masonryRow");
    imagesLoaded(grid, function() {
        new Masonry(grid, {
            itemSelector: '.col-sm-6',
            percentPosition: true
        });
    });
}

//Delete users 
function deleteUser(username) {
    document.getElementById("userCard" + username).remove();
    for (let i = 0; i < users.length; i++) {
        if(users[i].username === username){
            //Delete that iteration of a user once 
            users.splice(i, 1);
            //break out of for loop
            break;
        }
    }
    // Refresh the masonry layout
    // Credit to https://imagesloaded.desandro.com/ and the stackOverflow I found to fix my masonry
    //my images were too high res
    const grid = document.getElementById("masonryRow");
    imagesLoaded(grid, function() {
        new Masonry(grid, {
            itemSelector: '.col-sm-6',
            percentPosition: true
        });
    });
}



//Wait for HTML to load so it doesn't break my buttons DOM LOAD
document.addEventListener("DOMContentLoaded", () => {
    //Async arrow func
    document.getElementById("loginButton").addEventListener("click", async () => {
        let username = document.getElementById("username").value;
        try {
            const response = await verifyLogin(username);
            //After the login message, show userview
            setTimeout(() => {
                userView(response);
            }, 2500);
        } catch (error){
            document.getElementById("loginText").innerText = (error);
        }
    });


    //Revert all changes that I made to the page, i think thats all
    document.getElementById("logoutButton").addEventListener("click", () => {
        let userView = document.getElementById("userView");
        let login = document.getElementById("loginCard");
        let loginMessage = document.getElementById("loginText");
        let video = document.getElementById("introVid");

        video.currentTime = 0;
        video.muted = false;
        video.classList.remove("blurVideo");
        loginMessage.innerText = "Login with Username or Email";
        loginMessage.style.color = ("#e3d8cb");
        loginMessage.classList.remove("errorText");
        loginMessage.classList.remove("fadeTextIn");
        loginMessage.classList.remove("shake");
        document.getElementById("username").value = "";
        login.style.display = "none";
        userView.style.display = "none";
        document.getElementById("heroPage").style.display = "block";
        document.getElementById("navbar").style.display = "none";
        video.play();
    });
});





