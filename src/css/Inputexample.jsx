import React, { useState } from "react";

const Inputexample = () => {
  const getnumber = () => {
    let number = Math.floor(Math.random() * 100);
    return number;
  };

  const [randomnumber, setRandomnumber] = useState(getnumber());
  const [resulttext, setResulttext] = useState("");
  const [inputnumber, setInputnumber] = useState("");
  const [attempts, setAttempts] = useState(5);

  const inputdata = (e) => {
    let data = e.target.value;
    setInputnumber(data);
  };

  const taah = () => {
    if (attempts > 1) {
      if (inputnumber > randomnumber) setResulttext("ih bn");
      else if (inputnumber < randomnumber) setResulttext("baga bn");
      else setResulttext("win");
      setAttempts(attempts - 1);
    } else {
      setResulttext('lose');
      setAttempts(0);
      
    }
   
  };

  const restart = () => {
    setRandomnumber(getnumber());
    setResulttext("");
    setInputnumber("");
    setAttempts(5);
  };

  return (
    <div>
      <h1>Inputexample</h1>
      <h2>sanasan too:{randomnumber}</h2>
      <h2>{resulttext}</h2>
      <h3>baigaa bolomj: {attempts}</h3>
      <div style={{ display: "flex" }}>
        <input
          type="number"
          style={{ width: 300, height: 120, fontSize: 50 }}
          placeholder="password"
          onChange={inputdata}
          disabled={attempts === 0}
        />
        <button
          style={{
            width: 230,
            height: 120,
            fontSize: 50,
            display: "flex",
            alignItems: "center",
            backgroundColor: "green",
            color: "white",
          }}
          onClick={taah}
          disabled={attempts === 0}
        >
          taah
        </button>
        {attempts === 0 && (
          <button
            style={{
              width: 230,
              height: 120,
              fontSize: 50,
              display: "flex",
              alignItems: "center",
              backgroundColor: "red",
              color: "white",
            }}
            onClick={restart}
           
          >
            dahin ehleh

          </button>

        
          
        )}
      </div>
    </div>
  );
};

export default Inputexample;
