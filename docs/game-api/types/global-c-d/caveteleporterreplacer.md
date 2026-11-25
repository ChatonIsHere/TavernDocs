---
title: "CaveTeleporterReplacer"
description: "class CaveTeleporterReplacer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleporterReplacer

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`GenericReplacer`](/game-api/types/global-e-h/genericreplacer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveTeleporterReplacer()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> |  |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> |  |
| <Link id="m-fadeincurve" /><code>{"private AnimationCurve fadeInCurve"}</code> |  |
| <Link id="m-fadeoutcurve" /><code>{"private AnimationCurve fadeOutCurve"}</code> |  |
| <Link id="m-isimmediate" /><code>{"private bool isImmediate"}</code> |  |
| <Link id="m-onanimationstart" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" OnAnimationStart"}</code> |  |
| <Link id="m-renderers" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" renderers"}</code> |  |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncEffect"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-replaceimmediate" /><code>{"void ReplaceImmediate()"}</code> |  |
| <Link id="m-onreplace" /><code>{"protected override void OnReplace("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" replacing)"}</code> |  |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint targetEntity)"}</code> |  |
