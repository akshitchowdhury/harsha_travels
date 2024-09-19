import React, { useState } from 'react'

const Gallery = () => {

    const gameGrid = [{
        num:1,
        isMarked: false,
        symbol:''
    },{
        num:2,
        isMarked: false,
        symbol:''
    },{
        num:3,
        isMarked: false,
        symbol:''
    },{
        num:4,
        isMarked: false,
        symbol:''
    },{
        num:5,
        isMarked: false,
        symbol:''
    },{
        num:6,
        isMarked: false,
        symbol:''
    },{
        num:7,
        isMarked: false,
        symbol:''
    },{
        num:8,
        isMarked: false,
        symbol:''
    },{
        num:9,
        isMarked: false,
        symbol:''
    }]

    const[displayGrid,setDisplayGrid] = useState(gameGrid)
    const[targetIndex,setTargetIndex] = useState(null)
    const[symbol,setSymBol] = useState('X')
    // const[turn,setTurn] = useState(false)
    const handleClickedGrid = (currIndex)=>{

        const updatedGrid = displayGrid.map((item,index)=>(
            index === currIndex ? {...item,isMarked:true,symbol:symbol} : item
        ))

        setDisplayGrid(updatedGrid)
        setTargetIndex(currIndex)
        setSymBol(symbol==='X'? '0' : 'X')
    }
  return (
    <div className='flex flex-row items-center justify-center my-5'>
    <div className='cursor-pointer border-1 border-black max-w-[250px] grid grid-cols-3 '>
              {
                displayGrid.map((box,index)=>(
                    <>
                        <div onClick={()=>{handleClickedGrid(index)}} 
                        key={index} className='w-[82px] h-[90px] border-2 flex items-center justify-center border-black'>
                            {box.isMarked ? <p>{box.symbol}</p> : <p></p>}
                        </div>
                    </>
                ))
              }
    </div>
    </div>
  )
}

export default Gallery

