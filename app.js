const state = {

  phone: "",

  businessName: "",

  category: "",

  website: "",

  gbp: "",

  audit: null

};

function sendOtp(){

  const phone =
    document
      .getElementById(
        "phoneNumber"
      )
      .value
      .trim();

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
