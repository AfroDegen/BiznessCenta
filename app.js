const state = {

  phone: "",

  businessName: "",

  category: "",

  website: "",

  gbp: "",

  audit: null

};

function sendOtp(){

  let phone =
  document
    .getElementById(
      "phoneNumber"
    )
    .value
    .trim();

phone = phone.replace(/\D/g, "");

if(phone.startsWith("0")){
  phone = phone.substring(1);
}

if(phone.length !== 10){
  alert(
    "Enter a valid Nigerian number"
  );
  return;
}

state.phone = "234" + phone;


  if(!phone){

    return;

  }

  state.phone = phone;

  Storage.save(state);

  showScreen("otp");

}

function runAudit(){

  state.audit =
    Audit.calculate(state);

  Storage.save(state);

  console.log(
    state.audit
  );

}

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const saved =
      Storage.load();

    if(saved){

      Object.assign(
        state,
        saved
      );

    }

  }
);
