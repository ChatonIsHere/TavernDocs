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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatBarSimple`](/mod/game-api/types/alta-stats-effects/statbarsimple)
- **Attributes** `RequireComponent`
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatBar()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglewidth" /><code>{"private float angleWidth"}</code> | <span className="api-desc">Angle the bar covers, used to place notches (default 90).</span> |
| <Link id="m-iconmaterial" /><code>{"private Material iconMaterial"}</code> | <span className="api-desc">Source material for the stat icon.</span> |
| <Link id="m-isusingnotches" /><code>{"private bool isUsingNotches"}</code> | <span className="api-desc">Whether the bar shows notches.</span> |
| <Link id="m-isusingoverridematerial" /><code>{"private bool isUsingOverrideMaterial"}</code> | <span className="api-desc">True after `ForceNotchMaterial`.</span> |
| <Link id="m-notches" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-stats-effects/statbarnotch">{"StatBarNotch"}</Link>{"> notches"}</code> | <span className="api-desc">The spawned notches.</span> |
| <Link id="m-notchparenttransform" /><code>{"private Transform notchParentTransform"}</code> | <span className="api-desc">Parent for spawned notches; the bar itself if empty.</span> |
| <Link id="m-notchprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statbarnotch">{"StatBarNotch"}</Link>{" notchPrefab"}</code> | <span className="api-desc">Prefab spawned for each notch.</span> |
| <Link id="m-overridenotchmaterial" /><code>{"private Material overrideNotchMaterial"}</code> | <span className="api-desc">Material set by `ForceNotchMaterial`.</span> |
| <Link id="m-reachednotchmaterial" /><code>{"private Material reachedNotchMaterial"}</code> | <span className="api-desc">Source material for reached notches.</span> |
| <Link id="m-staticonrenderer" /><code>{"private MeshRenderer statIconRenderer"}</code> | <span className="api-desc">Renderer for the stat icon.</span> |
| <Link id="m-unreachednotchmaterial" /><code>{"private Material unreachedNotchMaterial"}</code> | <span className="api-desc">Source material for unreached notches.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iconmaterial-2" /><code>{"Material IconMaterial { get; private set; }"}</code> | <span className="api-desc">Copy of the icon material made in `Initialize`, used to fade the icon.</span> |
| <Link id="m-reachedmaterial" /><code>{"Material ReachedMaterial { get; private set; }"}</code> | <span className="api-desc">Material copy for notches the stat has reached.</span> |
| <Link id="m-unreachedmaterial" /><code>{"Material UnreachedMaterial { get; private set; }"}</code> | <span className="api-desc">Material copy for notches the stat has not reached.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcenotchmaterial" /><code>{"override void ForceNotchMaterial(Material notchesMaterial)"}</code> | <span className="api-desc">Uses one material for every notch from now on, instead of reached and unreached materials.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Makes copies of the icon and notch materials so this bar can fade them alone.</span> |
| <Link id="m-setalpha" /><code>{"override void SetAlpha(float alphaMultiplier)"}</code> | <span className="api-desc">Fades the bar, icon and notch materials.</span> |
| <Link id="m-onstatchanged" /><code>{"protected override void OnStatChanged("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Updates the bar and then its notches.</span> |
| <Link id="m-setrenderersenabled" /><code>{"protected override void SetRenderersEnabled(bool isEnabled)"}</code> | <span className="api-desc">Shows or hides the bar and all notches.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-debugnotchvisibility" /><code>{"private void DebugNotchVisibility("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition, out float statMaximum)"}</code> | <span className="api-desc">Sets the editor preview maximum to 0. Leftover debug hook.</span> |
| <Link id="m-delaydestroy" /><code>{"private void DelayDestroy()"}</code> | <span className="api-desc">Destroys all notch objects.</span> |
| <Link id="m-delaysetup" /><code>{"private void DelaySetup()"}</code> | <span className="api-desc">Calls `SetupNotches` with no stat. Leftover editor helper.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-setupnotches" /><code>{"private void SetupNotches("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Colours notches by whether the stat reaches them (not on Android), and rebuilds and places them when the maximum changes.</span> |

</details>

## Used in

Members of other types that take, return or hold a `StatBar`:

<div className="api-used-in">

[`DiscreteStatBar.visibilityDecidor`](/mod/game-api/types/alta-stats-effects/discretestatbar#m-visibilitydecidor).

</div>
