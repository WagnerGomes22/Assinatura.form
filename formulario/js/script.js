
function submitForm() {

    let nome = document.getElementById('name').value.toUpperCase();
    let sobrenome = document.getElementById('sobrenome').value.toUpperCase();
    let setor = document.getElementById('setor').value;
    let setorad = document.getElementById('setor-ad').value;
    let agenda = document.getElementById('agenda').value;
    let imgElement = document.createElement('img');
    let Inputddd = document.getElementById('ddd').value;
    let telefone = document.getElementById('telefone').value;
    document.getElementById('btn-copiar-assinatura').style.display = 'inline-block';
    document.getElementById('btn-email').style.display = 'inline-block';
    imgElement.src = 'https://ci3.googleusercontent.com/meips/ADKq_NanMzCf-dM-fn_ClZVMsDVH7sGt40mH28i-A_dHOPnvlzdtJfJQ9Egh00l_OE_6ThF0I-3_DMgwYmOGnhujptoY7Snw9J5R1Ew1ZjrRSAIAvqWu3_Rgpx3UtwL-OtNLVFciAqLNJjCr_O5mZlq93CFO1FwJax2Rp_W3fNgN9rLKOlFuEo5iC2kWzC0obo2891jKo5dRSNYZoXecCjMCj5k=s0-d-e1-ft#https://docs.google.com/uc?export=download&amp;id=1gx2nvK0OA60wvfzFMAryOKdp8VSx8RXV&amp;revid=0B_KI6abtufKubWROQjAzSmxlMjFGc3Z1M1JzL2greHZPa1JnPQ';
    imgElement.width = 150;
    document.getElementById('resultado').style.display = 'block';

    // validar as Strigs, aceita apenas letras, aceitando apostofros e // acentuação

    const validarStrings = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;

    if (!validarStrings.test(nome) || !validarStrings.test(sobrenome) || !validarStrings.test(setor)) {
        alert('Por favor, verifique todos os campos.');
        return;
    }

    const validarLinkAgenda = /^(ftp|http|https):\/\/[^ "]+$/;

    if (agenda && !validarLinkAgenda.test(agenda)) {
        alert('Por favor, insira um link de agenda válido.');
        return;
    }

    const dddRegex = /^\d{0,4}$/;

    if (Inputddd && !dddRegex.test(Inputddd)) {
        alert("Por favor, insira um DDD válido.");
        return;
    }

    const validarCelular = /^\d{5}-\d{4}$/;    ;

    if (telefone && !validarCelular.test(telefone)) {
        alert('Por favor, insira um número de celular válido ou deixe em branco.');
        return;
    
    }
    
   
    const numerosDeTelefone = telefone ? `<p id="tel">Cel. +${Inputddd} ${telefone} / Tel. +55 11 2364.9621</p>` : '<p id="tel">Tel. +55 11 2364.9621</p>';

    const linkAgenda = agenda ? `<p id="agenda">Se quiser marca uma reunião comigo,<a href="${agenda}"> Minha agenda está disponível aqui.</a></p>` : '';

    setor = capitalizeFirstLetter(setor);
    setorad = capitalizeFirstLetter(setorad);


    let assinatura =
        '<b style="color:rgb(255,153,0);font-size:12.8px">______________________________<wbr>___________</b>'+
        '<br>'+
        `<strong>${nome}</strong>`+
        '&nbsp'+
        `<strong> ${sobrenome}</strong>` +
        '<br>'+ 
        `${setor}${setorad ? ` / ${setorad}` : ''}` +
        numerosDeTelefone + `${Inputddd}` +
        '<p id="endereco"><a href="https://www.google.com.br/maps/place/Av.+Dr.+Cardoso+de+Melo,+878+-+Vila+Olimpia,+S%C3%A3o+Paulo+-+SP/@-23.5994907,-46.6845672,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce574db507d2a5:0x1532f65db5b9bcc7!8m2!3d-23.5994907!4d-46.6823785?shorturl=1">Av. Cardoso de Melo 878 - Vila Olímpia - São Paulo - SP 04548-003</a></p>'+
        '<br>'+  
        '<p id="canais">Visite nossos canais: <strong> <a href="https://www.google.com/url?q=https%3A%2F%2Fapis3.com.br%2F&sa=D&sntz=1&usg=AFQjCNGrdVRAS4aXMeBle3ZGgWzsoRowIg"><strong> Site</a> / <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2Fapis3oficial%2F&sa=D&sntz=1&usg=AFQjCNEfGJb1kooKxeQDvBknllnUGA-ePA"><strong>Facebook</a> / <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2Fapis3oficial%2F&sa=D&sntz=1&usg=AFQjCNFo_9x1n7MClVvBR1Q3DFqEU_PRaA"><strong>Instagram</a> / <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2Fapis3oficial%2F&sa=D&sntz=1&usg=AFQjCNFo_9x1n7MClVvBR1Q3DFqEU_PRaA"><strong>Linkedin</a> / <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2Fapis3oficial%2F&sa=D&sntz=1&usg=AFQjCNFo_9x1n7MClVvBR1Q3DFqEU_PRaA"> <strong>Youtube</a></p>' + `<img src="${imgElement.src}" width="${imgElement.width}">` +
        '<br>' + '<br>' + linkAgenda;

    document.getElementById('resultado').innerHTML = assinatura;
    // document.getElementById('resultado').appendChild(imgElement);
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('agenda').value = '';
    document.getElementById('setor').value = '';
    document.getElementById('setorad').value = '';
    document.getElementById('ddd').value = '';
    document.getElementById('telefone').value = '';
    
    return assinatura;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}


function CopiarAssinatura() {
    let resultado = document.getElementById('resultado');

    let range = document.createRange();
    range.selectNodeContents(resultado);

    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');

    selection.removeAllRanges();

    alert('Resultado copiado');
}
