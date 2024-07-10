import { useState, useEffect } from "react";

const Player = ({
  initialName = "",
  initialBuyin = 0,
  initialFinalStack = 0,
  initialResult = 0,
  onPlayerChange,
}) => {
  const [name, setName] = useState(initialName);
  const [buyin, setBuyin] = useState(initialBuyin);
  const [finalStack, setFinalStack] = useState(initialFinalStack);
  const [result, setResult] = useState(initialResult);

  useEffect(() => {
    setResult(finalStack - buyin);
  }, [finalStack, buyin]);

  useEffect(() => {
    if (onPlayerChange) {
      onPlayerChange({ name, buyin, finalStack, result });
    }
  }, [name, buyin, finalStack, result]);

  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td>
        <div className="input-container">
          <input
            type="number"
            value={buyin}
            onChange={(e) => setBuyin(Number(e.target.value))}
          />
          <div className="button-group">
            <button onClick={() => setBuyin(buyin + 1)}>+</button>
            <button onClick={() => setBuyin(buyin > 0 ? buyin - 1 : 0)}>
              -
            </button>
          </div>
        </div>
      </td>
      <td>
        <input
          type="number"
          value={finalStack}
          onChange={(e) => setFinalStack(Number(e.target.value))}
        />
      </td>
      <td>{result}</td>
    </tr>
  );
};

export default Player;
