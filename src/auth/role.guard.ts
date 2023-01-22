import { CanActivate, ExecutionContext } from "@nestjs/common";

export class RoleGuard implements CanActivate {
    private rolePasssed : string;
    constructor(role : string) {
        this.rolePasssed = role;
    }

    canActivate(context: ExecutionContext): boolean {
        const request : any  = context.switchToHttp().getRequest();
        const user = request.user;
        return matchRoles(user.role, this.rolePasssed);
    }
}

function matchRoles(userRole : string, rolePassed : string) : boolean {
    if(userRole === rolePassed) {
        return true;
    }
    return false;
}
