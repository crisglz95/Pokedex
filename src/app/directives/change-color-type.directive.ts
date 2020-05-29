import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeColorType]'
})
export class ChangeColorTypeDirective implements OnInit {

  @Input() nameType: string;

  constructor(private el: ElementRef, private render: Renderer2) { 
  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.nameType);
    this.onLoad();
  }
  
  onLoad(){
  
    switch (this.nameType) {
      case 'poison':
        this.render.setStyle(
          this.el.nativeElement, 
          'background', 
          '#5E2D88'
        )
        break;
      case 'normal':
      this.render.setStyle(
        this.el.nativeElement, 
        'background', 
        '#72545C'
      )
      break;
      case 'fire':
      this.render.setStyle(
        this.el.nativeElement, 
        'background', 
        '#F34755'
      )
      break;
      case 'flying':
      this.render.setStyle(
        this.el.nativeElement, 
        'background', 
        '#91A3AF'
      )
      break;
      case 'grass':
      this.render.setStyle(
        this.el.nativeElement, 
        'background', 
        '#25C94E'
      )
      break;
      case 'water':
      this.render.setStyle(
        this.el.nativeElement, 
        'background', 
        '#1A51CD'
      )
      break;
      case 'bug':
      this.render.setStyle(
        this.el.nativeElement, 
        'background', 
        '#3B984D'
      )
      break;
      case 'fairy':
      this.render.setStyle(
        this.el.nativeElement, 
        'background', 
        '#E91360'
      )
      break;
      case 'ground':
      this.render.setStyle(
        this.el.nativeElement, 
        'background', 
        '#6B4A1D'
      )
      break;
      case 'electric':
      this.render.setStyle(
        this.el.nativeElement, 
        'background', 
        '#E1E22C'
      )
      break;
      case 'fighting':
      this.render.setStyle(
        this.el.nativeElement, 
        'background', 
        '#EC6430'
      )
      break;
      case 'rock':
      this.render.setStyle(
        this.el.nativeElement, 
        'background', 
        '#451A09'
      )
      break;
      case 'psychic':
      this.render.setStyle(
        this.el.nativeElement, 
        'background', 
        '#F61D90'
      )
      break;
      case 'steel':
      this.render.setStyle(
        this.el.nativeElement, 
        'background', 
        '#5C7269'
      )
      break;
      case 'ice':
      this.render.setStyle(
        this.el.nativeElement, 
        'background', 
        '#D5EFF3'
      )
      break;
      case 'ghost':
      this.render.setStyle(
        this.el.nativeElement, 
        'background', 
        '#313466'
      )
      break;
      case 'dragon':
      this.render.setStyle(
        this.el.nativeElement, 
        'background', 
        '#5BC9D8'
      )
      break;
      case 'dark':
      this.render.setStyle(
        this.el.nativeElement, 
        'background', 
        '#585977'
      )
      break;
      

    
      default:
        break;
    }
  }

}
