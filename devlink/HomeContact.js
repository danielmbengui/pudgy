"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function HomeContact({
  as: _Component = _Builtin.Section,
  componentGoogleMap,
}) {
  return (
    <_Component
      className="section contact home"
      grid={{
        type: "section",
      }}
      tag="div"
      id="section-contact"
    >
      <_Builtin.Container className="container" tag="div">
        <_Builtin.Row
          className="contact-info-row"
          tag="div"
          columns={{
            main: "6|6",
          }}
        >
          <_Builtin.Column className="contact-column-left" tag="div">
            <_Builtin.FormWrapper className="contact-form-block">
              <_Builtin.FormForm
                name="wf-form-Email-Form-5"
                data-name="Email Form 5"
                method="get"
                id="wf-form-Email-Form"
              >
                <_Builtin.FormBlockLabel
                  className="field-label"
                  htmlFor="Name-7"
                >
                  {"Name:"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className="dark-field"
                  name="Name-6"
                  data-name="Name 6"
                  type="text"
                  maxLength={256}
                  required={true}
                  disabled={false}
                  autoFocus={false}
                  id="Name-6"
                />
                <_Builtin.FormBlockLabel
                  className="field-label"
                  htmlFor="Email-5"
                >
                  {"Email:"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className="dark-field"
                  name="Email-4"
                  data-name="Email 4"
                  type="email"
                  maxLength={256}
                  required={true}
                  disabled={false}
                  autoFocus={false}
                  id="Email-4"
                />
                <_Builtin.FormBlockLabel
                  className="field-label"
                  htmlFor="Message-5"
                >
                  {"message:"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextarea
                  className="dark-field area"
                  name="Message-4"
                  maxLength={5000}
                  data-name="Message 4"
                  required={true}
                  autoFocus={false}
                  id="Message-4"
                />
                <_Builtin.FormButton
                  className="button full-submit"
                  type="submit"
                  value="Envoyer"
                  data-wait="Un instant svp..."
                />
              </_Builtin.FormForm>
              <_Builtin.FormSuccessMessage className="success-message">
                <_Builtin.Paragraph>
                  {"Thank you! Your submission has been received!"}
                </_Builtin.Paragraph>
              </_Builtin.FormSuccessMessage>
              <_Builtin.FormErrorMessage className="error-bg">
                <_Builtin.Paragraph>
                  {"Oops! Something went wrong while submitting the form"}
                </_Builtin.Paragraph>
              </_Builtin.FormErrorMessage>
            </_Builtin.FormWrapper>
          </_Builtin.Column>
          <_Builtin.Column className="contact-column-right" tag="div">
            <_Builtin.Block className="contact-map-wrapper" tag="div">
              <_Builtin.Block className="contact-map-block custom" tag="div">
                {componentGoogleMap}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Column>
        </_Builtin.Row>
      </_Builtin.Container>
    </_Component>
  );
}
