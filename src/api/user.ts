import { http } from '@/utils/http'
import { Acction } from '@/types/usertype'

export  const getUser = (data:Acction) => http<Acction>("/getuserinfo", "get",data)