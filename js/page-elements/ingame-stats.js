import {renderResults} from '../game-functions/render-results';

const inGameStats = () => {
  return `
    <div class="stats">
      <ul class="stats">
        ${renderResults()}
      </ul>
    </div>
  `;
};

export {inGameStats};
