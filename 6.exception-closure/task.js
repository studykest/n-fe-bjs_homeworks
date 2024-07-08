// -------------------- 1 task --------------------
function parseCount(val) { 
  let num = parseFloat(val, 10);

  if (isNaN(val)) {
    throw new Error('Невалидное значение');
  }

  return num;
}

function validateCount(val) {
  try {
    return parseCount(val);
  } catch(err) {
    return err;
  }
}
