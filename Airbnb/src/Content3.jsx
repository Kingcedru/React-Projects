

function Content3({img,price,title}){
    return (
        <div className="flex">
            <div>
                <div>
                    <img src={img}></img>
                </div>
                <div>
                    <h3>{title}</h3>
                    <h3>From $ {price} / person</h3>
                </div>
            </div>
        </div>
    )
}
export default Content3;