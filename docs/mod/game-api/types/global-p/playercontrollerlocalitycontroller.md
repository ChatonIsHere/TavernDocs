---
title: "PlayerControllerLocalityController"
description: "Base component that records whether its player controller is the local player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerControllerLocalityController

A **class** in `Root.Township`, the global namespace.

Base component that records whether its player controller is the local player. Subclasses override `SetLocality` to set up local or remote behaviour.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CharacterLocalityController`](/mod/game-api/types/alta-player/characterlocalitycontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerControllerLocalityController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdebuglocal" /><code>{"private bool isDebugLocal"}</code> | <span className="api-desc">Editor button to force local.</span> |
| <Link id="m-isdebugremote" /><code>{"private bool isDebugRemote"}</code> | <span className="api-desc">Editor button to force remote.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islocal" /><code>{"bool IsLocal { get; private set; }"}</code> | <span className="api-desc">True when the player controller belongs to this machine's player.</span> |
| <Link id="m-playercontroller" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The player controller this belongs to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeforplayercontroller" /><code>{"void InitializeForPlayerController("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">Stores the player controller and applies its locality.</span> |
| <Link id="m-setlocality" /><code>{"virtual void SetLocality(bool isLocal)"}</code> | <span className="api-desc">Sets `IsLocal`. Override to react to the change.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor buttons that force local or remote for testing.</span> |

</details>
