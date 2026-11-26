---
title: "CaveTeleporterReplacer"
description: "A GenericReplacer for cave teleporters that plays a dissolve animation from the old object to the new one before finishing the swap."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleporterReplacer

A **class** in `Root.Township`, no namespace.

A `GenericReplacer` for cave teleporters that plays a dissolve animation from the old object to the new one before finishing the swap. The server sends the effect to clients in the chunk.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`GenericReplacer`](/game-api/types/global-e-h/genericreplacer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveTeleporterReplacer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | Serialized but not used; the animation reads its timing from `CaveTeleportSettings`. |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> | Serialized but not used; the animation material comes from `CaveTeleportSettings`. |
| <Link id="m-fadeincurve" /><code>{"private AnimationCurve fadeInCurve"}</code> | Serialized but not used; the fade-in curve comes from `CaveTeleportSettings`. |
| <Link id="m-fadeoutcurve" /><code>{"private AnimationCurve fadeOutCurve"}</code> | Serialized but not used; the fade-out curve comes from `CaveTeleportSettings`. |
| <Link id="m-isimmediate" /><code>{"private bool isImmediate"}</code> | True only during `ReplaceImmediate`, so `OnReplace` skips the animation. |
| <Link id="m-onanimationstart" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" OnAnimationStart"}</code> | Event fired on clients (not headless) when the replace animation begins, with this transform. |
| <Link id="m-renderers" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" renderers"}</code> | Renderers of the old object that fade out. |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncEffect"}</code> | Sync message carrying the replacing entity's id. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the sync message used to send the replace effect. |
| <Link id="m-replaceimmediate" /><code>{"void ReplaceImmediate()"}</code> | Replaces straight away with no animation or sync. |
| <Link id="m-onreplace" /><code>{"protected override void OnReplace("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" replacing)"}</code> | Unless immediate, the server tells clients which entity replaces this one, then the swap finishes after the animation. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint targetEntity)"}</code> | Sync handler: clients wait for the replacing entity to spawn and then run `OnReplace` to animate. |

</details>
