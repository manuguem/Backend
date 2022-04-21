const fs = require("fs");

class Products {
  constructor(file) {
    this.file = file;
  }
  async read() {
    try {
      let info = await fs.promises.readFile(this.file, "utf-8");
      let newInfo = JSON.parse(info);
      console.log(newInfo);
    } catch (error) {
      console.log("error", error);
    }
  }
  async save() {
    try {
      let save = await fs.promises.appendFile(this.file, "Tarjeta de video");
      console.log(save);
    } catch (error) {
      console.log("error", error);
    }
  }
}

let contenedor = new Products("./products.txt");

contenedor.read();
contenedor.save();
