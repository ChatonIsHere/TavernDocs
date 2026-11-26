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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`ServerDetailsPanel`](/mod/game-api/types/alta-menus/serverdetailspanel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditServerPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-firstpanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" firstPanel"}</code> | <span className="api-desc">The first page of the edit flow.</span> |
| <Link id="m-server" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" server"}</code> | <span className="api-desc">The server being edited.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" server)"}</code> | <span className="api-desc">Fills the inputs from the server's current info and opens the first page.</span> |
| <Link id="m-getsummarytext" /><code>{"protected override string GetSummaryText()"}</code> | <span className="api-desc">Returns the name, description and join type for the confirm screen.</span> |
| <Link id="m-run" /><code>{"protected override async Task Run()"}</code> | <span className="api-desc">Sends the edit request, then shows a success or retry popup.</span> |

## Used in

Members of other types that take, return or hold a `EditServerPanel`:

<div className="api-used-in">

[`SelectedGroupPanel.editServerPanel`](/mod/game-api/types/alta-menus/selectedgrouppanel#m-editserverpanel).

</div>
