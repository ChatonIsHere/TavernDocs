---
title: "PlayerStatBasedVisualEffect"
description: "Client: drives a post-process effect (frost or exposure) from one of the local player's health stats."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerStatBasedVisualEffect

A **class** in `Root.Township`, `ATT.PlayerStates`.

Client: drives a post-process effect (frost or exposure) from one of the local player's health stats.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`, [`IInitializeAsLocalPlayer`](/game-api/types/global-i-l/iinitializeaslocalplayer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerStatBasedVisualEffect()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effecttype" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/visualeffecttype">{"VisualEffectType"}</Link>{" effectType"}</code> | Which effect to drive: frost or exposure. |
| <Link id="m-postprocesscontroller" /><code>{"private IPostProcessController postProcessController"}</code> | Injected post-process controller. |
| <Link id="m-statdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition"}</code> | The stat to follow. |
| <Link id="m-stattotrack" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" statToTrack"}</code> | Meant to hold the tracked stat for unhooking, but never assigned. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeaslocalplayer" /><code>{"void InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Finds the stat on the local player's health and listens for its changes. |
| <Link id="m-inject" /><code>{"protected void Inject(IPostProcessController newPostProcessController)"}</code> | VContainer injection of the post-process controller. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the stat listener. `statToTrack` is never set, so in practice it never unhooks. |
| <Link id="m-updatevisualeffect" /><code>{"private void UpdateVisualEffect("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Sets the frost strength or exposure to the stat's value. |

</details>
