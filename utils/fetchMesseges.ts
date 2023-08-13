import { Message } from "@/typings";

const fetcher = async()=>{

    const res = await fetch('/api/getMesseges');
    const data = await res.json()
    const messeges :Message[] =  data.messeges;

    return messeges;
}

export default fetcher;