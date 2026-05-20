import { useState, useRef } from 'react'
import './TicTacToe.css'
import circle from '../Assets/circle.png'
import cross from '../Assets/cross.png'

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock || data[num] !== "") return;

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${cross}" class="w-full h-full object-contain">`;
      data[num] = "x";
      setCount(count + 1);
    } else {
      e.target.innerHTML = `<img src="${circle}" class="w-full h-full object-contain">`;
      data[num] = "o";
      setCount(count + 1);
    }

    checkWin();
  }

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") won(data[0]);
    else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") won(data[3]);
    else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") won(data[6]);
    else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") won(data[0]);
    else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") won(data[1]);
    else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") won(data[2]);
    else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") won(data[0]);
    else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") won(data[2]);
  }

  const won = (winner) => {
    setLock(true);
    titleRef.current.innerHTML = `
      <div class="flex justify-center items-center gap-3 text-2xl sm:text-3xl md:text-5xl font-semibold text-white">
        <span>Congratulations :</span>
        <img src="${winner === "x" ? cross : circle}" class="w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain mt-1.5 md:mt-3 lg:mt-4">
      </div>`;
  }

  const reset = () => {
    setLock(false);
    setCount(0);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = `
      <h1 class="text-2xl sm:text-4xl md:text-5xl flex flex-wrap justify-center items-center font-semibold py-5 text-white">
        Tic Tac Toe game by <span class="text-[#26ffcb] px-2 sm:px-4">Akshat Toshniwal.</span>
      </h1>
    `;
    box_array.forEach((e) => {
      e.current.innerHTML = "";
    });
  }

  const boxClass = "flex items-center justify-center h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 bg-[#1f3540] border-4 border-[#0f1b21] rounded-xl cursor-pointer p-5 sm:p-8 md:p-10";

  return (
    <div id="container" className="min-h-screen text-center px-4 py-5">
      <h1
        id="title"
        className="text-white text-2xl sm:text-4xl md:text-5xl flex flex-wrap justify-center items-center font-semibold py-5 min-h-24 sm:min-h-28 md:min-h-32"
        ref={titleRef}
      >
        Tic Tac Toe game by
        <span className="text-[#26ffcb] px-2 sm:px-4">Akshat Toshniwal.</span>
      </h1>

      <div id="board" className="grid grid-cols-3 justify-center mx-auto w-fit">
        <div ref={box1} onClick={(e) => toggle(e, 0)} className={boxClass}></div>
        <div ref={box2} onClick={(e) => toggle(e, 1)} className={boxClass}></div>
        <div ref={box3} onClick={(e) => toggle(e, 2)} className={boxClass}></div>
        <div ref={box4} onClick={(e) => toggle(e, 3)} className={boxClass}></div>
        <div ref={box5} onClick={(e) => toggle(e, 4)} className={boxClass}></div>
        <div ref={box6} onClick={(e) => toggle(e, 5)} className={boxClass}></div>
        <div ref={box7} onClick={(e) => toggle(e, 6)} className={boxClass}></div>
        <div ref={box8} onClick={(e) => toggle(e, 7)} className={boxClass}></div>
        <div ref={box9} onClick={(e) => toggle(e, 8)} className={boxClass}></div>
      </div>

      <button
        id="reset"
        onClick={reset}
        className="w-44 sm:w-56 md:w-64 h-14 sm:h-16 md:h-20 border-none outline-none cursor-pointer rounded-[50px] bg-[#1f3540] text-xl sm:text-2xl text-[#26ffcb] mt-6 mb-5"
      >
        Reset
      </button>
    </div>
  )
}

export default TicTacToe