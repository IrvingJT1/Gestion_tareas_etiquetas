import { useReducer } from "react";
import { initialState, tareasReducer } from "../reducers/tareasReducer";

//el hook debe usar el reducer para implementar su propia lógica

const useTareas = () => {
  
   const [state, dispatch] = useReducer(tareasReducer, initialState);

   const addTarea = ( tarea ) =>{
      dispatch( {type:'add_tarea', payload: tarea} );
   }

   const removeTarea = ( id ) =>{
      dispatch( {type:'remove_tarea', payload: id} );
   }

   const filteredByLabel = (label) => {
      dispatch( {type:'filter_by_label', payload: label} );
   } 

  return {
    tareas: state.tareas,
    filter: state.filter,
    addTarea,
    removeTarea,
    filteredByLabel
  }
}

export default useTareas;