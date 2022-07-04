// Pegar referências de entidades
import { Pessoa } from './Banco de Dados/Entidades/Pessoa';
import { Planeta } from './Banco de Dados/Entidades/Planeta';
import { ModuloDeLeitura } from './Modulo de Leitura/ModuloDeLeitura';
import { BancoDeDadosLocal } from './Banco de Dados/BancoDeDadosLocal';

// Criar a instancia do modulo de leitura
const leitorTeclado = new ModuloDeLeitura();
const bancoLocal = new BancoDeDadosLocal();

async function PegarDados(): Promise<void> {
  // Pergunta para pegar o nome
  const nome: string = await leitorTeclado.construirQuestao('Infome um nome: ');
  const sobrenome: string = await leitorTeclado.construirQuestao('Infome um sobrenome: ');
  const apelido: string = await leitorTeclado.construirQuestao('Informe o seu apelido: ');
  let idade: string | number;

  let novoPlaneta = new Planeta('Terra', 3798, -9.8);

  // // Vamos criar uma nova pessoa
  // let novaPessoa = new Pessoa(nome, sobrenome, apelido, NaN, NaN);

  // do {
  //   idade = await leitorTeclado.construirQuestao('Infome uma idade: ');
  //   idade = parseInt(idade);
  // } while (Number.isNaN(idade));

  // // Aplicar nova idade para uma pessoa
  // novaPessoa.aplicarIdade(idade);

  // // Aplicar nova pessoa no banco de dados local
  // bancoLocal.aplicarPessoa(novaPessoa);
}

async function Logica() {
  // Objeto resposta do usuário
  let resposta: string;
  let repostaValida: boolean = false;

  do {
    // Perguntar dados de uma pessoa
    await PegarDados();

    do {
      // Pergunta se devemos continuar
      resposta = await leitorTeclado.construirQuestao(
        'Deseja adicionar mais uma pessoa? (S para SIM e N para NÃO)',
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
    'Main thread finalizada, com ' + bancoLocal.pegarListaDePessoas().length + ' pessoas',
  );

  // Finalizar leitura
  leitorTeclado.finalizarLeitura();
}

// Main thread
Logica();
