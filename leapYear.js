function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((isNaN(year) || year==null) ) {
    console.log(`${year} is invalid`);
    
  } else {
    if (0 == year % 4 ) {
        console.log(`${year} is a leap year`);

    } else {
      console.log(`${year} is not a leap year`);
    }
  }
}

checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear(`Twenty Twenty`);
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);

