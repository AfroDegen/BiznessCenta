const Storage = {

  key: "biznesscenta",

  save(data) {

    localStorage.setItem(
      this.key,
      JSON.stringify(data)
    );

  },

  load() {

    const data =
      localStorage.getItem(this.key);

    return data
      ? JSON.parse(data)
      : null;

  },

  clear() {

    localStorage.removeItem(
      this.key
    );

  }

};
