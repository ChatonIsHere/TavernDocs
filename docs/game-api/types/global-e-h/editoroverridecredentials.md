---
title: "EditorOverrideCredentials"
description: "Plain username and password pair, probably for signing in from the Unity editor during development."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditorOverrideCredentials

A **class** in `Root.Township`, no namespace.

Plain username and password pair, probably for signing in from the Unity editor during development.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditorOverrideCredentials()"}</code> | Creates an `EditorOverrideCredentials` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-password" /><code>{"string password"}</code> | Password to sign in with. Defaults to the text "password". |
| <Link id="m-username" /><code>{"string username"}</code> | Account name to sign in with. Defaults to the text "username". |

## Used in

Members of other types that take, return or hold a `EditorOverrideCredentials`:

[`EditorApiSettings.GetOverrideCredentials`](/game-api/types/global-e-h/editorapisettings#m-getoverridecredentials).
