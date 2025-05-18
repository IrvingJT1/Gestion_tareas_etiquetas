import { useTareasContext } from "../context/TareasContext"

export const ListadoTareas = () => {

  const { tareas, filter, removeTarea } = useTareasContext();

  const tareasFiltradas =  filter? tareas.filter((tarea) => tarea.label.toUpperCase() === filter ) : tareas;

  return (
    <div>
        <h2 className="text-xl font-bold mb-4">Lista de Tareas</h2>
        {
          // tareas.map((tarea)=>{
          //   return <div 
          //   className="flex justify-between p-2 bg-gray-100 rounded mb-2"
          //   key={tarea.id}
          //   >
          //     <span>{tarea.text}</span>
          //     <button 
          //     className="bg-red-500 text-white px-2 py-1 rounded"
          //     onClick={() => removeTarea(tarea.id)}
          //     >
          //       Eliminar
          //     </button>
          //   </div>
          // })
          tareasFiltradas.map((tarea)=>{
            return <div 
            className="flex justify-between p-2 bg-gray-100 rounded mb-2"
            key={tarea.id}
            >
              <span>{tarea.text}</span>
              <button 
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => removeTarea(tarea.id)}
              >
                Eliminar
              </button>
            </div>
          })
        }
    </div>
  )
}
