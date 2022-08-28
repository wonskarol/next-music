const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, "0");
};

export const formatMs = (ms: number) => {
  const totalSec = Math.floor(ms / 1000);

  const min = Math.floor(totalSec / 60);
  const sec = totalSec % 60;

  return `${padTo2Digits(min)}:${padTo2Digits(sec)}`;
};
