import React from 'react'

const CardBody = ({character}) => {
  const statusP = {
    Alive: "bg-green-500",
        Dead: "bg-red-500",
        unknown: "bg-amber-900"
  }
  
  return (

    
    <section className='bg-[url(/fondo7.jpg)] bg-no-repeat bg-cover bg-bottom bg-transparent/90 h-[420px] rounded-2xl overflow-hidden'>
        <div >
            <img  src={character.image} alt="" />
            <div className='ml-3 mt-1 font-semibold'>
                <ul>
                    <li>Name: {character.name}</li>
                    <li>Gender: {character.gender}</li>
                    <li>Location: {character.location.name}</li>
                    <li className='inline-flex'>Location: {character.status} <span className='ml-2 mt-[5px]'> <div className={`h-[15px] aspect-square animate-pulse ${statusP[character?.status]} rounded-full`}></div></span></li>

                </ul>
            </div>
        </div>
        
    </section>
  )
}

export default CardBody