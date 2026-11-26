---
title: "FlyCamHands"
description: "class FlyCamHands in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlyCamHands

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`ControllerExtension`](/game-api/types/global-c-d/controllerextension)
- **Nested types** [`Controls`](/game-api/types/global-e-h/flycamhands-controls)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FlyCamHands()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-damagedefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" damageDefinition"}</code> |
| <Link id="m-flycam" /><code>{"private "}<Link to="/game-api/types/global-e-h/flycamplayer">{"FlyCamPlayer"}</Link>{" flyCam"}</code> |
| <Link id="m-flycaminput" /><code>{"private "}<Link to="/game-api/types/global-e-h/flycaminput">{"FlyCamInput"}</Link>{" flyCamInput"}</code> |
| <Link id="m-modmuteaction" /><code>{"private "}<Link to="/game-api/types/alta-player/modsmicmutequickaccessaction">{"MODSMicMuteQuickAccessAction"}</Link>{" modMuteAction"}</code> |
| <Link id="m-sparkdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" sparkDefinition"}</code> |
| <Link id="m-syncinput" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-e-h/flycamhands-controls">{"FlyCamHands.Controls"}</Link>{"> syncInput"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initializecontrollerextension" /><code>{"override void InitializeControllerExtension()"}</code> |
| <Link id="m-onconnectedtoplayer" /><code>{"override void OnConnectedToPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-invisibilitypressed" /><code>{"private void InvisibilityPressed("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |
| <Link id="m-istriggeringexplosioninsteadofsparks" /><code>{"private bool IsTriggeringExplosionInsteadOfSparks()"}</code> |
| <Link id="m-modmutemic" /><code>{"private void ModMuteMic("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> |
| <Link id="m-muteownmic" /><code>{"private void MuteOwnMic("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> |
| <Link id="m-receivecontrols" /><code>{"private void ReceiveControls("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-e-h/flycamhands-controls">{"FlyCamHands.Controls"}</Link>{" input)"}</code> |
| <Link id="m-spark" /><code>{"private void Spark()"}</code> |
| <Link id="m-sparkpressed" /><code>{"private void SparkPressed("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |

</details>
