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
| <Link id="m-ctor" /><code>{"ListElementWith2Buttons()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button2" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" button2"}</code> | <span className="api-desc">Backing field for `Button2`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-button2-2" /><code><Link to="/mod/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" Button2 { get; }"}</code> | <span className="api-desc">The second button (the first is the base class `Button`).</span> |

## Used in

Members of other types that take, return or hold a `ListElementWith2Buttons`:

<div className="api-used-in">

[`IncomingGroupRequestPage.listElement`](/mod/game-api/types/alta-menus/incominggrouprequestpage#m-listelement).

</div>
