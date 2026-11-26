---
title: "InputToActionMapping"
description: "One binding from a VR input or keyboard key (with an optional second input) to a controller action, for one or both hands."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputToActionMapping

A **class** in `Root.Township`, the global namespace.

One binding from a VR input or keyboard key (with an optional second input) to a controller action, for one or both hands.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested types** [`HandType`](/mod/game-api/types/global-i-l/inputtoactionmapping-handtype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InputToActionMapping()"}</code> | <span className="api-desc">Creates an `InputToActionMapping` with default values.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" action"}</code> | <span className="api-desc">Backing field for `Action`.</span> |
| <Link id="m-dpaddirection" /><code>{"private int dpadDirection"}</code> | <span className="api-desc">Dpad direction for locomotion and swipe inputs, -1 when unused.</span> |
| <Link id="m-hand" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/inputtoactionmapping-handtype">{"InputToActionMapping.HandType"}</Link>{" hand"}</code> | <span className="api-desc">Backing field for `Hand`.</span> |
| <Link id="m-identifier" /><code>{"private int identifier"}</code> | <span className="api-desc">Backing field for `Identifier`.</span> |
| <Link id="m-isusingsecondaryinput" /><code>{"private bool isUsingSecondaryInput"}</code> | <span className="api-desc">Hidden inspector flag for whether a second input is used.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-primaryinput" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/generalinputtype">{"GeneralInputType"}</Link>{" primaryInput"}</code> | <span className="api-desc">Main VR input.</span> |
| <Link id="m-primaryinputkeyboard" /><code>{"private KeyCode primaryInputKeyboard"}</code> | <span className="api-desc">Main keyboard key, used before `primaryInput` on desktop modes.</span> |
| <Link id="m-secondaryinput" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/generalinputtype">{"GeneralInputType"}</Link>{" secondaryInput"}</code> | <span className="api-desc">Second VR input.</span> |
| <Link id="m-secondaryinputkeyboard" /><code>{"private KeyCode secondaryInputKeyboard"}</code> | <span className="api-desc">Second keyboard key.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-action-2" /><code><Link to="/mod/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" Action { get; }"}</code> | <span className="api-desc">The controller action this input triggers.</span> |
| <Link id="m-hand-2" /><code><Link to="/mod/game-api/types/global-i-l/inputtoactionmapping-handtype">{"InputToActionMapping.HandType"}</Link>{" Hand { get; }"}</code> | <span className="api-desc">Which hand the binding applies to.</span> |
| <Link id="m-identifier-2" /><code>{"int Identifier { get; }"}</code> | <span className="api-desc">Random id given on creation.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">True when the action, inputs, keys, hand and dpad direction all match.</span> |
| <Link id="m-getbuttonsforplatform" /><code>{"object[] GetButtonsForPlatform("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" platform)"}</code> | <span className="api-desc">Returns the primary and secondary input for the given player mode, or null if the primary is none.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash of all binding fields, including the random identifier.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">The action name and its key or input names.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setupxrinput" /><code>{"private void SetupXRInput(object[] buttons)"}</code> | <span className="api-desc">Fills the button pair for XR modes; locomotion and swipe inputs use the dpad direction as the second value.</span> |

</details>

## Used in

Members of other types that take, return or hold a `InputToActionMapping`:

<div className="api-used-in">

[`PlatformActionMapping.AddMapping`](/mod/game-api/types/global-p/platformactionmapping#m-addmapping), [`PlatformActionMapping.AllInputToActionMappings`](/mod/game-api/types/global-p/platformactionmapping#m-allinputtoactionmappings), [`PlatformActionMapping.inputToActionMappings`](/mod/game-api/types/global-p/platformactionmapping#m-inputtoactionmappings).

</div>
