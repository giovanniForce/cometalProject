import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InterventionService } from 'src/app/services/intervention.service';

@Component({
  selector: 'app-demande-intervention',
  templateUrl: './demande-intervention.component.html',
  styleUrls: ['./demande-intervention.component.scss']
})
export class DemandeInterventionComponent implements OnInit {

  constructor(
    private intervention: InterventionService
  ) { }

  ngOnInit(): void {
    this.getIntervention();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.intervention.post('/stuff', form.value).subscribe(
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

  getIntervention() {
    this.intervention.get('/stuff').subscribe(
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
