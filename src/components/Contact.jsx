import React, { Component } from 'react';
import Field from './contactField';
import {withFormik} from 'formik';

const fields = {
  sections: [
    [
      { name: 'name', elementName: 'input', type: 'text', placeholder: "Your name*" },
      { name: 'email', elementName: 'input', type: 'email', placeholder: "Your email*" },
      { name: 'phone', elementName: 'input', type: 'text', placeholder: "Your phone*" },
    ],
    [
      { name: 'message', elementName: 'textarea', type: 'text', placeholder: "Type your message"},
    ]
  ]
};

class Contact extends Component {
  submitForm = (e) => {
    alert("Form submited!");
  }

  render() {
    const cssStyle = {
      backgroundImage: 'linear-gradient(rgba(155,200,205,.1), rgba(255,255,255,.2)), url("' + this.props.image + '")',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      height: "100vh"
    }
    return (
      <section className="" id="contact" style={cssStyle}>
        <div className="container">
          <div className="text-center" style={{ paddingTop: '56px' }}>
            <h2 className="text-uppercase">Contact Me</h2>
            <h3 className="text-muted">Lorem ipsum dolor sit amet consectetur</h3>
          </div>
            <form id="contactForm" name="sentMessage" onSubmit={e => this.submitForm(e)}>
                <div className="row">
                  {fields.sections.map((section, i) => {
                    console.log("Section", i, "with", section);
                    return (
                      <div className="col-md-6" key={i}>
                        {section.map((field, indexField) => {
                          return <Field
                            {...field}
                            key={indexField}
                            value = {this.props.values[field.name]}
                            name={field.name}
                            onChange = {this.props.handleChange}
                            onBlur = {this.props.handleBlur}
                            touched = {this.props.touched[field.name]}
                            errors = {this.props.errors[field.name]}
                          />;
                        })}
                      </div>
                    );
                  })}
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
        </div>
      </section>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    message: '',
  }),
  validate: values => {
    const errors = {};
    Object.keys(values).map(v => {
      if (!values[v]) {
        errors[v] = 'Required';
      }
    })

    return errors;
  },
  handleSubmit: (value, {setSubmitting}) => {
    alert('You have submitted the form');
  },
})(Contact);

