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
    /* configuraciones para calendario */
    highlightedDates = (isoString: string | number | Date) => {
      const date = new Date(isoString);
      const utcDay = date.getUTCDate();
  
      if (utcDay % 5 === 0) {/* cada 5 dias se marca rojo */
        return {
          textColor: '#800080',
          backgroundColor: '#ffc0cb',
        };
      }
  
      if (utcDay % 3 === 0) {/* cada 3 dias se marca azul */
        return {
          textColor: 'var(--ion-color-secondary-contrast)',
          backgroundColor: 'var(--ion-color-secondary)',
        };
      }
  
      return undefined;
    };/* configuraciones para calendario */
}
