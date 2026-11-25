---
title: "Arrow"
description: "class Arrow in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Arrow

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IShootable`](/game-api/types/global-i-l/ishootable), [`IToolHitDependant`](/game-api/types/alta-items/itoolhitdependant)
- **Derived types** [`ArrowEvent`](/game-api/types/global-a-b/arrowevent), [`ArrowUnityEvent`](/game-api/types/global-a-b/arrowunityevent)
- **Nested types** [`ArrowFlightSync`](/game-api/types/global-a-b/arrow-arrowflightsync)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Arrow()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-arrowflight" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" arrowFlight"}</code> |  |
| <Link id="m-arrowsettings" /><code>{"private "}<Link to="/game-api/types/global-a-b/arrowflightsettings">{"ArrowFlightSettings"}</Link>{" arrowSettings"}</code> |  |
| <Link id="m-arrowtip" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" arrowTip"}</code> |  |
| <Link id="m-baseprecisiondeviance" /><code>{"private float basePrecisionDeviance"}</code> |  |
| <Link id="m-cachedrigidbody" /><code>{"private Rigidbody cachedRigidbody"}</code> |  |
| <Link id="m-craftedparts" /><code>{"private "}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{"[] craftedParts"}</code> |  |
| <Link id="m-embeddable" /><code>{"private "}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable"}</code> |  |
| <Link id="m-flightspeed" /><code>{"private float flightSpeed"}</code> |  |
| <Link id="m-flighttime" /><code>{"private float flightTime"}</code> |  |
| <Link id="m-impacttool" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" impactTool"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-materialweightmodifier" /><code>{"private float materialWeightModifier"}</code> |  |
| <Link id="m-maxextra" /><code>{"private float maxExtra"}</code> |  |
| <Link id="m-minsquarevelocityforaligning" /><code>{"private float minSquareVelocityForAligning"}</code> |  |
| <Link id="m-onshotonserver" /><code>{"private "}<Link to="/game-api/types/global-a-b/arrowevent">{"ArrowEvent"}</Link>{" onShotOnServer"}</code> |  |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" physicalMaterial"}</code> |  |
| <Link id="m-randomseed" /><code>{"private int randomSeed"}</code> |  |
| <Link id="m-randomstate" /><code>{"private Random.State randomState"}</code> |  |
| <Link id="m-syncflight" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-a-b/arrow-arrowflightsync">{"Arrow.ArrowFlightSync"}</Link>{"> syncFlight"}</code> |  |
| <Link id="m-usenewprecision" /><code>{"private bool useNewPrecision"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arrowsettings-2" /><code><Link to="/game-api/types/global-a-b/arrowflightsettings">{"ArrowFlightSettings"}</Link>{" ArrowSettings { get; set; }"}</code> |  |
| <Link id="m-arrowtip-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" ArrowTip { get; }"}</code> |  |
| <Link id="m-finalweight" /><code>{"float FinalWeight { get; }"}</code> |  |
| <Link id="m-flightmodifiers" /><code>{"List<"}<Link to="/game-api/types/global-a-b/arrowflightsettingsmodifier">{"ArrowFlightSettingsModifier"}</Link>{"> FlightModifiers { get; }"}</code> |  |
| <Link id="m-hasbeenshot" /><code>{"bool HasBeenShot { get; private set; }"}</code> |  |
| <Link id="m-impacttool-2" /><code><Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" { get; }"}</code> |  |
| <Link id="m-isinflight" /><code>{"bool IsInFlight { get; private set; }"}</code> |  |
| <Link id="m-rigidbody" /><code>{"Rigidbody Rigidbody { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-shotonserver" /><code>{"event Action<"}<Link to="/game-api/types/global-a-b/arrow">{"Arrow"}</Link>{"> ShotOnServer"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-shoot" /><code>{"Vector3 Shoot(Vector3 baseDirection, float strength, bool isApplyingDeviation)"}</code> |  |
| <Link id="m-shoot-2" /><code>{"void Shoot(Vector3 velocity)"}</code> |  |
| <Link id="m-shootarrowwithvelocity" /><code>{"void ShootArrowWithVelocity(Vector3 velocity)"}</code> |  |
| <Link id="m-starthandlingarrowdeviance" /><code>{"void StartHandlingArrowDeviance(float speed, int randomSeed = -1)"}</code> |  |
| <Link id="m-startsimplearrowflight" /><code>{"void StartSimpleArrowFlight()"}</code> |  |
| <Link id="m-stopupdatingarrowflight" /><code>{"void StopUpdatingArrowFlight()"}</code> |  |
| <Link id="m-alignwithflightdirection" /><code>{"private void AlignWithFlightDirection()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-complexarrowflight" /><code>{"private void ComplexArrowFlight()"}</code> |  |
| <Link id="m-destroybyscene" /><code>{"private void DestroyByScene("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-ensurearrowtip" /><code>{"private bool EnsureArrowTip()"}</code> |  |
| <Link id="m-oncollided" /><code>{"private void Alta.Impact.IToolHitDependant.OnCollided(Collision collision, bool isHitting, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onhit" /><code>{"private void Alta.Impact.IToolHitDependant.OnHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |  |
| <Link id="m-simplearrowflight" /><code>{"private void SimpleArrowFlight()"}</code> |  |
| <Link id="m-startarrowflight" /><code>{"private void StartArrowFlight(Action method)"}</code> |  |
| <Link id="m-stoparrowflight" /><code>{"private void StopArrowFlight("}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable)"}</code> |  |
| <Link id="m-syncflight-2" /><code>{"private void SyncFlight("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-a-b/arrow-arrowflightsync">{"Arrow.ArrowFlightSync"}</Link>{" arguments)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Arrow`:

[`ThrowableArrow.arrow`](/game-api/types/global-t-x/throwablearrow#m-arrow).
