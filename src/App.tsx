import React from "react";
import "./App.css";
import { getAreaOfTriangle } from "./QnA/getAreaOfTriangle";
import { getCurrentDate } from "./QnA/getCurrentDate";
import { printWindow } from "./QnA/printWindow";
import { qurrentDayAndTime } from "./QnA/qurrentDayAndTime";
import { rotate } from "./QnA/rotateStringPeriodically";

function App() {
  rotate();

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
          String: <span id="moveIt"></span>
        </p>
      </div>
    </div>
  );
}

export default App;
