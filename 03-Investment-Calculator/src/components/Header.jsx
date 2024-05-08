import headerLogo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={headerLogo} alt="Header logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
