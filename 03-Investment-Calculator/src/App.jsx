import Header from "./components/Header";
import UserInput from "./components/UserInput";

function Results() {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investent Value 2</th>
          <th>Interest Year</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>$15,900</td>
          <td>$900</td>
          <td>$900</td>
          <td>$15,000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>$16,854</td>
          <td>$954</td>
          <td>$1,854</td>
          <td>$15,000</td>
        </tr>
      </tbody>
    </table>
  );
}

function App() {
  return (
    <>
      <Header />
      <UserInput />
      <Results />
    </>
  );
}

export default App;
