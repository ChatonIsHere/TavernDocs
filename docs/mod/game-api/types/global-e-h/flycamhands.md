---
title: "FlyCamHands"
description: "Controller extension on the fly cam's hands: sparks or explosions, invisibility toggle and mic mute shortcuts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlyCamHands

A **class** in `Root.Township`, the global namespace.

Controller extension on the fly cam's hands: sparks or explosions, invisibility toggle and mic mute shortcuts. Actions are synced so other players see them.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`ControllerExtension`](/mod/game-api/types/global-c-d/controllerextension)
- **Nested types** [`Controls`](/mod/game-api/types/global-e-h/flycamhands-controls)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlyCamHands()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damagedefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" damageDefinition"}</code> | <span className="api-desc">Pooled object spawned for the explosion hit; its `FixedImpactor` is charged.</span> |
| <Link id="m-flycam" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/flycamplayer">{"FlyCamPlayer"}</Link>{" flyCam"}</code> | <span className="api-desc">The owning `FlyCamPlayer`.</span> |
| <Link id="m-flycaminput" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/flycaminput">{"FlyCamInput"}</Link>{" flyCamInput"}</code> | <span className="api-desc">Fly cam input actions, read for the explosion modifier.</span> |
| <Link id="m-modmuteaction" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/modsmicmutequickaccessaction">{"MODSMicMuteQuickAccessAction"}</Link>{" modMuteAction"}</code> | <span className="api-desc">Quick access action used for the mod mic mute.</span> |
| <Link id="m-sparkdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" sparkDefinition"}</code> | <span className="api-desc">Pooled `FlintSpark` spawned by the spark action.</span> |
| <Link id="m-syncinput" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-e-h/flycamhands-controls">{"FlyCamHands.Controls"}</Link>{"> syncInput"}</code> | <span className="api-desc">Method sync for the spark, invisibility and hit actions.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializecontrollerextension" /><code>{"override void InitializeControllerExtension()"}</code> | <span className="api-desc">Sets up the input sync message (`SyncE`).</span> |
| <Link id="m-onconnectedtoplayer" /><code>{"override void OnConnectedToPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current visibility to a joining player.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Hooks the debug spark, debug invisibility, mute and mod mute actions and enables the fly cam input map.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-invisibilitypressed" /><code>{"private void InvisibilityPressed("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Toggles whether the fly cam's name shows (its visibility), shows a message and syncs it.</span> |
| <Link id="m-istriggeringexplosioninsteadofsparks" /><code>{"private bool IsTriggeringExplosionInsteadOfSparks()"}</code> | <span className="api-desc">True when grab is held or the explosion modifier input is pressed.</span> |
| <Link id="m-modmutemic" /><code>{"private void ModMuteMic("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | <span className="api-desc">Runs the mod mic mute quick action from the left controller.</span> |
| <Link id="m-muteownmic" /><code>{"private void MuteOwnMic("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | <span className="api-desc">Toggles the local Vivox mic mute and shows the new state.</span> |
| <Link id="m-receivecontrols" /><code>{"private void ReceiveControls("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-e-h/flycamhands-controls">{"FlyCamHands.Controls"}</Link>{" input)"}</code> | <span className="api-desc">Sync handler: on read replays a spark, visibility change or hit, and the server relays it. Rejects messages from other players.</span> |
| <Link id="m-spark" /><code>{"private void Spark()"}</code> | <span className="api-desc">On the owner or server, spawns a forced flint spark; the server also simulates sparks so fires can light.</span> |
| <Link id="m-sparkpressed" /><code>{"private void SparkPressed("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Spawns a damaging `FixedImpactor` in front if the explosion modifier is held, else sparks, then syncs which.</span> |

</details>
