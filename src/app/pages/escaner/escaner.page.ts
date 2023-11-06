import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServicioUbicacionService } from 'src/app/services/servicio-ubicacion.service';
import { Categoria,Categorias } from 'src/app/interfaces/comidas';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-escaner',
  templateUrl: './escaner.page.html',
  styleUrls: ['./escaner.page.scss'],
})
export class EscanerPage implements OnInit {

  texto:string=''
  constructor(private barcodescanner:BarcodeScanner){

  }

  scan(){
    this.barcodescanner.scan().then(barcodedata=>{
      console.log("escaneando ...",barcodedata);
      this.texto=(JSON.stringify(barcodedata));
    }).catch(err=>{
      console.log("Error al escanear"); 
    })
  }

  ngOnInit() {
    
  }


  /* 
  categorias:Categoria[]=[];

  constructor(private alertController: AlertController,private router:Router, private servicioubicacion:ServicioUbicacionService) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Registro de clase',
      message: 'El registro de clase fue excitoso',
      buttons: [
        {
          text:'ok'
        }
      ],
    });

    await alert.present();
    this.router.navigate(['home']);
  }

  ngOnInit() {
    this.servicioubicacion.getCategorias().subscribe(datos=>{
      //console.log(datos.categories);
      this.categorias.push(...datos.categories);
      console.log(this.categorias);
    
    });
  } */

}
