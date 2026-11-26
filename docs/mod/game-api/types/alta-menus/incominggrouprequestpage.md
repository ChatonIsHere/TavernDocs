---
title: "IncomingGroupRequestPage"
description: "Client group page listing requests to join the group, each with accept and reject buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IncomingGroupRequestPage

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Client group page listing requests to join the group, each with accept and reject buttons.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`GroupPage`](/mod/game-api/types/alta-menus/grouppage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IncomingGroupRequestPage()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> | <span className="api-desc">Text shown when there are no requests.</span> |
| <Link id="m-listelement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwith2buttons">{"ListElementWith2Buttons"}</Link>{" listElement"}</code> | <span className="api-desc">Two-button row prefab cloned for each request.</span> |
| <Link id="m-uilist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | <span className="api-desc">The list that holds the request rows.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | <span className="api-desc">Rebuilds the request list behind a loading screen.</span> |
| <Link id="m-ongroupdatachange" /><code>{"protected override void OnGroupDataChange()"}</code> | <span className="api-desc">Clears and destroys the request list when the shown group changes.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setuprequestslist" /><code>{"private async Task SetupRequestsList()"}</code> | <span className="api-desc">Fetches join requests from the API and adds a row per request; the first button accepts, the second rejects.</span> |

</details>

## Used in

Members of other types that take, return or hold a `IncomingGroupRequestPage`:

<div className="api-used-in">

[`SelectedGroupPanel.requestsPage`](/mod/game-api/types/alta-menus/selectedgrouppanel#m-requestspage).

</div>
