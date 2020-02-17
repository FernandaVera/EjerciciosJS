const array = [
  {
    name: "Fernanda",
    tel: "233235264",
    gender: "female",
    location: "BRA"
  },
  {
    name: "Miguel",
    tel: "233243364",
    gender: "male",
    location: "MXN"
  },
  {
    name: "Alfredo",
    tel: "23242264",
    gender: "male",
    location: "USA"
  },
  {
    name: "Narda",
    tel: "12442264",
    gender: "female",
    location: "MXN"
  }
];
const sorting = data => {
  data.sort((a, b) => {
    return a.name > b.name
      ? -1
      : a.name > b.name
      ? 1
      : a.name < b.name
      ? -1
      : 0;
  });
};

const filtering = (data, prop, value) => {
  return data.filter(x => x[prop] === value);
};

const grouping = (data, prop) => {
  return data.reduce((current, x) => {
    if (!current[x[prop]]) {
      current[x[prop]] = [];
    }
    current[x[prop]].push(x);
    return current;
  }, {});
};

const mappingColors = (data, prop, value) => {
    return data.map(x => {
        return [ ...x, color: x.gender === "Male" ? "Red" : "Blue"]
    });
};

sorting(array);
const finalArray = grouping(
    mappingColors(filtering(array, "location", "MXN")),
    "gender"
);

console.log(finalArray);