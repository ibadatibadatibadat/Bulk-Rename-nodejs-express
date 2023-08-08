const fs = require("fs");
const replacethis = "ibadat";
const replacewith = "Afridi";
const prieviw = true;
try {
  fs.readdir(".", (err, data) => {
    // console.log(data);
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      let newfile = "data/" + item.replaceAll(replacethis, replacewith);
      if (!prieviw) {
        fs.rename("data/" + item, newfile, () => {
          console.log("renamed files successfully ");
        });
      } else {
        if ("day/" + item !== newfile)
          console.log("will be renamed to " + newfile);
      }
    }
  });
} catch (err) {
  console.error(err);
}
