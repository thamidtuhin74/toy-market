import React from 'react';
// import img404 from 'https://media.istockphoto.com/id/1153372686/photo/404-error-page-not-found.jpg'

const PageNotFound = () => {
    
    return (
        <div className='container mx-auto'>
            <h1 className="text-5xl font-bold align-center my-4">Page not FOund</h1>
            <img className="w-full" src={'https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg'} alt="" />
            <h1>Page not FOund</h1>
        </div>
    );
};

export default PageNotFound;