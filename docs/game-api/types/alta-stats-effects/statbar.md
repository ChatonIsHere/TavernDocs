---
title: "StatBar"
description: "class StatBar in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatBar

A **class** in `Root.Township`, `Alta.StatSystem`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatBarSimple`](/game-api/types/alta-stats-effects/statbarsimple)
- **Attributes** `RequireComponent`
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatBar()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-anglewidth" /><code>{"private float angleWidth"}</code> |  |
| <Link id="m-iconmaterial" /><code>{"private Material iconMaterial"}</code> |  |
| <Link id="m-isusingnotches" /><code>{"private bool isUsingNotches"}</code> |  |
| <Link id="m-isusingoverridematerial" /><code>{"private bool isUsingOverrideMaterial"}</code> |  |
| <Link id="m-notches" /><code>{"private List<"}<Link to="/game-api/types/alta-stats-effects/statbarnotch">{"StatBarNotch"}</Link>{"> notches"}</code> |  |
| <Link id="m-notchparenttransform" /><code>{"private Transform notchParentTransform"}</code> |  |
| <Link id="m-notchprefab" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statbarnotch">{"StatBarNotch"}</Link>{" notchPrefab"}</code> |  |
| <Link id="m-overridenotchmaterial" /><code>{"private Material overrideNotchMaterial"}</code> |  |
| <Link id="m-reachednotchmaterial" /><code>{"private Material reachedNotchMaterial"}</code> |  |
| <Link id="m-staticonrenderer" /><code>{"private MeshRenderer statIconRenderer"}</code> |  |
| <Link id="m-unreachednotchmaterial" /><code>{"private Material unreachedNotchMaterial"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iconmaterial-2" /><code>{"Material IconMaterial { get; private set; }"}</code> |  |
| <Link id="m-reachedmaterial" /><code>{"Material ReachedMaterial { get; private set; }"}</code> |  |
| <Link id="m-unreachedmaterial" /><code>{"Material UnreachedMaterial { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcenotchmaterial" /><code>{"override void ForceNotchMaterial(Material notchesMaterial)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-setalpha" /><code>{"override void SetAlpha(float alphaMultiplier)"}</code> |  |
| <Link id="m-debugnotchvisibility" /><code>{"private void DebugNotchVisibility("}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition, out float statMaximum)"}</code> |  |
| <Link id="m-delaydestroy" /><code>{"private void DelayDestroy()"}</code> |  |
| <Link id="m-delaysetup" /><code>{"private void DelaySetup()"}</code> |  |
| <Link id="m-onstatchanged" /><code>{"protected override void OnStatChanged("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-setrenderersenabled" /><code>{"protected override void SetRenderersEnabled(bool isEnabled)"}</code> |  |
| <Link id="m-setupnotches" /><code>{"private void SetupNotches("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |

## Used in

Members of other types that take, return or hold a `StatBar`:

[`DiscreteStatBar.visibilityDecidor`](/game-api/types/alta-stats-effects/discretestatbar#m-visibilitydecidor).
