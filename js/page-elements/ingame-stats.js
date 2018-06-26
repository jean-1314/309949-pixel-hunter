import {renderIngameStats} from '../game-functions/render-ingame-stats';

const inGameStats = (answers) => {
  return `
    <div class="stats">
      <ul class="stats">
        ${renderIngameStats(answers)}
      </ul>
    </div>
  `;
};

export {inGameStats};
