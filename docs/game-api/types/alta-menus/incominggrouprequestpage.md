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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`GroupPage`](/game-api/types/alta-menus/grouppage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IncomingGroupRequestPage()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> | Text shown when there are no requests. |
| <Link id="m-listelement" /><code>{"private "}<Link to="/game-api/types/alta-menus/listelementwith2buttons">{"ListElementWith2Buttons"}</Link>{" listElement"}</code> | Two-button row prefab cloned for each request. |
| <Link id="m-uilist" /><code>{"private "}<Link to="/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | The list that holds the request rows. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | Rebuilds the request list behind a loading screen. |
| <Link id="m-ongroupdatachange" /><code>{"protected override void OnGroupDataChange()"}</code> | Clears and destroys the request list when the shown group changes. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setuprequestslist" /><code>{"private async Task SetupRequestsList()"}</code> | Fetches join requests from the API and adds a row per request; the first button accepts, the second rejects. |

</details>

## Used in

Members of other types that take, return or hold a `IncomingGroupRequestPage`:

[`SelectedGroupPanel.requestsPage`](/game-api/types/alta-menus/selectedgrouppanel#m-requestspage).
