---
title: "IKControllerMessage"
description: "Network message that tells remote players' copies whether a player's IK body control is on or off (for out of body states)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IKControllerMessage

A **class** in `Root.Township`, the global namespace.

Network message that tells remote players' copies whether a player's IK body control is on or off (for out of body states).

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IKControllerMessage()"}</code> | <span className="api-desc">Creates an `IKControllerMessage` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iscontrolactive" /><code>{"private bool isControlActive"}</code> | <span className="api-desc">Backing field for `IsControlActive`.</span> |
| <Link id="m-isdisablingikcompletely" /><code>{"private bool isDisablingIKCompletely"}</code> | <span className="api-desc">Backing field for `IsDisablingIKCompletely`.</span> |
| <Link id="m-ismovingextensions" /><code>{"private bool isMovingExtensions"}</code> | <span className="api-desc">Backing field for `IsMovingExtensions`.</span> |
| <Link id="m-isshowingghosthands" /><code>{"private bool isShowingGhostHands"}</code> | <span className="api-desc">Backing field for `IsShowingGhostHands`.</span> |
| <Link id="m-outofbodymessage" /><code>{"private string outOfBodyMessage"}</code> | <span className="api-desc">Backing field for `OutOfBodyMessage`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscontrolactive-2" /><code>{"bool IsControlActive { get; }"}</code> | <span className="api-desc">True when IK control is on.</span> |
| <Link id="m-isdisablingikcompletely-2" /><code>{"bool IsDisablingIKCompletely { get; }"}</code> | <span className="api-desc">True when IK is turned off fully rather than just control.</span> |
| <Link id="m-ismovingextensions-2" /><code>{"bool IsMovingExtensions { get; }"}</code> | <span className="api-desc">Whether the hand extensions keep moving.</span> |
| <Link id="m-isshowingghosthands-2" /><code>{"bool IsShowingGhostHands { get; }"}</code> | <span className="api-desc">Whether ghost hands are shown while control is off.</span> |
| <Link id="m-outofbodymessage-2" /><code>{"string OutOfBodyMessage { get; }"}</code> | <span className="api-desc">Text shown while control is off.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable(string outOfBodyMessage, bool isDisablingIKCompletely = false, bool isMovingExtensions = true, bool isShowingGhostHands = true)"}</code> | <span className="api-desc">Fills the message for turning IK control off, with an out of body message and display options.</span> |
| <Link id="m-enable" /><code>{"void Enable(bool isMovingExtensions = true)"}</code> | <span className="api-desc">Fills the message for turning IK control on.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the message; the off state fields are only sent when control is off.</span> |
