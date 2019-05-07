import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateValidatorService } from '../../services/date-validator.service'
import moment from "moment";

@Component({
  selector: 'app-custom-date-counter',
  templateUrl: './custom-date-counter.component.html',
  styleUrls: ['./custom-date-counter.component.css']
})
export class CustomDateCounterComponent implements OnInit {

  name = "Custom Date Counter"; 
  dateForm: FormGroup;
  private _date;

  constructor(private formBuilder: FormBuilder) { }


  // intialize formcontrols 
  ngOnInit() {
    this.dateForm = this.formBuilder.group({
      date: ['', DateValidatorService.dateValidator]
    });
  }


  // convenience getter for easy access to form fields
  get f() { return this.dateForm.controls; }

  // getter for string formate date
  get date() {
    this._date = moment(this.dateForm.get('date').value, "DD/MM/YYYY").format('ddd, Do MMM YYYY');
    return this._date;
  }

  // function : increment date by 1 day
  addDays() {
    console.log(this.date)
    let addDate = moment(this.date, "ddd, Do MMM YYYY").add(1, 'days');
    console.log("add", addDate)
    this._date = addDate.format('ddd, Do MMM YYYY');;
    this.f.date.setValue(addDate.format("DD/MM/YYYY"));
  }

  // function : decrement date by 1 day
  subtractDays() {
    let subDate = moment(this.date, "ddd, Do MMM YYYY").subtract(1, 'days');
    this._date = subDate.format('ddd, Do MMM YYYY');;
    this.f.date.setValue(subDate.format("DD/MM/YYYY"));
  }
}



