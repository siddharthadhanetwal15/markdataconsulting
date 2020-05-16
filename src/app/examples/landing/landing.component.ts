import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbdModalComponent} from '../../components/modal/modal.component';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent extends NgbdModalComponent implements OnInit {
  focus: any;
  focus1: any;

    hero = { name: '', email: '', message: '' };
    private heroForm: FormGroup;

  ngOnInit() {
      this.heroForm = new FormGroup({
          'name': new FormControl(this.hero.name, [
              Validators.required
          ]),
          'email': new FormControl(this.hero.email, [
              Validators.required,
              Validators.email
          ]),
          'message': new FormControl(this.hero.message, [
              Validators.required,
              Validators.minLength(10)
          ])
      });
  }

    get name() { return this.heroForm.get('name'); }

    get email() { return this.heroForm.get('email'); }

    get message() { return this.heroForm.get('message'); }
    sendMessage() {
        this.resetFields();
    }
    resetFields() {
      this.name.reset();
      this.email.reset();
      this.message.reset();
    }
    checkErrors() {
      if(this.name.errors || this.email.errors || this.message.errors) {
          return true;
      }
    }
}
