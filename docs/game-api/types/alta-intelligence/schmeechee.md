---
title: "Schmeechee"
description: "The schmeechee mushroom critter: a physics creature that steers itself with forces, plants itself to sleep and can be picked up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Schmeechee

A **class** in `Root.Township`, `Alta.Intelligence`.

The schmeechee mushroom critter: a physics creature that steers itself with forces, plants itself to sleep and can be picked up. Server runs the AI; settings come from a `MushroomCritter` component.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<Schmeechee>`](/game-api/types/alta-intelligence/agent-tthis)
- **Derived types** [`ActiveSchmeecheeFlee`](/game-api/types/alta-intelligence/activeschmeecheeflee), [`ActiveSchmeecheeFlip`](/game-api/types/alta-intelligence/activeschmeecheeflip), [`ActiveSchmeecheePlant`](/game-api/types/alta-intelligence/activeschmeecheeplant), [`ActiveSchmeecheePlay`](/game-api/types/alta-intelligence/activeschmeecheeplay), [`Schmeechee`](/game-api/types/alta-intelligence/schmeechee)
- **Nested types** [`Operation`](/game-api/types/alta-intelligence/schmeechee-operation), [`OperationType`](/game-api/types/alta-intelligence/schmeechee-operationtype)
- **Documented in** [Other creatures](/game-api/creatures/other-creatures#schmeechee), [Creature data](/game-api/creatures/creature-data), [Creatures and AI](/game-api/creatures/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Schmeechee()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-embed" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" embed"}</code> |
| <Link id="m-groundedbool" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" groundedBool"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-passiveactions" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" passiveActions"}</code> |
| <Link id="m-passiveactionsetmap" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/schmeechee">{"Schmeechee"}</Link>{">> passiveActionSetMap"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |
| <Link id="m-poptrigger" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedtrigger">{"AnimatedTrigger"}</Link>{" popTrigger"}</code> |
| <Link id="m-runspeed" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{" runSpeed"}</code> |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/global-m-o/mushroomcritter">{"MushroomCritter"}</Link>{" settings"}</code> |
| <Link id="m-sleepingbool" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" sleepingBool"}</code> |
| <Link id="m-turnforce" /><code>{"private float turnForce"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-groundedbool-2" /><code><Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" GroundedBool { get; }"}</code> | Synced animator bool "Is Grounded". |
| <Link id="m-isgrounded" /><code>{"bool IsGrounded { get; private set; }"}</code> | Whether a short ray down from the critter hits the floor. Updated each physics step while free. |
| <Link id="m-isupsidedown" /><code>{"bool IsUpsideDown { get; private set; }"}</code> | Whether it is not grounded, facing down and its head touches the floor. |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The critter's `Pickup`. Picking it up stops its AI until dropped. |
| <Link id="m-poptrigger-2" /><code><Link to="/game-api/types/alta-networking/animatedtrigger">{"AnimatedTrigger"}</Link>{" PopTrigger { get; }"}</code> | Synced animator trigger "Pop". |
| <Link id="m-runspeed-2" /><code><Link to="/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{" RunSpeed { get; }"}</code> | Synced animator float "Run Speed". |
| <Link id="m-settings-2" /><code><Link to="/game-api/types/global-m-o/mushroomcritter">{"MushroomCritter"}</Link>{" Settings { get; }"}</code> | The `MushroomCritter` movement settings. |
| <Link id="m-sleepingbool-2" /><code><Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" SleepingBool { get; }"}</code> | Synced animator bool "Is Sleeping". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clientembed" /><code>{"IEnumerator ClientEmbed() (iterator)"}</code> | Client: animates the sink-into-ground offset. In this build it evaluates the curve at time 0 only. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the synced embed message. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: grabs the animator values, hooks pickup and drop, and makes the rigidbody dynamic. |
| <Link id="m-randomsteer" /><code>{"void RandomSteer(float strength = 1)"}</code> | Adds a random amount to the stored turn force, scaled by strength. |
| <Link id="m-sendembedtoclient" /><code>{"void SendEmbedToClient()"}</code> | Server: tells clients to play the planting animation. |
| <Link id="m-stayupright" /><code>{"void StayUpright()"}</code> | Adds torque to turn the critter upright. Called when it is not acting. |
| <Link id="m-steer" /><code>{"void Steer(Vector3 target, float multiplier)"}</code> | Builds turn force towards a target, or away from it with a negative multiplier. |
| <Link id="m-turn" /><code>{"void Turn()"}</code> | Applies the stored turn force as torque, clamped to the settings' max. |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> | Uses the passive action set (cached per set) for the action decider. |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> | Resets the shared cache of passive action sets. |

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkgrounded" /><code>{"private bool CheckGrounded()"}</code> |
| <Link id="m-checkupsidedown" /><code>{"private bool CheckUpsideDown()"}</code> |
| <Link id="m-critterupdate" /><code>{"private void CritterUpdate()"}</code> |
| <Link id="m-dropped" /><code>{"private void Dropped("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |
| <Link id="m-embed-2" /><code>{"private void Embed("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |
| <Link id="m-pickedup" /><code>{"private void PickedUp("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |

</details>
