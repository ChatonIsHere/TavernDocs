---
title: "PlayerControllerLocalityController"
description: "Base component that records whether its player controller is the local player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerControllerLocalityController

A **class** in `Root.Township`, no namespace.

Base component that records whether its player controller is the local player. Subclasses override `SetLocality` to set up local or remote behaviour.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CharacterLocalityController`](/game-api/types/alta-player/characterlocalitycontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerControllerLocalityController()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdebuglocal" /><code>{"private bool isDebugLocal"}</code> | Editor button to force local. |
| <Link id="m-isdebugremote" /><code>{"private bool isDebugRemote"}</code> | Editor button to force remote. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islocal" /><code>{"bool IsLocal { get; private set; }"}</code> | True when the player controller belongs to this machine's player. |
| <Link id="m-playercontroller" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; private set; }"}</code> | The player controller this belongs to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeforplayercontroller" /><code>{"void InitializeForPlayerController("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Stores the player controller and applies its locality. |
| <Link id="m-setlocality" /><code>{"virtual void SetLocality(bool isLocal)"}</code> | Sets `IsLocal`. Override to react to the change. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor buttons that force local or remote for testing. |

</details>
