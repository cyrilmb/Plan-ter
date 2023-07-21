import React, { useRef, useEffect } from 'react';

const YardCanvas = props => {

    const canvasRef = useRef(null);

    useEffect(() => {
        console.log('PROPS BUDDY', props);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, props?.yardWidth, props?.yardHeight);
    }, []);

    return <canvas ref={canvasRef} {...props} />;
};

export default YardCanvas;