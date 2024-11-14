"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SignUpPopup({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className="sign-up-popup"
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
            guid: "f4d93bde-d1a9-16d8-4a84-1c22c5653118",
          }}
          button={false}
          data-ix="close-sign-up-popup"
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
        <_Builtin.FormWrapper className="popup-sign-up-form">
          <_Builtin.FormForm
            name="wf-form-Sign-Up-Form-Popup"
            data-name="Sign Up Form (Popup)"
            method="get"
            id="wf-form-Sign-Up-Form-Popup"
          >
            <_Builtin.Block className="popup-title" tag="div">
              {"Sign up for a free account!"}
            </_Builtin.Block>
            <_Builtin.Row
              tag="div"
              columns={{
                main: "6|6",
              }}
            >
              <_Builtin.Column className="fields-column-left" tag="div">
                <_Builtin.FormTextInput
                  className="dark-field"
                  name="First-Name"
                  data-name="First Name"
                  type="text"
                  maxLength={256}
                  required={true}
                  placeholder="First Name"
                  disabled={false}
                  autoFocus={false}
                  id="First-Name-3"
                />
              </_Builtin.Column>
              <_Builtin.Column className="fields-column-right" tag="div">
                <_Builtin.FormTextInput
                  className="dark-field"
                  name="Last-Name"
                  data-name="Last Name"
                  type="text"
                  maxLength={256}
                  placeholder="Last Name"
                  disabled={false}
                  required={false}
                  autoFocus={false}
                  id="Last-Name-3"
                />
              </_Builtin.Column>
            </_Builtin.Row>
            <_Builtin.FormTextInput
              className="dark-field"
              name="Email"
              data-name="Email"
              type="email"
              maxLength={256}
              required={true}
              placeholder="Email address"
              disabled={false}
              autoFocus={false}
              id="Email-3"
            />
            <_Builtin.FormTextInput
              className="dark-field"
              name="Telephone-3"
              data-name="Telephone 3"
              type="text"
              maxLength={256}
              required={true}
              placeholder="Telephone number"
              disabled={false}
              autoFocus={false}
              id="Telephone-3"
            />
            <_Builtin.Paragraph className="sign-up-bottom-text">
              {"Signing up for our services means you agree to the "}
              <_Builtin.Link
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Privacy Policy"}
              </_Builtin.Link>
              {" and "}
              <_Builtin.Link
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Terms of Service"}
              </_Builtin.Link>
              {"."}
            </_Builtin.Paragraph>
            <_Builtin.FormButton
              className="button"
              type="submit"
              value="Get Started Now"
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
