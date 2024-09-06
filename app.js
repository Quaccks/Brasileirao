function pesquisar() {
    // 1. Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    if (!campoPesquisa){
      section.innerHTML = "Nenhum time encontrado. Nada digitado na caixa de pesquisa"
      return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    // 2. Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    let regiao = "";
    // 3. Itera sobre cada elemento (dado) na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      regiao = dado.regiao.toLowerCase()
      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) || regiao.includes(campoPesquisa)){
      // 4. Concatena uma nova div com as informações do dado na string de resultados
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href=${dado.instagram} target="_blank"> ${dado.titulo}</a>
        </h2>
        <p class="descricao-meta"> ${dado.descricao}</p>
        <a href=${dado.link} target="_blank"> Mais informações </a> 
      </div>
    `;
      }

    }

    if (!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
    // 5. Atualiza o conteúdo HTML da seção com a string de resultados completa
    section.innerHTML = resultados;
  }