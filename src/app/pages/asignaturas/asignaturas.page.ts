import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  navegar(ruta:String){
    this.router.navigate(['/'+ruta]);
  }
  
    private values: string[] = ['first', 'second', 'third'];
  
    accordionGroupChange = (ev: any) => {
      const collapsedItems = this.values.filter((value) => value !== ev.detail.value);
      const selectedValue = ev.detail.value;
  
      console.log(
        `Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value} | Collapsed: ${collapsedItems.join(', ')}`
      );
    };
    collection=['nombre1' ,'nombre2'];
}
