---
title: "EyeFocusController"
description: "Client: picks something for a character's eyes to look at."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EyeFocusController

A **class** in `Root.Township`, `Alta.Character`.

Client: picks something for a character's eyes to look at. Every so often it scores nearby colliders by angle, distance, speed and layer, and moves a focus handle to the best one. Turned off on headless servers.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EyeFocusController()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currenttarget" /><code>{"private Transform currentTarget"}</code> | Backing field for `CurrentTarget`. |
| <Link id="m-focushandle" /><code>{"private Transform focusHandle"}</code> | Backing field for `FocusHandle`. |
| <Link id="m-found" /><code>{"private int found"}</code> | How many colliders the last overlap check found. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-managertransform" /><code>{"private Transform managerTransform"}</code> | Backing field for `ManagerTransform`. |
| <Link id="m-overlap" /><code>{"private Collider[] overlap"}</code> | Reused buffer for the overlap check, sized from `settings.MaximumOverlap`. |
| <Link id="m-overridetarget" /><code>{"private Transform overrideTarget"}</code> | Backing field for `OverrideTarget`. |
| <Link id="m-positions" /><code>{"private Vector3[] positions"}</code> | Positions of the found colliders at scan time, used to work out how fast each moves. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/eyefocuscontrollersettings">{"EyeFocusControllerSettings"}</Link>{" settings"}</code> | The `EyeFocusControllerSettings` asset with detection range, angle limits and scoring curves. |
| <Link id="m-timeuntilupdate" /><code>{"private float timeUntilUpdate"}</code> | Time left before the current target is reconsidered. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currenttarget-2" /><code>{"Transform CurrentTarget { get; set; }"}</code> | What the eyes look at now. Setting it is ignored while `OverrideTarget` is set. |
| <Link id="m-focushandle-2" /><code>{"Transform FocusHandle { get; set; }"}</code> | Transform moved to the target's position each update. The eye rig probably looks at it. |
| <Link id="m-managertransform-2" /><code>{"Transform ManagerTransform { get; set; }"}</code> | Transform whose space angles and distances are measured in. The editor setup defaults it to this component's transform. |
| <Link id="m-overridetarget-2" /><code>{"Transform OverrideTarget { get; set; }"}</code> | Forces a target, which also becomes `CurrentTarget`. Set to null to go back to automatic picking. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> | Moves the focus handle to the current target's position. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Turns the component off on a headless server. |
| <Link id="m-checkfocus" /><code>{"private IEnumerator CheckFocus() (iterator)"}</code> | Coroutine that keeps the current target while it stays in view and its timer runs, otherwise rescans and picks the lowest-scoring collider. |
| <Link id="m-editorsetup" /><code>{"private bool EditorSetup()"}</code> | Editor fix-up: fills in `managerTransform`, enables or disables the component to match `settings`, and sizes the overlap arrays. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops the `CheckFocus` coroutine. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the detection sphere, the view angle limits and lines to the found colliders, with the current target in red. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Starts the `CheckFocus` coroutine. |

</details>

## Used in

Members of other types that take, return or hold a `EyeFocusController`:

[`FlyCamPlayer.eyeFocusController`](/game-api/types/global-e-h/flycamplayer#m-eyefocuscontroller).
