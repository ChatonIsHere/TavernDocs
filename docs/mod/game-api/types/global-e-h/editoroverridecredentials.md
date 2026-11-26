---
title: "EditorOverrideCredentials"
description: "Plain username and password pair, probably for signing in from the Unity editor during development."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditorOverrideCredentials

A **class** in `Root.Township`, the global namespace.

Plain username and password pair, probably for signing in from the Unity editor during development.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditorOverrideCredentials()"}</code> | <span className="api-desc">Creates an `EditorOverrideCredentials` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-password" /><code>{"string password"}</code> | <span className="api-desc">Password to sign in with. Defaults to the text "password".</span> |
| <Link id="m-username" /><code>{"string username"}</code> | <span className="api-desc">Account name to sign in with. Defaults to the text "username".</span> |

## Used in

Members of other types that take, return or hold a `EditorOverrideCredentials`:

<div className="api-used-in">

[`EditorApiSettings.GetOverrideCredentials`](/mod/game-api/types/global-e-h/editorapisettings#m-getoverridecredentials).

</div>
