function showScreen(id){

  document
    .querySelectorAll(".screen")
    .forEach(screen => {

      screen.classList.remove(
        "active"
      );

    });

  const target =
    document.getElementById(id);

  if(target){

    target.classList.add(
      "active"
    );

  }

}

function updateStepIndicator(
  text
){

  const indicator =
    document.getElementById(
      "stepIndicator"
    );

  if(indicator){

    indicator.textContent =
      text;

  }

}
