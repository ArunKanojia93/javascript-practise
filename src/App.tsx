import React from "react";
import "./App.css";
import { checkFirstJanuarySunday } from "./QnA/checkFirstJanuarySunday";
import { checkLeapYear } from "./QnA/checkLeapYear";
import { daysLeftUntilChristmas } from "./QnA/daysLeftUntilChristmas";
import { getAreaOfTriangle } from "./QnA/getAreaOfTriangle";
import { getCurrentDate } from "./QnA/getCurrentDate";
import { guessNumber } from "./QnA/guessNumber";
import { multiplicationDivision } from "./QnA/multiplicationDivision";
import { printWindow } from "./QnA/printWindow";
import { qurrentDayAndTime } from "./QnA/qurrentDayAndTime";
import { rotate } from "./QnA/rotateStringPeriodically";

rotate();

function App() {
  return (
    <div className="app">
      <h2>QnA</h2>
      <div className="question-container">
        <h5>
          1. Write a JavaScript program to display the current day and time in
          the following format.
          <br />
          Sample Output : Today is : Tuesday. Current time is : 10 PM : 30 : 38
        </h5>
        <p>
          Today is: <span>{qurrentDayAndTime().day}</span>
        </p>
        <p>
          Current time is: <span>{qurrentDayAndTime().time}</span>
        </p>
      </div>
      <div className="question-container">
        <h5>
          2. Write a JavaScript program to print the contents of the current
          window.
        </h5>
        <button onClick={() => printWindow()}>Print this window</button>
      </div>
      <div className="question-container">
        <h5>
          3. Write a JavaScript program to get the current date.
          <br />
          Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
        </h5>
        <p>
          Format-mm-dd-yyyy: <span>{getCurrentDate("mm-dd-yyyy")}</span>
        </p>
        <p>
          Format-mm/dd/yyyy: <span>{getCurrentDate("mm/dd/yyyy")}</span>
        </p>
        <p>
          Format-dd-mm-yyyy: <span>{getCurrentDate("dd-mm-yyyy")}</span>
        </p>
        <p>
          Format-dd/mm/yyyy: <span>{getCurrentDate("dd/mm/yyyy")}</span>
        </p>
      </div>
      <div className="question-container">
        <h5>
          4. Write a JavaScript program to find the area of a triangle where
          lengths of the three of its sides are 5, 6, 7.
        </h5>
        <p>
          Area: <span>{getAreaOfTriangle(5, 6, 7)}</span>
        </p>
      </div>
      <div className="question-container">
        <h5>
          5. Write a JavaScript program to rotate the string 'w3resource' in
          right direction by periodically removing one letter from the end of
          the string and attaching it to the front.
        </h5>
        <p>
          String: <span id="rotate"></span>
        </p>
      </div>
      <div className="question-container">
        <h5>
          6. Write a JavaScript program to determine whether a given year is a
          leap year in the Gregorian calendar.
        </h5>
        <p>
          Input Year:{" "}
          <span>
            <input type="text" id="year" placeholder="Enter Year" />
          </span>
        </p>
        <button onClick={() => checkLeapYear()}>Check Leap Year</button>
        <div style={{ textTransform: "capitalize" }} id="leap-year"></div>
      </div>
      <div className="question-container">
        <h5>
          7. Write a JavaScript program to find 1st January is being a Sunday
          between 2014 and 2050.
        </h5>
        <p>
          1st Januray on Sunday:
          {checkFirstJanuarySunday().map((year) => (
            <span key={year}>{year}</span>
          ))}
        </p>
      </div>
      <div className="question-container">
        <h5>
          8. Write a JavaScript program where the program takes a random integer
          between 1 to 10, the user is then prompted to input a guess number. If
          the user input matches with guess number, the program will display a
          message "Good Work" otherwise display a message "Not matched".
        </h5>
        <button onClick={() => guessNumber()}>Click to guess</button>
        <p id="guess-num" />
      </div>
      <div className="question-container">
        <h5>
          9. Write a JavaScript program to calculate days left until next
          Christmas.
        </h5>
        <p>
          Days left until christmas: <span>{daysLeftUntilChristmas()}</span>
        </p>
      </div>
      <div className="question-container">
        <h5>
          10. Write a JavaScript program to calculate multiplication and
          division of two numbers (input from user).
        </h5>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            Number1:{" "}
            <input id="number1" style={{ marginLeft: 12 }} type="number" />
          </div>
          <div style={{ display: "flex", marginTop: 12 }}>
            Number2:{" "}
            <input id="number2" style={{ marginLeft: 12 }} type="number" />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 12, width: 300 }}>
          <button
            id="divide"
            onClick={() =>
              multiplicationDivision(
                (document.getElementById("divide") as HTMLButtonElement)
                  .innerHTML
              )
            }
            style={{ marginLeft: "auto" }}
          >
            Divide
          </button>
          <button
            id="multiply"
            onClick={() =>
              multiplicationDivision(
                (document.getElementById("multiply") as HTMLButtonElement)
                  .innerHTML
              )
            }
            style={{ marginLeft: 12 }}
          >
            Multiply
          </button>
        </div>
        <p>
          Result: <span id="divide-multiply" />
        </p>
      </div>
    </div>
  );
}

export default App;
