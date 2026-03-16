function checkVariable(input) {
  switch (typeof input) {
    case "string":
      return "string";
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "bigint":
      return "bigint";
    case "undefined":
      return "undefined";
    case "object":
      // Since null is also an "object" in JS, this handles both cases.
      return "object";
    default:
      return "unknown";
  }
}