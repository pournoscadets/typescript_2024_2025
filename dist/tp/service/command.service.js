export class CommandService {
    constructor(_commands) {
        this._commands = _commands;
    }
    addCommand(command) {
        this._commands.push(command);
    }
    processCommand(order) {
        for (let command of this._commands) {
            command.executeCommand(order);
        }
        return order;
    }
}
