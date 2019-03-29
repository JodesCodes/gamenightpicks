import { TableStatus } from "./TableStatus";

export class Table {
    public Title: string;
    public CurrentPlayers: number;
    public MaxPlayers: number;
    public Keywords: string[];
    public PlayTime: string;
    public PlayerName: string[];
    public Displayed: boolean = true;
    public Status: TableStatus;
}