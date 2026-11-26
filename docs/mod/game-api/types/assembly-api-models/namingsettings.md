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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-emaillength" /><code>{"const int EmailLength"}</code> | <span className="api-desc">Longest email allowed, 500.</span> |
| <Link id="m-namelength" /><code>{"const int NameLength"}</code> | <span className="api-desc">Longest name allowed, 100.</span> |
| <Link id="m-nameregularexpression" /><code>{"const string NameRegularExpression"}</code> | <span className="api-desc">Characters allowed in names: letters and spaces.</span> |
| <Link id="m-passwordhashlength" /><code>{"const int PasswordHashLength"}</code> | <span className="api-desc">Longest password hash allowed, 500.</span> |
| <Link id="m-signupcodelength" /><code>{"const int SignupCodeLength"}</code> | <span className="api-desc">Longest sign-up code allowed, 100.</span> |
| <Link id="m-signupcoderegularexpression" /><code>{"const string SignupCodeRegularExpression"}</code> | <span className="api-desc">Characters allowed in sign-up codes: letters and digits.</span> |
| <Link id="m-usernamefieldname" /><code>{"const string UsernameFieldName"}</code> | <span className="api-desc">Name of the username field, `username`.</span> |
