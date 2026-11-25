---
title: "GhostHandController"
description: "class GhostHandController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GhostHandController

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GhostHandController()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-fadeprogress" /><code>{"private static int _FadeProgress"}</code> |
| <Link id="m-controller" /><code>{"private "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller"}</code> |
| <Link id="m-desiredalpha" /><code>{"private float desiredAlpha"}</code> |
| <Link id="m-ghosthandrenderers" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" ghostHandRenderers"}</code> |
| <Link id="m-hasfocus" /><code>{"private bool hasFocus"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-controller-2" /><code><Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; }"}</code> |
| <Link id="m-ghosthandrenderers-2" /><code><Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" GhostHandRenderers { get; }"}</code> |
| <Link id="m-isupdatingalpha" /><code>{"bool IsUpdatingAlpha { get; set; }"}</code> |
| <Link id="m-settings" /><code><Link to="/game-api/types/global-e-h/ghosthandsettings">{"GhostHandSettings"}</Link>{" Settings { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-questfocusforcedisabled" /><code>{"void QuestFocusForceDisabled()"}</code> |
| <Link id="m-questfocusforcereenabled" /><code>{"void QuestFocusForceReenabled()"}</code> |
| <Link id="m-refreshrenderergroup" /><code>{"void RefreshRendererGroup()"}</code> |
| <Link id="m-setghosthandactive" /><code>{"void SetGhostHandActive(bool isActive)"}</code> |
| <Link id="m-setghosthandalpha" /><code>{"void SetGhostHandAlpha(float alpha)"}</code> |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-updateghosthandrenderers" /><code>{"private void UpdateGhostHandRenderers(float alpha)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `GhostHandController`:

[`Hand.ghostHandController`](/game-api/types/alta-player/hand#m-ghosthandcontroller), [`Hand.GhostHandController`](/game-api/types/alta-player/hand#m-ghosthandcontroller-2).
