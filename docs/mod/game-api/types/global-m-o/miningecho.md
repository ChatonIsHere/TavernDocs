---
title: "MiningEcho"
description: "Progression skill: a strong pickaxe hit sends out an echo pulse whose radius grows over time, shown to the player and passed to IListenToMiningEcho..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MiningEcho

A **class** in `Root.Township`, the global namespace.

Progression skill: a strong pickaxe hit sends out an echo pulse whose radius grows over time, shown to the player and passed to `IListenToMiningEcho` listeners (probably to reveal ore).

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`PickupBasedSkill`](/mod/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`MiningEcho.Create`](/mod/game-api/types/global-m-o/miningecho-create)
- **Nested types** [`Create`](/mod/game-api/types/global-m-o/miningecho-create), [`LevelDefinition`](/mod/game-api/types/global-m-o/miningecho-leveldefinition), [`MiningEchoExecution`](/mod/game-api/types/global-m-o/miningecho-miningechoexecution)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MiningEcho()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-echodefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" echoDefinition"}</code> | <span className="api-desc">Pooled effect spawned at the hit point for the local player.</span> |
| <Link id="m-hasintensityplus" /><code>{"private bool hasIntensityPlus"}</code> | <span className="api-desc">Whether the player has the intensity upgrade skill; sent to clients with the effect.</span> |
| <Link id="m-hitminefficiency" /><code>{"private float hitMinEfficiency"}</code> | <span className="api-desc">Minimum hit effectiveness needed to trigger the echo.</span> |
| <Link id="m-intensityplusskill" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/miningechointensity">{"MiningEchoIntensity"}</Link>{" intensityPlusSkill"}</code> | <span className="api-desc">The `MiningEchoIntensity` skill that upgrades the effect.</span> |
| <Link id="m-level" /><code>{"private int level"}</code> | <span className="api-desc">Zero-based skill level of the player who used it, used to pick the level definition.</span> |
| <Link id="m-leveldefinitions" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/miningecho-leveldefinition">{"MiningEcho.LevelDefinition"}</Link>{"[] levelDefinitions"}</code> | <span className="api-desc">Size and duration curve for each skill level.</span> |
| <Link id="m-listeners" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/global-i-l/ilistentominingecho">{"IListenToMiningEcho"}</Link>{"> listeners"}</code> | <span className="api-desc">Static set of `IListenToMiningEcho` objects told about each running echo. Join with `StartListening`.</span> |
| <Link id="m-miningechoes" /><code>{"private static List<"}<Link to="/mod/game-api/types/global-m-o/miningecho-miningechoexecution">{"MiningEcho.MiningEchoExecution"}</Link>{"> miningEchoes"}</code> | <span className="api-desc">Static list of echoes currently expanding.</span> |
| <Link id="m-targetchannels" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] targetChannels"}</code> | <span className="api-desc">Impact channels the held tool must have for the skill to apply.</span> |
| <Link id="m-targetlayer" /><code>{"private LayerMask targetLayer"}</code> | <span className="api-desc">Layers a tool hit must be on to trigger the echo.</span> |
| <Link id="m-toolinputs" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{", "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> toolInputs"}</code> | <span className="api-desc">Registered skill input for each held pickup.</span> |
| <Link id="m-updateechoes" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateEchoes"}</code> | <span className="api-desc">Handle for the static update method while echoes are running.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Forgets the input and stops listening for its tool's collisions.</span> |
| <Link id="m-executewithhit" /><code>{"override void ExecuteWithHit("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> | <span className="api-desc">Starts an echo at the hit point for the player's level, then runs the normal skill execution.</span> |
| <Link id="m-register" /><code>{"override void Register("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Remembers the input for its tool.</span> |
| <Link id="m-seteffectactive" /><code>{"override void SetEffectActive("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isEffectActive)"}</code> | <span className="api-desc">Starts or stops listening for the tool's collisions.</span> |
| <Link id="m-startlistening" /><code>{"static void StartListening("}<Link to="/mod/game-api/types/global-i-l/ilistentominingecho">{"IListenToMiningEcho"}</Link>{" listener)"}</code> | <span className="api-desc">Adds a listener that gets every running echo's centre and radius each frame.</span> |
| <Link id="m-stoplistening" /><code>{"static void StopListening("}<Link to="/mod/game-api/types/global-i-l/ilistentominingecho">{"IListenToMiningEcho"}</Link>{" listener)"}</code> | <span className="api-desc">Removes a listener.</span> |
| <Link id="m-validateexecutionhit" /><code>{"override bool ValidateExecutionHit("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | <span className="api-desc">Always false. The skill fires from tool collisions instead.</span> |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | <span className="api-desc">True if the held tool has all the target channels.</span> |
| <Link id="m-effectsrequested" /><code>{"protected override void EffectsRequested("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" targetEntity, "}<Link to="/mod/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status, bool isLocalPlayer)"}</code> | <span className="api-desc">For the local player, shows the echolocation effect at the hit for the used level.</span> |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">When consumed, sends the level and whether the intensity upgrade skill is owned.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collided" /><code>{"private void Collided(Collision collision, bool isHitting, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Handles the tool hitting something on `targetLayer` while the skill is active; if the hit is effective enough it resets the input and runs the echo.</span> |
| <Link id="m-updateechoes-2" /><code>{"private static void UpdateEchoes()"}</code> | <span className="api-desc">Static update that grows each running echo, tells every listener its centre and radius, and stops when none are left.</span> |

</details>
