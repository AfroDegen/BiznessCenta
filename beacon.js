const Beacon = {

  observe(data){

    return {

      hasWebsite:
        !!data.website,

      hasGBP:
        data.gbp === "yes",

      category:
        data.category

    };

  },

  recommend(data){

    const items = [];

    if(!data.website){

      items.push(
        "Build a website"
      );

    }

    if(data.gbp !== "yes"){

      items.push(
        "Create Google Business Profile"
      );

    }

    items.push(
      "Improve local discoverability"
    );

    return items;

  }

};
