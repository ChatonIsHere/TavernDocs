---
title: "Schmeechee"
description: "A mushroom critter that runs about, plants itself in the ground and can be picked up. It's a rigidbody that steers itself with forces, not a walker."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Schmeechee

A **class** in `Root.Township`, `Alta.Intelligence`.

A mushroom critter that runs about, plants itself in the ground and can be picked up. It's a rigidbody that steers itself with forces, not a walker.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<Schmeechee>`](/game-api/types/alta-intelligence/agent-tthis)
- **Derived types** [`ActiveSchmeecheeFlee`](/game-api/types/alta-intelligence/activeschmeecheeflee), [`ActiveSchmeecheeFlip`](/game-api/types/alta-intelligence/activeschmeecheeflip), [`ActiveSchmeecheePlant`](/game-api/types/alta-intelligence/activeschmeecheeplant), [`ActiveSchmeecheePlay`](/game-api/types/alta-intelligence/activeschmeecheeplay), [`Schmeechee`](/game-api/types/alta-intelligence/schmeechee)
- **Nested types** [`Operation`](/game-api/types/alta-intelligence/schmeechee-operation), [`OperationType`](/game-api/types/alta-intelligence/schmeechee-operationtype)
- **Documented in** [Other creatures](/game-api/creatures/other-creatures#schmeechee), [Creature data](/game-api/creatures/creature-data), [Creatures and AI](/game-api/creatures/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Schmeechee()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-embed" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" embed"}</code> |  |
| <Link id="m-groundedbool" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" groundedBool"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-passiveactions" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" passiveActions"}</code> |  |
| <Link id="m-passiveactionsetmap" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/schmeechee">{"Schmeechee"}</Link>{">> passiveActionSetMap"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-poptrigger" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedtrigger">{"AnimatedTrigger"}</Link>{" popTrigger"}</code> |  |
| <Link id="m-runspeed" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{" runSpeed"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/global-m-o/mushroomcritter">{"MushroomCritter"}</Link>{" settings"}</code> |  |
| <Link id="m-sleepingbool" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" sleepingBool"}</code> |  |
| <Link id="m-turnforce" /><code>{"private float turnForce"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-groundedbool-2" /><code><Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" GroundedBool { get; }"}</code> |  |
| <Link id="m-isgrounded" /><code>{"bool IsGrounded { get; private set; }"}</code> |  |
| <Link id="m-isupsidedown" /><code>{"bool IsUpsideDown { get; private set; }"}</code> |  |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> |  |
| <Link id="m-poptrigger-2" /><code><Link to="/game-api/types/alta-networking/animatedtrigger">{"AnimatedTrigger"}</Link>{" PopTrigger { get; }"}</code> |  |
| <Link id="m-runspeed-2" /><code><Link to="/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{" RunSpeed { get; }"}</code> |  |
| <Link id="m-settings-2" /><code><Link to="/game-api/types/global-m-o/mushroomcritter">{"MushroomCritter"}</Link>{" Settings { get; }"}</code> |  |
| <Link id="m-sleepingbool-2" /><code><Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" SleepingBool { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clientembed" /><code>{"IEnumerator ClientEmbed() (iterator)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-randomsteer" /><code>{"void RandomSteer(float strength = 1)"}</code> |  |
| <Link id="m-sendembedtoclient" /><code>{"void SendEmbedToClient()"}</code> |  |
| <Link id="m-stayupright" /><code>{"void StayUpright()"}</code> |  |
| <Link id="m-steer" /><code>{"void Steer(Vector3 target, float multiplier)"}</code> |  |
| <Link id="m-turn" /><code>{"void Turn()"}</code> |  |
| <Link id="m-checkgrounded" /><code>{"private bool CheckGrounded()"}</code> |  |
| <Link id="m-checkupsidedown" /><code>{"private bool CheckUpsideDown()"}</code> |  |
| <Link id="m-critterupdate" /><code>{"private void CritterUpdate()"}</code> |  |
| <Link id="m-dropped" /><code>{"private void Dropped("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-embed-2" /><code>{"private void Embed("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |  |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> |  |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> |  |
| <Link id="m-pickedup" /><code>{"private void PickedUp("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
