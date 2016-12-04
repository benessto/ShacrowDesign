/**
  * hallo
  */
console.log('Starte Shacrow::API');

const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      mail       = require('postmark');
      client = new mail.Client('62750ea0-54f5-4a2c-97e4-35297941f67d');

// Express Config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.post('/api/mail/send', (req, res) => {
  // if(req.headers['user-agent'] !== 'shacrow-site')
  //   res.end('Seite wurde nicht gefunden'); // ¯\_(ツ)_/¯
  // client.sendEmail({
  // "From": "admin@shacrow.de",
  // "To": "admin@shacrow.de",
  // "Subject": "Postmark: It works!",
  // "TextBody": text
  // });
  var fromMail  = 'admin@shacrow.de';
  var to        = req.body.to;
  var subject   = req.body.subject;
  var body      = req.body.body;

  // Notiz für mich; Text muss English geschrieben werden, sonst rip

  if(subject == '' || subject === undefined || body == '' || body === undefined || to == '' || to === undefined)
    res.end(JSON.stringify({ 'validate' : false, 'response' : 'Ein Fehler ist aufgetreten. INPUTS NOT GUD' }));

  client.sendEmail({
      "From": fromMail,
      "To": to,
      "Subject": subject,
      "TextBody": body,
  }, (error, result) => {
      if(error) {
        console.error("Unable to send via postmark: " + error.message);
        res.end(JSON.stringify({ 'validate' : false, 'response' : 'There is an error.' }));
      }

      console.info('E-mail wurde erfolgreich abgeschickt an '+to);
      res.end(JSON.stringify({ 'validate' : true, 'response' : 'E-mail sent successfully' }));
  });
});

app.listen(1337, () => {
  console.log('Express wurde gestartet... yep');
});

// Notiz an mich; später Log-Function mit einem Switch erstellen um zu loggen + Datum - Urhzeit
