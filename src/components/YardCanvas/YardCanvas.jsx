import React, { useRef, useEffect } from 'react';

const YardCanvas = props => {

    const canvasRef = useRef(null);

    // Function to draw a single brick
    function drawBrick(ctx, x, y, brickWidth, brickHeight) {
        ctx.beginPath();
        ctx.rect(x, y, brickWidth, brickHeight);
        ctx.closePath();

        ctx.fillStyle = '#8B0000'; // Adjust the brick color
        ctx.fill();

        // Draw mortar lines
        ctx.strokeStyle = '#333'; // Adjust the mortar color
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    // Function to draw the brick wall with border
    function drawBrickWallWithBorder(ctx, width, height) {
        const brickWidth = 25; // Adjust the width of each brick
        const brickHeight = 10; // Adjust the height of each brick

        const numRows = Math.ceil(height / brickHeight);
        const numCols = Math.ceil(width / brickWidth);

        // Draw the inner brick wall
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                const x = col * brickWidth;
                const y = row * brickHeight;
                drawBrick(ctx, x, y, brickWidth, brickHeight);
            }
        }

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
        ctx.fillStyle = '#b5b5b5';
        drawBrickWallWithBorder(ctx, canvas.width, canvas.height);
        ctx.fill();

        // Cleanup function
        return () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
    }, [props.yardWidth, props.yardHeight]);

    return <canvas ref={canvasRef} {...props} />;
};

export default YardCanvas;