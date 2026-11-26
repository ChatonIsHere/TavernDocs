---
title: "MainMenuVrLifetimeScope"
description: "VContainer scope for the VR main menu."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuVrLifetimeScope

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

VContainer scope for the VR main menu. Makes sure the inbox, friends, recent players and reports panels are injected. Client.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`AbstractAltaLifetimeScope`](/mod/game-api/types/assembly-other/abstractaltalifetimescope)
- **Documented in** [Event buses and services](/mod/game-api/console-and-utilities/event-buses-and-services)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MainMenuVrLifetimeScope()"}</code> | <span className="api-desc">Creates a `MainMenuVrLifetimeScope` with default values.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-friendsinvitespanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/friendsinvitespanel">{"FriendsInvitesPanel"}</Link>{" friendsInvitesPanel"}</code> | <span className="api-desc">Friends invites panel to inject.</span> |
| <Link id="m-friendslistpanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/friendslistpanel">{"FriendsListPanel"}</Link>{" friendsListPanel"}</code> | <span className="api-desc">Friends list panel to inject.</span> |
| <Link id="m-friendsrequestspanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/friendsrequestspanel">{"FriendsRequestsPanel"}</Link>{" friendsRequestsPanel"}</code> | <span className="api-desc">Friend requests panel to inject.</span> |
| <Link id="m-inboxpanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/inboxpanel">{"InboxPanel"}</Link>{" inboxPanel"}</code> | <span className="api-desc">Inbox panel to inject.</span> |
| <Link id="m-oculusfriendslistpanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/oculusfriendslistpanel">{"OculusFriendsListPanel"}</Link>{" oculusFriendsListPanel"}</code> | <span className="api-desc">Oculus friends list panel to inject.</span> |
| <Link id="m-recentplayerslistpanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/recentplayerslistpanel">{"RecentPlayersListPanel"}</Link>{" recentPlayersListPanel"}</code> | <span className="api-desc">Recent players panel to inject.</span> |
| <Link id="m-reportspanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/reportspanel">{"ReportsPanel"}</Link>{" reportsPanel"}</code> | <span className="api-desc">Reports panel to inject.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-configurescope" /><code>{"protected override void ConfigureScope(IContainerBuilder builder)"}</code> | <span className="api-desc">Adds each assigned panel's game object to the auto-inject list once.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-configurescope-2" /><code>{"private void ConfigureScope(MonoBehaviour targetBehaviour)"}</code> | <span className="api-desc">Adds each assigned panel's game object to the auto-inject list once.</span> |

</details>
