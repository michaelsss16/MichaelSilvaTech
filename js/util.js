function obterAnoAtual() {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    return `${ano}`;
  }
  // Pasta que contém os arquivos .html
const pasta = './canto';

const menu = document.getElementById('menu');

fetch(pasta)
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const links = doc.querySelectorAll('a[href$=".html"]');

    links.forEach(link => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.textContent = link.textContent;
      listItem.appendChild(anchor);
      menu.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Erro ao obter a lista de arquivos:', error);
  });
