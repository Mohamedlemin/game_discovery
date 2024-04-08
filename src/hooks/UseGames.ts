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
    const [isloading,setLoading] = useState(false);
    
        useEffect(()=>{
            const controller = new AbortController();
            setLoading(true)

            apiClient.get<Game[]>("/games",{ signal: controller.signal})
                     .then(res=>{
                        setGames(res.data)
                        setLoading(false)
                     }
                    )
                     .catch((err) => {
                        if(err instanceof CanceledError) return;
                        setLoading(false)
                        setError(err.message)});
            return () => controller.abort();
            
        },[]) 
        return {games,error,isloading}
}
 

export default useGames;