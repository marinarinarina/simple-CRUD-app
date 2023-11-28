// import { setupCounter } from './getData.ts';

// Non-null assertion operator
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>It's will be card component</h1>
    <div class="card">
      <button id="button" type="button"></button>
    </div>
  </div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>('#button')!); // Definite Assignment Assertions
