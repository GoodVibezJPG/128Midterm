/**
 * C0522047
 * 
 * This my fan "login page" for the show House MD, it features logging in with a unique username assigned to each user or there respective email, some more unique than others
 * If you login wrong three times, House calls you stupid...
 * 
 * 15 users for 15 characters from house, each instance of the User has a unique description, and certain users have unique logins.
 * 
 * The usernames are: homeslice, JWilson, lCuddy, eForeman, 2nice4you, aussie, thirteen, plasticman, chillguy, adamsVID, parkVID,bullypatrol, PrivateGuy, moneybags, cutthroatb
 * 
 * The login card page zooms in on the 4.3 second event in the intro...
 * 
 * Been using github for my remote repository as well as using Github Page to share "https://goodvibezjpg.github.io/HouseMD-Login-Page-ICS128-Midterm/"
 * 
 * Down the road, I think it would be neat to have a clip/video play on hovering over a user or by cliking onto there profile picutre
 *However I am not dealing with that on the Camosun Wifi
 *
 * It also utilizes DOMContent listener to avoid breaking my buttons!
 * 
 * Also Masonry for my profile cards
 */


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

const house = new User("Gregory", "House", "ghouse@pptch.org", "homeslice", true, "houseVID");
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
const amber = new User("Amber", "Volakis", "avolakis@heaven.edu", "cutthroatb", false, "amberVID");

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




let showLogin = (event) => {
    let login = document.getElementById("loginCard");
    let video = document.getElementById("introVid");
    let fallbackImage = document.getElementById("fallbackImage");

    // Turn it down a little bit
    video.volume = 0.5;

    // On the weee, fly fade in
    if (event.currentTime >= 4.3) {
        video.classList.add("blurVideo");
        login.style.display = "block";
        login.classList.add("fadeInRight");
    }

    // After first loop mute
    video.onended = () => {
        video.muted = true;
    };

    // Fallback if video doesn't load after 5 seconds
    setTimeout(() => {
        if (video.readyState < 3) {
            video.style.display = "none";
            fallbackImage.style.display = "block";
            login.style.display = "block";
            login.classList.add("fadeInRight");
            document.getElementById("heroPage").style.backgroundImage("url('includes/assets/houseBackground.png')");
        }
    }, 5);
};


//Houses stupid counter
let stupidCounter = 0;
//Verify login from the username
let verifyLogin = async (username) => {
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
                    //return resolve
                    return resolve(users[i]);
                }
            }
            //then the user wasn't found
            throw new Error("Username not found");
        } catch (e) {
            stupidCounter++;
            loginMessage.style.color = "red";
            loginMessage.classList.add("errorText");
            loginMessage.classList.add("shake");
            //So the login doesnt stay red and the shake still works remove after like half a second
            setTimeout(() => {
                loginMessage.style.color = ("#e3d8cb");
                loginMessage.classList.remove("errorText");
                loginMessage.classList.remove("shake");
            }, 600);
            //House calls you stupid if you get 3 wrong
            if(stupidCounter === 3){
                houseInsult.play();
                stupidCounter = 0;
            }
            //Reject 😡
            return reject(e);
        }
    });
}

let userView = async (userFound) => {   
    let userView = document.getElementById("userView");
    //Pause the video so it doesnt make noise, ande hide heroPAge, and show our userView
    document.getElementById("introVid").pause();
    //Hide my hero and show my userview
    document.getElementById("heroPage").style.display = "none";
    document.getElementById("navbar").style.display = "block";
    userView.classList.add("fadeIn");
    userView.style.display = "block";

    let masonry = document.getElementById("masonryRow");
    //Show the user logged in as first user
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
        for (let i = 0; i < users.length; i++) {
            let user = users[i];
            // Skip the logged in user since they display first
            if (user !== userFound) {
                let deleteButton = "";
                //This was confusing af but it's pretty much like, oh hey if our user in the array is not an admin, and the current user is admin, the we can show the delete button
                if (user.roleIndicator === false && userFound.roleIndicator === true){
                    //Onclick delete that given user
                    deleteButton = `<a id="deleteUser${user.username}" onclick="deleteUser('${user.username}')" class="btn btn-primary mx-auto" type="button">Delete User</a>`;
                }
                masonry.innerHTML += `
                <div class="col-sm-6 col-lg-4 mb-4" id="userCard${user.username}">
                    <div class="card rounded-0">
                        <div class="mx-auto d-block card-img-top"><img src="includes/assets/${user.visualId}.jpg" alt="a picture of ${user.fName} ${user.lName}" style="width: 100%; height: auto; object-fit: cover;"></div>
                        <div class="card-body">
                            <h5 class="card-title text-center">${user.fName} ${user.lName}</h5>
                            <p class="card-text">${user.description}</p>
                            <p class="card-text"><span class="fw-bold">Email: </span>${user.email}</p>
                            ${deleteButton}
                        </div>
                    </div>
                </div>
                `;
            }
        
    //Refresh Masonry, fix
    const grid = document.getElementById("masonryRow");
    imagesLoaded(grid, function() {
        new Masonry(grid, {
            itemSelector: '.col-sm-6',
            percentPosition: true
        });
    });
    }
}

//Delete users 
let deleteUser = (username) => {
    document.getElementById("userCard" + username).remove();
    for (let i = 0; i < users.length; i++) {
        if(users[i].username === username){
            //Delete that iteration of a user once 
            users.splice(i, 1);
            //break out of for loop
            break;
        }
    }
    // Refresh the masonry layout on delete 
    const grid = document.getElementById("masonryRow");
    imagesLoaded(grid, function() {
        new Masonry(grid, {
            itemSelector: '.col-sm-6',
            percentPosition: true
        });
    });
}



//Wait for HTML to load so it doesn't break my buttons DOM LOAD
document.addEventListener("DOMContentLoaded", async () => {
    let video = document.getElementById("introVid");

    //once video it has buffered enough to begin, please play it...
    //continue 
    video.addEventListener("canplay", () => {
        video.play();
        //I was having issues when the HTML video was unmuted, so im kinda tricking it by unmuting in my JS when its done loading?
        //Might be a brave browser thing?
        video.muted = false;
    }, 
    { once: true });;

    //Async arrow func
    document.getElementById("loginButton").addEventListener("click", async () => {
        let username = document.getElementById("username").value;
        // these were originally then ables but this works too, probably better 
        try {
            const response = await verifyLogin(username);
            //After the verifying my login promise in 2.5s, show userview
            setTimeout(() => {
                userView(response);
            }, 2500);
        } catch (error){
            //display reject error
            document.getElementById("loginText").innerText = (error);
        }
    });


    //Revert all changes that I made to the page, i think thats all
    document.getElementById("logoutButton").addEventListener("click", () => {
        let userView = document.getElementById("userView");
        let login = document.getElementById("loginCard");
        let loginMessage = document.getElementById("loginText");

        //Reset my video
        video.currentTime = 0;
        video.muted = false;
        video.classList.remove("blurVideo");

        //Reset my Login
        loginMessage.innerText = ("Login with Username or Email");
        loginMessage.style.color = ("#F7F7F7");
        loginMessage.classList.remove("errorText");
        loginMessage.classList.remove("fadeTextIn");
        loginMessage.classList.remove("shake");
        document.getElementById("username").value = "";
        login.style.display = "none";

        //Hide my userview
        userView.style.display = "none";
        document.getElementById("heroPage").style.display = "block";
        document.getElementById("navbar").style.display = "none";
        video.play();
    });
});





