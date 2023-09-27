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
    return (
        <div className="flex justify-center my-28">
            <div className="form grid gap-8">
                <div className="flex gap-2">
                    <input className="border-2 w-96 py-3 rounded-lg" type="text"></input>
                    <input className="border-2 w-96 py-3 rounded-lg" type="text"></input><br></br>
                </div>
                <div>
                    <button className="border-2 w-full py-3 bg-[#711F8D] rounded-lg text-white" onClick={changeMeme}>Get a new meme image  🖼</button>
                </div>
                <div className="images flex justify-center">
                    <img src={memes[index]}></img>
                </div>
            </div>
        </div>
    )
}