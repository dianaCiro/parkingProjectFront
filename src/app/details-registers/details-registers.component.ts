import { Component, OnInit } from '@angular/core';
import { DetailsRegisterModel } from '../model/detailsRegisters.model';
import { DetailsRegistersService } from './details-registers.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details-registers',
  templateUrl: './details-registers.component.html',
  styleUrls: ['./details-registers.component.css'],
  providers: [DetailsRegistersService]
})
export class DetailsRegistersComponent implements OnInit {

  private detailsRegisters: Array<DetailsRegisterModel>
  constructor(private detailsRegistersService: DetailsRegistersService, private router: Router) { }

  ngOnInit() {
    this.loadDetailsRegisters();
  }

  private loadDetailsRegisters(): void {
   this.detailsRegistersService.getDetailsRegisters().subscribe(res => {
    console.log(res); 
    this.detailsRegisters = res;
   });
  }

  

}
