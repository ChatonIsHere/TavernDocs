---
title: "ServerDetailsPanel.ButtonData"
description: "A join type choice on the create and edit server panels: its button, the group type it stands for and a label."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerDetailsPanel.ButtonData

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

A join type choice on the create and edit server panels: its button, the group type it stands for and a label.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Nested in** [`ServerDetailsPanel`](/mod/game-api/types/alta-menus/serverdetailspanel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ButtonData()"}</code> | <span className="api-desc">Creates a `ServerDetailsPanel.ButtonData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code><Link to="/mod/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" button"}</code> | <span className="api-desc">The button for this choice.</span> |
| <Link id="m-data" /><code>{"string data"}</code> | <span className="api-desc">The `GroupType` name this choice sets, parsed when the request is sent.</span> |
| <Link id="m-friendlyname" /><code>{"string friendlyName"}</code> | <span className="api-desc">Label shown in the confirmation text.</span> |

## Used in

Members of other types that take, return or hold a `ButtonData`:

<div className="api-used-in">

[`CreateServerPanel.currentRegion`](/mod/game-api/types/alta-menus/createserverpanel#m-currentregion), [`CreateServerPanel.regionButtonData`](/mod/game-api/types/alta-menus/createserverpanel#m-regionbuttondata), [`ServerDetailsPanel.currentType`](/mod/game-api/types/alta-menus/serverdetailspanel#m-currenttype), [`ServerDetailsPanel.joinButtonData`](/mod/game-api/types/alta-menus/serverdetailspanel#m-joinbuttondata).

</div>
