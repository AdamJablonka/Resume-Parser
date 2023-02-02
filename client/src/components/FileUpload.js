import React from 'react'
import Navbar from './Navbar';
import { useEffect, useState } from 'react';

const FileUpload = () => {
    // selectedFile contains information on the currently picked file.
    // isFilePicked determines if a file has been picked or not.
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    }

    function changeHandler(event) {
        console.log("A file has been uploaded");
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
        console.log(event.target.files[0]);
    }

    function handleSubmission() {
        console.log("Submission has been made.");
        console.log("You have clicked");
        const file_data = selectedFile;
    }

    return(
        <div>
            <Navbar/>
            <div className="pt-10 justify-center flex text-xl text-lg">
                <div className="mt-2">
                    <p className="mr-10">Upload your resume here:</p>
                    <div>
                        <input type="file" name="file" onChange={changeHandler}/>
                        <button className='bg-stone-200 rounded-sm pl-2 pr-2' onClick={handleSubmission}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FileUpload;