---
title: "MiningEcho"
description: "Progression skill: a strong pickaxe hit sends out an echo pulse whose radius grows over time, shown to the player and passed to IListenToMiningEcho..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MiningEcho

A **class** in `Root.Township`, no namespace.

Progression skill: a strong pickaxe hit sends out an echo pulse whose radius grows over time, shown to the player and passed to `IListenToMiningEcho` listeners (probably to reveal ore).

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`MiningEcho.Create`](/game-api/types/global-m-o/miningecho-create)
- **Nested types** [`Create`](/game-api/types/global-m-o/miningecho-create), [`LevelDefinition`](/game-api/types/global-m-o/miningecho-leveldefinition), [`MiningEchoExecution`](/game-api/types/global-m-o/miningecho-miningechoexecution)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MiningEcho()"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-echodefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" echoDefinition"}</code> | Pooled effect spawned at the hit point for the local player. |
| <Link id="m-hasintensityplus" /><code>{"private bool hasIntensityPlus"}</code> | Whether the player has the intensity upgrade skill; sent to clients with the effect. |
| <Link id="m-hitminefficiency" /><code>{"private float hitMinEfficiency"}</code> | Minimum hit effectiveness needed to trigger the echo. |
| <Link id="m-intensityplusskill" /><code>{"private "}<Link to="/game-api/types/global-m-o/miningechointensity">{"MiningEchoIntensity"}</Link>{" intensityPlusSkill"}</code> | The `MiningEchoIntensity` skill that upgrades the effect. |
| <Link id="m-level" /><code>{"private int level"}</code> | Zero-based skill level of the player who used it, used to pick the level definition. |
| <Link id="m-leveldefinitions" /><code>{"private "}<Link to="/game-api/types/global-m-o/miningecho-leveldefinition">{"MiningEcho.LevelDefinition"}</Link>{"[] levelDefinitions"}</code> | Size and duration curve for each skill level. |
| <Link id="m-listeners" /><code>{"private static HashSet<"}<Link to="/game-api/types/global-i-l/ilistentominingecho">{"IListenToMiningEcho"}</Link>{"> listeners"}</code> | Static set of `IListenToMiningEcho` objects told about each running echo. Join with `StartListening`. |
| <Link id="m-miningechoes" /><code>{"private static List<"}<Link to="/game-api/types/global-m-o/miningecho-miningechoexecution">{"MiningEcho.MiningEchoExecution"}</Link>{"> miningEchoes"}</code> | Static list of echoes currently expanding. |
| <Link id="m-targetchannels" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] targetChannels"}</code> | Impact channels the held tool must have for the skill to apply. |
| <Link id="m-targetlayer" /><code>{"private LayerMask targetLayer"}</code> | Layers a tool hit must be on to trigger the echo. |
| <Link id="m-toolinputs" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{", "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> toolInputs"}</code> | Registered skill input for each held pickup. |
| <Link id="m-updateechoes" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateEchoes"}</code> | Handle for the static update method while echoes are running. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Forgets the input and stops listening for its tool's collisions. |
| <Link id="m-executewithhit" /><code>{"override void ExecuteWithHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> | Starts an echo at the hit point for the player's level, then runs the normal skill execution. |
| <Link id="m-register" /><code>{"override void Register("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Remembers the input for its tool. |
| <Link id="m-seteffectactive" /><code>{"override void SetEffectActive("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isEffectActive)"}</code> | Starts or stops listening for the tool's collisions. |
| <Link id="m-startlistening" /><code>{"static void StartListening("}<Link to="/game-api/types/global-i-l/ilistentominingecho">{"IListenToMiningEcho"}</Link>{" listener)"}</code> | Adds a listener that gets every running echo's centre and radius each frame. |
| <Link id="m-stoplistening" /><code>{"static void StopListening("}<Link to="/game-api/types/global-i-l/ilistentominingecho">{"IListenToMiningEcho"}</Link>{" listener)"}</code> | Removes a listener. |
| <Link id="m-validateexecutionhit" /><code>{"override bool ValidateExecutionHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Always false. The skill fires from tool collisions instead. |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | True if the held tool has all the target channels. |
| <Link id="m-effectsrequested" /><code>{"protected override void EffectsRequested("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" targetEntity, "}<Link to="/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status, bool isLocalPlayer)"}</code> | For the local player, shows the echolocation effect at the hit for the used level. |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | When consumed, sends the level and whether the intensity upgrade skill is owned. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collided" /><code>{"private void Collided(Collision collision, bool isHitting, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | Handles the tool hitting something on `targetLayer` while the skill is active; if the hit is effective enough it resets the input and runs the echo. |
| <Link id="m-updateechoes-2" /><code>{"private static void UpdateEchoes()"}</code> | Static update that grows each running echo, tells every listener its centre and radius, and stops when none are left. |

</details>
