$(document).ready(function(){
    var bicicletta = [
        {
            'nome': 'Bici da città',
            'peso': 7
        },

        {
            'nome': 'Bici da corsa',
            'peso': 7.5
        },

        {
            'nome': 'Bici elettrica',
            'peso': 11
        },

        {
            'nome': 'Bici pieghevole',
            'peso': 3
        },

        {
            'nome': 'mountain bike',
            'peso': 6
        }
    ];

    let bici_leggera = bicicletta[0];

    bicicletta.forEach((bici) => {

        if(bici.peso < bici_leggera.peso){
            bici_leggera = bici;
        }

    });

    console.log(bici_leggera);
    console.log(bici_leggera.nome);
    console.log(bici_leggera.peso);

})
