export class Pessoa {
  // Nome da Pessoa
  nome: string;

  // Sobrenome da Pessoa
  sobrenome: string;

  // Apelido da Pessoa
  #apelido: string;

  // Altura da Pessoa
  altura: number;

  // Idade da Pessoa
  #idade: number;

  // Construtor da class
  constructor(
    nomeRecebido: string,
    sobrenomeRecebido: string,
    apelidoRecebido: string,
    idadeRecebido: number,
    alturaRecebida: number,
  ) {
    this.nome = nomeRecebido;
    this.sobrenome = sobrenomeRecebido;
    this.#apelido = apelidoRecebido;
    this.#idade = idadeRecebido;
    this.altura = alturaRecebida;
  }

  // Função para alterar o apelido da pessoa
  aplicarApelido(novo_apelido: string): void {
    this.#apelido = novo_apelido;
  }

  // Função para alterar a idade da pessoa
  aplicarIdade(nova_idade: number): void {
    if (nova_idade <= 17) {
      console.log('Pessoa menor de idade');
    } else {
      console.log('Pessoa maior de idade');
    }

    this.#idade = nova_idade;
  }

  // Função para pegar nome
  pegarNome(): string {
    return this.nome;
  }

  // Função para pegar sobrenome
  pegarSobreNome(): string {
    return this.sobrenome;
  }

  // Função para pegar apelido
  pegarApelido(): string {
    return this.#apelido;
  }

  // Função para pegar idade
  pegarIdade(): string | number {
    return this.#idade;
  }
}
