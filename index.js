// `generaltranslation` language toolkit
// © 2024, General Translation, Inc.

// ----- IMPORTS ----- //

const { getLanguageName, getLanguageCode } = require('./codes/codes.js');

const { getModelList, getModelLanguages, isLanguageSupported } = require('./models/models.js');

// ----- EXPORTS ----- //

module.exports = {
    getLanguageName, getLanguageCode,
    getModelList, getModelLanguages, isLanguageSupported
}