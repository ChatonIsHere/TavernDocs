---
title: "FromPlayingToCustomization"
description: "Sends a player from the game back to character customization, after a fade to black."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FromPlayingToCustomization

A **class** in `Root.Township`, no namespace.

Sends a player from the game back to character customization, after a fade to black. Clients ask the server, which runs the transition.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FromPlayingToCustomization()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPlayer"}</code> | Method sync used for the request. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the sync message. |
| <Link id="m-returntocustomization" /><code>{"void ReturnToCustomization("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | For a living local player, fades to black then triggers the transition (directly on the server, by message on a client). |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncplayer-2" /><code>{"private void SyncPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server: triggers `PlayingToCustomizationTransition` for the sending player. |

</details>
