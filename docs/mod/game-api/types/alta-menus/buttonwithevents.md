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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`Button`](/mod/game-api/types/alta-menus/button)
- **Derived types** [`TextButton`](/mod/game-api/types/alta-menus/textbutton)
- **Attributes** `SelectionBase`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ButtonWithEvents()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private UnityEvent onDisable"}</code> | <span className="api-desc">Inspector event invoked when the button becomes disabled.</span> |
| <Link id="m-onenable" /><code>{"private UnityEvent onEnable"}</code> | <span className="api-desc">Inspector event invoked when the button becomes enabled.</span> |
| <Link id="m-onpress" /><code>{"private UnityEvent onPress"}</code> | <span className="api-desc">Inspector event invoked when the button is pressed.</span> |
| <Link id="m-onrelease" /><code>{"private UnityEvent onRelease"}</code> | <span className="api-desc">Inspector event invoked when the button is released.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Hooks the press, release and enabled change events to the inspector Unity events.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleenabledchanged" /><code>{"private void HandleEnabledChanged("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | <span className="api-desc">Invokes `onEnable` or `onDisable` when the button's enabled state changes.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ButtonWithEvents`:

<div className="api-used-in">

[`ListElementWithButton.button`](/mod/game-api/types/alta-menus/listelementwithbutton#m-button), [`ListElementWithButton.Button`](/mod/game-api/types/alta-menus/listelementwithbutton#m-button-2), [`GroupInfoTab.leaveGroupButton`](/mod/game-api/types/alta-menus/groupinfotab#m-leavegroupbutton), [`JoinedGroupListElement.inviteButton`](/mod/game-api/types/alta-menus/joinedgrouplistelement#m-invitebutton), [`ListElementWith2Buttons.button2`](/mod/game-api/types/alta-menus/listelementwith2buttons#m-button2), [`ListElementWith2Buttons.Button2`](/mod/game-api/types/alta-menus/listelementwith2buttons#m-button2-2), [`ServerDetailsPanel.ButtonData.button`](/mod/game-api/types/alta-menus/serverdetailspanel-buttondata#m-button), [`RecentPlayersPage.backButton`](/mod/game-api/types/alta-menus/recentplayerspage#m-backbutton), [`RecentPlayersPage.forwardButton`](/mod/game-api/types/alta-menus/recentplayerspage#m-forwardbutton), [`RecentPlayersPage.homeButton`](/mod/game-api/types/alta-menus/recentplayerspage#m-homebutton), [`GymnasiumTeleportPointPage.backButton`](/mod/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-backbutton), [`GymnasiumTeleportPointPage.forwardButton`](/mod/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-forwardbutton).

</div>
