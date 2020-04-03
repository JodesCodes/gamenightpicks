import { TableStatus } from "./TableStatus";
import { Player } from "./Player";

export class Table {
    public Title: string;
    public MaxPlayers: number;
    public PlayTime: string;
    public Status: TableStatus;
    public Players: Player[];
}