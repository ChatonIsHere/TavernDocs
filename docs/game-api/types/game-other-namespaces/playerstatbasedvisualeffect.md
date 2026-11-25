---
title: "PlayerStatBasedVisualEffect"
description: "class PlayerStatBasedVisualEffect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerStatBasedVisualEffect

A **class** in `Root.Township`, `ATT.PlayerStates`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`, [`IInitializeAsLocalPlayer`](/game-api/types/global-i-l/iinitializeaslocalplayer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerStatBasedVisualEffect()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-effecttype" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/visualeffecttype">{"VisualEffectType"}</Link>{" effectType"}</code> |  |
| <Link id="m-postprocesscontroller" /><code>{"private IPostProcessController postProcessController"}</code> |  |
| <Link id="m-statdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition"}</code> |  |
| <Link id="m-stattotrack" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" statToTrack"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeaslocalplayer" /><code>{"void InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |  |
| <Link id="m-inject" /><code>{"protected void Inject(IPostProcessController newPostProcessController)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-updatevisualeffect" /><code>{"private void UpdateVisualEffect("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |
