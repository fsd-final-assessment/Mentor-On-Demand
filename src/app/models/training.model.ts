import { Skill } from './skill.model';
import { User } from './user.model';

export class Training {
    
    id?:number;
	  
	rating?:number;
	
	startDate?:Date;
	
	endDate?:Date;
	
	status?: string;
	
	createDate?:Date;
	
	user?: User;
	
	mentor?: User;
	
	skill?: Skill;
}
