---
title: "ListElementWith2Buttons"
description: "Client list row with a second button, used for things like accept and reject on group join requests."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ListElementWith2Buttons

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Client list row with a second button, used for things like accept and reject on group join requests.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`ListElementWithButton`](/mod/game-api/types/alta-menus/listelementwithbutton)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ListElementWith2Buttons()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button2" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" button2"}</code> | Backing field for `Button2`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-button2-2" /><code><Link to="/mod/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" Button2 { get; }"}</code> | The second button (the first is the base class `Button`). |

## Used in

Members of other types that take, return or hold a `ListElementWith2Buttons`:

[`IncomingGroupRequestPage.listElement`](/mod/game-api/types/alta-menus/incominggrouprequestpage#m-listelement).
