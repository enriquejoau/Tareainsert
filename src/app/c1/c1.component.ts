import { Component, OnInit } from '@angular/core';
class Producto{
 
  nombre?:String;
  precio?:String;
  stock?:String;
  categoria?:String;
}
@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  
  productos :  Producto[]=[];
  constructor() { }

  ngOnInit(): void {
    this.productos = [
      {
      
        nombre:"manzana",
        precio:"10.5",
        stock:"9",
        categoria:"manzana"
      },
      {
       
        nombre:"pera",
        precio:"10.5",
        stock:"9",
        categoria:"manzana"
      },
        {
          nombre:"camaleon",
          precio:"10.5",
          stock:"9",
          categoria:"manzana"
        }
      ];
  }
  agregar(nombre:String,precio:String, stock:String, categoria:String ){
    this.productos.push({
      nombre,precio,stock,categoria
    });

    
    
   
  console.log(this.productos);
  this.resetear();
  }
  resetear(){
    
    ((document.getElementById("n") as HTMLInputElement).value)="";
    ((document.getElementById("p") as HTMLInputElement).value)="";
    ((document.getElementById("s") as HTMLInputElement).value)="";
    ((document.getElementById("c") as HTMLInputElement).value)="";
  }
}
