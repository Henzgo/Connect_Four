export function Board2D({ board, onFieldClick }) {
  return (
    <div className="board">
      {board.map((row, r) =>
        row.map((cell, c) => (
          <Field key={`${r}-${c}`} type={cell} onClick={() => onFieldClick(c)} />
        ))
      )}
    </div>
  );
}

function Field({ type, onClick }) {
  return (
    <div className="field" onClick={onClick}>
      {type && <div className={`piece ${type === 'r' ? 'red' : 'blue'}`} />}
    </div>
  );
}