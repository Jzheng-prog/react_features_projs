import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";


export const FeatureFlagsContext = createContext(null)

export default function FeatureFlagsGlobalState({children}){

    const [loading, setLoading] = useState(false)
    const [enableFlag, setEnabledFlags] = useState({})

    async function fetchFeatureFlags(){
        try{
            setLoading(true)
            const response = await featureFlagsDataServiceCall();
            setEnabledFlags(response)
            setLoading(false)

        }catch(e){
            console.log(e)
            setLoading(false)

        }
    }
    useEffect(()=>{
        fetchFeatureFlags()
    })

    return <FeatureFlagsContext.Provider value={{enableFlag, loading}}>{children}</FeatureFlagsContext.Provider>
}