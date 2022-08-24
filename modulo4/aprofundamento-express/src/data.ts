export type toDoListType= {
   userId: Number,
   id: Number,
   title: String,
   completed: Boolean | String
}


export const toDoList:toDoListType[]= [
   {
     "userId": 1,
     "id": 1,
     "title": "Fumar",
     "completed": true
   },
   {
     "userId": 2,
     "id": 2,
     "title": "Banho",
     "completed": false
   },
   {
     "userId": 3,
     "id": 3,
     "title": "Estudar",
     "completed": false
   },
   {
     "userId": 4,
     "id": 4,
     "title": "Programar",
     "completed": true
   },
   {
     "userId": 5,
     "id": 5,
     "title": "Arrumar a casa",
     "completed": false
   },
]