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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`GroupPage`](/game-api/types/alta-menus/grouppage)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OutgoingGroupInvitesPage()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> | Text shown when there are no invites. |
| <Link id="m-listelement" /><code>{"private "}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" listElement"}</code> | Row prefab cloned for each invite. |
| <Link id="m-uilist" /><code>{"private "}<Link to="/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | The list that holds the invite rows. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | Rebuilds the invite list behind a loading screen. |
| <Link id="m-ongroupdatachange" /><code>{"protected override void OnGroupDataChange()"}</code> | Clears and destroys the invite list when the shown group changes. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-revokeinvite" /><code>{"private async void RevokeInvite("}<Link to="/game-api/types/assembly-api-client/outgoinggroupinvite">{"OutgoingGroupInvite"}</Link>{" invite)"}</code> | Revokes the invite through the API and marks the page to reload. |
| <Link id="m-setupinviteslist" /><code>{"private async Task SetupInvitesList()"}</code> | Fetches outgoing invites and adds a row per invite; its button asks to confirm a revoke. |

</details>

## Used in

Members of other types that take, return or hold a `OutgoingGroupInvitesPage`:

[`SelectedGroupPanel.invitesPage`](/game-api/types/alta-menus/selectedgrouppanel#m-invitespage).
