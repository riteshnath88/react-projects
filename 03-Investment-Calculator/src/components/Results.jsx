import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

export default function Results({ userInputData }) {
  let results = calculateInvestmentResults(userInputData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investent Value</th>
          <th>Interest Year</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => {
          <tr key={index}>
            <td>{result.year}</td>
            <td>{result.valueEndOfYear}</td>
            <td>{result.interest}</td>
            <td>{result.interest}</td>
            <td>{result.annualInvestment}</td>
          </tr>;
        })}
      </tbody>
    </table>
  );
}
