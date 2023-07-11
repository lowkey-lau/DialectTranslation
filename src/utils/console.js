try {
  if (typeof console.__proto__.warning !== "function") {
    console.__proto__.warning = function (v, tips, style) {
      if (!style) {
        style = "color:#e6a23c;font-size: 16px;";
      }
      // console.log("%c[" + (tips || "") + "=========>", style, );

      console.log(`%c[${tips || "warning"}]`, style, v || "");
    };
  }
} catch (error) {
  console.log("console proto error.");
}
