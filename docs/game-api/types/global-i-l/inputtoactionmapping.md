---
title: "InputToActionMapping"
description: "class InputToActionMapping in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputToActionMapping

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested types** [`HandType`](/game-api/types/global-i-l/inputtoactionmapping-handtype)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InputToActionMapping()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-action" /><code>{"private "}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" action"}</code> |
| <Link id="m-dpaddirection" /><code>{"private int dpadDirection"}</code> |
| <Link id="m-hand" /><code>{"private "}<Link to="/game-api/types/global-i-l/inputtoactionmapping-handtype">{"InputToActionMapping.HandType"}</Link>{" hand"}</code> |
| <Link id="m-identifier" /><code>{"private int identifier"}</code> |
| <Link id="m-isusingsecondaryinput" /><code>{"private bool isUsingSecondaryInput"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-primaryinput" /><code>{"private "}<Link to="/game-api/types/global-e-h/generalinputtype">{"GeneralInputType"}</Link>{" primaryInput"}</code> |
| <Link id="m-primaryinputkeyboard" /><code>{"private KeyCode primaryInputKeyboard"}</code> |
| <Link id="m-secondaryinput" /><code>{"private "}<Link to="/game-api/types/global-e-h/generalinputtype">{"GeneralInputType"}</Link>{" secondaryInput"}</code> |
| <Link id="m-secondaryinputkeyboard" /><code>{"private KeyCode secondaryInputKeyboard"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-action-2" /><code><Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" Action { get; }"}</code> |
| <Link id="m-hand-2" /><code><Link to="/game-api/types/global-i-l/inputtoactionmapping-handtype">{"InputToActionMapping.HandType"}</Link>{" Hand { get; }"}</code> |
| <Link id="m-identifier-2" /><code>{"int Identifier { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> |
| <Link id="m-getbuttonsforplatform" /><code>{"object[] GetButtonsForPlatform("}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" platform)"}</code> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-setupxrinput" /><code>{"private void SetupXRInput(object[] buttons)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `InputToActionMapping`:

[`PlatformActionMapping.AddMapping`](/game-api/types/global-p/platformactionmapping#m-addmapping), [`PlatformActionMapping.AllInputToActionMappings`](/game-api/types/global-p/platformactionmapping#m-allinputtoactionmappings), [`PlatformActionMapping.inputToActionMappings`](/game-api/types/global-p/platformactionmapping#m-inputtoactionmappings).
