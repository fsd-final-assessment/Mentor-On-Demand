import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-propose',
  templateUrl: './dialog-propose.component.html',
  styleUrls: ['./dialog-propose.component.scss']
})
export class DialogProposeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogProposeComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  doAction(){
    this.dialogRef.close({event:'Propose',data:this.data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}
