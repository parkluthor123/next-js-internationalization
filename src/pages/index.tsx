import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { ptBR, enUS } from '../lang/words'

const Home: React.FC = () => {
  const router = useRouter();
  const { locale } = router;

  const traducao = locale == "pt-BR" ? ptBR : enUS

  const changeLocation = ()=>{
    switch(locale){
      case "pt-BR" :
          router.push("/", "/", {locale:"en-US" }) 
         break
      case "en-US":
          router.push("/", "/", {locale: "pt-BR"}) 
      break
     }
  }

  return (
    <>
      <h1>Linguagem é: {traducao?.saudacao}</h1>
      <button type='button' onClick={changeLocation}>Trocar</button>
    </>
  )
}

export default Home
