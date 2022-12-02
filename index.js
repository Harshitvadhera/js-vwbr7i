// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const response = [
  {
    benefits: [
      { type: 'every', name: 'tr', options: [{ val: 100 }, { val: 300 }] },
      { type: 'every', name: 'hr', options: [{ val: 100 }, { val: 300 }] },
    ],
  },
];
const result = response.map((val) =>
  val.benefits
    .filter((val) => val.type == 'every')
    .map((val) => val.options.map((values) => values.val))
);
console.log(result);
