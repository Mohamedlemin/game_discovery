import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";
import { Game } from "./UseGames";


export interface FetchResponse <T> {
    response : T[]; 
}

const useData = <T>(endpoint:string) => {

   
    
    const [data,setData] = useState<T[]>([]);
    const [error,setError] = useState("");
    const [isloading,setLoading] = useState(false);
    
        useEffect(()=>{
            const controller = new AbortController();
            setLoading(true)

            apiClient.get<any>(endpoint,{ signal: controller.signal})
                     .then(res=>{
                        setData(res.data.response)
                        console.log(res.data.response)
                        setLoading(false)
                     }
                    )
                     .catch((err) => {
                        if(err instanceof CanceledError) return;
                        setLoading(false)
                        setError(err.message)});
            return () => controller.abort();
            
        },[]) 
        return {data,error,isloading}
}
 

export default useData;