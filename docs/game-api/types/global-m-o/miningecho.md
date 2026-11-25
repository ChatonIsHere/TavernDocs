---
title: "MiningEcho"
description: "class MiningEcho in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MiningEcho

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`MiningEcho.Create`](/game-api/types/global-m-o/miningecho-create)
- **Nested types** [`Create`](/game-api/types/global-m-o/miningecho-create), [`LevelDefinition`](/game-api/types/global-m-o/miningecho-leveldefinition), [`MiningEchoExecution`](/game-api/types/global-m-o/miningecho-miningechoexecution)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MiningEcho()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-echodefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" echoDefinition"}</code> |  |
| <Link id="m-hasintensityplus" /><code>{"private bool hasIntensityPlus"}</code> |  |
| <Link id="m-hitminefficiency" /><code>{"private float hitMinEfficiency"}</code> |  |
| <Link id="m-intensityplusskill" /><code>{"private "}<Link to="/game-api/types/global-m-o/miningechointensity">{"MiningEchoIntensity"}</Link>{" intensityPlusSkill"}</code> |  |
| <Link id="m-level" /><code>{"private int level"}</code> |  |
| <Link id="m-leveldefinitions" /><code>{"private "}<Link to="/game-api/types/global-m-o/miningecho-leveldefinition">{"MiningEcho.LevelDefinition"}</Link>{"[] levelDefinitions"}</code> |  |
| <Link id="m-listeners" /><code>{"private static HashSet<"}<Link to="/game-api/types/global-i-l/ilistentominingecho">{"IListenToMiningEcho"}</Link>{"> listeners"}</code> |  |
| <Link id="m-miningechoes" /><code>{"private static List<"}<Link to="/game-api/types/global-m-o/miningecho-miningechoexecution">{"MiningEcho.MiningEchoExecution"}</Link>{"> miningEchoes"}</code> |  |
| <Link id="m-targetchannels" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] targetChannels"}</code> |  |
| <Link id="m-targetlayer" /><code>{"private LayerMask targetLayer"}</code> |  |
| <Link id="m-toolinputs" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{", "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> toolInputs"}</code> |  |
| <Link id="m-updateechoes" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateEchoes"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-executewithhit" /><code>{"override void ExecuteWithHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> |  |
| <Link id="m-register" /><code>{"override void Register("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-seteffectactive" /><code>{"override void SetEffectActive("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isEffectActive)"}</code> |  |
| <Link id="m-startlistening" /><code>{"static void StartListening("}<Link to="/game-api/types/global-i-l/ilistentominingecho">{"IListenToMiningEcho"}</Link>{" listener)"}</code> |  |
| <Link id="m-stoplistening" /><code>{"static void StopListening("}<Link to="/game-api/types/global-i-l/ilistentominingecho">{"IListenToMiningEcho"}</Link>{" listener)"}</code> |  |
| <Link id="m-validateexecutionhit" /><code>{"override bool ValidateExecutionHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> |  |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> |  |
| <Link id="m-collided" /><code>{"private void Collided(Collision collision, bool isHitting, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |  |
| <Link id="m-effectsrequested" /><code>{"protected override void EffectsRequested("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" targetEntity, "}<Link to="/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status, bool isLocalPlayer)"}</code> |  |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updateechoes-2" /><code>{"private static void UpdateEchoes()"}</code> |  |
