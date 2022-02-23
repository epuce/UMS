const mysql = require('mysql');
const fs = require('fs');

// TODO read env file to create connection
const db = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',
});

db.connect(function(error) {
    if (error) throw error;

    db.query('SELECT * FROM `lang_var`', (error, result) => {
        if (error) throw error;

        const translationFilePath = __dirname + '/web/src/config/translations.js';
        const langVars = {lv: {}, eng: {}, ru: {}};

        result.forEach((langVar) => {
            const lang = langVar.language;
            const name = langVar.name;
            const text = langVar.text;

            langVars[lang][name] = text;
        })

        const translations = 'export default ' + JSON.stringify(langVars);
        
        fs.writeFileSync(translationFilePath, translations, (error) => {
            if (error) throw error;
        });
    })

    console.log('New langVars have been generated')
    db.end();
});

