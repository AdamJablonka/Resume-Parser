// server will run a req for the resume data from the server
// search bar to search for names?
// indexed view should represent name, number of matched keywords, diploma, show full resume button?
// sort by date, relevance number at top
import NavBar from './Navbar'
import { useEffect, useState } from 'react';

const Dashboard = () => {

    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch("/api").then(
          response => response.json()
        ).then( data => {
          setBackendData(data);
          console.log(data)
        }
        )
      }, []);

    return(
        <div>
            <NavBar/>
            <div className="flex flex-col">
                <div id="content-bar" className="flex mt-12">
                    <div id="search-bar" className="flex">
                    <p className="mr-1">Search:</p>
                    <input type="text" className="bg-slate-200 rounded-sm"></input>
                    </div>
                </div> 
                <div id="data">
                    <h2>Data from Resumes:</h2>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;