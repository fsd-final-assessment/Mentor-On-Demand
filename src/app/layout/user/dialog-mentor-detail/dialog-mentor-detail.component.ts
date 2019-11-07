import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-mentor-detail',
  templateUrl: './dialog-mentor-detail.component.html',
  styleUrls: ['./dialog-mentor-detail.component.scss']
})
export class DialogMentorDetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogMentorDetailComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
