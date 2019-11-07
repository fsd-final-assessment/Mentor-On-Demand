import { MentorSkill } from './mentor-skill.model';

export class User {
    id:number;
    username: string;
    firstName?: string;
    lastName?: string;
    contactNumber?: string;
    regCode?: string;
    linkedinUrl?: string;
    roles?: string;
    active?: number;
    createdAt?: Date;
    token?: string;
    mentorSkills?: Array<MentorSkill>;
}
