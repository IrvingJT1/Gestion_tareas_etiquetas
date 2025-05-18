import { createContext, useContext } from "react";
import useTareas from "../hooks/useTareas";

const TareasContext = createContext();

export const TareasProvider = ({ children }) => {
    const { tareas, filter, addTarea, removeTarea, filteredByLabel }  =  useTareas();

    return (
        <TareasContext.Provider
        value={{ tareas, filter, addTarea, removeTarea, filteredByLabel }}>
            { children }
        </TareasContext.Provider>
    )
}

export const useTareasContext = () =>{
    const context = useContext(TareasContext);

    if(!context){
        throw new Error('useTareaContext debe ser usado dentro del TareasProvider')
    }

    return context;
}