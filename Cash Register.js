// auxiliar function to format the cid
const convertCid = (cid) => {
  let newArr = [];
  cid.forEach((element) => {
    const convertCoin = (str) => {
      switch (str) {
        case "PENNY":
          return 0.01;
        case "NICKEL":
          return 0.05;
        case "DIME":
          return 0.1;
        case "QUARTER":
          return 0.25;
        case "ONE":
          return 1;
        case "FIVE":
          return 5;
        case "TEN":
          return 10;
        case "TWENTY":
          return 20;
        case "ONE HUNDRED":
          return 100;
      }
    };
    // convert to [ value, amount ]
    const coin = [
      convertCoin(element[0]),
      Math.round(element[1] / convertCoin(element[0])),
    ];
    newArr.push(coin);
  });
  return newArr.sort((arr1, arr2) => arr2[0] - arr1[0]);
};

// function to update the cid inside a loop
const updateCid = (cid, value) => {
  switch (value) {
    case 0.01:
      cid[0][1] += value;
      break;
    case 0.05:
      cid[1][1] += value;
      break;
    case 0.1:
      cid[2][1] += value;
      break;
    case 0.25:
      cid[3][1] += value;
      break;
    case 1:
      cid[4][1] += value;
      break;
    case 5:
      cid[5][1] += value;
      break;
    case 10:
      cid[6][1] += value;
      break;
    case 20:
      cid[7][1] += value;
      break;
    case 100:
      cid[8][1] += value;
      break;
  }
  return cid;
};

// main function
const checkCashRegister = (price, cash, cid) => {
  let change = cash - price;
  const convertedCid = convertCid(cid);
  let newCid = [
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ];
  const totalFunds = convertedCid
    .map((coin) => coin[0] * coin[1])
    .reduce((sum, value) => sum + value);

  if (totalFunds < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalFunds === change) {
    return { status: "CLOSED", change: cid };
  } else {
    convertedCid.forEach((arr) => {
      while (change > 0 && arr[1] > 0 && change >= arr[0]) {
        change -= arr[0];
        change = parseFloat(change.toFixed(2));
        newCid = updateCid(newCid, arr[0]);
        arr[1]--;
      }
    });
    newCid = newCid
      .filter((arr) => arr[1] > 0)
      .sort((arr1, arr2) => arr2[1] - arr1[1]);
    if (change === 0) {
      return { status: "OPEN", change: newCid };
    } else {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  }
};

const test = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];

const test2 = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

console.log(checkCashRegister(19.5, 20, test));
console.log(checkCashRegister(3.26, 100, test2));
