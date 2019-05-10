import { TableStatus } from "./tablestatus";
import { Player } from "./player";


export class Table {
    public Title: string;
    public MaxPlayers: number;
    public PlayTime: string;
    public Status: TableStatus;
    public Players: Player[];
}