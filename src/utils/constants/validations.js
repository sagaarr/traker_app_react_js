export const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined);
export const required = (value) => value && value.trim() !== "" ? undefined:"Required"
export const isValidEmail = (value) =>!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) &&"Please Provide valid email address";
export const validateNumberPlate = (value) =>!/^[A-Z]{2}\s[0-9]{2}\s[A-Z]{2}\s[0-9]{4}$/i.test(value) &&"Please provide correct veichle number!";
export const mustBeNumber = (value) => (isNaN(value) ? "Must be a number" : undefined);
export const datePickerValidator = value => (value ? undefined : "Required");