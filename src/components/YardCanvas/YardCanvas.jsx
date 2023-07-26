import React, { useRef, useEffect } from 'react';

const YardCanvas = props => {

    const canvasRef = useRef(null);

    // Function to draw a single brick
    function drawBrick(ctx, x, y, brickWidth, brickHeight) {
        ctx.beginPath();
        ctx.rect(x, y, brickWidth, brickHeight);
        ctx.closePath();

        ctx.fillStyle = '#8B0000'; // brick color
        ctx.fill();

        // Draw mortar lines
        ctx.strokeStyle = '#333'; // mortar color
        ctx.lineWidth = .5;
        ctx.stroke();
    }

    // Function to draw the brick walk border
    function drawBrickWalkBorder(ctx, width, height) {
        const brickWidth = 16;
        const brickHeight = 4.5;

        const numRows = Math.ceil(height / brickHeight);
        const numCols = Math.ceil(width / brickWidth);

        // Draw the inner bricks
        // for (let row = 0; row < numRows; row++) {
        //     for (let col = 0; col < numCols; col++) {
        //         const x = col * brickWidth;
        //         const y = row * brickHeight;
        //         drawBrick(ctx, x, y, brickWidth, brickHeight);
        //     }
        // }

        // Draw the top border
        for (let col = 0; col < numCols; col++) {
            const x = col * brickWidth;
            drawBrick(ctx, x, 0, brickWidth, brickHeight);
        }

        // Draw the bottom border
        for (let col = 0; col < numCols; col++) {
            const x = col * brickWidth;
            const y = (numRows - 1) * brickHeight;
            drawBrick(ctx, x, y, brickWidth, brickHeight);
        }

        // Draw the left border
        for (let row = 0; row < numRows; row++) {
            const y = row * brickHeight;
            drawBrick(ctx, 0, y, brickWidth, brickHeight);
        }

        // Draw the right border
        for (let row = 0; row < numRows; row++) {
            const x = (numCols - 1) * brickWidth;
            const y = row * brickHeight;
            drawBrick(ctx, x, y, brickWidth, brickHeight);
        }
    }


    useEffect(() => {
        console.log('PROPS BUDDY', props);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        drawBrickWalkBorder(ctx, props.yardwidth, props.yardheight);
        ctx.fill();

        // Cleanup function
        return () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
    }, [props.yardwidth, props.yardheight]);

    return <canvas ref={canvasRef} {...props} width={500} height={500} />;
};

export default YardCanvas;