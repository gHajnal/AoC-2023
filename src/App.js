import "./App.css";

import PartOne from "./components/Day1/PartOne";
import PartTwo from "./components/Day1/PartTwo";

function App() {
  return (
    <>
      <main>
        <h1>Welcome!</h1>
        <div>
          <p>
            This is my edition of the{" "}
            <a href="https://adventofcode.com/">
              fancy and famous Advent of Code 2023.
            </a>
            <br /> <br />
            Please, read the original content, and do not check my solution(s)
            if you'd wish to avoid spoilers. <br />
            Links are provided over each section. <br />
            Viewing content may require registration/login!
          </p>
        </div>
        <article>
          <p>
            If you aren't familiar with the AoC, please, make sure to read about
            it!
            <br /> The "About page" on the official "Advent of Code" site is a
            nice place to start{" "}
            <a href="https://adventofcode.com/2023/about">here</a>.
          </p>
          <p>Happy coding!</p>
        </article>
        <h1>Puzzles</h1>
        <h2>In progress </h2>
        <a href="https://adventofcode.com/2023/day/2">
          <p>----------------- Day 2: Cube Conundrum -----------------</p>
        </a>
        <div> ... ... </div>
        <h2>Solved puzzle(s)</h2>
        <a href="https://adventofcode.com/2023/day/1">
          <p>----------------- Day 1: Trebuchet?! -----------------</p>
        </a>
        <div>
          Part One: <PartOne></PartOne>
        </div>
        <div>
          Part Two: <PartTwo></PartTwo>
        </div>
      </main>
    </>
  );
}

export default App;
