import { Component } from '@angular/core';
import { CommonDataService } from '../common-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  powers = ['Basic', 'Advanced', 'Pro'];
  model: any = { power: this.powers[1]};
  
  constructor(private _commonService: CommonDataService, private _route: Router ) {

  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    this._commonService.$Data = this.model;
    this._route.navigate(['/displayZone']);
  }

  clearForm(formRef: any) {
    console.log(formRef);
    if(this.model.email || this.model.password) {
      if(confirm("Do you want to discard the changes?")) {
        alert('Changes discarded');
        formRef.resetForm({ power: this.powers[1] });
      }
      else {
        alert('changes reserved');
      }
    }
  }
}
