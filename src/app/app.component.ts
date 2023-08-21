import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup ,Validators,ValidationErrors,ValidatorFn} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title;
  contactForm:FormGroup;
  submittedData:any[]=[];
  constructor (private frmBuilder:FormBuilder)
  {
    
  }

  
  ngOnInit(): void {
    this.contactForm=this.frmBuilder.group
    ({
      name:['',Validators.required],
      startlocation:['',Validators.required],
      destination:['',Validators.required],
      car:['',Validators.required],
      seatsavailable:['',[Validators.required,seatRangeValidator()]],
    });

  }
onSubmit()
{
  if(this.contactForm?.valid)
  {
    const formData=this.contactForm.value;
    this.submittedData.push(formData);
    this.contactForm.reset();
    alert('Ride Offered: \n Name:'+ formData.name+ ' \n StartLocation :'+ formData.startlocation+' \n Destination :'+ formData.destination);
  }
  else{
    alert('Form is invalid');
  }
}
}

function seatRangeValidator(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value;

    if (value === null || value < 0 || value > 8) {

      return { seatRange: true };

    }

    return null;

  };

}

 

