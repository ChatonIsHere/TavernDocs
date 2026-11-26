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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Nested in** [`ServerDetailsPanel`](/game-api/types/alta-menus/serverdetailspanel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ButtonData()"}</code> | Creates a `ServerDetailsPanel.ButtonData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code><Link to="/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" button"}</code> | The button for this choice. |
| <Link id="m-data" /><code>{"string data"}</code> | The `GroupType` name this choice sets, parsed when the request is sent. |
| <Link id="m-friendlyname" /><code>{"string friendlyName"}</code> | Label shown in the confirmation text. |

## Used in

Members of other types that take, return or hold a `ButtonData`:

[`CreateServerPanel.currentRegion`](/game-api/types/alta-menus/createserverpanel#m-currentregion), [`CreateServerPanel.regionButtonData`](/game-api/types/alta-menus/createserverpanel#m-regionbuttondata), [`ServerDetailsPanel.currentType`](/game-api/types/alta-menus/serverdetailspanel#m-currenttype), [`ServerDetailsPanel.joinButtonData`](/game-api/types/alta-menus/serverdetailspanel#m-joinbuttondata).
