---
title: "ProgressionSlotContainer"
description: "Base for a skill orb at a skill shrine that a player holds to buy or sell a skill slot (SkillOrbReplacer, BoughtSkillOrbReplacer)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressionSlotContainer

An **abstract class** in `Root.Township`, no namespace.

Base for a skill orb at a skill shrine that a player holds to buy or sell a skill slot (`SkillOrbReplacer`, `BoughtSkillOrbReplacer`). Only the target player can grab it; the server runs `Operate`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISkillOrb`](/game-api/types/global-i-l/iskillorb)
- **Derived types** [`BoughtSkillOrbReplacer`](/game-api/types/global-a-b/boughtskillorbreplacer), [`SkillOrbReplacer`](/game-api/types/global-s/skillorbreplacer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ProgressionSlotContainer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-syncoperate" /><code>{"protected "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOperate"}</code> | Message a client sends when the hold completes. The server then destroys or drops the orb and calls `Operate`. |

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maintex" /><code>{"private readonly int _MainTex"}</code> | Shader property id for the icon texture. |
| <Link id="m-activeoperatingeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeOperatingEffect"}</code> | Effect shown while the orb is being held. |
| <Link id="m-helddurationcheck" /><code>{"private Coroutine heldDurationCheck"}</code> | Coroutine that waits for the hold to finish. |
| <Link id="m-internalmodelblock" /><code>{"private MaterialPropertyBlock internalModelBlock"}</code> | Property block for the inner model's icon. |
| <Link id="m-internalmodelrenderer" /><code>{"private Renderer internalModelRenderer"}</code> | Inner model that shows the slot's icon. |
| <Link id="m-isinteractable" /><code>{"private bool isInteractable"}</code> | True only on the target player's client. |
| <Link id="m-maxserialization" /><code>{"private int maxSerialization"}</code> | Highest `SkillStatus` value. |
| <Link id="m-operateconcludedeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" operateConcludedEffect"}</code> | Event run when the orb is used. |
| <Link id="m-operatingeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" operatingEffect"}</code> | Pooled effect shown while held. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The orb's pickup. |
| <Link id="m-shellrenderer" /><code>{"private Renderer shellRenderer"}</code> | The orb's outer shell. |
| <Link id="m-spawnevent" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" spawnEvent"}</code> | Event run on clients a frame after spawn. |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> | Sync for the slot and target player. |
| <Link id="m-targetplayer" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer"}</code> | The only player who can use this orb. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-internalmodeltransform" /><code>{"Transform InternalModelTransform { get; }"}</code> | Transform of the icon model inside the orb. |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The orb's `Pickup`. |
| <Link id="m-shellrenderer-2" /><code>{"Renderer ShellRenderer { get; }"}</code> | Renderer of the orb's outer shell. |
| <Link id="m-slot" /><code><Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" Slot { get; private set; }"}</code> | The skill slot this orb buys or sells. |
| <Link id="m-destroyafteroperate" /><code>{"protected abstract bool DestroyAfterOperate { get; }"}</code> | Whether the orb is destroyed after operating, or just dropped. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iskillorb-shellmaterial" /><code>{"private Material ISkillOrb.ShellMaterial { get; }"}</code> | The shell renderer's shared material. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the setup and operate messages and plays the spawn effect. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: marks the pickup as not saved. |
| <Link id="m-initializeslot" /><code>{"virtual void InitializeSlot("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer)"}</code> | Sets the slot and target player, shows the slot icon, and on the server syncs the setup. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends a joining player the orb's setup. |
| <Link id="m-endinteraction" /><code>{"protected virtual void EndInteraction("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Stops the hold check and the operating effect when let go. |
| <Link id="m-filterinteraction" /><code>{"protected virtual void FilterInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Blocks grabbing unless the local player is the orb's target player. |
| <Link id="m-helddurationcheck-2" /><code>{"protected abstract IEnumerator HeldDurationCheck("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Implemented by subclasses: runs while held and sends `syncOperate` once held long enough. |
| <Link id="m-operate" /><code>{"protected abstract void Operate("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetManager)"}</code> | Implemented by subclasses: buys or sells the slot for the target player. Server only. |
| <Link id="m-releaseoperatingeffect" /><code>{"protected void ReleaseOperatingEffect()"}</code> | Stops the effect played while holding. |
| <Link id="m-requestoperatingeffect" /><code>{"protected void RequestOperatingEffect()"}</code> | Starts the effect played while holding, if not already playing. |
| <Link id="m-startinteraction" /><code>{"protected virtual void StartInteraction("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Starts the hold check when grabbed, if interactable. |
| <Link id="m-syncsetup-2" /><code>{"protected virtual void SyncSetup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the path, slot hash and target player id. Clients look up the slot and initialise. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the pickup's interaction filter and start and end events. |
| <Link id="m-setuprenderer" /><code>{"private void SetupRenderer()"}</code> | Client: shows the slot's icon on the inner model, or hides it if there is none. |
| <Link id="m-syncoperate-2" /><code>{"private void SyncOperate("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server: plays the done effect, drops or destroys the orb, and runs `Operate`. It does not check who sent it. |

</details>
