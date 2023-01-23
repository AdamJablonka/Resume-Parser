import React from 'react'
import { useForm } from 'react-hook-form';

const FileUpload = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <div className="pt-10 justify-center flex text-xl text-lg bg-green-200">
            <p className="mr-10">Upload your resume here:</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input ref={register('resume', {})} type="file"/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default FileUpload;