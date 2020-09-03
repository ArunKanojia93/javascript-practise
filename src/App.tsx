import React from "react";
import "./App.css";
import { celciusFahrenheit } from "./QnA/celciusFahrenheit";
import { checkFirstJanuarySunday } from "./QnA/checkFirstJanuarySunday";
import { checkLeapYear } from "./QnA/checkLeapYear";
import { daysLeftUntilChristmas } from "./QnA/daysLeftUntilChristmas";
import { diffBy13 } from "./QnA/diffBy13";
import { diffBy19 } from "./QnA/diffBy19";
import { getAreaOfTriangle } from "./QnA/getAreaOfTriangle";
import { getCurrentDate } from "./QnA/getCurrentDate";
import { getExtension } from "./QnA/getExtension";
import { getWebsiteURL } from "./QnA/getWebsiteURL";
import { guessNumber } from "./QnA/guessNumber";
import { is50 } from "./QnA/is50";
import { multiplicationDivision } from "./QnA/multiplicationDivision";
import { printWindow } from "./QnA/printWindow";
import { question20 } from "./QnA/question20";
import { question21 } from "./QnA/question21";
import { question22 } from "./QnA/question22";
import { question23 } from "./QnA/question23";
import { question24 } from "./QnA/question24";
import { question25 } from "./QnA/question25";
import { question26 } from "./QnA/question26";
import { question27 } from "./QnA/question27";
import { question28 } from "./QnA/question28";
import { question29 } from "./QnA/question29";
import { question30 } from "./QnA/question30";
import { qurrentDayAndTime } from "./QnA/qurrentDayAndTime";
import { rotate } from "./QnA/rotateStringPeriodically";
import { sumOfIntegers } from "./QnA/sumOfIntegers";
import { userDefinedVar } from "./QnA/userDefinedVar";
import { within20 } from "./QnA/within20";

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
            <input type="text" id="year" placeholder="Enter year" />
          </span>
        </p>
        <div style={{ display: "flex", marginTop: 12, width: 260 }}>
          <button
            onClick={() => checkLeapYear()}
            style={{ marginLeft: "auto" }}
          >
            Check Leap Year
          </button>
        </div>
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
            <p>
              Number1:{" "}
              <input
                id="number1"
                style={{ marginLeft: 12 }}
                type="number"
                placeholder="Enter number1"
              />
            </p>
          </div>
          <div style={{ display: "flex", marginTop: 12 }}>
            <p>
              Number2:{" "}
              <input
                id="number2"
                style={{ marginLeft: 12 }}
                type="number"
                placeholder="Enter number2"
              />
            </p>
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
      <div className="question-container">
        <h5>
          11. Write a JavaScript program to convert temperatures to and from
          Celsius, Fahrenheit.
        </h5>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <p>
              Input Temperature:{" "}
              <input
                id="temp"
                style={{ marginLeft: 12 }}
                type="number"
                placeholder="Enter temperature"
              />
            </p>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 12, width: 330 }}>
          <button
            id="celcius"
            onClick={() =>
              celciusFahrenheit(
                (document.getElementById("celcius") as HTMLButtonElement)
                  .innerHTML
              )
            }
            style={{ marginLeft: "auto" }}
          >
            Celcius
          </button>
          <button
            id="fahrenheit"
            onClick={() =>
              celciusFahrenheit(
                (document.getElementById("fahrenheit") as HTMLButtonElement)
                  .innerHTML
              )
            }
            style={{ marginLeft: 12 }}
          >
            Fahrenheit
          </button>
        </div>
        <p>
          Result: <span id="celcius-fahrenheit" />
        </p>
      </div>
      <div className="question-container">
        <h5>
          12. Write a JavaScript program to get the website URL (loading page).
        </h5>
        <p>
          URL: <span>{getWebsiteURL()}</span>
        </p>
      </div>
      <div className="question-container">
        <h5>
          13. Write a JavaScript exercise to create a variable using a
          user-defined name.
        </h5>
        <p>
          Variable: <span>{userDefinedVar("myVar")}</span>
        </p>
        <small style={{ color: "red" }}>needs clarification*</small>
      </div>
      <div className="question-container">
        <h5>
          14. Write a JavaScript exercise to get the extension of a filename.
        </h5>
        <p>
          Result: <span>{getExtension("file.exe")}</span>
        </p>
      </div>
      <div className="question-container">
        <h5>
          15. Write a JavaScript program to get the difference between a given
          number and 13, if the number is greater than 13 return double the
          absolute difference.
        </h5>
        <p>
          Input Number:{" "}
          <span>
            <input type="number" id="diffBy13" placeholder="Enter number" />
          </span>
        </p>
        <div style={{ display: "flex", marginTop: 12, width: 280 }}>
          <p>
            Result: <span id="diff-by-13" />
          </p>
          <button onClick={() => diffBy13()} style={{ marginLeft: "auto" }}>
            Check
          </button>
        </div>
      </div>
      <div className="question-container">
        <h5>
          16. Write a JavaScript program to compute the sum of the two given
          integers. If the two values are same, then returns triple their sum.
        </h5>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <p>
              Number1:{" "}
              <input
                id="sumInteger1"
                style={{ marginLeft: 12 }}
                type="number"
                placeholder="Enter number1"
              />
            </p>
          </div>
          <div style={{ display: "flex", marginTop: 12 }}>
            <p>
              Number2:{" "}
              <input
                id="sumInteger2"
                style={{ marginLeft: 12 }}
                type="number"
                placeholder="Enter number2"
              />
            </p>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 12, width: 280 }}>
          <button
            onClick={() => sumOfIntegers()}
            style={{ marginLeft: "auto" }}
          >
            Check
          </button>
        </div>
        <p>
          Result: <span id="sum-integers" />
        </p>
      </div>
      <div className="question-container">
        <h5>
          17. Write a JavaScript program to compute the absolute difference
          between a specified number and 19. Returns triple their absolute
          difference if the specified number is greater than 19.
        </h5>
        <p>
          Input Number:{" "}
          <span>
            <input type="number" id="diffBy19" placeholder="Enter number" />
          </span>
        </p>
        <div style={{ display: "flex", marginTop: 12, width: 280 }}>
          <p>
            Result: <span id="diff-by-19" />
          </p>
          <button onClick={() => diffBy19()} style={{ marginLeft: "auto" }}>
            Check
          </button>
        </div>
      </div>
      <div className="question-container">
        <h5>
          18. Write a JavaScript program to check two given numbers and return
          true if one of the number is 50 or if their sum is 50.
        </h5>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <p>
              Number1:{" "}
              <input
                id="50Number1"
                style={{ marginLeft: 12 }}
                type="number"
                placeholder="Enter number1"
              />
            </p>
          </div>
          <div style={{ display: "flex", marginTop: 12 }}>
            <p>
              Number2:{" "}
              <input
                id="50Number2"
                style={{ marginLeft: 12 }}
                type="number"
                placeholder="Enter number2"
              />
            </p>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 12, width: 280 }}>
          <button onClick={() => is50()} style={{ marginLeft: "auto" }}>
            Check
          </button>
        </div>
        <p>
          Result: <span id="check-50" />
        </p>
      </div>
      <div className="question-container">
        <h5>
          19. Write a JavaScript program to check whether a given integer is
          within 20 of 100 or 400.
        </h5>
        <p>
          Input Number:{" "}
          <span>
            <input type="number" id="within20" placeholder="Enter number" />
          </span>
        </p>
        <div style={{ display: "flex", marginTop: 12, width: 280 }}>
          <p>
            Result: <span id="within-20" />
          </p>
          <button onClick={() => within20()} style={{ marginLeft: "auto" }}>
            Check
          </button>
        </div>
      </div>
      <div className="question-container">
        <h5>
          20. Write a JavaScript program to check from two given integers,
          whether one is positive and another one is negative.
        </h5>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <p>
              Number1:{" "}
              <input
                id="q20input1"
                style={{ marginLeft: 12 }}
                type="number"
                placeholder="Enter number1"
              />
            </p>
          </div>
          <div style={{ display: "flex", marginTop: 12 }}>
            <p>
              Number2:{" "}
              <input
                id="q20input2"
                style={{ marginLeft: 12 }}
                type="number"
                placeholder="Enter number2"
              />
            </p>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 12, width: 280 }}>
          <button onClick={() => question20()} style={{ marginLeft: "auto" }}>
            Check
          </button>
        </div>
        <p>
          Result: <span id="question-20" />
        </p>
      </div>
      <div className="question-container">
        <h5>
          21. Write a JavaScript program to create a new string adding "Py" in
          front of a given string. If the given string begins with "Py" then
          return the original string.
        </h5>
        <p>
          Input Text:{" "}
          <span>
            <input type="text" id="q21" placeholder="Enter Text" />
          </span>
        </p>
        <div style={{ display: "flex", marginTop: 12, width: 280 }}>
          <p>
            Result: <span id="question-21" />
          </p>
          <button onClick={() => question21()} style={{ marginLeft: "auto" }}>
            Check
          </button>
        </div>
      </div>
      <div className="question-container">
        <h5>
          22. Write a JavaScript program to remove a character at the specified
          position of a given string and return the new string.
        </h5>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <p>
              Input Text:{" "}
              <input
                id="q22Input1"
                style={{ marginLeft: 12 }}
                type="text"
                placeholder="Enter Text"
              />
            </p>
          </div>
          <div style={{ display: "flex", marginTop: 12 }}>
            <p>
              Input Number:{" "}
              <input
                id="q22Input2"
                style={{ marginLeft: 12, width: 40 }}
                type="number"
              />
            </p>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 12, width: 280 }}>
          <button onClick={() => question22()} style={{ marginLeft: "auto" }}>
            Check
          </button>
        </div>
        <p>
          Result: <span id="question-22" />
        </p>
      </div>
      <div className="question-container">
        <h5>
          23. Write a JavaScript program to create a new string from a given
          string changing the position of first and last characters. The string
          length must be greater than or equal to 1.
        </h5>
        <p>
          Input Text:{" "}
          <span>
            <input type="text" id="q23" placeholder="Enter Text" />
          </span>
        </p>
        <div style={{ display: "flex", marginTop: 12, width: 280 }}>
          <p>
            Result: <span id="question-23" />
          </p>
          <button onClick={() => question23()} style={{ marginLeft: "auto" }}>
            Check
          </button>
        </div>
      </div>
      <div className="question-container">
        <h5>
          24. Write a JavaScript program to create a new string from a given
          string with the first character of the given string added at the front
          and back.
        </h5>
        <p>
          Input Text:{" "}
          <span>
            <input type="text" id="q24" placeholder="Enter text" />
          </span>
        </p>
        <div style={{ display: "flex", marginTop: 12, width: 280 }}>
          <p>
            Result: <span id="question-24" />
          </p>
          <button onClick={() => question24()} style={{ marginLeft: "auto" }}>
            Check
          </button>
        </div>
      </div>
      <div className="question-container">
        <h5>
          25. Write a JavaScript program to check whether a given positive
          number is a multiple of 3 or a multiple of 7.
        </h5>
        <p>
          Input Number:{" "}
          <span>
            <input type="number" id="q25" placeholder="Enter number" />
          </span>
        </p>
        <div style={{ display: "flex", marginTop: 12, width: 290 }}>
          <p>
            Result: <span id="question-25" />
          </p>
          <button onClick={() => question25()} style={{ marginLeft: "auto" }}>
            Check
          </button>
        </div>
      </div>
      <div className="question-container">
        <h5>
          26. Write a JavaScript program to create a new string from a given
          string taking the last 3 characters and added at both the front and
          back. The string length must be 3 or more.
        </h5>
        <p>
          Input Text:{" "}
          <span>
            <input type="text" id="q26" placeholder="Enter text" />
          </span>
        </p>
        <div style={{ display: "flex", marginTop: 12, width: 280 }}>
          <p>
            Result: <span id="question-26" />
          </p>
          <button onClick={() => question26()} style={{ marginLeft: "auto" }}>
            Check
          </button>
        </div>
      </div>
      <div className="question-container">
        <h5>
          27. Write a JavaScript program to check whether a string starts with
          'Java' and false otherwise.
        </h5>
        <p>
          Input Text:{" "}
          <span>
            <input type="text" id="q27" placeholder="Enter text" />
          </span>
        </p>
        <div style={{ display: "flex", marginTop: 12, width: 280 }}>
          <p>
            Result: <span id="question-27" />
          </p>
          <button onClick={() => question27()} style={{ marginLeft: "auto" }}>
            Check
          </button>
        </div>
      </div>
      <div className="question-container">
        <h5>
          28. Write a JavaScript program to check whether two given integer
          values are in the range 50..99 (inclusive). Return true if either of
          them are in the said range.
        </h5>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <p>
              Number1:{" "}
              <input
                id="q28input1"
                style={{ marginLeft: 12 }}
                type="number"
                placeholder="Enter number1"
              />
            </p>
          </div>
          <div style={{ display: "flex", marginTop: 12 }}>
            <p>
              Number2:{" "}
              <input
                id="q28input2"
                style={{ marginLeft: 12 }}
                type="number"
                placeholder="Enter number2"
              />
            </p>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 12, width: 280 }}>
          <button onClick={() => question28()} style={{ marginLeft: "auto" }}>
            Check
          </button>
        </div>
        <p>
          Result: <span id="question-28" />
        </p>
      </div>
      <div className="question-container">
        <h5>
          29. Write a JavaScript program to check whether three given integer
          values are in the range 50..99 (inclusive). Return true if one or more
          of them are in the said range.
        </h5>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <p>
              Number1:{" "}
              <input
                id="q29input1"
                style={{ marginLeft: 12 }}
                type="number"
                placeholder="Enter number1"
              />
            </p>
          </div>
          <div style={{ display: "flex", marginTop: 12 }}>
            <p>
              Number2:{" "}
              <input
                id="q29input2"
                style={{ marginLeft: 12 }}
                type="number"
                placeholder="Enter number2"
              />
            </p>
          </div>
          <div style={{ display: "flex", marginTop: 12 }}>
            <p>
              Number3:{" "}
              <input
                id="q29input3"
                style={{ marginLeft: 12 }}
                type="number"
                placeholder="Enter number3"
              />
            </p>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 12, width: 280 }}>
          <button onClick={() => question29()} style={{ marginLeft: "auto" }}>
            Check
          </button>
        </div>
        <p>
          Result: <span id="question-29" />
        </p>
      </div>
      <div className="question-container">
        <h5>
          30. Write a JavaScript program to check whether a string "Script"
          presents at 5th (index 4) position in a given string, if "Script"
          presents in the string return the string without "Script" otherwise
          return the original one.
        </h5>
        <p>
          Input Text:{" "}
          <span>
            <input type="text" id="q30" placeholder="Enter text" />
          </span>
        </p>
        <div style={{ display: "flex", marginTop: 12, width: 280 }}>
          <p>
            Result: <span id="question-30" />
          </p>
          <button onClick={() => question30()} style={{ marginLeft: "auto" }}>
            Check
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
