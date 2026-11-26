---
title: "GhostHandController"
description: "Shows the translucent ghost hand at the controller position and fades it by how far the real hand is from it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GhostHandController

A **class** in `Root.Township`, `Alta.Character`.

Shows the translucent ghost hand at the controller position and fades it by how far the real hand is from it. Only active on the local player; skipped on headless servers.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GhostHandController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadeprogress" /><code>{"private static int _FadeProgress"}</code> | <span className="api-desc">Shader property ID for the fade amount.</span> |
| <Link id="m-controller" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller"}</code> | <span className="api-desc">Backing field for `Controller`.</span> |
| <Link id="m-desiredalpha" /><code>{"private float desiredAlpha"}</code> | <span className="api-desc">Last requested alpha, reapplied when focus returns.</span> |
| <Link id="m-ghosthandrenderers" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" ghostHandRenderers"}</code> | <span className="api-desc">Backing field for `GhostHandRenderers`.</span> |
| <Link id="m-hasfocus" /><code>{"private bool hasFocus"}</code> | <span className="api-desc">False while the Quest app lacks input focus.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controller-2" /><code><Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; }"}</code> | <span className="api-desc">The hand controller on the same object.</span> |
| <Link id="m-ghosthandrenderers-2" /><code><Link to="/mod/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" GhostHandRenderers { get; }"}</code> | <span className="api-desc">Renderers that make up the ghost hand.</span> |
| <Link id="m-isupdatingalpha" /><code>{"bool IsUpdatingAlpha { get; set; }"}</code> | <span className="api-desc">When true, the alpha follows the distance between the ghost and master hand each update.</span> |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/global-e-h/ghosthandsettings">{"GhostHandSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">Shortcut to `PlayerSettings.GhostHandSettings`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-questfocusforcedisabled" /><code>{"void QuestFocusForceDisabled()"}</code> | <span className="api-desc">Hides the ghost hand while the Quest app has lost input focus.</span> |
| <Link id="m-questfocusforcereenabled" /><code>{"void QuestFocusForceReenabled()"}</code> | <span className="api-desc">Restores the ghost hand and its last wanted alpha when Quest input focus returns.</span> |
| <Link id="m-refreshrenderergroup" /><code>{"void RefreshRendererGroup()"}</code> | <span className="api-desc">Re-collects the renderers under the ghost hand group.</span> |
| <Link id="m-setghosthandactive" /><code>{"void SetGhostHandActive(bool isActive)"}</code> | <span className="api-desc">Turns the component and the ghost hand object on or off. Called with the player's locality.</span> |
| <Link id="m-setghosthandalpha" /><code>{"void SetGhostHandAlpha(float alpha)"}</code> | <span className="api-desc">Sets the fade amount; renderers turn off below 0.01. On Android it waits until focus returns.</span> |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> | <span className="api-desc">Updates the alpha from distance to the master hand when `IsUpdatingAlpha` is on.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Off headless: reads whether to fade from settings and makes the renderers use material instances.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">On Quest without input focus, hides the ghost hand straight away.</span> |
| <Link id="m-updateghosthandrenderers" /><code>{"private void UpdateGhostHandRenderers(float alpha)"}</code> | <span className="api-desc">Enables the renderers and writes the `_FadeProgress` shader value.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GhostHandController`:

<div className="api-used-in">

[`Hand.ghostHandController`](/mod/game-api/types/alta-player/hand#m-ghosthandcontroller), [`Hand.GhostHandController`](/mod/game-api/types/alta-player/hand#m-ghosthandcontroller-2).

</div>
