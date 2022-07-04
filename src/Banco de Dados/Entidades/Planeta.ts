export class Planeta {
  // Nome do Planeta
  nome: string;

  // Raio do Planeta
  raio: number | undefined;

  // Gravidade do Planeta
  gravidade: number | undefined;

  // Construtor da class
  constructor(nome: string, raio?: number, gravidade?: number) {
    this.nome = nome;

    if (raio != undefined) {
      this.raio = raio;
    }

    if (gravidade != undefined) {
      this.gravidade = gravidade;
    }
  }

  // Função para pegar nome
  pegarNome(): string {
    return this.nome;
  }

  // Função para aplicar raio
  aplicarRaio(raioRecebido: number): void {
    this.raio = raioRecebido;
  }

  // Função para pegar nome
  pegarRaio(): number {
    if (this.raio == undefined) {
      console.log('Raio não foi aplicado neste planeta');
      return NaN;
    }

    return this.raio;
  }

  // Função para aplicar gravidade
  aplicarGravidade(gravidadeRecebido: number): void {
    this.gravidade = gravidadeRecebido;
  }

  // Função para pegar nome
  pegarGravidade(): number {
    if (this.gravidade == undefined) {
      console.log('Gravidade não foi aplicada neste planeta');
      return NaN;
    }

    return this.gravidade;
  }
}
