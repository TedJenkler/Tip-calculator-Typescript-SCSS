import { ChangeEvent, useState, useEffect } from "react";
import logo from './assets/styles/images/SPLITTER.png';
import { useKeyboardNavigation } from "./hooks/useKeyboardNavigation";
import profile from './assets/styles/images/profile.png';
import dollar from './assets/styles/images/dollar.png';

function App() {
  const [userInput, setUserInput] = useState<string>('');
  const [tips, setTips] = useState<string>('');
  const [people, setPeople] = useState<string>('');

  const elementsRef = useKeyboardNavigation();

  useEffect(() => {
    if (elementsRef.current[0]) {
      elementsRef.current[0].focus();
    }
  }, []);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numberValue = Number(value);
    if (!isNaN(numberValue) && numberValue < 1000000000) {
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
    <>
      <img className="logo" src={logo} alt="logo" />
      <form className="form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Bill and Tips</legend>

          <div className="form-group">
          <label htmlFor="billAmount">Bill Amount</label>
            <div className="input-container">
              <input
                ref={(el) => el && (elementsRef.current[0] = el)}
                id="billAmount"
                name="userInput"
                onChange={handleInput}
                value={userInput}
                type="text"
                placeholder="0"
                aria-label="billAmount"
              />
              <img src={dollar} alt="dollar" className="input-icon" />
            </div>
          </div>

          <div className="form-group">
            <label>Select Tip %</label>
            <div className="grid-container">
              <button aria-label="5%" ref={(el) => el && (elementsRef.current[1] = el)} type="button" onClick={handleTips('5')}>5%</button>
              <button aria-label="10%" ref={(el) => el && (elementsRef.current[2] = el)} type="button" onClick={handleTips('10')}>10%</button>
              <button aria-label="15%" ref={(el) => el && (elementsRef.current[3] = el)} type="button" onClick={handleTips('15')}>15%</button>
              <button aria-label="25%" ref={(el) => el && (elementsRef.current[4] = el)} type="button" onClick={handleTips('25')}>25%</button>
              <button aria-label="50%" ref={(el) => el && (elementsRef.current[5] = el)} type="button" onClick={handleTips('50')}>50%</button>
                <input
                  ref={(el) => el && (elementsRef.current[6] = el)}
                  onChange={customTip}
                  value={tips}
                  placeholder="Custom"
                  aria-label="Custom Tip Percentage"
                />
            </div>
          </div>

          <div className="form-group">
          <label htmlFor="numberOfPeople">Number of People</label>
            <div className="input-container">
              <input
                ref={(el) => el && (elementsRef.current[7] = el)}
                id="numberOfPeople"
                onChange={handlePeopleInput}
                value={people}
                placeholder="0"
                aria-label="Number of people"
              />
              <img src={profile} alt="profile" className="input-icon" />
            </div>
          </div>
        </fieldset>

        <section className="results-section">
          <h2>Results</h2>
          <div className="result-item">
            <div className="result-title">
              <h3>Tip Amount</h3>
              <p>/ person</p>
            </div>
            <div className="result-value">
              <p aria-label="tip per person">$
                {people !== "" ? Math.floor((Number(userInput) * (Number(tips) / 100)) / Number(people) * 100) / 100 : 0}
              </p>
            </div>
          </div>

          <div className="result-item">
            <div className="result-title">
              <h3>Total</h3>
              <p>/ person</p>
            </div>
            <div className="result-value">
              <p aria-label="total per person">$
              { people && !isNaN(Number(people)) && Number(people) !== 0 ? Math.round((Number(userInput) + (Number(userInput) * (Number(tips) / 100))) / Number(people) * 100) / 100 : 0 }
              </p>
            </div>
          </div>

          <button ref={(el) => el && (elementsRef.current[8] = el)} id={!userInput && !tips && !people ? "disabled" : ""} disabled={!userInput && !tips && !people} className="reset-button" type="button" onClick={handleReset}>RESET</button>
        </section>
      </form>
    </>
  );
}

export default App;