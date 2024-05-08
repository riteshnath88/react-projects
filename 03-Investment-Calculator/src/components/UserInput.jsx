export default function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label for="input1">INITIAL INVESTMENT</label>
          <input type="text" id="input1" />

          <label for="input2">ANNUAL INVESTMENT</label>
          <input type="text" id="input2" />
        </div>
        <div>
          <label for="input3">EXPECTED RETURN</label>
          <input type="text" id="input3" />

          <label for="input4">DURATION</label>
          <input type="text" id="input4" />
        </div>
      </div>
    </div>
  );
}
