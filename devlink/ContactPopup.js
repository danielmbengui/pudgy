"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ContactPopup({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className="contact-popup"
      macro={{
        guid: "e9627a63-14a4-1d66-3684-02532cb4cd24",
      }}
      tag="div"
      data-ix="hide-popup"
    >
      <_Builtin.Block className="popup-block" tag="div">
        <_Builtin.Link
          className="popup-close-button"
          macro={{
            guid: "aa9d74a0-5b58-dc8a-7566-e9d65b5c17ac",
          }}
          button={false}
          data-ix="close-popup"
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className="close-icon"
            width="auto"
            height="auto"
            loading="auto"
            alt=""
            src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e/673273ce24e1f47ec7ebf4cc_Icon-close.png"
          />
        </_Builtin.Link>
        <_Builtin.FormWrapper className="popup-contact-form">
          <_Builtin.FormForm
            name="wf-form-Popup-Contact-Form"
            data-name="Popup Contact Form"
            method="get"
            id="wf-form-Popup-Contact-Form"
          >
            <_Builtin.Block className="popup-title" tag="div">
              {"Send us an Email"}
            </_Builtin.Block>
            <_Builtin.FormTextInput
              className="field line"
              name="name"
              data-name="Name"
              type="text"
              placeholder="Enter your name"
              maxLength={256}
              disabled={false}
              required={false}
              autoFocus={false}
              id="name"
            />
            <_Builtin.FormTextInput
              className="field line"
              name="email"
              data-name="Email"
              type="email"
              placeholder="Enter your email address"
              maxLength={256}
              required={true}
              disabled={false}
              autoFocus={false}
              id="email"
            />
            <_Builtin.FormTextInput
              className="field line"
              name="email-2"
              data-name="Email 2"
              type="email"
              placeholder="Enter your email address"
              maxLength={256}
              required={true}
              disabled={false}
              autoFocus={false}
              id="email-2"
            />
            <_Builtin.FormTextarea
              className="field line area"
              name="Message"
              placeholder="Your message..."
              maxLength={5000}
              data-name="Message"
              required={false}
              autoFocus={false}
              id="Message"
            />
            <_Builtin.FormButton
              className="button"
              type="submit"
              value="Send Email"
              data-wait="Please wait..."
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
      </_Builtin.Block>
    </_Component>
  );
}
