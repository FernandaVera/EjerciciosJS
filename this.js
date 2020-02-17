var x = {
  prop: 35,
  f: function() {
    return this.prop;
  },
  a: () => {
    return x.prop;
  }
};

x.newProp = {};3
x.newProp.a = 5; // le estas agregando a a new prop
x.newProp.b = {};
x.newProp.b.a = {};
x.arrFunc = () => console.log("hi!");
x.func = function() {
    console.log("hi normal");
};
delete x.newProp; // borrar una propiedad
x.arrFunc();
x.func();
console.log(x);

////

let = admin;
admin._proto_ = user;
let admin = Object.create(user);
    admin.sales = 5000,
    admin.checkSales =  function() {
        alert ('You sold $${this.sales}');
    };

let customer = Object.create(user);
    customer.balance =  500,
    customer.checkBalance =  function() {
        alert ('You have $${this.balance}')
    };

// // fabrica de admins

let Admin = function(name = "Usuario", email = "usuario@usuario.com"){
    const admin = Object.create(user);
    admin.name = name,
    admin.email = email,
    admin.sales = 5000;
    admin.checkSales = function(){
    alert(`You have $${this.sales}`)
    }
    return admin;
}

let customer = function (name = "usuario", email = "usuario@email.com"){
    const customer = Object.create(user),
    customer.name = name,
    customer.email = email,
    customer.balance = 500,
    customer.checkBalance = function (){
        alert('you have$${')
    }
}

console.log(admin);

/// Facturas


const factura = {
  sucursal: "Oblatos",
  vendedor: "Pedro",
  precioTotal: function() {
    return this.articulos
      .map(x => x.precio * x.cantidad)
      .reduce((current, x) => current + x, 0);
  },
  liquidar: function(balance) {
    return balance - this.precioTotal();
  },
  mostrarTotal: function() {
    return `$${this.precioTotal().toFixed(2)}`;
  }
};

const Electronico = function(obj) {
  return {
    id: obj.id || 0,
    nombre: obj.nombre || "",
    precio: obj.precio || 250,
    cantidad: obj.cantidad || 0
  };
};

const Comestible = function(obj) {
  return {
    id: obj.id || 0,
    nombre: obj.nombre || "",
    precio: obj.precio || 250,
    cantidad: obj.cantidad || 0,
    calidad: obj.clidad || 0,
    frescura: obj.frescura || 0
  };
};
const getItemElec = function(cantidad) {
  const array = [];
  for (let i = 0; i < cantidad; i++) {
    array.push(
      new Electronico({
        id: i + 1,
        nombre: `FacElec${i + 1}`,
        precio: parseFloat((Math.random() * (200 - 1) + 1).toFixed(2), 2),
        cantidad: parseInt(Math.random() * (20 - 1) + 1)
      })
    );
  }
  return array;
};

const getItemComes = function(cantidad) {
  const array = [];
  for (let i = 0; i < cantidad; i++) {
    array.push(
      new Comestible({
        id: i + 1,
        nombre: `FacComs${i + 1}`,
        precio: parseFloat((Math.random() * (200 - 1) + 1).toFixed(2), 2),
        cantidad: parseInt(Math.random() * (20 - 1) + 1),
        calidad: parseInt(Math.random() * (20 - 1) + 1),
        frescura: parseInt(Math.random() * (20 - 1) + 1)
      })
    );
  }
  return array;
};
console.log(getItemComes(5));

const FactElectronicos = function(id, nombre) {
  let item = Object.create(factura);
  item.id = id;
  item.nombre = nombre;
  item.articulos = getItemElec(10);
  return item;
};

const FactComestibles = function(id, nombre) {
  let item = Object.create(factura);
  item.id = id;
  item.nombre = nombre;
  item.articulos = getItemComes(10);
  item.indiceCalidad = function() {
    const x = this.articulos.reduce(
      (current, y) => {
        return (current = {
          frescura: current.frescura + y.frescura,
          calidad: current.calidad + y.calidad
        });
      },
      { frescura: 0, calidad: 0 }
    );
    return Math.floor((x.frescura + x.calidad) / 2) / this.articulos.length;
  };
  return item;
};

const facturaEneroElec = new FactElectronicos(1, "Enero");
const facturaEneroComes = new FactComestibles(1, "Enero");
console.log(facturaEneroComes.indiceCalidad());
