import { PermissionLevel } from '@serenityjs/bedrock-protocol';
import type { Logger, Serenity } from '@serenityjs/serenity';
import { BasePlugin } from '@serenityjs/serenity';
import CommandRegistry from './CommandRegistry.js';

export default class CommandRegistryExample extends BasePlugin {

	public constructor(serenity: Serenity, logger: Logger) {
		super(serenity, logger);
	}

	public startup(): void {
		//Get The Registry	
		let registry = new CommandRegistry();
		//Start The Registry
		registry.startRegistry(this.serenity)
		//Register Command
		registry.register({ 
				permissionLevel: PermissionLevel.Member, 
				name: "hello", 
				description: "Basic Hello World Command"
			},
			(player, args) => { 
				player.sendMessage(`Hello World`) 
			}
		)
	}
}