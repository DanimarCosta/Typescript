// Pegar referências de entidades
import { Pessoa } from './Entidades/Pessoa';
import { Planeta } from './Entidades/Planeta';

export class BancoDeDadosLocal {
  // Lista de pessoas
  #pessoas: Array<Pessoa>;

  // Lista de planetas
  #planetas: Array<Planeta>;

  // Construtor para inicializar lista de planetas
  constructor() {
    this.#pessoas = new Array<Pessoa>();
    this.#planetas = new Array<Planeta>();
  }

  // Função para aplicar nova pessoa no banco de dados
  aplicarPessoa(novaPessoa: Pessoa) {
    this.#pessoas.push(novaPessoa);
  }

  // Função para aplicar nova pessoa no banco de dados
  aplicarPlaneta(novaplaneta: Planeta) {
    this.#planetas.push(novaplaneta);
  }

  // Função para pegar lista de planetas
  pegarListaDePlanetas(): Array<Planeta> {
    return this.#planetas;
  }

  // Função para pegar lista de pessoas
  pegarListaDePessoas(): Array<Pessoa> {
    return this.#pessoas;
  }
}
