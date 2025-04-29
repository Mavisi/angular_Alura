import { Component, input } from '@angular/core';
import { Livro } from './livro';
// a classe ts é o arquivo de logica do componente
// aqui é onde criamos o componente LivroComponent
// o componente é uma classe que representa uma parte da interface do usuário
// ele é responsável por exibir os dados e interagir com o usuário
@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  livro = input.required< Livro>();
   
  alternarFavorito(){
    this.livro().favorito = !this.livro().favorito
   }
   
   
}
