let tarefas = [];

onload = () => {
  const t = JSON.parse(localStorage.getItem('tarefas'));
  if (t) tarefas = t;
  mostraTarefas();
  document.querySelector('#inputNovaTarefa').oninput = monitoraCampoAdic;
  document.querySelector('#inputAlteraTarefa').oninput = monitoraCampoAlt;
  document.querySelector('#inputNovaTarefa').onkeypress = (e) => {
    if (e.key == 'Enter') adicionaTarefa();
  };
  document.querySelector('#inputAlteraTarefa').onkeypress = (e) => {
    if (e.key == 'Enter') alteraTarefa();
  };

  document.querySelector('.appName').onclick = () => {
    ativa('tela4');
  };

  document.querySelector('#btnFechaQRCode').onclick = () => {
    ativa('tela1');
  }

  document.querySelector('#btnAdic').onclick = () => {
    document.querySelector('#btnInc').disabled = true;
    ativa('tela2');
    document.querySelector('#inputNovaTarefa').focus();
  };

  document.querySelector('#btnCanc1').onclick = () => {
    document.querySelector('#inputNovaTarefa').value = '';
    ativa('tela1');
  };

  document.querySelector('#btnCanc2').onclick = () => {
    let campo = document.querySelector('#inputAlteraTarefa');
    campo.value = '';
    campo.removeAttribute('data-id');
    ativa('tela1');
  };

  document.querySelector('#btnInc').onclick = () => {
    adicionaTarefa();
  };

  document.querySelector('#btnAlt').onclick = () => {
    alteraTarefa();
  };

  document.querySelector('#btnDel').onclick = () => {
    apagaTarefa();
  };
};

const mostraTarefas = () => {
  const listaDeTarefas = document.querySelector('#listaDeTarefas');
  listaDeTarefas.innerHTML = '';
  tarefas.forEach((t) => {
    let elemTarefa = document.createElement('li');
    elemTarefa.innerHTML = t.descricao;
    elemTarefa.setAttribute('data-id', t.id);
    elemTarefa.onclick = () => {
      let campo = document.querySelector('#inputAlteraTarefa');
      ativa('tela3');
      campo.value = t.descricao;
      campo.setAttribute('data-id', t.id);
      campo.focus();
    };
    listaDeTarefas.appendChild(elemTarefa);
  });
  document.querySelector('#estado').innerText = tarefas.length;
  if (tarefas.length > 0) {
    listaDeTarefas.classList.remove('hidden');
    document.querySelector('#blank').classList.add('hidden');
  } else {
    listaDeTarefas.classList.add('hidden');
    document.querySelector('#blank').classList.remove('hidden');
  }
};

const ativa = (comp) => {
  let listaDeTelas = document.querySelectorAll('body > .component');
  listaDeTelas.forEach((c) => c.classList.add('hidden'));
  document.querySelector('#' + comp).classList.remove('hidden');
};

const adicionaTarefa = () => {
  let campo = document.querySelector('#inputNovaTarefa');
  let descricao = campo.value;
  if (descricao != '') {
    tarefas.push({
      id: Math.random().toString().replace('0.', ''),
      descricao: descricao,
    });
    campo.value = '';
    ativa('tela1');
    salvaTarefas();
    mostraTarefas();
  }
};

const monitoraCampoAdic = (e) => {
  let botao = document.querySelector('#btnInc');
  if (e.target.value.length > 0) botao.disabled = false;
  else botao.disabled = true;
};

const alteraTarefa = () => {
  let campo = document.querySelector('#inputAlteraTarefa');
  let idTarefa = campo.getAttribute('data-id');
  let i = tarefas.findIndex((t) => t.id == idTarefa);
  tarefas[i].descricao = campo.value;
  campo.value = '';
  campo.removeAttribute('data-id');
  ativa('tela1');
  salvaTarefas();
  mostraTarefas();
};

const apagaTarefa = () => {
  let campo = document.querySelector('#inputAlteraTarefa');
  let idTarefa = campo.getAttribute('data-id');
  tarefas = tarefas.filter((t) => t.id != idTarefa);
  campo.value = '';
  campo.removeAttribute('data-id');
  ativa('tela1');
  salvaTarefas();
  mostraTarefas();
};

const monitoraCampoAlt = (e) => {
  let botao = document.querySelector('#btnAlt');
  if (e.target.value.length > 0) botao.disabled = false;
  else botao.disabled = true;
};

const salvaTarefas = () => {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
};

navigator.serviceWorker.register('./toferrado-sw.js');