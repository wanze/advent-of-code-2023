type Race = {
  time: number;
  distance: number;
}

export function day6Par1() {
  return margin(puzzleInput());
}

export function day6Par2() {
  return margin([{time: 52947594, distance: 426137412791216}]);
}

function margin(races: Race[]) {
  let margin = 1;

  races.forEach(race => {
    let numWins = 0;
    for (let i = 1; i < race.time - 1; i++) {
      const distance = i * (race.time - i);
      if (distance > race.distance) {
        numWins++;
      }
    }
    margin = margin * numWins;
  });

  return margin;
}

function exampleInput(): Race[] {
  return [
    {time: 7, distance: 9},
    {time: 15, distance: 40},
    {time: 30, distance: 200}
  ]
}

function puzzleInput(): Race[] {
  return [
    {time: 52, distance: 426},
    {time: 94, distance: 1374},
    {time: 75, distance: 1279},
    {time: 94, distance: 1216},
  ]
}