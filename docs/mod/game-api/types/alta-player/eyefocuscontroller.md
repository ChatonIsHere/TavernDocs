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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EyeFocusController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currenttarget" /><code>{"private Transform currentTarget"}</code> | <span className="api-desc">Backing field for `CurrentTarget`.</span> |
| <Link id="m-focushandle" /><code>{"private Transform focusHandle"}</code> | <span className="api-desc">Backing field for `FocusHandle`.</span> |
| <Link id="m-found" /><code>{"private int found"}</code> | <span className="api-desc">How many colliders the last overlap check found.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-managertransform" /><code>{"private Transform managerTransform"}</code> | <span className="api-desc">Backing field for `ManagerTransform`.</span> |
| <Link id="m-overlap" /><code>{"private Collider[] overlap"}</code> | <span className="api-desc">Reused buffer for the overlap check, sized from `settings.MaximumOverlap`.</span> |
| <Link id="m-overridetarget" /><code>{"private Transform overrideTarget"}</code> | <span className="api-desc">Backing field for `OverrideTarget`.</span> |
| <Link id="m-positions" /><code>{"private Vector3[] positions"}</code> | <span className="api-desc">Positions of the found colliders at scan time, used to work out how fast each moves.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/eyefocuscontrollersettings">{"EyeFocusControllerSettings"}</Link>{" settings"}</code> | <span className="api-desc">The `EyeFocusControllerSettings` asset with detection range, angle limits and scoring curves.</span> |
| <Link id="m-timeuntilupdate" /><code>{"private float timeUntilUpdate"}</code> | <span className="api-desc">Time left before the current target is reconsidered.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currenttarget-2" /><code>{"Transform CurrentTarget { get; set; }"}</code> | <span className="api-desc">What the eyes look at now. Setting it is ignored while `OverrideTarget` is set.</span> |
| <Link id="m-focushandle-2" /><code>{"Transform FocusHandle { get; set; }"}</code> | <span className="api-desc">Transform moved to the target's position each update. The eye rig probably looks at it.</span> |
| <Link id="m-managertransform-2" /><code>{"Transform ManagerTransform { get; set; }"}</code> | <span className="api-desc">Transform whose space angles and distances are measured in. The editor setup defaults it to this component's transform.</span> |
| <Link id="m-overridetarget-2" /><code>{"Transform OverrideTarget { get; set; }"}</code> | <span className="api-desc">Forces a target, which also becomes `CurrentTarget`. Set to null to go back to automatic picking.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> | <span className="api-desc">Moves the focus handle to the current target's position.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Turns the component off on a headless server.</span> |
| <Link id="m-checkfocus" /><code>{"private IEnumerator CheckFocus() (iterator)"}</code> | <span className="api-desc">Coroutine that keeps the current target while it stays in view and its timer runs, otherwise rescans and picks the lowest-scoring collider.</span> |
| <Link id="m-editorsetup" /><code>{"private bool EditorSetup()"}</code> | <span className="api-desc">Editor fix-up: fills in `managerTransform`, enables or disables the component to match `settings`, and sizes the overlap arrays.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops the `CheckFocus` coroutine.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the detection sphere, the view angle limits and lines to the found colliders, with the current target in red.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Starts the `CheckFocus` coroutine.</span> |

</details>

## Used in

Members of other types that take, return or hold a `EyeFocusController`:

<div className="api-used-in">

[`FlyCamPlayer.eyeFocusController`](/mod/game-api/types/global-e-h/flycamplayer#m-eyefocuscontroller).

</div>
