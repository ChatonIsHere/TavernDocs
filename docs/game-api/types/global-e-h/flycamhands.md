---
title: "FlyCamHands"
description: "Controller extension on the fly cam's hands: sparks or explosions, invisibility toggle and mic mute shortcuts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlyCamHands

A **class** in `Root.Township`, no namespace.

Controller extension on the fly cam's hands: sparks or explosions, invisibility toggle and mic mute shortcuts. Actions are synced so other players see them.

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

| Member | What it is |
| --- | --- |
| <Link id="m-damagedefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" damageDefinition"}</code> | Pooled object spawned for the explosion hit; its `FixedImpactor` is charged. |
| <Link id="m-flycam" /><code>{"private "}<Link to="/game-api/types/global-e-h/flycamplayer">{"FlyCamPlayer"}</Link>{" flyCam"}</code> | The owning `FlyCamPlayer`. |
| <Link id="m-flycaminput" /><code>{"private "}<Link to="/game-api/types/global-e-h/flycaminput">{"FlyCamInput"}</Link>{" flyCamInput"}</code> | Fly cam input actions, read for the explosion modifier. |
| <Link id="m-modmuteaction" /><code>{"private "}<Link to="/game-api/types/alta-player/modsmicmutequickaccessaction">{"MODSMicMuteQuickAccessAction"}</Link>{" modMuteAction"}</code> | Quick access action used for the mod mic mute. |
| <Link id="m-sparkdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" sparkDefinition"}</code> | Pooled `FlintSpark` spawned by the spark action. |
| <Link id="m-syncinput" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-e-h/flycamhands-controls">{"FlyCamHands.Controls"}</Link>{"> syncInput"}</code> | Method sync for the spark, invisibility and hit actions. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializecontrollerextension" /><code>{"override void InitializeControllerExtension()"}</code> | Sets up the input sync message (`SyncE`). |
| <Link id="m-onconnectedtoplayer" /><code>{"override void OnConnectedToPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current visibility to a joining player. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Hooks the debug spark, debug invisibility, mute and mod mute actions and enables the fly cam input map. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-invisibilitypressed" /><code>{"private void InvisibilityPressed("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Toggles whether the fly cam's name shows (its visibility), shows a message and syncs it. |
| <Link id="m-istriggeringexplosioninsteadofsparks" /><code>{"private bool IsTriggeringExplosionInsteadOfSparks()"}</code> | True when grab is held or the explosion modifier input is pressed. |
| <Link id="m-modmutemic" /><code>{"private void ModMuteMic("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | Runs the mod mic mute quick action from the left controller. |
| <Link id="m-muteownmic" /><code>{"private void MuteOwnMic("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | Toggles the local Vivox mic mute and shows the new state. |
| <Link id="m-receivecontrols" /><code>{"private void ReceiveControls("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-e-h/flycamhands-controls">{"FlyCamHands.Controls"}</Link>{" input)"}</code> | Sync handler: on read replays a spark, visibility change or hit, and the server relays it. Rejects messages from other players. |
| <Link id="m-spark" /><code>{"private void Spark()"}</code> | On the owner or server, spawns a forced flint spark; the server also simulates sparks so fires can light. |
| <Link id="m-sparkpressed" /><code>{"private void SparkPressed("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Spawns a damaging `FixedImpactor` in front if the explosion modifier is held, else sparks, then syncs which. |

</details>
