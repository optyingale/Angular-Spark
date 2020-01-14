import { Component } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms'; instead of this the next line is used
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ServicceService } from './servicce.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  //private _service:ServicceService;
  
  registrationform:FormGroup;
  fields=[]
  
  get phoneNumber(){
    return this.registrationform.get('phoneNumber')
  }

  constructor(private fb:FormBuilder, private _service:ServicceService, private http:HttpClient){
    this.registrationform = this.fb.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      phoneNumber : ['', [Validators.required, Validators.pattern("^\d{10}$")]],
      trainer : ['none'],
      timePreference : [''],
      measurements : this.fb.group({
        chest : [''],
        waist : [''],
        thigh : ['']
      })
    })
    this.fields = ['firstName', 'lastName','phoneNumber','trainer', 'timePreference']
  }
  title = 'reactive-spark-gym-form';
  //trainers
  trainers = ["Prashant","Kiran","Omkar","Amit"];
  //list of fields
  
  //fields = ['firstName']

  onSubmit(){
    console.log(this.registrationform.value);

    //this._service.enroll(this.registrationform.value).
    //subscribe(
    //  response => console.log('success',response),
    //  error => console.error('error', error)
    //);

    //try

    var formData: any = new FormData();
    formData.append("name", this.registrationform.get('firstName').value);
//    formData.append("lastname", this.registrationform.get('firstName').value);
  //  formData.append("name", this.registrationform.get('firstName').value);
    //formData.append("name", this.registrationform.get('firstName').value);
    console.log(this.fields)
    for(var field of this.fields){
      console.log(field)
      formData.append(field, this.registrationform.get(field).value);}
    this.http.post('http://192.168.1.105:5000/customer/add', formData).
    subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}
