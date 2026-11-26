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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`AbstractAltaLifetimeScope`](/game-api/types/assembly-other/abstractaltalifetimescope)
- **Documented in** [Event buses and services](/game-api/console-and-utilities/event-buses-and-services)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MainMenuVrLifetimeScope()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-friendsinvitespanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/friendsinvitespanel">{"FriendsInvitesPanel"}</Link>{" friendsInvitesPanel"}</code> | Friends invites panel to inject. |
| <Link id="m-friendslistpanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/friendslistpanel">{"FriendsListPanel"}</Link>{" friendsListPanel"}</code> | Friends list panel to inject. |
| <Link id="m-friendsrequestspanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/friendsrequestspanel">{"FriendsRequestsPanel"}</Link>{" friendsRequestsPanel"}</code> | Friend requests panel to inject. |
| <Link id="m-inboxpanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/inboxpanel">{"InboxPanel"}</Link>{" inboxPanel"}</code> | Inbox panel to inject. |
| <Link id="m-oculusfriendslistpanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/oculusfriendslistpanel">{"OculusFriendsListPanel"}</Link>{" oculusFriendsListPanel"}</code> | Oculus friends list panel to inject. |
| <Link id="m-recentplayerslistpanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/recentplayerslistpanel">{"RecentPlayersListPanel"}</Link>{" recentPlayersListPanel"}</code> | Recent players panel to inject. |
| <Link id="m-reportspanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/reportspanel">{"ReportsPanel"}</Link>{" reportsPanel"}</code> | Reports panel to inject. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-configurescope" /><code>{"protected override void ConfigureScope(IContainerBuilder builder)"}</code> | Adds each assigned panel's game object to the auto-inject list once. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-configurescope-2" /><code>{"private void ConfigureScope(MonoBehaviour targetBehaviour)"}</code> | Adds each assigned panel's game object to the auto-inject list once. |

</details>
