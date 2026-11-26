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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`, [`IInitializeAsLocalPlayer`](/mod/game-api/types/global-i-l/iinitializeaslocalplayer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerStatBasedVisualEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effecttype" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/visualeffecttype">{"VisualEffectType"}</Link>{" effectType"}</code> | <span className="api-desc">Which effect to drive: frost or exposure.</span> |
| <Link id="m-postprocesscontroller" /><code>{"private IPostProcessController postProcessController"}</code> | <span className="api-desc">Injected post-process controller.</span> |
| <Link id="m-statdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition"}</code> | <span className="api-desc">The stat to follow.</span> |
| <Link id="m-stattotrack" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" statToTrack"}</code> | <span className="api-desc">Meant to hold the tracked stat for unhooking, but never assigned.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeaslocalplayer" /><code>{"void InitializeAsLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">Finds the stat on the local player's health and listens for its changes.</span> |
| <Link id="m-inject" /><code>{"protected void Inject(IPostProcessController newPostProcessController)"}</code> | <span className="api-desc">VContainer injection of the post-process controller.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the stat listener. `statToTrack` is never set, so in practice it never unhooks.</span> |
| <Link id="m-updatevisualeffect" /><code>{"private void UpdateVisualEffect("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Sets the frost strength or exposure to the stat's value.</span> |

</details>
