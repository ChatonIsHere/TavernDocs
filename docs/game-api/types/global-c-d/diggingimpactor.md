---
title: "DiggingImpactor"
description: "class DiggingImpactor in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DiggingImpactor

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<DiggingImpactorSaveStructure>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<DiggingImpactorSaveStructure>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IToolHitDependant`](/game-api/types/alta-items/itoolhitdependant)
- **Derived types** [`DiggingImpactorSaveStructure`](/game-api/types/global-c-d/diggingimpactorsavestructure)
- **Nested types** [`InteractorPositions`](/game-api/types/global-c-d/diggingimpactor-interactorpositions)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DiggingImpactor()"}</code> |

## Fields

<details>
<summary>18 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-buriedposition" /><code>{"private Vector3 buriedPosition"}</code> |
| <Link id="m-buriedrotation" /><code>{"private Quaternion buriedRotation"}</code> |
| <Link id="m-checkpull" /><code>{"private Coroutine checkPull"}</code> |
| <Link id="m-currenttool" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" currentTool"}</code> |
| <Link id="m-diggingdamagemultiplier" /><code>{"private Func<float> diggingDamageMultiplier"}</code> |
| <Link id="m-digsherecastposition" /><code>{"private Transform digShereCastPosition"}</code> |
| <Link id="m-durabilitypickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" durabilityPickup"}</code> |
| <Link id="m-efficiencyratio" /><code>{"private float efficiencyRatio"}</code> |
| <Link id="m-fakepickup" /><code>{"private "}<Link to="/game-api/types/global-e-h/fakepickup">{"FakePickup"}</Link>{" fakePickup"}</code> |
| <Link id="m-interactorpositions" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", "}<Link to="/game-api/types/global-c-d/diggingimpactor-interactorpositions">{"DiggingImpactor.InteractorPositions"}</Link>{"> interactorPositions"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-pivot" /><code>{"private Vector3 pivot"}</code> |
| <Link id="m-pulloutdirection" /><code>{"private Vector3 pullOutDirection"}</code> |
| <Link id="m-receivedtool" /><code>{"private Action receivedTool"}</code> |
| <Link id="m-rotatingaxis" /><code>{"private Vector3 rotatingAxis"}</code> |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/global-c-d/diggingimpactorsettings">{"DiggingImpactorSettings"}</Link>{" settings"}</code> |
| <Link id="m-syncburied" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBuried"}</code> |
| <Link id="m-syncunburied" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncUnburied"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isburied" /><code>{"bool IsBuried { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data)"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |

<details>
<summary>16 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-bury" /><code>{"private void Bury()"}</code> |
| <Link id="m-checkpull-2" /><code>{"private IEnumerator CheckPull() (iterator)"}</code> |
| <Link id="m-delayedbury" /><code>{"private void DelayedBury()"}</code> |
| <Link id="m-dig" /><code>{"private void Dig()"}</code> |
| <Link id="m-endcheckpull" /><code>{"private void EndCheckPull("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-founddigables" /><code>{"private IEnumerable<"}<Link to="/game-api/types/global-i-l/idigable">{"IDigable"}</Link>{"> FoundDigables() (iterator)"}</code> |
| <Link id="m-oncollided" /><code>{"private void Alta.Impact.IToolHitDependant.OnCollided(Collision collision, bool isHitting, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-onhit" /><code>{"private void Alta.Impact.IToolHitDependant.OnHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |
| <Link id="m-onrootchanged" /><code>{"private void OnRootChanged("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> |
| <Link id="m-registertool" /><code>{"private void RegisterTool("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" newTool)"}</code> |
| <Link id="m-startcheckpull" /><code>{"private void StartCheckPull("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-syncburied-2" /><code>{"private void SyncBuried("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-syncunburied-2" /><code>{"private void SyncUnburied("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isDigging)"}</code> |
| <Link id="m-unbury" /><code>{"private void Unbury(bool isDigging)"}</code> |

</details>
