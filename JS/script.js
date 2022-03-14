/* 
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
*/

const app = new Vue({
    el: "#root",
    data: {
        newTask:  {
            taskName: " ",
            taskState: false,
        }, 
        arrTasks: [
            {
                taskName: "Fare i compiti",
                taskState: false,
            },
            {
                taskName: "Fare la spesa",
                taskState: false,
            },
            {
                taskName: "Preparare la torta",
                taskState: false,
            },
            
        ],
    },
    methods:{
        removeTask(index) {
            this.arrTasks.splice(index, 1);
        },
        addTask() {
            if (this.newTask.taskName.trim() != "") {
                
                this.arrTasks.push({ ...this.newTask });
                this.newTask.taskName = "";
            }
        },
        taskDone() {
            if (this.arrTasks.taskState == false) {
                // this.arrTasks.taskState == true
                console.log("sono falso")
            } else {
                // this.arrTasks.taskState == false
                console.log("sono vero")
            }
        }
    },
})



