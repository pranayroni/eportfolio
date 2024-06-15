function waitForMS(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function typeSentence(sentence, eleRef, delay) {
  const letters = sentence.split('');
    for (let i = 0; i < letters.length; i++) {
        await waitForMS(delay);
        $(eleRef).append(letters[i]);
    }
    return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMS(30);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
  return;
}

const roles = [
    {text: "Software Engineer", delay: 40},
    {text: "Machine Learning Engineer", delay: 50},
    {text: "Computer Science Student", delay: 50},
    {text: "Student Pilot", delay: 100},

]

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      await typeSentence(carouselList[i].text, eleRef, carouselList[i].delay);
      await waitForMS(4500);
      await deleteSentence(eleRef);
      await waitForMS(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}


carousel(roles, "#myRole")
