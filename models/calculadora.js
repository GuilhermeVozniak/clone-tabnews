function somar(numero1, numero2) {
  try {
    if (typeof numero1 !== "number" || typeof numero2 !== "number") {
      return("Error");
    }
    return numero1 + numero2;
  } catch (e) {
    return e;
  }
}

exports.somar = somar;
