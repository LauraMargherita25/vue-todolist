/* 
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
*/

const app = new Vue({
    el: "#root",
    data: {
        arrTasks: [
            {
                taskName: "Fare i compiti",
                taskState: true,
            },
            {
                taskName: "Fare la spesa",
                taskState: true,
            },
            {
                taskName: "Preparare la torta",
                taskState: true,
            },
        ]
    }
})