var x = {
    prop: 35,
    f: function() {
        return this.prop;
    },
    a: () => {
        return x.prop;
    }
}

console.log(x.f())