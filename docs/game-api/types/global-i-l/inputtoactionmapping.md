---
title: "InputToActionMapping"
description: "One binding from a VR input or keyboard key (with an optional second input) to a controller action, for one or both hands."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputToActionMapping

A **class** in `Root.Township`, no namespace.

One binding from a VR input or keyboard key (with an optional second input) to a controller action, for one or both hands.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested types** [`HandType`](/game-api/types/global-i-l/inputtoactionmapping-handtype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InputToActionMapping()"}</code> | Creates an `InputToActionMapping` with default values. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code>{"private "}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" action"}</code> | Backing field for `Action`. |
| <Link id="m-dpaddirection" /><code>{"private int dpadDirection"}</code> | Dpad direction for locomotion and swipe inputs, -1 when unused. |
| <Link id="m-hand" /><code>{"private "}<Link to="/game-api/types/global-i-l/inputtoactionmapping-handtype">{"InputToActionMapping.HandType"}</Link>{" hand"}</code> | Backing field for `Hand`. |
| <Link id="m-identifier" /><code>{"private int identifier"}</code> | Backing field for `Identifier`. |
| <Link id="m-isusingsecondaryinput" /><code>{"private bool isUsingSecondaryInput"}</code> | Hidden inspector flag for whether a second input is used. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-primaryinput" /><code>{"private "}<Link to="/game-api/types/global-e-h/generalinputtype">{"GeneralInputType"}</Link>{" primaryInput"}</code> | Main VR input. |
| <Link id="m-primaryinputkeyboard" /><code>{"private KeyCode primaryInputKeyboard"}</code> | Main keyboard key, used before `primaryInput` on desktop modes. |
| <Link id="m-secondaryinput" /><code>{"private "}<Link to="/game-api/types/global-e-h/generalinputtype">{"GeneralInputType"}</Link>{" secondaryInput"}</code> | Second VR input. |
| <Link id="m-secondaryinputkeyboard" /><code>{"private KeyCode secondaryInputKeyboard"}</code> | Second keyboard key. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-action-2" /><code><Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" Action { get; }"}</code> | The controller action this input triggers. |
| <Link id="m-hand-2" /><code><Link to="/game-api/types/global-i-l/inputtoactionmapping-handtype">{"InputToActionMapping.HandType"}</Link>{" Hand { get; }"}</code> | Which hand the binding applies to. |
| <Link id="m-identifier-2" /><code>{"int Identifier { get; }"}</code> | Random id given on creation. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | True when the action, inputs, keys, hand and dpad direction all match. |
| <Link id="m-getbuttonsforplatform" /><code>{"object[] GetButtonsForPlatform("}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" platform)"}</code> | Returns the primary and secondary input for the given player mode, or null if the primary is none. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash of all binding fields, including the random identifier. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The action name and its key or input names. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setupxrinput" /><code>{"private void SetupXRInput(object[] buttons)"}</code> | Fills the button pair for XR modes; locomotion and swipe inputs use the dpad direction as the second value. |

</details>

## Used in

Members of other types that take, return or hold a `InputToActionMapping`:

[`PlatformActionMapping.AddMapping`](/game-api/types/global-p/platformactionmapping#m-addmapping), [`PlatformActionMapping.AllInputToActionMappings`](/game-api/types/global-p/platformactionmapping#m-allinputtoactionmappings), [`PlatformActionMapping.inputToActionMappings`](/game-api/types/global-p/platformactionmapping#m-inputtoactionmappings).
