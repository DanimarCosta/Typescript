class Utils {
  // Função para esperar um determinado tempo
  WaitForMilliseconds(interval: number): Promise<boolean> {
    // Criar promise
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, interval);
    });
  }
}

export { Utils };
