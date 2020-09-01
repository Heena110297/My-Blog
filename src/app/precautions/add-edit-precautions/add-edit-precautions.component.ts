import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { Precaution } from 'src/app/models/precaution.model';

@Component({
  selector: 'app-add-edit-precautions',
  templateUrl: './add-edit-precautions.component.html',
  styleUrls: ['./add-edit-precautions.component.css']
})
export class AddEditPrecautionsComponent implements OnInit {

  precaution = new FormControl('', Validators.required);
  constructor(
   @Inject(MAT_DIALOG_DATA) public data:any,
   public dialogRef: MatDialogRef<AddEditPrecautionsComponent>,
   private dataService: DataService
) { }
  ngOnInit(): void {
    if (this.data.mode === 'edit'){
      this.precaution.setValue(this.data.precaution);
    }
  }

  precautionsOps(precaution: string){
    if (this.precaution.valid){
      if (this.data.mode === 'add'){
        const precautionObj: Precaution = {
          id: this.data.listTotal + 1,
          precaution
        };
        this.dataService.addPrecaution(precautionObj).subscribe((res) => {
          this.dialogRef.close();
        });
      }
      else{
        const precautionObj: Precaution = {
          id: this.data.id,
          precaution
        };
        this.dataService.updatePrecaution(this.data.id, precautionObj).subscribe((res) => {
          this.dialogRef.close();
        });
      }
    }
  }
}
