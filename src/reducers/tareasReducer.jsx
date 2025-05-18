
// se define un estado inicial
export const initialState = {
  tareas: [],
  filter: ''
}

// Se define una funcion que constará de if o switch que hará la logica del reducer
// y el retorno del state
export const tareasReducer = (state = initialState, action) => {

    if(action.type === 'add_tarea'){
      return{
        ...state,
        tareas: [
          ...state.tareas,
          action.payload
        ]
      }
    }

    if(action.type === 'remove_tarea'){
      return{
        ...state,
        tareas: state.tareas.filter( tarea => tarea.id !== action.payload )
      }
    }

    if(action.type === 'filter_by_label')
    {
      return {
        ...state,
        filter: action.payload
      }
    }

    return state;

}