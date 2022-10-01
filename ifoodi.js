let telas = ['relatorio','pedidoListar','pedidoIncluir','pedidoEditar','clienteListar','clienteIncluir','clienteEditar','produtoListar','produtoIncluir','produtoEditar','linkQRCode'];
let pedidos = [];
let clientes = [];
let produtos = [];

const mostra = (comp) => {

    telas.forEach((c) =>{
        document.querySelector('#'+ c).classList.add('hidden');
    });
    document.querySelector('#' + comp).classList.remove('hidden');

    // Mudar o título 'Title' da página
    switch(comp){
      case 'relatorio':
        document.getElementById("titulo").innerHTML = "Home";
        break;
      case 'pedidoListar':
        document.getElementById("titulo").innerHTML = "Lista de pedidos";
        break;
      case 'pedidoIncluir':
        document.getElementById("titulo").innerHTML = "Novo pedido";
        break;
      case 'pedidoEditar':
        document.getElementById("titulo").innerHTML = "Editar pedido";
        break;
      case 'clienteListar':
        document.getElementById("titulo").innerHTML = "Lista de clientes";
        break;
      case 'clienteIncluir':
        document.getElementById("titulo").innerHTML = "Novo cliente";
        break;
      case 'clienteEditar':
        document.getElementById("titulo").innerHTML = "Editar cliente";
        break;
      case 'produtoListar':
        document.getElementById("titulo").innerHTML = "Lista de produtos";
        break;
      case 'produtoIncluir':
        document.getElementById("titulo").innerHTML = "Novo produto";
        break;
      case 'produtoEditar':
        document.getElementById("titulo").innerHTML = "Editar produto";
        break;
      case 'linkQRCode':
        document.getElementById("titulo").innerHTML = "Link QR-Code";
        break;
      default:
        document.getElementById("titulo").innerHTML = "Ifoodi";
        break;
    }
};

const ativa = (elem) => {
    let irmaos = elem.parentNode.children;
    for(let i=0; i < irmaos.length; i++)
        irmaos[i].classList.remove('active');
    elem.classList.add('active');
};

onload = () => {
  
  // Funções das abas de opções
  document.querySelector('.appName').onclick = () =>{
    mostra('linkQRCode');
  }
  document.querySelector('#btnFechaQRCode').onclick = () =>{
    mostra('relatorio');
  }
  document.querySelector('#tabHome').onclick = (e) =>{
    mostra('relatorio');
    ativa(e.target);
  };
  document.querySelector('#tabPedidos').onclick = (e) =>{
    mostra('pedidoListar');
    ativa(e.target);
  };
  document.querySelector('#tabClientes').onclick = (e) =>{
    mostra('clienteListar');
    ativa(e.target);
  }; 
  document.querySelector('#tabProdutos').onclick = (e) =>{
    mostra('produtoListar');
    ativa(e.target);
  };
  
  //Iniciando a lista dos registros puxando do localStorage
  const dadosPedidos = JSON.parse(localStorage.getItem('pedidos'));
  if (dadosPedidos) pedidos = dadosPedidos;
  const dadosClientes = JSON.parse(localStorage.getItem('clientes'));
  if (dadosClientes) clientes = dadosClientes;
  const dadosProdutos = JSON.parse(localStorage.getItem('produtos'));
  if (dadosProdutos) produtos = dadosProdutos;

  //Inicia a lista dos registros
  mostraPedidos();
  mostraClientes();
  mostraProdutos();

  //Inicia as funções do pedido
  document.querySelector('#inputNovoClientePedido').oninput = monitoraCampoAdicPedido;
  document.querySelector('#inputNovoProdutoPedido').oninput = monitoraCampoAdicPedido;
  document.querySelector('#inputNovoValorPedido').oninput = monitoraCampoAdicPedido;

  document.querySelector('#inputAltClientePedido').oninput = monitoraCampoAltPedido;
  document.querySelector('#inputAltProdutoPedido').oninput = monitoraCampoAltPedido;
  document.querySelector('#inputAltValorPedido').oninput = monitoraCampoAltPedido;

  document.querySelector('#inputNovoClientePedido').onkeypress = (e) => {
    if (e.key == 'Enter') adicionaPedido();
  };
  document.querySelector('#inputNovoProdutoPedido').onkeypress = (e) => {
    if (e.key == 'Enter') adicionaPedido();
  };
  document.querySelector('#inputNovoValorPedido').onkeypress = (e) => {
    if (e.key == 'Enter') adicionaPedido();
  };
  
  document.querySelector('#inputAltClientePedido').onkeypress = (e) => {
    if (e.key == 'Enter') alteraPedido();
  };
  document.querySelector('#inputAltProdutoPedido').onkeypress = (e) => {
    if (e.key == 'Enter') alteraPedido();
  };
  document.querySelector('#inputAltValorPedido').onkeypress = (e) => {
    if (e.key == 'Enter') alteraPedido();
  };

  //Inicia as funções do cliente
  document.querySelector('#inputNovoNomeCliente').oninput = monitoraCampoAdicCliente;
  document.querySelector('#inputNovoEnderecoCliente').oninput = monitoraCampoAdicCliente;
  document.querySelector('#inputNovoTelefoneCliente').oninput = monitoraCampoAdicCliente;
  document.querySelector('#inputNovoPagamentoCliente').oninput = monitoraCampoAdicCliente;

  document.querySelector('#inputAltNomeCliente').oninput = monitoraCampoAltCliente;
  document.querySelector('#inputAltEnderecoCliente').oninput = monitoraCampoAltCliente;
  document.querySelector('#inputAltTelefoneCliente').oninput = monitoraCampoAltCliente;
  document.querySelector('#inputAltPagamentoCliente').oninput = monitoraCampoAltCliente;

  document.querySelector('#inputNovoNomeCliente').onkeypress = (e) => {
    if (e.key == 'Enter') adicionaCliente();
  };
  document.querySelector('#inputNovoEnderecoCliente').onkeypress = (e) => {
    if (e.key == 'Enter') adicionaCliente();
  };
  document.querySelector('#inputNovoTelefoneCliente').onkeypress = (e) => {
    if (e.key == 'Enter') adicionaCliente();
  };
  document.querySelector('#inputNovoPagamentoCliente').onkeypress = (e) => {
    if (e.key == 'Enter') adicionaCliente();
  };
  
  document.querySelector('#inputAltNomeCliente').onkeypress = (e) => {
    if (e.key == 'Enter') alteraCliente();
  };
  document.querySelector('#inputAltEnderecoCliente').onkeypress = (e) => {
    if (e.key == 'Enter') alteraCliente();
  };
  document.querySelector('#inputAltTelefoneCliente').onkeypress = (e) => {
    if (e.key == 'Enter') alteraCliente();
  };
  document.querySelector('#inputAltPagamentoCliente').onkeypress = (e) => {
    if (e.key == 'Enter') alteraCliente();
  };
  
  //Inicia as funções do produto
  document.querySelector('#inputNovoNomeProduto').oninput = monitoraCampoAdicProduto;
  document.querySelector('#inputNovoDescricaoProduto').oninput = monitoraCampoAdicProduto;
  document.querySelector('#inputNovoQuantidadeProduto').oninput = monitoraCampoAdicProduto;

  document.querySelector('#inputAltNomeProduto').oninput = monitoraCampoAltProduto;
  document.querySelector('#inputAltDescricaoProduto').oninput = monitoraCampoAltProduto;
  document.querySelector('#inputAltQuantidadeProduto').oninput = monitoraCampoAltProduto;

  document.querySelector('#inputNovoNomeProduto').onkeypress = (e) => {
    if (e.key == 'Enter') adicionaProduto();
  };
  document.querySelector('#inputNovoDescricaoProduto').onkeypress = (e) => {
    if (e.key == 'Enter') adicionaProduto();
  };
  document.querySelector('#inputNovoQuantidadeProduto').onkeypress = (e) => {
    if (e.key == 'Enter') adicionaProduto();
  };
  
  document.querySelector('#inputAltNomeProduto').onkeypress = (e) => {
    if (e.key == 'Enter') alteraProduto();
  };
  document.querySelector('#inputAltDescricaoProduto').onkeypress = (e) => {
    if (e.key == 'Enter') alteraProduto();
  };
  document.querySelector('#inputAltQuantidadeProduto').onkeypress = (e) => {
    if (e.key == 'Enter') alteraProduto();
  };

  //funções dos botões da tela de Pedido
  document.querySelector('#btnAdicPedido').onclick = () => {
    //Constrói o dropdown de clientes
    const dropdownCliente = document.querySelector('#inputNovoClientePedido');
    clientes.forEach((t) => {
      let optionCliente  = document.createElement('option');
      optionCliente.value = t.id;
      optionCliente.text = t.nome;
      dropdownCliente.appendChild(optionCliente);
    });
    //Constrói o dropdown de produtos
    const dropdownProduto = document.querySelector('#inputNovoProdutoPedido');
    produtos.forEach((t) => {
      let optionProduto  = document.createElement('option');
      optionProduto.value = t.id;
      optionProduto.text = t.nome;
      dropdownProduto.appendChild(optionProduto);
    });

    document.querySelector('#btnIncPedido').disabled = true;
    mostra('pedidoIncluir');
    document.querySelector('#inputNovoValorPedido').focus();
  };

  document.querySelector('#btnCancPedido').onclick = () => {
    document.querySelector('#inputNovoClientePedido').value = '';
    document.querySelector('#inputNovoProdutoPedido').value = '';
    document.querySelector('#inputNovoValorPedido').value = '';
    mostra('pedidoListar');
  };

  document.querySelector('#btnCanc2Pedido').onclick = () => {
    let campo = document.querySelector('#inputCodigoPedido');
    let campo1 = document.querySelector('#inputAltClientePedido');
    let campo2 = document.querySelector('#inputAltProdutoPedido');
    let campo3 = document.querySelector('#inputAltValorPedido');
    campo.value = '';
    campo1.value = '';
    campo2.value = '';
    campo3.value = '';
    campo.removeAttribute('data-id');
    mostra('pedidoListar');
  };

  document.querySelector('#btnIncPedido').onclick = () => {
    adicionaPedido();
  };
  document.querySelector('#btnAltPedido').onclick = () => {
    alteraPedido();
  };
  document.querySelector('#btnDelPedido').onclick = () => {
    apagaPedido();
  };

  //funções dos botões da tela de Cliente
  document.querySelector('#btnAdicCliente').onclick = () => {
    document.querySelector('#btnIncCliente').disabled = true;
    mostra('clienteIncluir');
    document.querySelector('#inputNovoNomeCliente').focus()
    // mascarar o telefone
    const tel = document.getElementById('inputNovoTelefoneCliente') // Seletor do campo de telefone
    tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
    tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo
    
    const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor // Insere o(s) valor(es) no campo
    }
  };

  document.querySelector('#btnCancCliente').onclick = () => {
    document.querySelector('#inputNovoNomeCliente').value = '';
    document.querySelector('#inputNovoEnderecoCliente').value = '';
    document.querySelector('#inputNovoTelefoneCliente').value = '';
    document.querySelector('#inputNovoPagamentoCliente').value = '';
    mostra('clienteListar');
  };

  document.querySelector('#btnCanc2Cliente').onclick = () => {
    let campo1 = document.querySelector('#inputAltNomeCliente');
    let campo2 = document.querySelector('#inputAltEnderecoCliente');
    let campo3 = document.querySelector('#inputAltTelefoneCliente');
    let campo4 = document.querySelector('#inputAltPagamentoCliente');
    campo1.value = '';
    campo2.value = '';
    campo3.value = '';
    campo4.value = '';
    campo1.removeAttribute('data-id');
    mostra('clienteListar');
  };

  document.querySelector('#btnIncCliente').onclick = () => {
    adicionaCliente();
  };
  document.querySelector('#btnAltCliente').onclick = () => {
    alteraCliente();
  };
  document.querySelector('#btnDelCliente').onclick = () => {
    apagaCliente();
  };

  //funções dos botões da tela de Produto
  document.querySelector('#btnAdicProduto').onclick = () => {
    document.querySelector('#btnIncProduto').disabled = true;
    mostra('produtoIncluir');
    document.querySelector('#inputNovoNomeProduto').focus();
  };

  document.querySelector('#btnCancProduto').onclick = () => {
    document.querySelector('#inputNovoNomeProduto').value = '';
    document.querySelector('#inputNovoDescricaoProduto').value = '';
    document.querySelector('#inputNovoQuantidadeProduto').value = '';
    mostra('produtoListar');
  };

  document.querySelector('#btnCanc2Produto').onclick = () => {
    let campo1 = document.querySelector('#inputAltNomeProduto');
    let campo2 = document.querySelector('#inputAltDescricaoProduto');
    let campo3 = document.querySelector('#inputAltQuantidadeProduto');
    campo1.value = '';
    campo2.value = '';
    campo3.value = '';
    campo1.removeAttribute('data-id');
    mostra('produtoListar');
  };

  document.querySelector('#btnIncProduto').onclick = () => {
    adicionaProduto();
  };
  document.querySelector('#btnAltProduto').onclick = () => {
    alteraProduto();
  };
  document.querySelector('#btnDelProduto').onclick = () => {
    apagaProduto();
  };

};

//----------------------//--------------------//-----------------------//
//Função para mostrar listas 
const mostraPedidos = () => {
  const listaDePedidos = document.querySelector('#listaDePedidos');
  listaDePedidos.innerHTML = '';
  pedidos.forEach((t) => {
    let nomeCliente;
    clientes.forEach((c) => {
      if(t.clientePedido = c.id){
        nomeCliente = c.nome;
      }
    })
    let elemPedido  = document.createElement('li');
    elemPedido.innerHTML = t.codigo + ' - ' + nomeCliente;
    elemPedido.setAttribute('data-id', t.id);
    elemPedido.onclick = () => {
      let campo = document.querySelector('#inputCodigoPedido');
      //Constrói o dropdown de clientes
      const dropdownCliente = document.querySelector('#inputAltClientePedido');
      clientes.forEach((t) => {
        let optionCliente  = document.createElement('option');
        optionCliente.value = t.id;
        optionCliente.text = t.nome;
        dropdownCliente.appendChild(optionCliente);
      });
      //Constrói o dropdown de produtos
      const dropdownProduto = document.querySelector('#inputAltProdutoPedido');
      produtos.forEach((t) => {
        let optionProduto  = document.createElement('option');
        optionProduto.value = t.id;
        optionProduto.text = t.nome;
        dropdownProduto.appendChild(optionProduto);
      });
      let campo3 = document.querySelector('#inputAltValorPedido');
      mostra('pedidoEditar');
      campo.value = t.codigo;
      dropdownCliente.value = t.clientePedido;
      dropdownProduto.value = t.produtoPedido;
      campo3.value = t.valorPedido;
      campo.setAttribute('data-id', t.id);
      campo3.focus();
    };
    listaDePedidos.appendChild(elemPedido);
  });
  document.querySelector('#qtdPedidos').innerText = pedidos.length;
  if (pedidos.length > 0) {
    listaDePedidos.classList.remove('hidden');
    document.querySelector('#blankPedidos').classList.add('hidden');
  } else {
    listaDePedidos.classList.add('hidden');
    document.querySelector('#blankPedidos').classList.remove('hidden');
  }
};

const mostraClientes = () => {
  const listaDeClientes = document.querySelector('#listaDeClientes');
  listaDeClientes.innerHTML = '';
  clientes.forEach((t) => {
    let elemCliente  = document.createElement('li');
    elemCliente.innerHTML = t.nome;
    elemCliente.setAttribute('data-id', t.id);
    elemCliente.onclick = () => {
      let campo1 = document.querySelector('#inputAltNomeCliente');
      let campo2 = document.querySelector('#inputAltEnderecoCliente');
      let campo3 = document.querySelector('#inputAltTelefoneCliente');
      let campo4 = document.querySelector('#inputAltPagamentoCliente');
      mostra('clienteEditar');
      campo1.value = t.nome;
      campo2.value = t.endereco;
      campo3.value = t.telefone;
      campo4.value = t.pagamento;
      campo1.setAttribute('data-id', t.id);
      campo1.focus();
        // mascarar o telefone
      const tel = document.getElementById('inputAltTelefoneCliente') // Seletor do campo de telefone
      tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
      tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo
      
      const mascaraTelefone = (valor) => {
      valor = valor.replace(/\D/g, "")
      valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
      valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
      tel.value = valor // Insere o(s) valor(es) no campo
      }
    };
    listaDeClientes.appendChild(elemCliente);
  });
  document.querySelector('#qtdClientes').innerText = clientes.length;
  if (clientes.length > 0) {
    listaDeClientes.classList.remove('hidden');
    document.querySelector('#blankClientes').classList.add('hidden');
  } else {
    listaDeClientes.classList.add('hidden');
    document.querySelector('#blankClientes').classList.remove('hidden');
  }
};

const mostraProdutos = () => {
  const listaDeProdutos = document.querySelector('#listaDeProdutos');
  listaDeProdutos.innerHTML = '';
  produtos.forEach((t) => {
    let elemProduto  = document.createElement('li');
    elemProduto.innerHTML = t.nome;
    elemProduto.setAttribute('data-id', t.id);
    elemProduto.onclick = () => {
      let campo1 = document.querySelector('#inputAltNomeProduto');
      let campo2 = document.querySelector('#inputAltDescricaoProduto');
      let campo3 = document.querySelector('#inputAltQuantidadeProduto');
      mostra('produtoEditar');
      campo1.value = t.nome;
      campo2.value = t.descricao;
      campo3.value = t.quantidade;
      campo1.setAttribute('data-id', t.id);
      campo1.focus();
    };
    listaDeProdutos.appendChild(elemProduto);
  });
  document.querySelector('#qtdProdutos').innerText = produtos.length;
  if (produtos.length > 0) {
    listaDeProdutos.classList.remove('hidden');
    document.querySelector('#blankProdutos').classList.add('hidden');
  } else {
    listaDeProdutos.classList.add('hidden');
    document.querySelector('#blankProdutos').classList.remove('hidden');
  }
};

//----------------------//--------------------//-----------------------//
//Função para incluir registros 
const adicionaPedido = () => {
  let campo1 = document.querySelector('#inputNovoClientePedido');
  let campo2 = document.querySelector('#inputNovoProdutoPedido');
  let campo3 = document.querySelector('#inputNovoValorPedido');
  let clientePedido = campo1.value;
  let produtoPedido = campo2.value;
  let valorPedido = campo3.value;
  let codigo = 0;
  if (clientePedido != '' && produtoPedido != '' && valorPedido > 0) {
    pedidos.push({
      id: Math.random().toString().replace('0.', ''),
      codigo: ++codigo,
      clientePedido: clientePedido,
      produtoPedido: produtoPedido,
      valorPedido: valorPedido,
    });
    campo1.value = '';
    campo2.value = '';
    campo3.value = '';
    salvaPedido();
    mostraPedidos();
    mostra('pedidoListar');
  }else{
    alert("Favor preencher os campos");
  }
};

const adicionaCliente = () => {
  let campo1 = document.querySelector('#inputNovoNomeCliente');
  let campo2 = document.querySelector('#inputNovoEnderecoCliente');
  let campo3 = document.querySelector('#inputNovoTelefoneCliente');
  let campo4 = document.querySelector('#inputNovoPagamentoCliente');
  let nome = campo1.value;
  let endereco = campo2.value;
  let telefone = campo3.value;
  let pagamento = campo4.value;
  if (nome != '' && endereco != '' && telefone != '' && pagamento != 'Nulo') {
    clientes.push({
      id: Math.random().toString().replace('0.', ''),
      nome: nome,
      endereco: endereco,
      telefone: telefone,
      pagamento: pagamento,
    });
    campo1.value = '';
    campo2.value = '';
    campo3.value = '';
    campo4.value = '';
    salvaCliente();
    mostraClientes();
    mostra('clienteListar');
  }else{
    alert("Favor preencher os campos");
  }
};

const adicionaProduto = () => {
  let campo1 = document.querySelector('#inputNovoNomeProduto');
  let campo2 = document.querySelector('#inputNovoDescricaoProduto');
  let campo3 = document.querySelector('#inputNovoQuantidadeProduto');
  let nome = campo1.value;
  let descricao = campo2.value;
  let quantidade = campo3.value;
  if (nome != '' && descricao != '' && quantidade > 0) {
    produtos.push({
      id: Math.random().toString().replace('0.', ''),
      nome: nome,
      descricao: descricao,
      quantidade: quantidade,
    });
    campo1.value = '';
    campo2.value = '';
    campo3.value = '';
    salvaProduto();
    mostraProdutos();
    mostra('produtoListar');
  }else{
    alert("Favor preencher os campos");
  }
};

//----------------------//--------------------//-----------------------//
//Função para alterar registros 
const alteraPedido = () => {
  let campo = document.querySelector('#inputCodigoPedido');
  let campo1 = document.querySelector('#inputAltClientePedido');
  let campo2 = document.querySelector('#inputAltProdutoPedido');
  let campo3 = document.querySelector('#inputAltValorPedido');
  let idPedido = campo.getAttribute('data-id');
  let i = pedidos.findIndex((t) => t.id == idPedido);
  pedidos[i].clientePedido = campo1.value;
  pedidos[i].produtoPedido = campo2.value;
  pedidos[i].valorPedido = campo3.value;
  campo.value = '';
  campo1.value = '';
  campo2.value = '';
  campo3.value = '';
  campo.removeAttribute('data-id');
  salvaPedido();
  mostraPedidos();
  mostra('pedidoListar');
};

const alteraCliente = () => {
  let campo1 = document.querySelector('#inputAltNomeCliente');
  let campo2 = document.querySelector('#inputAltEnderecoCliente');
  let campo3 = document.querySelector('#inputAltTelefoneCliente');
  let campo4 = document.querySelector('#inputAltPagamentoCliente');
  let idCliente = campo1.getAttribute('data-id');
  let i = clientes.findIndex((t) => t.id == idCliente);
  if (campo4.value != 'Nulo') {
    clientes[i].nome = campo1.value;
    clientes[i].endereco = campo2.value;
    clientes[i].telefone = campo3.value;
    clientes[i].pagamento = campo4.value;
    campo1.value = '';
    campo2.value = '';
    campo3.value = '';
    campo4.value = '';
    campo1.removeAttribute('data-id');
    salvaCliente();
    mostraClientes();
    mostra('clienteListar');
  }else{
    alert('FavorFavor preencher os campos');
  }

};

const alteraProduto = () => {
  let campo1 = document.querySelector('#inputAltNomeProduto');
  let campo2 = document.querySelector('#inputAltDescricaoProduto');
  let campo3 = document.querySelector('#inputAltQuantidadeProduto');
  let idProduto = campo1.getAttribute('data-id');
  let i = produtos.findIndex((t) => t.id == idProduto);
  produtos[i].nome = campo1.value;
  produtos[i].descricao = campo2.value;
  produtos[i].quantidade = campo3.value;
  campo1.value = '';
  campo2.value = '';
  campo3.value = '';
  campo1.removeAttribute('data-id');
  salvaProduto();
  mostraProdutos();
  mostra('produtoListar');
};

//----------------------//--------------------//-----------------------//
//Função para deletar registros 
const apagaPedido = () => {
  let campo = document.querySelector('#inputCodigoPedido');
  let campo1 = document.querySelector('#inputAltClientePedido');
  let campo2 = document.querySelector('#inputAltProdutoPedido');
  let campo3 = document.querySelector('#inputAltValorPedido');
  let idPedido = campo.getAttribute('data-id');
  pedidos = pedidos.filter((t) => t.id != idPedido);
  campo.value = '';
  campo1.value = '';
  campo2.value = '';
  campo3.value = '';
  campo.removeAttribute('data-id');
  mostra('pedidoListar');
  salvaPedido();
  mostraPedidos();
};

const apagaCliente = () => {
  let campo1 = document.querySelector('#inputAltNomeCliente');
  let campo2 = document.querySelector('#inputAltEnderecoCliente');
  let campo3 = document.querySelector('#inputAltTelefoneCliente');
  let campo4 = document.querySelector('#inputAltPagamentoCliente');
  let idCliente = campo1.getAttribute('data-id');
  clientes = clientes.filter((t) => t.id != idCliente);
  campo1.value = '';
  campo2.value = '';
  campo3.value = '';
  campo4.value = '';
  campo1.removeAttribute('data-id');
  mostra('clienteListar');
  salvaCliente();
  mostraClientes();
};

const apagaProduto = () => {
  let campo1 = document.querySelector('#inputAltNomeProduto');
  let campo2 = document.querySelector('#inputAltDescricaoProduto');
  let campo3 = document.querySelector('#inputAltQuantidadeProduto');
  let idProduto = campo1.getAttribute('data-id');
  produtos = produtos.filter((t) => t.id != idProduto);
  campo1.value = '';
  campo2.value = '';
  campo3.value = '';
  campo1.removeAttribute('data-id');
  mostra('produtoListar');
  salvaProduto();
  mostraProdutos();
};

//----------------------//--------------------//-----------------------//
//Função que monitora a entrada de dados no input de criação
//se tiver entrada.... então o botão de incluir será habilitado...caso contrário será desativado
const monitoraCampoAdicPedido = (e) => {
  let botao = document.querySelector('#btnIncPedido');
  if (e.target.value.length > 0) botao.disabled = false;
  else botao.disabled = true;
};

const monitoraCampoAdicCliente = (e) => {
  let botao = document.querySelector('#btnIncCliente');
  if (e.target.value.length > 0) botao.disabled = false;
  else botao.disabled = true;
};

const monitoraCampoAdicProduto = (e) => {
  let botao = document.querySelector('#btnIncProduto');
  if (e.target.value.length > 0) botao.disabled = false;
  else botao.disabled = true;
};

//----------------------//--------------------//-----------------------//
//Função que monitora a entrada de dados no input de alteração
//se tiver entrada.... então o botão de alterar será habilitado...caso contrário será desativado
const monitoraCampoAltPedido = (e) => {
  let botao = document.querySelector('#btnAltPedido');
  if (e.target.value.length > 0) botao.disabled = false;
  else botao.disabled = true;
};

const monitoraCampoAltCliente = (e) => {
  let botao = document.querySelector('#btnAltCliente');
  if (e.target.value.length > 0) botao.disabled = false;
  else botao.disabled = true;
};

const monitoraCampoAltProduto = (e) => {
  let botao = document.querySelector('#btnAltProduto');
  if (e.target.value.length > 0) botao.disabled = false;
  else botao.disabled = true;
};

//----------------------//--------------------//-----------------------//
//Função para salvar os dados no localStorage
const salvaPedido = () => {
  localStorage.setItem('pedidos', JSON.stringify(pedidos));
};

const salvaCliente = () => {
  localStorage.setItem('clientes', JSON.stringify(clientes));
};

const salvaProduto = () => {
  localStorage.setItem('produtos', JSON.stringify(produtos));
};

//Cria ou atualiza o ServiceWorker
navigator.serviceWorker.register('./ifoodi-sw.js');
