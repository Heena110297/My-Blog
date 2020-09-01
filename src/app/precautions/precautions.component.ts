import { Component, OnInit } from '@angular/core';
import { Precaution } from '../models/precaution.model';
import { DataService } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditPrecautionsComponent } from './add-edit-precautions/add-edit-precautions.component';

@Component({
  selector: 'app-precautions',
  templateUrl: './precautions.component.html',
  styleUrls: ['./precautions.component.css']
})
export class PrecautionsComponent implements OnInit {

  constructor(private dataService: DataService,
              private dialog: MatDialog) { }

  precautions: Precaution [] = [];

  ngOnInit(): void {
    this.getAllPrecautions();
  }

  getAllPrecautions(){
     this.dataService.getPrecautions().subscribe((allPrecautions) => {
        this.precautions = allPrecautions;
     });
  }

  editPrecaution(precaution: Precaution){
    const dialogRef = this.dialog.open(AddEditPrecautionsComponent, {
      data: {
          ...precaution,
          mode: 'edit'
      }
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getAllPrecautions();
    });
  }

  deletePrecaution(id:number){
      this.dataService.deletePrecaution(id).subscribe((res) =>{
          this.getAllPrecautions();
      });
  }

  addPrecaution(){
    const dialogRef = this.dialog.open(AddEditPrecautionsComponent, {
         data: {
           mode: 'add',
           listTotal: this.precautions.length
         }
     });
    dialogRef.afterClosed().subscribe((res) => {
        this.getAllPrecautions();
     });
  }
}
