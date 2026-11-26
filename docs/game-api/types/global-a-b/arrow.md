---
title: "Arrow"
description: "An arrow item's flight: aligns it with its velocity while flying and, with the newer precision mode, applies seeded deviation from ArrowFlightSettings that..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Arrow

A **class** in `Root.Township`, no namespace.

An arrow item's flight: aligns it with its velocity while flying and, with the newer precision mode, applies seeded deviation from `ArrowFlightSettings` that the server syncs so every side flies the same path.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IShootable`](/game-api/types/global-i-l/ishootable), [`IToolHitDependant`](/game-api/types/alta-items/itoolhitdependant)
- **Derived types** [`ArrowEvent`](/game-api/types/global-a-b/arrowevent), [`ArrowUnityEvent`](/game-api/types/global-a-b/arrowunityevent)
- **Nested types** [`ArrowFlightSync`](/game-api/types/global-a-b/arrow-arrowflightsync)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Arrow()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arrowflight" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" arrowFlight"}</code> | Handle of the registered flight update. |
| <Link id="m-arrowsettings" /><code>{"private "}<Link to="/game-api/types/global-a-b/arrowflightsettings">{"ArrowFlightSettings"}</Link>{" arrowSettings"}</code> | Backing field for `ArrowSettings`; flight curves used when `useNewPrecision` is on. |
| <Link id="m-arrowtip" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" arrowTip"}</code> | Backing field for `ArrowTip`. |
| <Link id="m-baseprecisiondeviance" /><code>{"private float basePrecisionDeviance"}</code> | Max random angle in degrees added to a shot when `useNewPrecision` is off. |
| <Link id="m-cachedrigidbody" /><code>{"private Rigidbody cachedRigidbody"}</code> | Backing field for `Rigidbody`. |
| <Link id="m-craftedparts" /><code>{"private "}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{"[] craftedParts"}</code> | Joint slots for the crafted parts. Not read in this class. |
| <Link id="m-embeddable" /><code>{"private "}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable"}</code> | The arrow's `Embeddable`; embedding stops the flight. |
| <Link id="m-flightspeed" /><code>{"private float flightSpeed"}</code> | Launch speed used by the complex flight. |
| <Link id="m-flighttime" /><code>{"private float flightTime"}</code> | Seconds since the complex flight started. |
| <Link id="m-impacttool" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" impactTool"}</code> | Backing field for `ImpactTool`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-materialweightmodifier" /><code>{"private float materialWeightModifier"}</code> | Weight factor from the arrow's weight and material tightness, passed to the flight settings. |
| <Link id="m-maxextra" /><code>{"private float maxExtra"}</code> | Extra weight factor per unit of weight added to `materialWeightModifier`. Defaults to 0.1. |
| <Link id="m-minsquarevelocityforaligning" /><code>{"private float minSquareVelocityForAligning"}</code> | Squared speed above which the arrow is turned to face its velocity. Defaults to 10. |
| <Link id="m-onshotonserver" /><code>{"private "}<Link to="/game-api/types/global-a-b/arrowevent">{"ArrowEvent"}</Link>{" onShotOnServer"}</code> | Event behind `ShotOnServer`, invoked on the server when the arrow is shot. |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" physicalMaterial"}</code> | Material part whose tightness multiplier affects `materialWeightModifier`. |
| <Link id="m-randomseed" /><code>{"private int randomSeed"}</code> | Seed for the editor gizmo preview only. Flight seeds come from the shot. |
| <Link id="m-randomstate" /><code>{"private Random.State randomState"}</code> | The arrow's own random state, so the server and clients deviate the same way. |
| <Link id="m-syncflight" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-a-b/arrow-arrowflightsync">{"Arrow.ArrowFlightSync"}</Link>{"> syncFlight"}</code> | Sync that sends flight speed and seed from the server to clients. |
| <Link id="m-usenewprecision" /><code>{"private bool useNewPrecision"}</code> | When on, flight uses `arrowSettings` and a synced seed. When off, a simple random angle at launch. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arrowsettings-2" /><code><Link to="/game-api/types/global-a-b/arrowflightsettings">{"ArrowFlightSettings"}</Link>{" ArrowSettings { get; set; }"}</code> | Flight settings used by the newer precision mode. |
| <Link id="m-arrowtip-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" ArrowTip { get; }"}</code> | The entity at the arrow's tip. Defaults to the arrow itself. |
| <Link id="m-finalweight" /><code>{"float FinalWeight { get; }"}</code> | The pickup's total weight, or 0.1 if there is no pickup. |
| <Link id="m-flightmodifiers" /><code>{"List<"}<Link to="/game-api/types/global-a-b/arrowflightsettingsmodifier">{"ArrowFlightSettingsModifier"}</Link>{"> FlightModifiers { get; }"}</code> | Extra modifiers applied to the flight settings each step. |
| <Link id="m-hasbeenshot" /><code>{"bool HasBeenShot { get; private set; }"}</code> | True from being shot until the flight stops. |
| <Link id="m-impacttool-2" /><code><Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" { get; }"}</code> | The arrow's `ImpactTool`. |
| <Link id="m-isinflight" /><code>{"bool IsInFlight { get; private set; }"}</code> | True while the flight update is running. |
| <Link id="m-rigidbody" /><code>{"Rigidbody Rigidbody { get; }"}</code> | The arrow's rigidbody. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-shotonserver" /><code>{"event Action<"}<Link to="/game-api/types/global-a-b/arrow">{"Arrow"}</Link>{"> ShotOnServer"}</code> | Raised on the server when the arrow is shot. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Hooks destruction and sets up the flight sync message. |
| <Link id="m-shoot" /><code>{"Vector3 Shoot(Vector3 baseDirection, float strength, bool isApplyingDeviation)"}</code> | Fires the arrow along a direction with a strength, or with a velocity. The older mode can add random spread. |
| <Link id="m-shoot-2" /><code>{"void Shoot(Vector3 velocity)"}</code> | Fires the arrow along a direction with a strength, or with a velocity. The older mode can add random spread. |
| <Link id="m-shootarrowwithvelocity" /><code>{"void ShootArrowWithVelocity(Vector3 velocity)"}</code> | Sets the velocity and starts the flight. Server: raises `ShotOnServer`. |
| <Link id="m-starthandlingarrowdeviance" /><code>{"void StartHandlingArrowDeviance(float speed, int randomSeed = -1)"}</code> | Starts the seeded deviation flight at a speed. Server: syncs the speed and seed to clients. |
| <Link id="m-startsimplearrowflight" /><code>{"void StartSimpleArrowFlight()"}</code> | Starts the plain flight that only aligns the arrow with its velocity. |
| <Link id="m-stopupdatingarrowflight" /><code>{"void StopUpdatingArrowFlight()"}</code> | Stops the flight update and clears `HasBeenShot`. Called on hit, embed or destroy. |

<details>
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alignwithflightdirection" /><code>{"private void AlignWithFlightDirection()"}</code> | Turns the rigidbody to face along its velocity. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks `StopArrowFlight` to the embeddable's `Embedded` event. |
| <Link id="m-complexarrowflight" /><code>{"private void ComplexArrowFlight()"}</code> | Fixed update for new-precision flight: sets velocity from `arrowSettings` with the arrow's own random state, then aligns it. |
| <Link id="m-destroybyscene" /><code>{"private void DestroyByScene("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Stops the flight update when the entity is destroyed by the scene. |
| <Link id="m-ensurearrowtip" /><code>{"private bool EnsureArrowTip()"}</code> | Inspector helper: sets `arrowTip` to this entity if it is empty. |
| <Link id="m-oncollided" /><code>{"private void Alta.Impact.IToolHitDependant.OnCollided(Collision collision, bool isHitting, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | Stops the flight update when the arrow collides with something. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the flight update. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the flight path preview from `arrowSettings` using `randomSeed`. |
| <Link id="m-onhit" /><code>{"private void Alta.Impact.IToolHitDependant.OnHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | Stops the flight update when the arrow's tool hit lands. |
| <Link id="m-simplearrowflight" /><code>{"private void SimpleArrowFlight()"}</code> | Fixed update for old-style flight: only aligns the arrow with its velocity when fast enough. |
| <Link id="m-startarrowflight" /><code>{"private void StartArrowFlight(Action method)"}</code> | Registers the given fixed-update flight method, marks the arrow in flight and turns on continuous collision. |
| <Link id="m-stoparrowflight" /><code>{"private void StopArrowFlight("}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable)"}</code> | Stops the flight update when the arrow embeds. |
| <Link id="m-syncflight-2" /><code>{"private void SyncFlight("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-a-b/arrow-arrowflightsync">{"Arrow.ArrowFlightSync"}</Link>{" arguments)"}</code> | Network handler for flight speed and seed. Clients start the same deviating flight the server did. |

</details>

## Used in

Members of other types that take, return or hold a `Arrow`:

[`ThrowableArrow.arrow`](/game-api/types/global-t-x/throwablearrow#m-arrow).
