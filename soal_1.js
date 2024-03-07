function bilPrima(num) {
    if (num < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  for (let blgn = 1; blgn <= 1000; blgn++) {
    if (bilPrima(blgn)) {
      console.log(blgn);
    }
  }
