// server will run a req for the resume data from the server
// search bar to search for names?
// indexed view should represent name, number of matched keywords, diploma, show full resume button?
// sort by date, relevance number at top
const Dashboard = () => {
    return(
        <div className="m-2 flex flex-col">
            <div id="content-bar" className="flex">
                <div id="search-bar" className="flex">
                    <p className="mr-1">Search:</p>
                    <input type="text" className="bg-slate-200 rounded-sm"></input>
                </div>
            </div> 
            <div id="data">

            </div>
        </div>
    )
}

export default Dashboard;