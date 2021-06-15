import './App.css';
import Sketch from 'react-p5';

function App() {
  

  let x =50;
	let y =50;
  let w =100;
  let h =70;
  let width= window.innerWidth;
  let height= window.innerHeight;
  console.log(height)
  let speedX;
  let speedY;

  let r;
  let g;
  let b;

  let logo; // loadImage won't work i will fix it, soon

  const randomColor = () =>{
    r=Math.floor(Math.random()*256);
    g=Math.floor(Math.random()*256);
    b=Math.floor(Math.random()*256);
  }

  const setup = (p5, canvasParentRef) => {
		p5.createCanvas(width,height).parent(canvasParentRef);
    speedX=5;
    speedY=5;
    randomColor();
	};

	const draw = (p5) => {
		p5.background("black");
    p5.fill(r,g,b);
		p5.rect(x, y, w, h);
		x+=speedX;
    y+=speedY;

    if(x+w >width){
      speedX *= -1;
      randomColor()
    }else if(x<0){
      speedX *= -1;
      randomColor()
    }
    if(y+h>height){
      speedY *= -1;
      randomColor()
    }else if(y<0){
      speedY *= -1;
      randomColor()
    }

	};

  return (
    <Sketch setup={setup} draw={draw} />

  );
}

export default App;
