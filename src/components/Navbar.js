
const Navbar = () => {
    return(
        <div>
            <header className="fixed w-full font-bold bg-slate-200 z-0 p-2">
                <div className="mx-auto flex flex-row justify-around"> 
                    <a href={`/dashboard`}>Dashboard</a>
                    <a href={`/apply`}>Apply</a>
                </div>
            </header>
        </div>
    )
}

export default Navbar;