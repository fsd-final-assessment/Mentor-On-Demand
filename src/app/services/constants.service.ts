import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }

  public USER_STATUS = {
    Inactive: 'Inactive',
    Active: 'Active',
    Delete: 'Delete'
  };

   public MENTOR_SKILL_STATUS = {
    Inactive: 'Inactive',
    Active: 'Active',
    Delete: 'Delete'
  };

  public SKILL_STATUS = {
    Inactive: 'Inactive',
    Active: 'Active',
    Delete: 'Delete'
  };

  public TRAINING_STATUS = {
    Inactive: 'Inactive',
    Active: 'Active',
    Delete: 'Delete',
    Proposed: 'Proposed',
    Confirmed: 'Confirmed',
    Started: 'Started',
    NotCompleted: 'Not Completed',
    Withdraw: 'Withdraw',
    Reject: 'Reject',
    Completed: 'Completed'
  };

  public ROLES = {
    USER: 'USER',
    MENTOR: 'MENTOR',
    ADMIN: 'ADMIN'
  };

}
