# Vue Email List

Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

#### Bonus

Far comparire gli indirizzi email solamente quando sono stati tutti generati.

## Svolgimento
1. In data, inizializzare un array vuoto che conterrà la lista di email da stampare e dichiarare una variabile che contiene l'endpoint della chiamata
2. In methods, creare la funzione getApi
3. Analizzare la risposta fornita: l'indirizzo email è contenuto in "response"
4. Nella funzione getApi, inserire un ciclo for e ad ogni ciclo effettuare una chiamata all'endpoint dato utilizzando il metodo get di axios. Salvare l'indirizzo email ottenuto come risposta come elemento dell'array a indice i
5. Per stampare in pagina solo quando tutti gli indirizzi sono stati tutti generati, creare un array temporaneo in cui salvare tutti gli indirizzi ad ogni chiamata e poi creare una funzione di controllo che associa l'array temporaneo a quello da stampare solo quando la lunghezza dell'array temporaneo è pari a 10
