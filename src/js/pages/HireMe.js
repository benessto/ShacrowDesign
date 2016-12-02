import React from "react";

import Header from "../components/layout/Header.js"
import GoogleAd from "../components/GoogleAd.js";

//var sendgrid = require('sendgrid')('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');


export default class HireMe extends React.Component {

  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
     const name = document.getElementById('nameInput').value;
     const businessInput = document.getElementById('businessInput').value;
     const emailInput = document.getElementById('emailInput').value;
     const websiteInput = document.getElementById('websiteInput').value;
     const designMediumInput = document.getElementById('designMediumInput').value;
     const designDescInput = document.getElementById('designDescInput').value;
     const samplesInput = document.getElementById('samplesInput').value;
     const budgetInput = document.getElementById('budgetInput').value;

     const textBody = `
     Name:
     ${name}

     Business Name:
     ${businessInput}

     E-Mail:
     ${emailInput}

     Website:
     ${websiteInput}

     Design Medium:
     ${designMediumInput}

     Design Description:
     ${designDescInput}

     Samples:
     ${samplesInput}

     Budget:
     ${budgetInput}
     `;

     console.log(textBody);

     this.sendEmail(textBody);

     event.preventDefault();
  }

  sendEmail(text) {
    var helper = require('sendgrid').mail;
    var from_email = new helper.Email('noreply@shacrow.de');
    var to_email = new helper.Email('admin@shacrow.de');
    var subject = 'Hey Shacrow! Someone sent you a message';
    var content = new helper.Content(text);
    var mail = new helper.Mail(from_email, subject, to_email, content);

    var sg = require('sendgrid')('process.env.SENDGRID_API');
    var request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON(),
    });

    sg.API(request, function(error, response) {
      console.log(response.statusCode);
      console.log(response.body);
      console.log(response.headers);
    });
  };

  render() {

    const adStyle = {
      margin: "10px"
    };

    const adBlockStyle = {
      marginTop: "20px"
    };

    const introStyle = {
      backgroundColor: "rgba(35,35,35,0.8)",
      padding: "20px",
      color: "white"
    };

    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <Header title="READY FOR YOUR DESIGN?" />

            <p style={introStyle}>Thank you for considering to hire me. Please take some time to fill out this form. I will ask you for these informations anyway. Thank you very much. I am looking forward to our work together.</p>

            <form onSubmit={this.handleSubmit}>
              <h4>Personal Information</h4>
              <div class="form-group">
                <label for="nameInput">FULL NAME</label>
                <input class="form-control" id="nameInput" placeholder="e.g. Ben Thitigal"></input>
              </div>

              <div class="form-group">
                <label for="businessInput">BUSINESS NAME</label>
                <input class="form-control" id="businessInput" placeholder="e.g. Shacrow Design"></input>
              </div>

              <div class="form-group">
                <label for="emailInput">E-MAIL</label>
                <input class="form-control" id="emailInput" placeholder="e.g. admin@shacrow.de"></input>
                <small id="emailHelp" class="form-text text-muted">Make sure you can receive e-mail on this adress. I will use this to contact you. If you prefer another form of communication, we can discuss that via e-mail</small>
              </div>

              <div class="form-group">
                <label for="websiteInput">WEBSITE</label>
                <input class="form-control" id="websiteInput" placeholder="e.g. http://shacrow.de"></input>
              </div>

              <h4>Design Information</h4>

                <div class="form-group">
                  <label for="designMediumInput">DESIGN NEEDED</label>
                  <input class="form-control" id="designMediumInput" placeholder="e.g. Logo Design, Social Media graphics, Youtube banner.. etc"></input>
                </div>

                <div class="form-group">
                  <label for="designDescInput">DESCRIPTION</label>
                  <textarea class="form-control" id="designDescInput" rows="5"></textarea>
                  <small id="designDescHelp" class="form-text text-muted">Please write everything in details. More information will result in a better design that fits your needs</small>
                </div>

                <div class="form-group">
                  <label for="samplesInput">SAMPLES</label>
                  <textarea class="form-control" id="samplesInput" rows="5"></textarea>
                  <small id="designDescHelp" class="form-text text-muted">Please look for some design examples that is similar to what you need. I need to know this, so I get to know your taste and need better. Please send the examples as an URL to the images</small>
                </div>

                <div class="form-group">
                  <label for="samplesInput">YOUR BUDGET (IN EURO)</label>
                  <select class="form-control" id="budgetInput">
                    <option selected>CHOOSE YOUR BUDGET</option>
                    <option value="10 - 30">10 - 30 &euro;</option>
                    <option value="30 - 60">30 - 60 &euro;</option>
                    <option value="60 - 100">60 - 100 &euro;</option>
                    <option value="100 - 150">100 - 150 &euro;</option>
                    <option value="150 - 200">150 - 200 &euro;</option>
                    <option value="200 - 300">200 - 300 &euro;</option>
                  </select>
                  <small id="designDescHelp" class="form-text text-muted">The more you can invest in the creation of your design, the more depth, time, concept design,
                     creative flair your design is likely to have. Investing less doesn't mean that the design will be any less better but investing more will give more value to the creation of the design.
                     The more time and effort is spent on the design, the more likely it will be a great design that you desire.
                     <p>Note that I might decline if the budget is too low for a design that needs more time and effort by nature.</p>
                     <p><a href="#">For a rough pricelist see here</a></p>
                  </small>
                </div>

              <button type="submit" class="btn btn-danger">Submit</button>
            </form>

            {/* Google Ad */}
            <div class="row">
              <div class="col-lg-12">
                <div style={adBlockStyle}>
                  <GoogleAd
                  client="ca-pub-5164875500261952"
                  slot="8300469279"
                  format="auto"
                  wrapperDivStyle={adStyle}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
