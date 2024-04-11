const myImage = document.querySelector("img"); //Seleciona a imagem colocada no html

myImage.onclick = () => { 
  const mySrc = myImage.getAttribute("src"); //Cria uma variavel que seleciona o src que é o que pega o caminho da imagem no html (olhe o html caso tenha duvida para ver)
  if (mySrc === "imagens/fotonoite.png") { //A variavel que tem o caminho, verifica se esse caminho condiz com o caminho correto
    myImage.setAttribute("src", "imagens/fototarde.png"); //Se sim, ele exibe a foto da tarde
  } else {
    myImage.setAttribute("src", "imagens/fotomanha.png"); // Caso o caminho esteja incorreto, ele atribui a foto da manha
  }
};

let myButton = document.querySelector("button"); // Seleciona o botão colocado em cima de script (L29)
let myHeading = document.querySelector("h1"); // Seleciona o titulo da pagina

function setUserName() { //Cria uma função denomidade setUserName
    const myName = prompt("Por favor digite o seu nome."); //Nessa função, a variavel myName irá armazenar o nome escrito pelo usuário
    if (!myName) { //Aqui ele diz, se não for colocado nome, execute a função setUserName novamente, até o usuario colocar algo
      setUserName(); //Solicite o nome novamente
    } else { //Se ele colocar o nome,
      localStorage.setItem("name", myName); //Chama a API localStorage e define o item "name" com a váriavel myName, que no caso é o nome escrito pelo usuário
      myHeading.textContent = `Mozilla é legal, ${myName}`; //Selecina o texto e coloca uma frase junto com o nome digitado pelo usuário
    }
  }
  
  if (!localStorage.getItem("name")) { //Essa função verifica se o item da api "name" tem dados, basicamente falando "se não houver dados em name, execute a função setUsarName"
    setUserName(); //Aqui ele está chamando a função novamente, que irá solicitar o nome para armazenar os dados na variavel e no item da api
  } else { // Else significa Se não, mas nesse caso, como o if pergunta se não tem, aqui lemos como; Caso ele já tenha os dados, execute:
    const storedName = localStorage.getItem("name"); //Aquipede para gerar a variavel storedName, que recebe os dados armazenados na api atraves do item "name"
    myHeading.textContent = `Mozilla é legal, ${storedName}`; // Aqui ele escreve novamente aproveitando os dados recuperados pela api.
  }
  
  myButton.onclick = () => { //Quando o usuario apertar o botão de alterar, esse manipulador de evento irá executar a função novamente para alterar o nome novamente
    setUserName(); //Vai chamar novamente a função para o ususario definir o
  };
  
    