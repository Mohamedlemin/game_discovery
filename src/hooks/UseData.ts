import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";


export interface FetchResponse <T> {
    count: number;
    results : T[]; 
}

const useData = <T> (endpoint:string) => {

   
    
    const [data,setData] = useState<T[]>([]);
    const [error,setError] = useState("");
    const [isloading,setLoading] = useState(false);
    
        useEffect(()=>{
            const controller = new AbortController();
            setLoading(true)

            apiClient.get<FetchResponse<T>>(endpoint,{ signal: controller.signal})
                     .then(res=>{
                        setData(res.data.results)
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