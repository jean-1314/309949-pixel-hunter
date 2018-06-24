import {renderResults} from '../game-functions/render-results';

const inGameStats = (state, answers) => {
  return `
    <div class="stats">
      <ul class="stats">
        ${renderResults(state, answers)}
      </ul>
    </div>
  `;
};

export {inGameStats};
