---
title: "GroupPage"
description: "Base for a page in the server management UI that shows one joined group. Client only."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupPage

An **abstract class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Base for a page in the server management UI that shows one joined group. Client only.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/game-api/types/alta-menus/panelcomponent)
- **Derived types** [`GroupInfoTab`](/game-api/types/alta-menus/groupinfotab), [`GroupMembersPage`](/game-api/types/alta-menus/groupmemberspage), [`IncomingGroupRequestPage`](/game-api/types/alta-menus/incominggrouprequestpage), [`OutgoingGroupInvitesPage`](/game-api/types/alta-menus/outgoinggroupinvitespage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected GroupPage()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-group" /><code>{"protected "}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group"}</code> | The group the page is showing. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupforgroup" /><code>{"void SetupForGroup("}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group)"}</code> | Points the page at a group and makes it refresh the next time it loads. |
| <Link id="m-ongroupdatachange" /><code>{"protected virtual void OnGroupDataChange()"}</code> | Hook for subclasses to refresh when the group is cleared or changes. |
| <Link id="m-resetpage" /><code>{"private void ResetPage()"}</code> |  |
