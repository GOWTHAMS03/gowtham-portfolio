import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesignsComponent } from "./components/designs/designs.component";
import { CustomecursorComponent } from "./components/customecursor/customecursor.component";
import { WhatidoComponent } from './components/whatido/whatido.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './home/hero/hero.component';
import { MenusComponent } from './home/menus/menus.component';
import { LabelComponent } from './components/label/label.component';
import { FooterComponent } from "./components/footer/footer.component";
import { MotoComponent } from "./components/moto/moto.component";
import { GowthamComponent } from './components/gowtham/gowtham.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DesignsComponent, CustomecursorComponent,
        WhatidoComponent, AboutComponent, HeroComponent, MenusComponent,
        LabelComponent, FooterComponent, MotoComponent, GowthamComponent]
})
export class AppComponent {
  title = 'gowtham';
}
