import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-dialog-add-skill',
  templateUrl: './dialog-add-skill.component.html',
  styleUrls: ['./dialog-add-skill.component.scss']
})
export class DialogAddSkillComponent implements OnInit {

  skillForm: FormGroup;
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(public dialogRef: MatDialogRef<DialogAddSkillComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,public searchService:SearchService) { }

  ngOnInit() {
    this.skillForm = new FormGroup( {
      skillId: new FormControl('', Validators.required),
      selfRating: new FormControl('', Validators.required),
      yearsOfExp: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      remarks: new FormControl('')
  });
  }

  get f() { return this.skillForm.controls; }

  doAction(){
    this.dialogRef.close({event:'done',data:{
      skillId: this.f.skillId.value,
      selfRating: this.f.selfRating.value,
      yearsOfExp: this.f.yearsOfExp.value,
      price: this.f.price.value,
      remarks: this.f.remarks.value
    }});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
