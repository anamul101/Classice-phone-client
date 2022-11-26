import { useEffect, useState } from "react"

const useSeller = email =>{
    const [isSeller, setIsSeller]=useState('buyer');
    // const [isAdminLoader, setIsAdminLoader]=useState(true);
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/seller/${email}`)
            .then(res=>res.json())
            .then(data=>{
                setIsSeller(data.isSeller)
                // setIsAdminLoader(false)
            })
        }
    },[email])
    return [isSeller]
}

export default useSeller;