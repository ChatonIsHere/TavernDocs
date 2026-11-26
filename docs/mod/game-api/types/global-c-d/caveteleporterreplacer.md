---
title: "CaveTeleporterReplacer"
description: "A GenericReplacer for cave teleporters that plays a dissolve animation from the old object to the new one before finishing the swap."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleporterReplacer

A **class** in `Root.Township`, the global namespace.

A `GenericReplacer` for cave teleporters that plays a dissolve animation from the old object to the new one before finishing the swap. The server sends the effect to clients in the chunk.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`GenericReplacer`](/mod/game-api/types/global-e-h/genericreplacer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveTeleporterReplacer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | <span className="api-desc">Serialized but not used; the animation reads its timing from `CaveTeleportSettings`.</span> |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> | <span className="api-desc">Serialized but not used; the animation material comes from `CaveTeleportSettings`.</span> |
| <Link id="m-fadeincurve" /><code>{"private AnimationCurve fadeInCurve"}</code> | <span className="api-desc">Serialized but not used; the fade-in curve comes from `CaveTeleportSettings`.</span> |
| <Link id="m-fadeoutcurve" /><code>{"private AnimationCurve fadeOutCurve"}</code> | <span className="api-desc">Serialized but not used; the fade-out curve comes from `CaveTeleportSettings`.</span> |
| <Link id="m-isimmediate" /><code>{"private bool isImmediate"}</code> | <span className="api-desc">True only during `ReplaceImmediate`, so `OnReplace` skips the animation.</span> |
| <Link id="m-onanimationstart" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" OnAnimationStart"}</code> | <span className="api-desc">Event fired on clients (not headless) when the replace animation begins, with this transform.</span> |
| <Link id="m-renderers" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" renderers"}</code> | <span className="api-desc">Renderers of the old object that fade out.</span> |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncEffect"}</code> | <span className="api-desc">Sync message carrying the replacing entity's id.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the sync message used to send the replace effect.</span> |
| <Link id="m-replaceimmediate" /><code>{"void ReplaceImmediate()"}</code> | <span className="api-desc">Replaces straight away with no animation or sync.</span> |
| <Link id="m-onreplace" /><code>{"protected override void OnReplace("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" replacing)"}</code> | <span className="api-desc">Unless immediate, the server tells clients which entity replaces this one, then the swap finishes after the animation.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint targetEntity)"}</code> | <span className="api-desc">Sync handler: clients wait for the replacing entity to spawn and then run `OnReplace` to animate.</span> |

</details>
