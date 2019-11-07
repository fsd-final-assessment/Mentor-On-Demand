export class SearchResult {

    trainingId?:number;
	  
	rating?:number;
	
	startDate?: Date;
	
	endDate?: Date;
	
	status: string;
	
	createDate?: Date;
	
	//skill
	skillName: string;
	
	skillToc?: string;
	
	skillPrerequites?: string;
	
	//user
	userUsername?: string;
	
	userFirstName?: string;

	userLastName?: string;

	userContactNumber?: string;
	
	//mentor
	mentorUsername?: string;
	
	mentorFirstName?: string;

	mentorLastName?: string;

	mentorContactNumber?: string;
	
    linkedinUrl?: string;
    
}
