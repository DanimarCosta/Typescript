export class ModuloDeLeitura {
  // Criar instancia para a leitura
  rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Função para construir questões
  construirQuestao(questao: string): Promise<string> {
    return new Promise(resolve => {
      this.rl.question(questao, (answer: string) => {
        resolve(answer);
      });
    });
  }

  // Função para construir questões
  construirQuestaoComRespostaDeNumero(questao: string): Promise<number> {
    return new Promise(resolve => {
      this.rl.question(questao, (answer: number) => {
        resolve(answer);
      });
    });
  }

  // Função para retornar instancia do rl
  getRl() {
    return this.rl;
  }

  // Função para fechar leitura
  finalizarLeitura() {
    this.rl.close();
  }
}
