---
title: "ProgressionSlotContainer"
description: "Base for a skill orb at a skill shrine that a player holds to buy or sell a skill slot (SkillOrbReplacer, BoughtSkillOrbReplacer)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressionSlotContainer

An **abstract class** in `Root.Township`, the global namespace.

Base for a skill orb at a skill shrine that a player holds to buy or sell a skill slot (`SkillOrbReplacer`, `BoughtSkillOrbReplacer`). Only the target player can grab it; the server runs `Operate`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISkillOrb`](/mod/game-api/types/global-i-l/iskillorb)
- **Derived types** [`BoughtSkillOrbReplacer`](/mod/game-api/types/global-a-b/boughtskillorbreplacer), [`SkillOrbReplacer`](/mod/game-api/types/global-s/skillorbreplacer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ProgressionSlotContainer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-syncoperate" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOperate"}</code> | <span className="api-desc">Message a client sends when the hold completes. The server then destroys or drops the orb and calls `Operate`.</span> |

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maintex" /><code>{"private readonly int _MainTex"}</code> | <span className="api-desc">Shader property id for the icon texture.</span> |
| <Link id="m-activeoperatingeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeOperatingEffect"}</code> | <span className="api-desc">Effect shown while the orb is being held.</span> |
| <Link id="m-helddurationcheck" /><code>{"private Coroutine heldDurationCheck"}</code> | <span className="api-desc">Coroutine that waits for the hold to finish.</span> |
| <Link id="m-internalmodelblock" /><code>{"private MaterialPropertyBlock internalModelBlock"}</code> | <span className="api-desc">Property block for the inner model's icon.</span> |
| <Link id="m-internalmodelrenderer" /><code>{"private Renderer internalModelRenderer"}</code> | <span className="api-desc">Inner model that shows the slot's icon.</span> |
| <Link id="m-isinteractable" /><code>{"private bool isInteractable"}</code> | <span className="api-desc">True only on the target player's client.</span> |
| <Link id="m-maxserialization" /><code>{"private int maxSerialization"}</code> | <span className="api-desc">Highest `SkillStatus` value.</span> |
| <Link id="m-operateconcludedeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" operateConcludedEffect"}</code> | <span className="api-desc">Event run when the orb is used.</span> |
| <Link id="m-operatingeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" operatingEffect"}</code> | <span className="api-desc">Pooled effect shown while held.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The orb's pickup.</span> |
| <Link id="m-shellrenderer" /><code>{"private Renderer shellRenderer"}</code> | <span className="api-desc">The orb's outer shell.</span> |
| <Link id="m-spawnevent" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" spawnEvent"}</code> | <span className="api-desc">Event run on clients a frame after spawn.</span> |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> | <span className="api-desc">Sync for the slot and target player.</span> |
| <Link id="m-targetplayer" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer"}</code> | <span className="api-desc">The only player who can use this orb.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-internalmodeltransform" /><code>{"Transform InternalModelTransform { get; }"}</code> | <span className="api-desc">Transform of the icon model inside the orb.</span> |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | <span className="api-desc">The orb's `Pickup`.</span> |
| <Link id="m-shellrenderer-2" /><code>{"Renderer ShellRenderer { get; }"}</code> | <span className="api-desc">Renderer of the orb's outer shell.</span> |
| <Link id="m-slot" /><code><Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" Slot { get; private set; }"}</code> | <span className="api-desc">The skill slot this orb buys or sells.</span> |
| <Link id="m-destroyafteroperate" /><code>{"protected abstract bool DestroyAfterOperate { get; }"}</code> | <span className="api-desc">Whether the orb is destroyed after operating, or just dropped.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iskillorb-shellmaterial" /><code>{"private Material ISkillOrb.ShellMaterial { get; }"}</code> | <span className="api-desc">The shell renderer's shared material.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the setup and operate messages and plays the spawn effect.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: marks the pickup as not saved.</span> |
| <Link id="m-initializeslot" /><code>{"virtual void InitializeSlot("}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer)"}</code> | <span className="api-desc">Sets the slot and target player, shows the slot icon, and on the server syncs the setup.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends a joining player the orb's setup.</span> |
| <Link id="m-endinteraction" /><code>{"protected virtual void EndInteraction("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Stops the hold check and the operating effect when let go.</span> |
| <Link id="m-filterinteraction" /><code>{"protected virtual void FilterInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Blocks grabbing unless the local player is the orb's target player.</span> |
| <Link id="m-helddurationcheck-2" /><code>{"protected abstract IEnumerator HeldDurationCheck("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Implemented by subclasses: runs while held and sends `syncOperate` once held long enough.</span> |
| <Link id="m-operate" /><code>{"protected abstract void Operate("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetManager)"}</code> | <span className="api-desc">Implemented by subclasses: buys or sells the slot for the target player. Server only.</span> |
| <Link id="m-releaseoperatingeffect" /><code>{"protected void ReleaseOperatingEffect()"}</code> | <span className="api-desc">Stops the effect played while holding.</span> |
| <Link id="m-requestoperatingeffect" /><code>{"protected void RequestOperatingEffect()"}</code> | <span className="api-desc">Starts the effect played while holding, if not already playing.</span> |
| <Link id="m-startinteraction" /><code>{"protected virtual void StartInteraction("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Starts the hold check when grabbed, if interactable.</span> |
| <Link id="m-syncsetup-2" /><code>{"protected virtual void SyncSetup("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs the path, slot hash and target player id. Clients look up the slot and initialise.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the pickup's interaction filter and start and end events.</span> |
| <Link id="m-setuprenderer" /><code>{"private void SetupRenderer()"}</code> | <span className="api-desc">Client: shows the slot's icon on the inner model, or hides it if there is none.</span> |
| <Link id="m-syncoperate-2" /><code>{"private void SyncOperate("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Server: plays the done effect, drops or destroys the orb, and runs `Operate`. It does not check who sent it.</span> |

</details>
