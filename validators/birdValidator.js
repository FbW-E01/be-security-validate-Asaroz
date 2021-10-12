import { body, header } from 'express-validator';

// Add request body validation and even one header validator :)
// Custom error messages enable easier translation in the frontend
const birdValidators = [
    body("species").isLength({min:3}).withMessage("name-to-short"),
    body("species").isLength({max:80}).withMessage("name-to-long"),
    body("species").isAlpha().withMessage("only-letters-allowed"),
    body("notes").isLength({max:140}).withMessage("note-to-long"),
    body("notes").isAlpha("de-DE",{ignore:" "}).withMessage("only-letters-allowed"),
    body("estimatedAmount").isInt().withMessage("Amount-is-not-a-number"),
];

export default birdValidators;