const Audit = {

  calculate(data){

    let score = 0;

    const strengths = [];
    const gaps = [];

    if(data.businessName){

      score += 20;

      strengths.push(
        "Business name provided"
      );

    }

    if(data.website){

      score += 20;

      strengths.push(
        "Website present"
      );

    }else{

      gaps.push(
        "Website missing"
      );

    }

    if(data.gbp === "yes"){

      score += 20;

      strengths.push(
        "Google Business Profile"
      );

    }else{

      gaps.push(
        "Google Business Profile missing"
      );

    }

    return {

      score,

      strengths,

      gaps

    };

  }

};
