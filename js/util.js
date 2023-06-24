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


  // Function to fetch and insert the header content
function insertHeader() {
  fetch('/models/menuCanto.html')
    .then(response => response.text())
    .then(html => {
      const headerPlaceholder = document.getElementById('header-placeholder');
      headerPlaceholder.innerHTML = html;
    })
    .catch(error => {
      console.error('Error loading header:', error);
    });
}

// Function to fetch and insert the footer content
function insertFooter() {
  fetch('/models/menuCanto.html')
    .then(response => response.text())
    .then(html => {
      const footerPlaceholder = document.getElementById('footer-placeholder');
      footerPlaceholder.innerHTML = html;
    })
    .catch(error => {
      console.error('Error loading footer:', error);
    });
}

// Call the functions to insert the header and footer
insertHeader();
insertFooter();
