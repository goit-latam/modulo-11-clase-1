fetch("".concat("http://localhost:3000","/users"),{method:"GET"}).then((function(o){if(!o.ok)throw new Error(o.status);return o.json()})).then((function(o){console.log(o)})).catch((function(o){console.log(o)}));
//# sourceMappingURL=index.85a10e4d.js.map
