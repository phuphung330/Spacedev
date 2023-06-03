import React from "react";

const Loading = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center flex-col bg-white'>
            <div>
                <img
                    style={{ height: 90, width: 90 }}
                    src='/img/logo-test.gif'
                    alt=''
                />
            </div>
            <div className='relative'>
                <div style={{ marginTop: 20 }} className='progress-loader'>
                    <div className='progress'></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
