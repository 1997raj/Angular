import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    templateUrl : "auth.component.html",
})
export class AuthComponent
{
    public username : string;
    public password : string;
    public errorMessage : string;

    constructor(private router : Router)
    {}

    authenticate(form : NgForm)
    {
        if(form.valid)
        {
            this.router.navigateByUrl("main");
        }
        else
        {
            this.errorMessage="Invalid username password";
        }
    }
}
