export default function Meme(){
    return (
        <div className="flex justify-center my-28">
            <form className="grid gap-8">
                <div className="flex gap-2">
                    <input className="border-2 w-96 py-3 rounded-lg" type="text"></input>
                    <input className="border-2 w-96 py-3 rounded-lg" type="text"></input><br></br>
                </div>
                <div>
                    <input className="border-2 w-full py-3 bg-[#711F8D] rounded-lg text-white" type="submit" value='Get a new meme image  🖼'></input>
                </div>
            </form>
        </div>
    )
}