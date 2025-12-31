export function Status({ current, winner }) {
      if (winner) {
        return <h2>{winner === 'r' ? 'Rot' : 'Gelb'} hat gewonnen! 🏆</h2>;
      }
      return <h2>{current === 'r' ? 'Rot' : 'Gelb'} ist am Zug</h2>;
}