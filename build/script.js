"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var item = 0;
var estoque = [];
do {
    console.log('----DIGITE A FUNÇÃO DESEJADA----');
    console.log('(1)Acrescentar item ');
    console.log('(2)Remover item');
    console.log('(3)Alterar item');
    console.log('(4)Listar itens');
    console.log('(5) Sair'),
        item = Number(prompt('>>'));
    switch (item) {
        case 1:
            item = prompt('Item: \n');
            estoque.push(" ");
            break;
        case 2:
            item = prompt('Removeu o item');
            estoque.pop();
            break;
        case 3:
            item = prompt('Item alterado');
            estoque.pop();
            estoque.push(item = prompt('Item: \n'));
            break;
        case 4:
            estoque.forEach(function (item) {
                prompt(' Nome do produto é: ' + item);
            });
            prompt();
            break;
        case 5:
            prompt('saiu');
        default:
    }
} while (item != 4);
