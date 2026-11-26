---
title: "EditServerPanel"
description: "Main menu panel for editing a joined server's name, description and join type through the web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditServerPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Main menu panel for editing a joined server's name, description and join type through the web API.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`ServerDetailsPanel`](/game-api/types/alta-menus/serverdetailspanel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditServerPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-firstpanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" firstPanel"}</code> | The first page of the edit flow. |
| <Link id="m-server" /><code>{"private "}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" server"}</code> | The server being edited. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" server)"}</code> | Fills the inputs from the server's current info and opens the first page. |
| <Link id="m-getsummarytext" /><code>{"protected override string GetSummaryText()"}</code> | Returns the name, description and join type for the confirm screen. |
| <Link id="m-run" /><code>{"protected override async Task Run()"}</code> | Sends the edit request, then shows a success or retry popup. |

## Used in

Members of other types that take, return or hold a `EditServerPanel`:

[`SelectedGroupPanel.editServerPanel`](/game-api/types/alta-menus/selectedgrouppanel#m-editserverpanel).
