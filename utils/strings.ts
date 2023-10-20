export const classNames = (...args: string[]) => {
  var classes = [];
  for (var _i = 0; _i < args.length; _i++) {
    classes[_i] = args[_i];
  }
  return classes.filter(Boolean).join(" ");
};
