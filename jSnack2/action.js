$(document).ready(function(){
    var nomi = ['Marco', 'Fabio', 'Alessio', 'Giacomo', 'Giovanni', 'Marta', 'Saverio']; //Creo un array di nomi.
    var nomi_intervallo = []; //Creo un array vuoto, che riempirò con i nomi contenuti nelle posizioni dell'intervallo dato da utente.
    var l = nomi.length; //Salvo la lunghezza dell'Array in una variabile l.
    console.log(nomi); //Stampo tutti i nomi presenti.

    do{ //Faccio inserire l'estremo di sinistra.
        var a = parseInt(prompt('Inserisci un\'intervallo. Digita il primo valore (piu piccolo): '));
    }while (a > l || a < 1);

    do{ //Faccio inserire l'estremo di destra.
        var b = parseInt(prompt('Digita il secondo valore(piu grande): '));
    } while (b < a || b > l);

    //Riempio il vettore vuoto attraverso questo for, con i che parte dall'estremo di sinistra (ricordando che si conta da 0).
    for (var i = (a-1); i < b; i++){
        nomi_intervallo.push(nomi[i]);
    }

    console.log('Con l\'utilizzo di for: ' + nomi_intervallo); //Stampa.

    //Con forEach
    const newArray = [];

        nomi.forEach((nome, index) => {

            if ((a-1) <= index && (b-1) >= index) {
                newArray.push(nome);
            }

        });

    console.log('Con l\'utilizzo di forEach: ' + newArray);
})
