---
title: "AltaAccountRegistererAndLinker.LastCheckedField"
description: "Remembers the last username or email checked against the API on the registration screen, so the same value isn't sent again."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaAccountRegistererAndLinker.LastCheckedField

A **private class** in `Root.Township`, `Alta.OculusLogin`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Remembers the last username or email checked against the API on the registration screen, so the same value isn't sent again.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Nested in** [`AltaAccountRegistererAndLinker`](/mod/game-api/types/alta-menus/altaaccountregistererandlinker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LastCheckedField("}<Link to="/mod/game-api/types/alta-menus/altaaccountregistererandlinker-accountregisteringsteps">{"AltaAccountRegistererAndLinker.AccountRegisteringSteps"}</Link>{" step, "}<Link to="/mod/game-api/types/alta-menus/altaaccountregistererandlinker">{"AltaAccountRegistererAndLinker"}</Link>{" manager)"}</code> | Creates an `AltaAccountRegistererAndLinker.LastCheckedField` from `step` and `manager`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-lastcheckedvalue" /><code>{"string lastCheckedValue"}</code> | The value last sent for checking. |
| <Link id="m-lastgenericerror" /><code>{"string lastGenericError"}</code> | Error message shown for the last check, if any. |
| <Link id="m-lastresult" /><code>{"bool lastResult"}</code> | Whether the last checked value was valid. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-manager" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-menus/altaaccountregistererandlinker">{"AltaAccountRegistererAndLinker"}</Link>{" manager"}</code> | The registration screen that owns this field. |
| <Link id="m-step" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-menus/altaaccountregistererandlinker-accountregisteringsteps">{"AltaAccountRegistererAndLinker.AccountRegisteringSteps"}</Link>{" step"}</code> | Which registration field this is (username or email). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkactive" /><code>{"bool CheckActive(string newValue, out bool result)"}</code> | If the value is the same as last time, re-shows the last status or error and returns true with the cached result. Otherwise stores the new value and returns false. |

## Used in

Members of other types that take, return or hold a `LastCheckedField`:

[`AltaAccountRegistererAndLinker.lastCheckedEmail`](/mod/game-api/types/alta-menus/altaaccountregistererandlinker#m-lastcheckedemail), [`AltaAccountRegistererAndLinker.lastCheckedUsername`](/mod/game-api/types/alta-menus/altaaccountregistererandlinker#m-lastcheckedusername), [`AltaAccountRegistererAndLinker.SetErrorMessage`](/mod/game-api/types/alta-menus/altaaccountregistererandlinker#m-seterrormessage).
