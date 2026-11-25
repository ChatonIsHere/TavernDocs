---
title: "ProgressionSlotContainer"
description: "abstract class ProgressionSlotContainer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressionSlotContainer

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISkillOrb`](/game-api/types/global-i-l/iskillorb)
- **Derived types** [`BoughtSkillOrbReplacer`](/game-api/types/global-a-b/boughtskillorbreplacer), [`SkillOrbReplacer`](/game-api/types/global-s/skillorbreplacer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ProgressionSlotContainer()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maintex" /><code>{"private readonly int _MainTex"}</code> |  |
| <Link id="m-activeoperatingeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeOperatingEffect"}</code> |  |
| <Link id="m-helddurationcheck" /><code>{"private Coroutine heldDurationCheck"}</code> |  |
| <Link id="m-internalmodelblock" /><code>{"private MaterialPropertyBlock internalModelBlock"}</code> |  |
| <Link id="m-internalmodelrenderer" /><code>{"private Renderer internalModelRenderer"}</code> |  |
| <Link id="m-isinteractable" /><code>{"private bool isInteractable"}</code> |  |
| <Link id="m-maxserialization" /><code>{"private int maxSerialization"}</code> |  |
| <Link id="m-operateconcludedeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" operateConcludedEffect"}</code> |  |
| <Link id="m-operatingeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" operatingEffect"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-shellrenderer" /><code>{"private Renderer shellRenderer"}</code> |  |
| <Link id="m-spawnevent" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" spawnEvent"}</code> |  |
| <Link id="m-syncoperate" /><code>{"protected "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOperate"}</code> |  |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> |  |
| <Link id="m-targetplayer" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-internalmodeltransform" /><code>{"Transform InternalModelTransform { get; }"}</code> |  |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> |  |
| <Link id="m-shellrenderer-2" /><code>{"Renderer ShellRenderer { get; }"}</code> |  |
| <Link id="m-slot" /><code><Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" Slot { get; private set; }"}</code> |  |
| <Link id="m-destroyafteroperate" /><code>{"protected abstract bool DestroyAfterOperate { get; }"}</code> |  |
| <Link id="m-iskillorb-shellmaterial" /><code>{"private Material ISkillOrb.ShellMaterial { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-initializeslot" /><code>{"virtual void InitializeSlot("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-endinteraction" /><code>{"protected virtual void EndInteraction("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-filterinteraction" /><code>{"protected virtual void FilterInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-helddurationcheck-2" /><code>{"protected abstract IEnumerator HeldDurationCheck("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-operate" /><code>{"protected abstract void Operate("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetManager)"}</code> |  |
| <Link id="m-releaseoperatingeffect" /><code>{"protected void ReleaseOperatingEffect()"}</code> |  |
| <Link id="m-requestoperatingeffect" /><code>{"protected void RequestOperatingEffect()"}</code> |  |
| <Link id="m-setuprenderer" /><code>{"private void SetupRenderer()"}</code> |  |
| <Link id="m-startinteraction" /><code>{"protected virtual void StartInteraction("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-syncoperate-2" /><code>{"private void SyncOperate("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncsetup-2" /><code>{"protected virtual void SyncSetup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
