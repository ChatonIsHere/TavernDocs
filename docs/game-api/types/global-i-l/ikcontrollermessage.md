---
title: "IKControllerMessage"
description: "Network message that tells remote players' copies whether a player's IK body control is on or off (for out of body states)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IKControllerMessage

A **class** in `Root.Township`, no namespace.

Network message that tells remote players' copies whether a player's IK body control is on or off (for out of body states).

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"IKControllerMessage()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iscontrolactive" /><code>{"private bool isControlActive"}</code> | Backing field for `IsControlActive`. |
| <Link id="m-isdisablingikcompletely" /><code>{"private bool isDisablingIKCompletely"}</code> | Backing field for `IsDisablingIKCompletely`. |
| <Link id="m-ismovingextensions" /><code>{"private bool isMovingExtensions"}</code> | Backing field for `IsMovingExtensions`. |
| <Link id="m-isshowingghosthands" /><code>{"private bool isShowingGhostHands"}</code> | Backing field for `IsShowingGhostHands`. |
| <Link id="m-outofbodymessage" /><code>{"private string outOfBodyMessage"}</code> | Backing field for `OutOfBodyMessage`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscontrolactive-2" /><code>{"bool IsControlActive { get; }"}</code> | True when IK control is on. |
| <Link id="m-isdisablingikcompletely-2" /><code>{"bool IsDisablingIKCompletely { get; }"}</code> | True when IK is turned off fully rather than just control. |
| <Link id="m-ismovingextensions-2" /><code>{"bool IsMovingExtensions { get; }"}</code> | Whether the hand extensions keep moving. |
| <Link id="m-isshowingghosthands-2" /><code>{"bool IsShowingGhostHands { get; }"}</code> | Whether ghost hands are shown while control is off. |
| <Link id="m-outofbodymessage-2" /><code>{"string OutOfBodyMessage { get; }"}</code> | Text shown while control is off. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable(string outOfBodyMessage, bool isDisablingIKCompletely = false, bool isMovingExtensions = true, bool isShowingGhostHands = true)"}</code> | Fills the message for turning IK control off, with an out of body message and display options. |
| <Link id="m-enable" /><code>{"void Enable(bool isMovingExtensions = true)"}</code> | Fills the message for turning IK control on. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the message; the off state fields are only sent when control is off. |
