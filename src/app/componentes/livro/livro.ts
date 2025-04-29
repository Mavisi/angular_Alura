export interface Livro {
    titulo: string;
    autoria: string;
    favorito: boolean;
    imagem: string;
    genero: GeneroLiterario;
}

/**
 * Uma interface em TypeScript é uma estrutura que define 
 * um contrato para objetos. Ela especifica quais propriedades e métodos um 
 * objeto deve ter, além de seus tipos. Pense na interface como uma planta de
 *  uma casa: ela descreve como a casa deve ser, quais cômodos existem e 
 * suas dimensões, mas não constrói a casa em si.
 * 
 * 
 */

export interface GeneroLiterario{
    id: string;
    value: string;
    livros: Livro[]
}