import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {StoreComponent} from './store/store.component';

@Injectable()
export class StoreFirstGuard
{
    private firstNavigated: boolean = true;
    constructor(private router: Router){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
    {
        console.log("Test 1 :" + this.firstNavigated);
        if(this.firstNavigated)
        {
            this.firstNavigated=false;
            if(route.component != StoreComponent)
            {
                console.log("Test 2 :" + this.firstNavigated);
                this.router.navigateByUrl("/store");
                return false;
            }
        }
        return true;
    }
}