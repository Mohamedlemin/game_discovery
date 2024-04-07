import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number,
    title: string;
    thumbnail : string;
    platform : string;
}

const useGames = () => {

   
    
    const [games,setGames] = useState<Game[]>([]);
    const [error,setError] = useState("");
    
        useEffect(()=>{
            const controller = new AbortController();

            apiClient.get<Game[]>("/games",{ signal: controller.signal})
                     .then(res=>setGames(res.data))
                     .catch((err) => {
                        if(err instanceof CanceledError) return;
                        setError(err.message)});
            return () => controller.abort();
            
        },[]) 
        return {games,error}
}
 

export default useGames;