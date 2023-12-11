import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Asignaturas } from 'src/app/interfaces/asignaturas';
import { User } from 'src/app/interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  firebaseSvc = inject(AuthenticationService);
  utilsSvc = inject(UtilsService)
  
  constructor(private router:Router) { }

  ngOnInit() {
  }
  navegar(ruta:String){
    this.router.navigate(['/'+ruta]);
  }

  user(): User{
    return this.utilsSvc.getFromLocalStorage('user');
  }

  asignaturas:Asignaturas[] = []



  ionViewWillEnter(){
  this.getAsignaturas();
  }

  // ===== obtener asignaturas =====
  async getAsignaturas(){
    let path = `users/${this.user().uid}/asignaturas`;

    let sub = this.firebaseSvc.getCollectionData(path).subscribe({
      next: (res: any) => {
        console.log(res);
        this.asignaturas = res;
        sub.unsubscribe();
      }
    })

  }
  
    /* private values: string[] = ['first', 'second', 'third'];
  
    accordionGroupChange = (ev: any) => {
      const collapsedItems = this.values.filter((value) => value !== ev.detail.value);
      const selectedValue = ev.detail.value;
  
      console.log(
        `Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value} | Collapsed: ${collapsedItems.join(', ')}`
      );
    }; */
/*     collection=['Arquitectura' ,'Programación aplicaciones moviles', 'Ingles Intermedio'];
 */}
