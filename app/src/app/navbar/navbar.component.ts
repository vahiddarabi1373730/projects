import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { AllServicesService } from '../all-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{
  constructor(
    private router: Router,
    public allServicesService: AllServicesService
  ) {}
  public links = ['signup', 'signIn'];
  public links2 = ['signOut', 'inbox'];
  background: ThemePalette = undefined;
  @Input()activeLink = this.links[0];

  onClick(link: string) {
    this.activeLink = link;
  }

  ngOnInit(): void {}
}
