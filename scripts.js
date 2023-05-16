function calculateIndex() {
  const numConcluded = parseFloat(document.getElementById("num-concluded").value);
  const numCanceled = parseFloat(document.getElementById("num-canceled").value);
  const index = (numCanceled / (numConcluded + numCanceled)) * 100;
  document.getElementById("result").innerHTML = `Índice de cancelamento de pedidos de abertura de processos de R&S: ${index.toFixed(2)}%`;
}

