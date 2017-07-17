import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  private heroe:Heroe;

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService
              ) {

    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe( params['id'] );
    });

  }

  getLogoSource():string{
    let img:string = '/assets/img/';
    if(this.heroe.casa=='DC'){
      img += 'Dc-logo.png';
    }else{
      img += 'Marvel-logo.png';
    }
    return img;
  }

}
