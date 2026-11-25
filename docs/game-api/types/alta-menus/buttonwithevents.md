---
title: "ButtonWithEvents"
description: "A menu Button that also fires Unity events set in the inspector when pressed, released, enabled or disabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ButtonWithEvents

A **class** in `Root.Township`, `Alta.Meta.UI`.

A menu `Button` that also fires Unity events set in the inspector when pressed, released, enabled or disabled.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`Button`](/game-api/types/alta-menus/button)
- **Derived types** [`TextButton`](/game-api/types/alta-menus/textbutton)
- **Attributes** `SelectionBase`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ButtonWithEvents()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-ondisable" /><code>{"private UnityEvent onDisable"}</code> |
| <Link id="m-onenable" /><code>{"private UnityEvent onEnable"}</code> |
| <Link id="m-onpress" /><code>{"private UnityEvent onPress"}</code> |
| <Link id="m-onrelease" /><code>{"private UnityEvent onRelease"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Hooks the press, release and enabled change events to the inspector Unity events. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-handleenabledchanged" /><code>{"private void HandleEnabledChanged("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ButtonWithEvents`:

[`ListElementWithButton.button`](/game-api/types/alta-menus/listelementwithbutton#m-button), [`ListElementWithButton.Button`](/game-api/types/alta-menus/listelementwithbutton#m-button-2), [`GroupInfoTab.leaveGroupButton`](/game-api/types/alta-menus/groupinfotab#m-leavegroupbutton), [`JoinedGroupListElement.inviteButton`](/game-api/types/alta-menus/joinedgrouplistelement#m-invitebutton), [`ListElementWith2Buttons.button2`](/game-api/types/alta-menus/listelementwith2buttons#m-button2), [`ListElementWith2Buttons.Button2`](/game-api/types/alta-menus/listelementwith2buttons#m-button2-2), [`ServerDetailsPanel.ButtonData.button`](/game-api/types/alta-menus/serverdetailspanel-buttondata#m-button), [`RecentPlayersPage.backButton`](/game-api/types/alta-menus/recentplayerspage#m-backbutton), [`RecentPlayersPage.forwardButton`](/game-api/types/alta-menus/recentplayerspage#m-forwardbutton), [`RecentPlayersPage.homeButton`](/game-api/types/alta-menus/recentplayerspage#m-homebutton), [`GymnasiumTeleportPointPage.backButton`](/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-backbutton), [`GymnasiumTeleportPointPage.forwardButton`](/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-forwardbutton).
