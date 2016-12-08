import React from "react";

import Header from "../components/layout/Header.js"
import GoogleAd from "../components/GoogleAd.js";


//var sendgrid = require('sendgrid')('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');

//var postmark = require("postmark");

export default class HireMe extends React.Component {
  constructor() {
    super();
  }


  componentDidMount() {
    $('#sendMail').click(function() {

      const name = document.getElementById('nameInput').value;
      const businessInput = document.getElementById('businessInput').value;
      const emailInput = document.getElementById('emailInput').value;
      const websiteInput = document.getElementById('websiteInput').value;
      const designMediumInput = document.getElementById('designMediumInput').value;
      const designDescInput = document.getElementById('designDescInput').value;
      const samplesInput = document.getElementById('samplesInput').value;
      const budgetInput = document.getElementById('budgetInput').value;

      let inputOk = true;

      if (name == '') {
        $('#alertName').css('display', 'block');
        inputOk = false;
      } else {
        $('#alertName').css('display', 'none');
      }
      if (businessInput == '') {
        $('#alertBusiness').css('display', 'block');
        inputOk = false;
      } else {
        $('#alertBusiness').css('display', 'none');
      }
      if (emailInput == '') {
        $('#alertEmail').css('display', 'block');
        inputOk = false;
      } else {
        $('#alertEmail').css('display', 'none');
      }
      if (designMediumInput == '') {
        $('#alertDesignMedium').css('display', 'block');
        inputOk = false;
      } else {
        $('#alertDesignMedium').css('display', 'none');
      }
      if (designDescInput == '') {
        $('#alertDesc').css('display', 'block');
        inputOk = false;
      } else {
        $('#alertDesc').css('display', 'none');
      }
      if (budgetInput == 'CHOOSE YOUR BUDGET') {
        $('#alertBudget').css('display', 'block');
        inputOk = false;
      } else {
        $('#alertBudget').css('display', 'none');
      }

      if($('#alertSubmit').css('display') == 'none') {
        if (inputOk) {
          $('#alertSubmit').addClass('alert-success').removeClass('alert-warning');
          $('#alertSubmit').html(`<strong>See you soon!</strong> You will receive a confirmation e-mail at <strong>${emailInput}</strong>. If you don't receive an e-mail, please contact me directly at shacrow@admin.de`).fadeIn('slow');
        } else {
          $('#alertSubmit').addClass('alert-warning').removeClass('alert-success')
          $('#alertSubmit').html(`<strong>Ops.<strong> Looks like you forgot to fill out some things..`).fadeIn('slow');
          return;
        }
      } else {
        $('#alert').fadeOut();
        if (inputOk) {
          $('#alertSubmit').addClass('alert-success').removeClass('alert-warning');
          $('#alertSubmit').html(`<strong>Thank you</strong> You will receive a confirmation e-mail at <strong>${emailInput}</strong>. If you don't receive an e-mail, please contact me directly at shacrow@admin.de`).fadeIn('slow');
        }
        else{
          $('#alertSubmit').addClass('alert-warning').removeClass('alert-success')
          $('#alertSubmit').html(`<strong>Ops.<strong> Looks like you forgot to fill out some things..`).fadeIn('slow');
          return;
        }
      }

      console.log('AFTER VALIDATION');

      const textBody = `
      Name: ${name}

      Business Name: ${businessInput}

      E-Mail: ${emailInput}

      Website: ${websiteInput}

      Design Medium: ${designMediumInput}

      Design Description:
      ${designDescInput}

      Samples:
      ${samplesInput}

      Budget: ${budgetInput}
      `;

      $.ajax({
        type: 'POST',
        url: 'http://shacrow.de:1337/api/mail/send',
        data: 'subject='+ designMediumInput + ' request by ' + name +'&body='+textBody + '&to=admin@shacrow.de',
        success: function(resp) {
          //Notiz; checken ob es ein JSON-Obj ist
          var obj = jQuery.parseJSON(resp);
          if(obj.validate) {
            alert('abgeschickt - '+obj.response);
          } else {
            alert('fehler-'+obj.response);
          }
        }
      });

      const confirmBody = `
      Hey ${name}!

      Thank you for considering to hire me! I will look into your request as soon as possible.
      I will contact you at ${emailInput}, so make sure to check your mails.

      This is an automated message to confirm that your request went through.
      If you want to add anything, feel free to reply to this E-Mail.

      Shacrow Design
      (Ben Thitigal)

      Website: http://shacrow.de
      Facebook: http://facebook.com/ShacrowDesign
      `;

      $.ajax({
        type: 'POST',
        url: 'http://shacrow.de:1337/api/mail/send',
        data: 'subject=I received your request - '+designMediumInput  + '&body='+confirmBody + '&to='+emailInput,
        success: function(resp) {
          var obj = jQuery.parseJSON(resp);
          if(obj.validate) {
            alert('abgeschickt - '+obj.response);
          } else {
            alert('fehler-'+obj.response);
          }
        }
      });
    });
  }

  render() {

    const adStyle = {
      margin: "10px"
    };

    const adBlockStyle = {
      marginTop: "20px"
    };

    const introStyle = {
      backgroundColor: "rgba(190,45,45,0.8)",
      padding: "20px",
      color: "white"
    };

    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <Header title="READY FOR YOUR DESIGN?" />

            <p style={introStyle}>Thank you for considering to hire me.
               Please take some time to fill out this form so I can come up with a design fitting your needs.
               Thank you very much. I am looking forward to our work with you.</p>

            <form>
              <h4>PERSONAL INFORMATION</h4>
              <small>* = required</small>
              <div class="form-group">
                <label for="nameInput">FULL NAME *</label>
                <input class="form-control" id="nameInput" placeholder="e.g. Ben Thitigal"></input>
              </div>
              <div id="alertName" class="alert alert-warning" style={{display: 'none', marginTop: '10px'}}>
                <small>Please provide your full name</small>
              </div>

              <div class="form-group">
                <label for="businessInput">BUSINESS NAME *</label>
                <input class="form-control" id="businessInput" placeholder="e.g. Shacrow Design"></input>
              </div>
              <div id="alertBusiness" class="alert alert-warning" style={{display: 'none', marginTop: '10px'}}>
                <small>Please provide your business name e.g. Shacrow Design</small>
              </div>

              <div class="form-group">
                <label for="emailInput">E-MAIL *</label>
                <input class="form-control" id="emailInput" placeholder="e.g. admin@shacrow.de"></input>
                <small id="emailHelp" class="form-text text-muted">Make sure you can receive e-mail on this adress. I will use this to contact you. If you prefer another form of communication, we can discuss that via e-mail</small>
              </div>
              <div id="alertEmail" class="alert alert-warning" style={{display: 'none', marginTop: '10px'}}>
                <small>Please provide your E-mail</small>
              </div>

              <div class="form-group">
                <label for="websiteInput">WEBSITE</label>
                <input class="form-control" id="websiteInput" placeholder="e.g. http://shacrow.de"></input>
              </div>

              <h4>DESIGN INFORMATION</h4>

                <div class="form-group">
                  <label for="designMediumInput">DESIGN MEDIUM *</label>
                  <input class="form-control" id="designMediumInput" placeholder="e.g. Logo Design, Social media graphics, Youtube banner.. etc"></input>
                </div>
                <div id="alertDesignMedium" class="alert alert-warning" style={{display: 'none', marginTop: '10px'}}>
                  <small>Please provide the design medium needed e.g. Logo Design, Social media graphic, Youtube banner.. etc</small>
                </div>

                <div class="form-group">
                  <label for="designDescInput">DESCRIPTION *</label>
                  <textarea class="form-control" id="designDescInput" rows="5"></textarea>
                  <small id="designDescHelp" class="form-text text-muted">Please write everything in details. More information will result in a better design that fits your needs</small>
                </div>
                <div id="alertDesc" class="alert alert-warning" style={{display: 'none', marginTop: '10px'}}>
                  <small>Please explain me what you need exactly for your design. This can be style, color, size.. etc.</small>
                </div>

                <div class="form-group">
                  <label for="samplesInput">SAMPLES</label>
                  <textarea class="form-control" id="samplesInput" rows="5"></textarea>
                  <small id="designDescHelp" class="form-text text-muted">Please look for some design examples that is similar to what you need. I need to know this, so I get to know your taste and need better. Please send the examples as an URL to the images</small>
                </div>

                <div class="form-group">
                  <label for="samplesInput">YOUR BUDGET (IN EURO) *</label>
                  <select class="form-control" id="budgetInput">
                    <option selected>CHOOSE YOUR BUDGET</option>
                    <option value="10 - 30">10 - 30 &euro;</option>
                    <option value="30 - 60">30 - 60 &euro;</option>
                    <option value="60 - 100">60 - 100 &euro;</option>
                    <option value="100 - 150">100 - 150 &euro;</option>
                    <option value="150 - 200">150 - 200 &euro;</option>
                    <option value="200 - 300">200 - 300 &euro;</option>
                  <option value="300 - 500">300 - 500 &euro;</option>
                  </select>
                  <small id="designDescHelp" class="form-text text-muted">The more you can invest in the creation of your design, the more depth, time, concept design,
                     creative flair your design is likely to have. Investing less doesn't mean that the design will be any less better but investing more will give more value to the creation of the design.
                     The more time and effort is spent on the design, the more likely it will be a great design that you desire.
                     <p>Note that I might decline if the budget is too low for a design that needs more time and effort by nature.</p>
                     <p><a href="#">For a rough pricelist see here</a></p>
                  </small>
                </div>
                <div id="alertBudget" class="alert alert-warning" style={{display: 'none', marginTop: '10px'}}>
                  <small>Please provide your budget</small>
                </div>

                <div class="g-recaptcha" data-sitekey="6LdBug0UAAAAAB0JJ3KgtEcb4Vz_PhJHqh5nTgRF"></div>

                <div id="alertSubmit" class="alert alert-success" style={{display: 'none', marginTop: '10px'}}></div>

                <button id="sendMail" type="button" class="btn btn-danger" style={{marginTop: '10px'}}>Submit</button>
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
