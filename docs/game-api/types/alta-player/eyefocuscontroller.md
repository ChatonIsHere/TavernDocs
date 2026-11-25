---
title: "EyeFocusController"
description: "class EyeFocusController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EyeFocusController

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EyeFocusController()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-currenttarget" /><code>{"private Transform currentTarget"}</code> |
| <Link id="m-focushandle" /><code>{"private Transform focusHandle"}</code> |
| <Link id="m-found" /><code>{"private int found"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-managertransform" /><code>{"private Transform managerTransform"}</code> |
| <Link id="m-overlap" /><code>{"private Collider[] overlap"}</code> |
| <Link id="m-overridetarget" /><code>{"private Transform overrideTarget"}</code> |
| <Link id="m-positions" /><code>{"private Vector3[] positions"}</code> |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/eyefocuscontrollersettings">{"EyeFocusControllerSettings"}</Link>{" settings"}</code> |
| <Link id="m-timeuntilupdate" /><code>{"private float timeUntilUpdate"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-currenttarget-2" /><code>{"Transform CurrentTarget { get; set; }"}</code> |
| <Link id="m-focushandle-2" /><code>{"Transform FocusHandle { get; set; }"}</code> |
| <Link id="m-managertransform-2" /><code>{"Transform ManagerTransform { get; set; }"}</code> |
| <Link id="m-overridetarget-2" /><code>{"Transform OverrideTarget { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-checkfocus" /><code>{"private IEnumerator CheckFocus() (iterator)"}</code> |
| <Link id="m-editorsetup" /><code>{"private bool EditorSetup()"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `EyeFocusController`:

[`FlyCamPlayer.eyeFocusController`](/game-api/types/global-e-h/flycamplayer#m-eyefocuscontroller).
