/* Were you ever interested in the phenomena of astrology, star signs, tarot, voodoo ? (ok not voodoo that's too spooky)...
Task:
Your job for today is to finish the starSign function by finding the astrological sign, given the birth details as a Date object.
Start and end dates for zodiac signs vary on different resources so we will use this table to get consistent results:

    Aquarius ------ 21 January - 19 February
    Pisces --------- 20 February - 20 March
    Aries ---------- 21 March - 20 April
    Taurus -------- 21 April - 21 May
    Gemini -------- 22 May - 21 June
    Cancer -------- 22 June - 22 July
    Leo ------------- 23 July - 23 August
    Virgo ----------- 24 August - 23 September
    Libra ----------- 24 September - 23 October
    Scorpio -------- 24 October - 22 November
    Sagittarius ---- 23 November - 21 December
    Capricorn ----- 22 December - 20 January


Test info: 100 random tests (dates range from January 1st 1940 until now) */

  function starSign(date) {
    let newDate = date.toISOString().split("T")[0];
    let month = parseInt(newDate[5] + newDate[6]);
    let day = parseInt(newDate[8] + newDate[9]);

    if (month === 01) {
      if (day < 21) {
        return "Capricorn";
      } else {
        return "Aquarius";
      }
    } else if (month === 02) {
      if (day < 20) {
        return "Aquarius";
      } else {
        return "Pisces";
      }
    } else if (month === 03) {
      if (day < 21) {
        return "Pisces";
      } else {
        return "Aries";
      }
    } else if (month === 04) {
      if (day < 21) {
        return "Aries";
      } else {
        return "Taurus";
      }
    } else if (month === 05) {
      if (day < 22) {
        return "Taurus";
      } else {
        return "Gemini";
      }
    } else if (month === 06) {
      if (day < 22) {
        return "Gemini";
      } else {
        return "Cancer";
      }
    } else if (month === 07) {
      if (day < 23) {
        return "Cancer";
      } else {
        return "Leo";
      }
    } else if (month === 08) {
      if (day < 24) {
        return "Leo";
      } else {
        return "Virgo";
      }
    } else if (month === 09) {
      if (day < 24) {
        return "Virgo";
      } else {
        return "Libra";
      }
    } else if (month === 10) {
      if (day < 24) {
        return "Libra";
      } else {
        return "Scorpio";
      }
    } else if (month === 11) {
      if (day < 23) {
        return "Scorpio";
      } else {
        return "Sagittarius";
      }
    } else if (month === 12) {
      if (day < 22) {
        return "Sagittarius";
      } else {
        return "Capricorn";
      }
    }
  }
