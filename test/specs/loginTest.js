var assert = require("assert");

describe('Login page html', ()=>{
    it('encontrar el titulo de la pagina', ()=>{
        browser.url('/')
        var titulo = browser.getTitle();
        assert.equal(titulo, "Login Page");
    });
});

describe('Username field html', ()=>{
    it('verificar que se pueda escribir en el campo de username', ()=>{
        browser.url('/')
        var user = $('#username-input');
        user.setValue('mando27tuzo@gmail.com');

        assert.equal(user.value, 'mando27tuzo@gmail.com');
    });
});

describe('Password field html', ()=>{
    it('verificar que se pueda escribir en el campo de password', ()=>{
        browser.url('/')
        var password = $('#password-input');
        password.setValue('asdf1234');

        assert.equal(password.value, 'asdf1234');
    });
});


describe('Insertar info en login)', ()=>{
    before(function(){
        console.log("inicio de test");
    });

    it('debe ser login exitoso', ()=>{
        browser.url('/');
        var user = $('#username-input');
        user.setValue('mando27tuzo@gmail.com');

        var password = $('#password-input');
        password.setValue('asdf1234');

        var button = $('#button-submit');
        button.click();

        var destino = browser.getTitle();
        assert.equal(destino, "Listado de bienvenida");

    });

    after(function(){
        console.log("termina test");
    });
});

describe('check text css', ()=>{
    it('ver color del logo text', ()=>{
        browser.url('/');
        var title = $('.title-logo');

        var colorTitle = title.getCSSProperty('color');
        console.log("Color-->"+colorTitle.value);
        assert.equal(colorTitle.value, '#000000');
    });
});

describe('check logo color css', ()=>{
    it('ver color del logo', ()=>{
        browser.url('/');
        var logo = $('.shrine-logo');

        var colorLogo = logo.getCSSProperty('fill');
        console.log("Color-->"+colorLogo.value);
        assert.equal(colorLogo.value, '#e6933e');
    });
});

describe('check button color css', ()=>{
    it('ver color del boton de next', ()=>{
        browser.url('/');
        var button = $('#button-submit');

        var buttonColor = button.getCSSProperty('background-color');
        console.log("Color-->"+buttonColor.value);
        assert.equal(buttonColor.value, '#FFCF44');
    });
});