const js = import("./node_modules/@n14little/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});