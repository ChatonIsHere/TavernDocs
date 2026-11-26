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
| <Link id="m-ctor" /><code>{"ServerSelectionOrb()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actionorb" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/actionorb">{"ActionOrb"}</Link>{" actionOrb"}</code> | <span className="api-desc">The `ActionOrb` the player grabs.</span> |
| <Link id="m-selectedelement" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" selectedElement"}</code> | <span className="api-desc">The server currently selected in the list.</span> |
| <Link id="m-selectionorbposition" /><code>{"private Transform selectionOrbPosition"}</code> | <span className="api-desc">Where the orb sits when not held.</span> |
| <Link id="m-validorbletgo" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverelementevent">{"ServerElementEvent"}</Link>{" validOrbLetGo"}</code> | <span className="api-desc">Event fired with the selected server on a valid let-go.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updateselectionorbbasedonselection" /><code>{"void UpdateSelectionOrbBasedOnSelection("}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" newElement)"}</code> | <span className="api-desc">Stores the new selection. If it's null, force-drops the orb.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the orb's pickup filter and valid let-go event, and sets its home position.</span> |
| <Link id="m-ensureserverisselected" /><code>{"private void EnsureServerIsSelected("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Pickup filter that blocks grabbing the orb while no server is selected.</span> |
| <Link id="m-letgo" /><code>{"private void LetGo()"}</code> | <span className="api-desc">Fires `validOrbLetGo` with the selected server when the orb is let go in a valid place.</span> |

</details>
