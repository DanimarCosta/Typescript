// Pegar referências de entidades
import { Planeta } from './Banco de Dados/Entidades/Planeta';
import { ModuloDeLeitura } from './Modulo de Leitura/ModuloDeLeitura';
import { BancoDeDadosLocal } from './Banco de Dados/BancoDeDadosLocal';

// Criar a instancia do modulo de leitura
const leitorTeclado = new ModuloDeLeitura();
const bancoLocal = new BancoDeDadosLocal();

// Pacote para leitura e escrita
const fs = require('fs');

async function PegarDados(): Promise<void> {
  // Pergunta para pegar os dados do planeta
  const nome: string = await leitorTeclado.construirQuestao('Infome o nome do planeta: ');
  let raio: string | number;
  let gravidade: string | number;

  do {
    raio = await leitorTeclado.construirQuestao('Infome o raio do planeta: ');
    raio = parseInt(raio);
  } while (Number.isNaN(raio));

  do {
    gravidade = await leitorTeclado.construirQuestao('Informe a gravidade do planeta: ');
    gravidade = parseInt(gravidade);
  } while (Number.isNaN(gravidade));

  // Criar planeta
  let novoPlaneta = new Planeta(nome);

  // Aplicar raio
  novoPlaneta.aplicarRaio(raio);

  // Aplicar gravidade
  novoPlaneta.aplicarGravidade(gravidade);

  // Aplicar novo planeta no banco de dados local
  bancoLocal.aplicarPlaneta(novoPlaneta);
}

async function Logica() {
  // Perguntar se devemos carregar o banco de dados local
  const carregar: string = await leitorTeclado.construirQuestao(
    'Deseja carregar o banco de dados local? ',
  );

  if (carregar.toLowerCase() == 's') {
    const bd = await fs.promises.readFile('./BancoDeDadosLocal.json');

    console.log('===== Leitura =====');
    console.log(JSON.parse(bd));
  }

  // Objeto resposta do usuário
  let resposta: string;
  let repostaValida: boolean = false;

  do {
    // Perguntar dados de uma pessoa
    await PegarDados();

    do {
      // Pergunta se devemos continuar
      resposta = await leitorTeclado.construirQuestao(
        'Deseja adicionar mais um planeta? (S para SIM e N para NÃO)',
      );

      if (resposta != 's' && resposta != 'n') {
        console.log('Resposta inválida');
        repostaValida = false;
      } else {
        repostaValida = true;
      }
    } while (repostaValida == false);
  } while (resposta.toLowerCase() == 's');

  // debug
  console.log(
    'Main thread finalizada, com ' + bancoLocal.pegarListaDePlanetas().length + ' planeta(s)',
  );

  // Finalizar leitura
  leitorTeclado.finalizarLeitura();

  // Salvar dados do(s) planeta(s)
  await fs.promises.writeFile(
    './BancoDeDadosLocal.json',
    JSON.stringify(bancoLocal.pegarListaDePlanetas()),
  );
}

// Main thread
Logica();
