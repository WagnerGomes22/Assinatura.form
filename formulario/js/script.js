function submitForm() {

    let nome = document.getElementById('name').value.toUpperCase();
    let sobrenome = document.getElementById('sobrenome').value.toUpperCase();
    let setor = document.getElementById('setor').value;
    let setorad = document.getElementById('setor-ad').value;
    let imgElement = document.createElement('img');
    let telefone = document.getElementById('telefone').value;
    document.getElementById('btn-copiar-assinatura').style.display = 'inline-block';
    imgElement.src = 'https://ci3.googleusercontent.com/meips/ADKq_NanMzCf-dM-fn_ClZVMsDVH7sGt40mH28i-A_dHOPnvlzdtJfJQ9Egh00l_OE_6ThF0I-3_DMgwYmOGnhujptoY7Snw9J5R1Ew1ZjrRSAIAvqWu3_Rgpx3UtwL-OtNLVFciAqLNJjCr_O5mZlq93CFO1FwJax2Rp_W3fNgN9rLKOlFuEo5iC2kWzC0obo2891jKo5dRSNYZoXecCjMCj5k=s0-d-e1-ft#https://docs.google.com/uc?export=download&amp;id=1gx2nvK0OA60wvfzFMAryOKdp8VSx8RXV&amp;revid=0B_KI6abtufKubWROQjAzSmxlMjFGc3Z1M1JzL2greHZPa1JnPQ';
    imgElement.width = 150;
    document.getElementById('resultado').style.display = 'block';

    // validar as Strigs, aceita apenas letras, aceitando apostofros e // acentuação

    const validarStrings = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;

    if (!validarStrings.test(nome) || !validarStrings.test(sobrenome) || !validarStrings.test(setor)) {
        alert('Por favor, verifique todos os campos.');
        return;
    }

    const validarCelular = /^\d{2}\d{9}$/;

    if (telefone && !validarCelular.test(telefone)) {
        alert('Por favor, insira um número de celular válido ou deixe em branco.');
        return;
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    

    const numerosDeTelefone = telefone ? `<p id="tel">Cel. + ${telefone} / Tel. + 55 11 2364.9621</p>` : '<p id="tel">Tel. + 55 11 2364.9621</p>';

    setor = capitalizeFirstLetter(setor);
    setorad = capitalizeFirstLetter(setorad);

    let assinatura =
        '<b style="color:rgb(255,153,0);font-size:12.8px">______________________________<wbr>___________</b>' +
        '<br>' +
        `<strong>${nome}</strong>` +
        '&nbsp' +
        `<strong>${sobrenome}</strong>` +
        '<br>' +
        `${setor}${setorad ? ` / ${setorad}` : ''}` +
        numerosDeTelefone +
        '<p id="endereco"><a href="https://www.google.com.br/maps/place/Av.+Dr.+Cardoso+de+Melo,+878+-+Vila+Olimpia,+S%C3%A3o+Paulo+-+SP/@-23.5994907,-46.6845672,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce574db507d2a5:0x1532f65db5b9bcc7!8m2!3d-23.5994907!4d-46.6823785?shorturl=1">Av. Cardoso de Melo 878 - Vila Olímpia - São Paulo - SP 04548-003</a></p>' +
        '<br>' +
        '<p id="canais">Visite nossos canais: <a href="https://www.google.com/url?q=https%3A%2F%2Fapis3.com.br%2F&sa=D&sntz=1&usg=AFQjCNGrdVRAS4aXMeBle3ZGgWzsoRowIg">Site</a> / <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2Fapis3oficial%2F&sa=D&sntz=1&usg=AFQjCNEfGJb1kooKxeQDvBknllnUGA-ePA">Facebook</a> / <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2Fapis3oficial%2F&sa=D&sntz=1&usg=AFQjCNFo_9x1n7MClVvBR1Q3DFqEU_PRaA">Instagram</a></p>' +
        '<br>';

    document.getElementById('resultado').innerHTML = assinatura;
    document.getElementById('resultado').appendChild(imgElement);
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('setor').value = '';
    document.getElementById('setorad').value = '';
    document.getElementById('telefone').value = '';
    return assinatura;

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
