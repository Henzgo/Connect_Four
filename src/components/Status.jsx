export function Status({ current, winner }) {
      if (winner) {
        return <h2>{winner === 'r' ? 'Rot' : 'Blau'} hat gewonnen! 🏆</h2>;
      }
      return <h2>{current === 'r' ? 'Rot' : 'Blau'} ist am Zug</h2>;
}