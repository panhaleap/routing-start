import { resolve } from "dns";
import { rejects } from "assert";

export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolve , reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800); // this 800 mean that when user click on button service then after 800 milisecond it will resolve(this.loggedIn)
            }
        );
        return promise;
    }
    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}
