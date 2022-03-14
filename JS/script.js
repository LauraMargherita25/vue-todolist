/* 
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
*/

const app = new Vue({
    el: "#root",
    data: {
        newTask: {
            taskName: ,
            taskState: true,
        }, 
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
    },
    methods:{
        removeTask(index) {
            this.arrTasks.splice(index, 1);
        },
        addTask() {
            this.arrTasks.push(this.newTask)
        }
    }
})