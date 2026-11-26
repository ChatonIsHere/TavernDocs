---
title: "OutgoingGroupInvitesPage"
description: "Client group page listing invites the group has sent, each with a button to revoke it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OutgoingGroupInvitesPage

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Client group page listing invites the group has sent, each with a button to revoke it.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`GroupPage`](/mod/game-api/types/alta-menus/grouppage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OutgoingGroupInvitesPage()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> | <span className="api-desc">Text shown when there are no invites.</span> |
| <Link id="m-listelement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" listElement"}</code> | <span className="api-desc">Row prefab cloned for each invite.</span> |
| <Link id="m-uilist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | <span className="api-desc">The list that holds the invite rows.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | <span className="api-desc">Rebuilds the invite list behind a loading screen.</span> |
| <Link id="m-ongroupdatachange" /><code>{"protected override void OnGroupDataChange()"}</code> | <span className="api-desc">Clears and destroys the invite list when the shown group changes.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-revokeinvite" /><code>{"private async void RevokeInvite("}<Link to="/mod/game-api/types/assembly-api-client/outgoinggroupinvite">{"OutgoingGroupInvite"}</Link>{" invite)"}</code> | <span className="api-desc">Revokes the invite through the API and marks the page to reload.</span> |
| <Link id="m-setupinviteslist" /><code>{"private async Task SetupInvitesList()"}</code> | <span className="api-desc">Fetches outgoing invites and adds a row per invite; its button asks to confirm a revoke.</span> |

</details>

## Used in

Members of other types that take, return or hold a `OutgoingGroupInvitesPage`:

<div className="api-used-in">

[`SelectedGroupPanel.invitesPage`](/mod/game-api/types/alta-menus/selectedgrouppanel#m-invitespage).

</div>
