import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() typeheader: string = 'notification';

  @Input() search: string = '';
  form: FormGroup;
  constructor(private router: Router, private modal: ModalController) { }

  ngOnInit() {
    this.formConfig();
  }

  formConfig() {
    this.form = new FormGroup({
      search: new FormControl([this.search])
    });
  }

  toBack(url = 'dashboard') {
    this.router.navigate([url]);
  }

  searchProduct() {
    alert(this.form.value);
  }
}
