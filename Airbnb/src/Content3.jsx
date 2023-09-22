

function Content3({img,price,title}){
    return (
            <div className="grid ml-14 mb-10">
                <div>
                    <img className="h-64" src={img}></img>
                </div>
                <div>
                    <h3 className="text-xs font-light">{title}</h3>
                    <h3 className="text-sm"><span className="font-bold">From ${price}</span> / person</h3>
                </div>
            </div>
    )
}
export default Content3;