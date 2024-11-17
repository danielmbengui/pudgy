"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function HomeContact({
  as: _Component = _Builtin.Section,
  componentGoogleMap,
  nameContact = "Nom",
  emailContact = "Email",
  messageContact = "Message",
  componentInputName,
  componentInputEmail,
  componentInputMessage,
  componentButtonSend,
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
      <_Builtin.Block
        className="image-section-overlay color black-shadow"
        tag="div"
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
                    {nameContact}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.Block className="div-block-15 input" tag="div">
                    <_Builtin.Block className="div-block-16" tag="div">
                      {componentInputName}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.FormTextInput
                    className="dark-field name"
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
                    {emailContact}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.Block className="div-block-15 input" tag="div">
                    <_Builtin.Block className="div-block-16" tag="div">
                      {componentInputEmail}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.FormTextInput
                    className="dark-field email"
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
                    htmlFor="Message-4"
                  >
                    {messageContact}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.Block
                    className="div-block-15 input message"
                    tag="div"
                  >
                    <_Builtin.Block className="div-block-16" tag="div">
                      {componentInputMessage}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.FormTextarea
                    className="dark-field area message"
                    name="Message-4"
                    maxLength={5000}
                    data-name="Message 4"
                    required={true}
                    autoFocus={false}
                    id="Message-4"
                  />
                  <_Builtin.Block
                    className="div-block-15 input button-send"
                    tag="div"
                  >
                    <_Builtin.Block className="div-block-16" tag="div">
                      {componentButtonSend}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.FormButton
                    className="button full-submit send"
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
      </_Builtin.Block>
    </_Component>
  );
}
