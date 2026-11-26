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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GhostHandController()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadeprogress" /><code>{"private static int _FadeProgress"}</code> | Shader property ID for the fade amount. |
| <Link id="m-controller" /><code>{"private "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller"}</code> | Backing field for `Controller`. |
| <Link id="m-desiredalpha" /><code>{"private float desiredAlpha"}</code> | Last requested alpha, reapplied when focus returns. |
| <Link id="m-ghosthandrenderers" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" ghostHandRenderers"}</code> | Backing field for `GhostHandRenderers`. |
| <Link id="m-hasfocus" /><code>{"private bool hasFocus"}</code> | False while the Quest app lacks input focus. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controller-2" /><code><Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; }"}</code> | The hand controller on the same object. |
| <Link id="m-ghosthandrenderers-2" /><code><Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" GhostHandRenderers { get; }"}</code> | Renderers that make up the ghost hand. |
| <Link id="m-isupdatingalpha" /><code>{"bool IsUpdatingAlpha { get; set; }"}</code> | When true, the alpha follows the distance between the ghost and master hand each update. |
| <Link id="m-settings" /><code><Link to="/game-api/types/global-e-h/ghosthandsettings">{"GhostHandSettings"}</Link>{" Settings { get; }"}</code> | Shortcut to `PlayerSettings.GhostHandSettings`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-questfocusforcedisabled" /><code>{"void QuestFocusForceDisabled()"}</code> | Hides the ghost hand while the Quest app has lost input focus. |
| <Link id="m-questfocusforcereenabled" /><code>{"void QuestFocusForceReenabled()"}</code> | Restores the ghost hand and its last wanted alpha when Quest input focus returns. |
| <Link id="m-refreshrenderergroup" /><code>{"void RefreshRendererGroup()"}</code> | Re-collects the renderers under the ghost hand group. |
| <Link id="m-setghosthandactive" /><code>{"void SetGhostHandActive(bool isActive)"}</code> | Turns the component and the ghost hand object on or off. Called with the player's locality. |
| <Link id="m-setghosthandalpha" /><code>{"void SetGhostHandAlpha(float alpha)"}</code> | Sets the fade amount; renderers turn off below 0.01. On Android it waits until focus returns. |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> | Updates the alpha from distance to the master hand when `IsUpdatingAlpha` is on. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Off headless: reads whether to fade from settings and makes the renderers use material instances. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | On Quest without input focus, hides the ghost hand straight away. |
| <Link id="m-updateghosthandrenderers" /><code>{"private void UpdateGhostHandRenderers(float alpha)"}</code> | Enables the renderers and writes the `_FadeProgress` shader value. |

</details>

## Used in

Members of other types that take, return or hold a `GhostHandController`:

[`Hand.ghostHandController`](/game-api/types/alta-player/hand#m-ghosthandcontroller), [`Hand.GhostHandController`](/game-api/types/alta-player/hand#m-ghosthandcontroller-2).
