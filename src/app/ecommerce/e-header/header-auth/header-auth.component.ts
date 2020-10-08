import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'header-auth',
  templateUrl: './header-auth.component.html',
  styleUrls: ['./header-auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderAuthComponent implements OnInit {
  @HostBinding('attr.class') classes = 'header__auth';
  constructor(private modalService: NgbModal) { }

  isLogin: boolean = true;

  ngOnInit(): void {
  }

  onToggleAuth() {
    this.isLogin = !this.isLogin;
  }

  open(content) {
    this.modalService.open(content, { centered: true, windowClass: 'auth-modal' }).result.then((result) => {
      this.isLogin = true;
    }, (reason) => {
      this.isLogin = true;
    });;
  }

}
