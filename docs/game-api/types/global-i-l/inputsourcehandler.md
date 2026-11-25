---
title: "InputSourceHandler"
description: "delegate InputSourceHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputSourceHandler

A **delegate** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InputSourceHandler(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{" source, "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{" source, "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |

## Used in

Members of other types that take, return or hold a `InputSourceHandler`:

[`InputSource.InputEnded`](/game-api/types/global-i-l/inputsource#m-inputended), [`InputSource.InputStarted`](/game-api/types/global-i-l/inputsource#m-inputstarted).
