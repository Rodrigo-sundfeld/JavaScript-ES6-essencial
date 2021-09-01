const name = 'Rodrigo';

//name = 'Lucas';

const user = {
    name: 'Lucas'
};

user.name = 'Outro nome';

/*user = {
    name = 'Priscilla'
};*/

const persons = ['Rodrigo', 'Lucas', 'Priscilla'];


// add novos itens
persons.push('Ana');

// remover algum item
persons.shift();

// podemos alterar diretamente
persons[0] = 'Sundfeld';

console.log('Array após as alteraçoes:', persons);