import { Component } from '@angular/core';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from "./componentes/rodape/rodape.component";
import { ListaLivrosComponent } from "./componentes/lista-livros/lista-livros.component";

// aqui é onde criamos o componente principal do nosso projeto, o AppComponent
// ele é o ponto de entrada da nossa aplicação Angular
// responsavel por carregar os outros componentes e exibir o conteúdo na tela
@Component({
  selector: 'app-root',
  imports: [CabecalhoComponent, RodapeComponent, ListaLivrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_ALURA';
}
