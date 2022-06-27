import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AjoutEquiService } from 'src/app/services/ajoutEqui.service';


@Component({
  selector: 'app-stockage',
  templateUrl: './stockage.component.html',
  styleUrls: ['./stockage.component.scss']
})
export class StockageComponent implements OnInit {

  constructor(
    private ajoutEqui: AjoutEquiService

  ) { }

  ngOnInit(): void {
    this.getAjoutEqui();

  }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.ajoutEqui.post('/equi', form.value).subscribe(
      (data) => {
        form.reset();
        console.log(data);
      },
      (error) => {
        console.error(error)
      },
      () => {

        console.log('POST DONE');
      }
    )

  }
  
  getAjoutEqui() {
    this.ajoutEqui.get('/equi').subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error)
      },
      () => {
        console.log('GET DONE');
      }
    )
  }
}


