import { ChangeEvent, useState } from "react";

function App() {
  const [userInput, setUserInput] = useState<string>('');
  const [tips, setTips] = useState<string>('');
  const [people, setPeople] = useState<string>('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numberValue = Number(value);
    if (!isNaN(numberValue)) {
      setUserInput(value);
    }
  };

  const handleTips = (tip: string) => () => {
    setTips(tip);
  };

  const customTip = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numberValue = Number(value);
    if (!isNaN(numberValue)) {
      setTips(value);
    }
  };

  const handlePeopleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numberValue = Number(value);
    if (!isNaN(numberValue)) {
      setPeople(value);
    }
  };

  const handleReset = () => {
    setUserInput("");
    setPeople("");
    setTips("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Bill and Tips</legend>

        <div>
          <label htmlFor="billAmount">Bill Amount</label>
          <input
            id="billAmount"
            name="userInput"
            onChange={handleInput}
            value={userInput}
            type="text"
          />
        </div>

        <div>
          <label>Select Tip %</label>
          <div className="grid_container">
            <button type="button" onClick={handleTips('5')}>5%</button>
            <button type="button" onClick={handleTips('10')}>10%</button>
            <button type="button" onClick={handleTips('15')}>15%</button>
            <button type="button" onClick={handleTips('25')}>25%</button>
            <button type="button" onClick={handleTips('50')}>50%</button>
            <input
              onChange={customTip}
              value={tips}
              placeholder="Custom"
              aria-label="Custom Tip Percentage"
            />
          </div>
        </div>

        <div>
          <label htmlFor="numberOfPeople">Number of People</label>
          <input
            id="numberOfPeople"
            onChange={handlePeopleInput}
            value={people}
          />
        </div>
      </fieldset>

      <section>
        <h2>Results</h2>
        <div>
          <div>
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <div>
            <p>
              {people !== "" ? (Number(userInput) * (Number(tips) / 100)) / Number(people) : null}
            </p>
          </div>
        </div>

        <div>
          <div>
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <div>
            <p>
              {people !== "" ? (Number(userInput) / Number(people)) : null}
            </p>
          </div>
        </div>

        <button type="button" onClick={handleReset}>RESET</button>
      </section>
    </form>
  );
}

export default App;