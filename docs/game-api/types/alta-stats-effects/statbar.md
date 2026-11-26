---
title: "StatBar"
description: "A curved stat bar that adds notch marks for the stat's maximum and an icon to StatBarSimple."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatBar

A **class** in `Root.Township`, `Alta.StatSystem`.

A curved stat bar that adds notch marks for the stat's maximum and an icon to `StatBarSimple`. Display only.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatBarSimple`](/game-api/types/alta-stats-effects/statbarsimple)
- **Attributes** `RequireComponent`
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatBar()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglewidth" /><code>{"private float angleWidth"}</code> | Angle the bar covers, used to place notches (default 90). |
| <Link id="m-iconmaterial" /><code>{"private Material iconMaterial"}</code> | Source material for the stat icon. |
| <Link id="m-isusingnotches" /><code>{"private bool isUsingNotches"}</code> | Whether the bar shows notches. |
| <Link id="m-isusingoverridematerial" /><code>{"private bool isUsingOverrideMaterial"}</code> | True after `ForceNotchMaterial`. |
| <Link id="m-notches" /><code>{"private List<"}<Link to="/game-api/types/alta-stats-effects/statbarnotch">{"StatBarNotch"}</Link>{"> notches"}</code> | The spawned notches. |
| <Link id="m-notchparenttransform" /><code>{"private Transform notchParentTransform"}</code> | Parent for spawned notches; the bar itself if empty. |
| <Link id="m-notchprefab" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statbarnotch">{"StatBarNotch"}</Link>{" notchPrefab"}</code> | Prefab spawned for each notch. |
| <Link id="m-overridenotchmaterial" /><code>{"private Material overrideNotchMaterial"}</code> | Material set by `ForceNotchMaterial`. |
| <Link id="m-reachednotchmaterial" /><code>{"private Material reachedNotchMaterial"}</code> | Source material for reached notches. |
| <Link id="m-staticonrenderer" /><code>{"private MeshRenderer statIconRenderer"}</code> | Renderer for the stat icon. |
| <Link id="m-unreachednotchmaterial" /><code>{"private Material unreachedNotchMaterial"}</code> | Source material for unreached notches. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iconmaterial-2" /><code>{"Material IconMaterial { get; private set; }"}</code> | Copy of the icon material made in `Initialize`, used to fade the icon. |
| <Link id="m-reachedmaterial" /><code>{"Material ReachedMaterial { get; private set; }"}</code> | Material copy for notches the stat has reached. |
| <Link id="m-unreachedmaterial" /><code>{"Material UnreachedMaterial { get; private set; }"}</code> | Material copy for notches the stat has not reached. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcenotchmaterial" /><code>{"override void ForceNotchMaterial(Material notchesMaterial)"}</code> | Uses one material for every notch from now on, instead of reached and unreached materials. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Makes copies of the icon and notch materials so this bar can fade them alone. |
| <Link id="m-setalpha" /><code>{"override void SetAlpha(float alphaMultiplier)"}</code> | Fades the bar, icon and notch materials. |
| <Link id="m-onstatchanged" /><code>{"protected override void OnStatChanged("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Updates the bar and then its notches. |
| <Link id="m-setrenderersenabled" /><code>{"protected override void SetRenderersEnabled(bool isEnabled)"}</code> | Shows or hides the bar and all notches. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-debugnotchvisibility" /><code>{"private void DebugNotchVisibility("}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition, out float statMaximum)"}</code> | Sets the editor preview maximum to 0. Leftover debug hook. |
| <Link id="m-delaydestroy" /><code>{"private void DelayDestroy()"}</code> | Destroys all notch objects. |
| <Link id="m-delaysetup" /><code>{"private void DelaySetup()"}</code> | Calls `SetupNotches` with no stat. Leftover editor helper. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Does nothing. |
| <Link id="m-setupnotches" /><code>{"private void SetupNotches("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Colours notches by whether the stat reaches them (not on Android), and rebuilds and places them when the maximum changes. |

</details>

## Used in

Members of other types that take, return or hold a `StatBar`:

[`DiscreteStatBar.visibilityDecidor`](/game-api/types/alta-stats-effects/discretestatbar#m-visibilitydecidor).
