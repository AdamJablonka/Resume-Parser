
const Navbar = () => {
    return(
        <div>
            <header className="fixed w-full font-bold bg-slate-200 z-0 p-2">
                <div className="mx-auto flex flex-row justify-around"> 
                    <button>Dashboard</button>
                    <button>Apply</button>
                    <button>Github</button>  
                </div>
            </header>
        </div>
    )
}

export default Navbar;