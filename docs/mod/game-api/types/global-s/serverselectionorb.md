---
title: "ServerSelectionOrb"
description: "Main-menu orb the player grabs and lets go of to act on the selected server in the server list."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSelectionOrb

A **class** in `Root.Township`, the global namespace.

Main-menu orb the player grabs and lets go of to act on the selected server in the server list. It can't be picked up while no server is selected.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSelectionOrb()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actionorb" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/actionorb">{"ActionOrb"}</Link>{" actionOrb"}</code> | The `ActionOrb` the player grabs. |
| <Link id="m-selectedelement" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" selectedElement"}</code> | The server currently selected in the list. |
| <Link id="m-selectionorbposition" /><code>{"private Transform selectionOrbPosition"}</code> | Where the orb sits when not held. |
| <Link id="m-validorbletgo" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverelementevent">{"ServerElementEvent"}</Link>{" validOrbLetGo"}</code> | Event fired with the selected server on a valid let-go. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updateselectionorbbasedonselection" /><code>{"void UpdateSelectionOrbBasedOnSelection("}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" newElement)"}</code> | Stores the new selection. If it's null, force-drops the orb. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the orb's pickup filter and valid let-go event, and sets its home position. |
| <Link id="m-ensureserverisselected" /><code>{"private void EnsureServerIsSelected("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Pickup filter that blocks grabbing the orb while no server is selected. |
| <Link id="m-letgo" /><code>{"private void LetGo()"}</code> | Fires `validOrbLetGo` with the selected server when the orb is let go in a valid place. |

</details>
