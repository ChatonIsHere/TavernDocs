---
title: "NamingSettings"
description: "Length and character limits for names, emails, password hashes and sign-up codes in the Alta API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NamingSettings

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Settings`.

Length and character limits for names, emails, password hashes and sign-up codes in the Alta API.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-emaillength" /><code>{"const int EmailLength"}</code> | Longest email allowed, 500. |
| <Link id="m-namelength" /><code>{"const int NameLength"}</code> | Longest name allowed, 100. |
| <Link id="m-nameregularexpression" /><code>{"const string NameRegularExpression"}</code> | Characters allowed in names: letters and spaces. |
| <Link id="m-passwordhashlength" /><code>{"const int PasswordHashLength"}</code> | Longest password hash allowed, 500. |
| <Link id="m-signupcodelength" /><code>{"const int SignupCodeLength"}</code> | Longest sign-up code allowed, 100. |
| <Link id="m-signupcoderegularexpression" /><code>{"const string SignupCodeRegularExpression"}</code> | Characters allowed in sign-up codes: letters and digits. |
| <Link id="m-usernamefieldname" /><code>{"const string UsernameFieldName"}</code> | Name of the username field, `username`. |
