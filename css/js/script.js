tippy('[data-tippy-content]', {
    placement: 'right',
    animation: 'scale', // Animação do tooltip
    theme: 'light',     // Tema claro
  });
  

// Função para abrir o modal e atualizar o título
function openModal(title) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = `Por favor, preencha os dados da ${title.toLowerCase()}.`;
    document.getElementById("myModal").style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Ação de enviar do formulário (pode ser adaptada para enviar dados)
document.getElementById("form-lancamento").onsubmit = function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário
    closeModal(); // Fecha o modal após salvar
}

// Tooltip
tippy('[data-tippy-content]', {
    placement: 'right',
    animation: 'scale',
    theme: 'light',
});


// Adiciona um evento mouseover e mouseout no botão
var novoLancamento = document.querySelector('.novo-lancamento');
novoLancamento.onmouseover = function() {
    document.querySelector('.opcoes').style.display = 'flex'; // Mostra as opções
}

novoLancamento.onmouseout = function(event) {
    if (!document.querySelector('.opcoes').contains(event.relatedTarget)) {
        document.querySelector('.opcoes').style.display = 'none'; // Esconde as opções se o mouse não estiver sobre as opções
    }
}

// Adiciona evento mouseover e mouseout nas opções
var opcoes = document.querySelector('.opcoes');
opcoes.onmouseover = function() {
    opcoes.style.display = 'flex'; // Mantém as opções visíveis
}

opcoes.onmouseout = function(event) {
    if (!novoLancamento.contains(event.relatedTarget)) {
        opcoes.style.display = 'none'; // Esconde as opções se o mouse não estiver sobre o botão ou as opções
    }
}


document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var btnNovoLancamento = document.querySelector(".novo-lancamento");
    var span = document.getElementsByClassName("close")[0];

    // Ao clicar no botão de novo lançamento
    btnNovoLancamento.onclick = function() {
        modal.style.display = "block";
    }

    // Ao clicar no X (fechar o modal)
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Ao clicar fora do modal, fecha ele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

function formatarValor(input) {
    let valor = input.value;

    // Remove caracteres não numéricos
    valor = valor.replace(/[^\d]/g, '');

    // Converte para um número e formata
    if (valor) {
        valor = (parseInt(valor) / 100).toFixed(2).toString();
        valor = valor.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    // Atualiza o valor do input
    input.value = 'R$ ' + valor;
}

const form = document.getElementById('form-lancamento');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Simulando o envio do formulário (substitua por sua lógica real)
  console.log('Lançamento realizado!');

  // Exibindo a mensagem de sucesso
  Swal.fire({
    icon: 'success',
    title: 'Sucesso!',
    text: 'Lançamento realizado com sucesso!'
  });
});
