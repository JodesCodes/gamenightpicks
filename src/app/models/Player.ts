import { AbstractFormGroupDirective } from "@angular/forms";

export class Player {
    public PlayerId: Guid,
    public FirstName: string;
    public LastName: string;
    public BggUserName?: string;
}