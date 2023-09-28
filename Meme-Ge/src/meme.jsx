import { useState } from "react";
import meme1 from './assets/meme1.png'
import meme2 from './assets/meme2.png'
import meme3 from './assets/meme3.png'

export default function Meme(){
    const memes = [meme1,meme2,meme3]
    const [index, setIndex] = useState(0);
    
    function changeMeme(){
        setIndex((prev)=> prev = Math.floor(Math.random() * memes.length));
    }

    const [current,nextText] = useState({
        text1: '',
        text2: ''
    })

    function AddText(event){
        nextText(texts=>{
            return{...texts,[event.target.name]: event.target.value}
        })
    }

    return (
        <div className="flex justify-center my-28">
            <div className="form grid gap-8">
                <div className="flex gap-2">
                    <input className="border-2 w-96 py-3 rounded-lg" type="text" name= "text1" onChange={AddText}></input>
                    <input className="border-2 w-96 py-3 rounded-lg" type="text" name="text2" onChange={AddText}></input><br></br>
                </div>
                <div>
                    <button className="border-2 w-full py-3 bg-[#711F8D] rounded-lg text-white" onClick={changeMeme}>Get a new meme image  🖼</button>
                </div>
                <div className="images flex justify-center gap-6">
                    <div className="grid relative">
                        <img src={memes[index]}></img>
                        <h1  className="absolute top-0 h-44 w">{current.text1}</h1>
                        <h1 className="absolute bottom-0">{current.text2}</h1>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}