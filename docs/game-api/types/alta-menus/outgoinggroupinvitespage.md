---
title: "OutgoingGroupInvitesPage"
description: "class OutgoingGroupInvitesPage in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OutgoingGroupInvitesPage

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`GroupPage`](/game-api/types/alta-menus/grouppage)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OutgoingGroupInvitesPage()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> |
| <Link id="m-listelement" /><code>{"private "}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" listElement"}</code> |
| <Link id="m-uilist" /><code>{"private "}<Link to="/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> |
| <Link id="m-ongroupdatachange" /><code>{"protected override void OnGroupDataChange()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-revokeinvite" /><code>{"private async void RevokeInvite("}<Link to="/game-api/types/assembly-api-client/outgoinggroupinvite">{"OutgoingGroupInvite"}</Link>{" invite)"}</code> |
| <Link id="m-setupinviteslist" /><code>{"private async Task SetupInvitesList()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `OutgoingGroupInvitesPage`:

[`SelectedGroupPanel.invitesPage`](/game-api/types/alta-menus/selectedgrouppanel#m-invitespage).
