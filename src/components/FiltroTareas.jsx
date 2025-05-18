import { useState } from "react";
import { useTareasContext } from "../context/TareasContext"

export const FiltroTareas = () => {

  const { tareas, filter, filteredByLabel } = useTareasContext();


  // const labels = Array.from(new Set(tareas.map( (tarea) => tarea.label.toUpperCase() )));

  const labelsToFilter = tareas.map( (tarea) => tarea.label.toUpperCase() );

  // Set ayuda a obtener los datos de un arreglo que puede tener repeticiones, para evitar esas repeticiones
  // y mostrarnos solo los datos diferentes contenidos en él 

  const labels = Array.from(new Set(labelsToFilter));

  const handleFilterChange = ( e ) => {
    // console.log(e.target.value)
    filteredByLabel(e.target.value);
    
  }

  return (
    <div className="mb-4 ">
      <h2 className="text-xl font-bold mb-2">Filtrar por etiqueta</h2>
      <select 
        className="border p-2 rounded mb-2 w-full"
        onChange={(e) => handleFilterChange(e)}
        value={filter}
      >
        <option value="">-- Etiquetas --</option>
        {labels.map((label, index)=>{
          return <option 
          key={index} 
          value={label}
          >
           {label}
          </option>
        })}
        
      </select>
    </div>
  )
}
