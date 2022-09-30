# Finalização

* **Versão de 29/09/2022**

## 1. QR Code

Foi acrescentada uma tela (#linkQRCode) que apresenta um QR Code com o link da aplicação aqui no Repl.it, para facilitar o acesso e teste da aplicação no celular. O QR Code é apresentado a partir do clique no título da aplicação.

## Estrutura

### Nome da aplicação e o seu próprio nome

**Aplicação:** Ifoodi - Gestão de restaurante.
**Aluno:** Matheus Santos Soares de Jesus.

### Descrição de um parágrafo explicando o que a aplicação faz

Pensei em uma aplicação simples para gestão de restaurante - Usei até imagens com referências ao "Ifood" porém com um nome próprio "Ifoodi" (para não sofrer CopyRight HEHEHEHE) -
A aplicação fornece cadastro de registros de: Clientes, Produtos e Pedidos. Cada tabela de registros com métodos https (Get, Post, Put e Delete), para criar/incluir, atualizar, deletar/apagar e Get como nas listas que mostram em suas telas.
É oferecido, na tela de 'Relatórios' uma visão de quantidades de clientes, pedidos e produtos cadastrados.

### Descrição de cada página ou tela, explicando as operações específicas a serem realizadas nela. Acrescente algumas imagens dessas interfaces

A Aplicação contém um cabeçalho/Header com o nome da aplicação e as Abas de navegação para a Home (tela principal), Pedidos (Lista de pedidos), Cliente (Lista de clientes) e Produtos (Lista de produtos)
Telas:

* 1. relatorio > tela HOME principal ao iniciar a aplicação, contendo informações relevantes para gerir seu restaurante. Informações como a quantidade de pedidos, clientes e produtos cadastrados.
* 2. pedidoListar > a tela, se estiver sem dados de registro de pedidos, é mostrado uma imagem para informar que não há registros.
                Caso tenha um registro, é mostrado uma lista de pedidos cadastrados. E contém um botão para iniciar-mos um registro.
                Contém também um botão para adicionar-mos pedidos (incluir).
* 3. pedidoIncluir > a tela contém os atributos para criar-mos um pedido, como um dropdown de opções de clientes e de produtos, e valor do pedido.
* 4. pedidoEditar > a tela é carregada quando clicamos em um registro da lista da tela 'pedidoListar' e carrega os dados desse registro, com opções de alterar ou deletar.
* 5. clienteListar > a tela, se estiver sem dados de registro de pedidos, é mostrado uma imagem para informar que não há registros.
                Caso tenha um registro, é mostrado uma lista de clientes cadastrados. E contém um botão para iniciar-mos um registro.
* 6. clienteIncluir > a tela contém os atributos para criar-mos um cliente, como nome completo, endereço completo, telefone (com máscara), e um dropdown com as formas de pagamento desse cliente.
* 7. clienteEditar > a tela é carregada quando clicamos em um registro da lista da tela 'clienteListar' e carrega os dados desse registro, com opções de alterar ou deletar.
* 8. produtoListar > a tela, se estiver sem dados de registro de pedidos, é mostrado uma imagem para informar que não há registros.
                Caso tenha um registro, é mostrado uma lista de pedidos cadastrados. E contém um botão para iniciar-mos um registro.
* 9. produtoIncluir > a tela contém os atributos para criar-mos um produto, como nome, descrição, e a quantidade desse produto.
* 10. produtoEditar > a tela é carregada quando clicamos em um registro da lista da tela 'produtoListar' e carrega os dados desse registro, com opções de alterar ou deletar.
* 11. linkQRCode > A tela informa uma imagem QRCode para ser escaneado e ser levado ao link do projeto no Repl.it

### Explicação dos dados (da lista) que sua aplicação armazena

A aplicação armazena os seguintes dados no **localStorage**:

* Lista de pedidos:
  * 1. Id: Id do registro (que é gerado automaticamente quando criamos o pedido);
  * 2. codigo: Codigo do pedido (que é gerado automaticamente quando criamos o pedido);
  * 3. clientePedido: Nome do cliente;
  * 4. produtoPedido: Nome do produto;
  * 5. valor: valor do pedido.
* Lista de clientes:
  * 1. Id: Id do registro (que é gerado automaticamente quando criamos o cliente);
  * 2. nome: Nome completo do cliente;
  * 3. endereço: endereço completo do cliente;
  * 4. telefone: numero de telefone do cliente;
  * 5. pagamento: forma de pagamento que o cliente paga.
* Lista de produtos:
  * 1. Id: Id do registro (que é gerado automaticamente quando criamos o produto);
  * 2. nome: Nome do produto;
  * 3. descrição: descrição do produto;
  * 4. quantidade: quantidade desse produto no estoque;

## Resposta (sim ou não) às seguintes questões

* A aplicação é original e não uma cópia da aplicação de um colega ou de uma aplicação já existente?

* **Resposta:** Sim.

* A aplicação tem pelo menos duas interfaces (telas ou páginas) independentes?

* **Resposta:** Sim.

* A aplicação armazena e usa de forma relevante dados complexos (mais de um atributo)?

* **Resposta:** Sim.

* A aplicação possui um manifesto para instalação no dispositivo do usuário?

* **Resposta:** Sim.

* A aplicação possui um service worker que permite o funcionamento off-line?

* **Resposta:** Sim.

* O código da minha aplicação possui comentários explicando cada operação?

* **Resposta:** Sim.

* A aplicação está funcionando corretamente?

* **Resposta:** Sim.

* A aplicação está completa?

* **Resposta:** Sim.
