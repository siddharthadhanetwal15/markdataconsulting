import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {NgbdModalContent, NgbdModalComponent} from '../../components/modal/modal.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent extends NgbdModalComponent implements OnInit {
  focus: any;
  focus1: any;
    name = new FormControl('');
    email = new FormControl('');
    message = new FormControl('');

  ngOnInit() {}

    sendMessage() {
        this.resetFields();
    }
    resetFields() {
        this.name.setValue('');
        this.email.setValue('');
        this.message.setValue('');
    }
}
