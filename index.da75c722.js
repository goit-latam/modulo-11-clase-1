fetch("http://localhost:3000/users",{method:"GET"}).then((o=>{if(!o.ok)throw new Error(o.status);return o.json()})).then((o=>{console.log(o)})).catch((o=>{console.log(o)}));
//# sourceMappingURL=index.da75c722.js.map
