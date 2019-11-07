import { User } from './user.model';
import { Skill } from './skill.model';

export class MentorSkill{
	
    id?: number;
	
	selfRating?: number;
	
	yearsOfExp?: number;
	
	price?: number;
	
	remarks?: string;
	
	status?: string;

	createDate?: Date;

	mentor?: User;
	
	skill?: Skill;
}

export function typeGuard(a: MentorSkill[]): boolean {
	if (a.every(e => e instanceof MentorSkill)) {
		return true;
	} 
	return false;
}