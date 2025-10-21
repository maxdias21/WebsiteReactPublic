import {useMessageContext} from "@/context/MessageContext";
import {useEffect} from "react";

function useSetMessage({message, type}) {
    const {setMessage} = useMessageContext();

    useEffect(() => {
        if(!message) return;
        setMessage({'message': message, type: type});
    }, [message, setMessage, type]);


}

export default useSetMessage;