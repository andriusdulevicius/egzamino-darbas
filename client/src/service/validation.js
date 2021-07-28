export const validate = (inputField, value) => {
  if (inputField === 'userName') {
    if (value.length < 6) return `Vartotojo vardas turėtų būti iš bent 6 simbolių`;
    if (value.length > 20) return `Vartotojo vardas per ilgas`;
  }
  if (inputField === 'age') {
    if (isNaN(value)) return `Amžius turėtų būti tik skaičiai`;
    if (value > 120) return `Vyresni nei 120 metų nemoka naudotis kompiuteriu`;
    if (value < 10) return `Vartotojas turėtų būti bent 10ties metų amžiaus`;
  }
  if (inputField === 'email') {
    const emailValidationRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailValidationRegex.test(value)) return `Įveskite teisingą el. paštą`;
  }
  if (inputField === 'password') {
    if (value.length < 7) return `Slaptažodis turi būti ilgesnis nei 6 simboliai`;
  }

  return '';
};
