import star from './assets/grids/Star 1.png'

function Content3({img,price,title,number,country,rate,decision}){
    return (
            <div className="grid ml-14 mb-10">
                <div>
                    <img className="h-64" src={img}></img>
                </div>
                <div>
                    <div className='flex gap-2 items-center'>
                        <img className= 'w-4 h-4 ' src={star}></img>
                        <h1 className='font-light'>{rate} <span className='text-slate-500'>({number}) . {country}</span></h1>
                    </div>
                    <h3 className="text-xs font-light">{title}</h3>
                    <h3 className="text-sm"><span className="font-bold">From ${price}</span> / person</h3>
                    <h1>{decision}</h1>
                </div>
            </div>
    )
}
export default Content3;