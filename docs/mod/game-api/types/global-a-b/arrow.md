---
title: "Arrow"
description: "An arrow item's flight: aligns it with its velocity while flying and, with the newer precision mode, applies seeded deviation from ArrowFlightSettings that..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Arrow

A **class** in `Root.Township`, the global namespace.

An arrow item's flight: aligns it with its velocity while flying and, with the newer precision mode, applies seeded deviation from `ArrowFlightSettings` that the server syncs so every side flies the same path.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IShootable`](/mod/game-api/types/global-i-l/ishootable), [`IToolHitDependant`](/mod/game-api/types/alta-items/itoolhitdependant)
- **Derived types** [`ArrowEvent`](/mod/game-api/types/global-a-b/arrowevent), [`ArrowUnityEvent`](/mod/game-api/types/global-a-b/arrowunityevent)
- **Nested types** [`ArrowFlightSync`](/mod/game-api/types/global-a-b/arrow-arrowflightsync)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Arrow()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arrowflight" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" arrowFlight"}</code> | <span className="api-desc">Handle of the registered flight update.</span> |
| <Link id="m-arrowsettings" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/arrowflightsettings">{"ArrowFlightSettings"}</Link>{" arrowSettings"}</code> | <span className="api-desc">Backing field for `ArrowSettings`; flight curves used when `useNewPrecision` is on.</span> |
| <Link id="m-arrowtip" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" arrowTip"}</code> | <span className="api-desc">Backing field for `ArrowTip`.</span> |
| <Link id="m-baseprecisiondeviance" /><code>{"private float basePrecisionDeviance"}</code> | <span className="api-desc">Max random angle in degrees added to a shot when `useNewPrecision` is off.</span> |
| <Link id="m-cachedrigidbody" /><code>{"private Rigidbody cachedRigidbody"}</code> | <span className="api-desc">Backing field for `Rigidbody`.</span> |
| <Link id="m-craftedparts" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{"[] craftedParts"}</code> | <span className="api-desc">Joint slots for the crafted parts. Not read in this class.</span> |
| <Link id="m-embeddable" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable"}</code> | <span className="api-desc">The arrow's `Embeddable`; embedding stops the flight.</span> |
| <Link id="m-flightspeed" /><code>{"private float flightSpeed"}</code> | <span className="api-desc">Launch speed used by the complex flight.</span> |
| <Link id="m-flighttime" /><code>{"private float flightTime"}</code> | <span className="api-desc">Seconds since the complex flight started.</span> |
| <Link id="m-impacttool" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" impactTool"}</code> | <span className="api-desc">Backing field for `ImpactTool`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-materialweightmodifier" /><code>{"private float materialWeightModifier"}</code> | <span className="api-desc">Weight factor from the arrow's weight and material tightness, passed to the flight settings.</span> |
| <Link id="m-maxextra" /><code>{"private float maxExtra"}</code> | <span className="api-desc">Extra weight factor per unit of weight added to `materialWeightModifier`. Defaults to 0.1.</span> |
| <Link id="m-minsquarevelocityforaligning" /><code>{"private float minSquareVelocityForAligning"}</code> | <span className="api-desc">Squared speed above which the arrow is turned to face its velocity. Defaults to 10.</span> |
| <Link id="m-onshotonserver" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/arrowevent">{"ArrowEvent"}</Link>{" onShotOnServer"}</code> | <span className="api-desc">Event behind `ShotOnServer`, invoked on the server when the arrow is shot.</span> |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" physicalMaterial"}</code> | <span className="api-desc">Material part whose tightness multiplier affects `materialWeightModifier`.</span> |
| <Link id="m-randomseed" /><code>{"private int randomSeed"}</code> | <span className="api-desc">Seed for the editor gizmo preview only. Flight seeds come from the shot.</span> |
| <Link id="m-randomstate" /><code>{"private Random.State randomState"}</code> | <span className="api-desc">The arrow's own random state, so the server and clients deviate the same way.</span> |
| <Link id="m-syncflight" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-a-b/arrow-arrowflightsync">{"Arrow.ArrowFlightSync"}</Link>{"> syncFlight"}</code> | <span className="api-desc">Sync that sends flight speed and seed from the server to clients.</span> |
| <Link id="m-usenewprecision" /><code>{"private bool useNewPrecision"}</code> | <span className="api-desc">When on, flight uses `arrowSettings` and a synced seed. When off, a simple random angle at launch.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arrowsettings-2" /><code><Link to="/mod/game-api/types/global-a-b/arrowflightsettings">{"ArrowFlightSettings"}</Link>{" ArrowSettings { get; set; }"}</code> | <span className="api-desc">Flight settings used by the newer precision mode.</span> |
| <Link id="m-arrowtip-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" ArrowTip { get; }"}</code> | <span className="api-desc">The entity at the arrow's tip. Defaults to the arrow itself.</span> |
| <Link id="m-finalweight" /><code>{"float FinalWeight { get; }"}</code> | <span className="api-desc">The pickup's total weight, or 0.1 if there is no pickup.</span> |
| <Link id="m-flightmodifiers" /><code>{"List<"}<Link to="/mod/game-api/types/global-a-b/arrowflightsettingsmodifier">{"ArrowFlightSettingsModifier"}</Link>{"> FlightModifiers { get; }"}</code> | <span className="api-desc">Extra modifiers applied to the flight settings each step.</span> |
| <Link id="m-hasbeenshot" /><code>{"bool HasBeenShot { get; private set; }"}</code> | <span className="api-desc">True from being shot until the flight stops.</span> |
| <Link id="m-impacttool-2" /><code><Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" { get; }"}</code> | <span className="api-desc">The arrow's `ImpactTool`.</span> |
| <Link id="m-isinflight" /><code>{"bool IsInFlight { get; private set; }"}</code> | <span className="api-desc">True while the flight update is running.</span> |
| <Link id="m-rigidbody" /><code>{"Rigidbody Rigidbody { get; }"}</code> | <span className="api-desc">The arrow's rigidbody.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-shotonserver" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-a-b/arrow">{"Arrow"}</Link>{"> ShotOnServer"}</code> | <span className="api-desc">Raised on the server when the arrow is shot.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Hooks destruction and sets up the flight sync message.</span> |
| <Link id="m-shoot" /><code>{"Vector3 Shoot(Vector3 baseDirection, float strength, bool isApplyingDeviation)"}</code> | <span className="api-desc">Fires the arrow along a direction with a strength, or with a velocity. The older mode can add random spread.</span> |
| <Link id="m-shoot-2" /><code>{"void Shoot(Vector3 velocity)"}</code> | <span className="api-desc">Fires the arrow along a direction with a strength, or with a velocity. The older mode can add random spread.</span> |
| <Link id="m-shootarrowwithvelocity" /><code>{"void ShootArrowWithVelocity(Vector3 velocity)"}</code> | <span className="api-desc">Sets the velocity and starts the flight. Server: raises `ShotOnServer`.</span> |
| <Link id="m-starthandlingarrowdeviance" /><code>{"void StartHandlingArrowDeviance(float speed, int randomSeed = -1)"}</code> | <span className="api-desc">Starts the seeded deviation flight at a speed. Server: syncs the speed and seed to clients.</span> |
| <Link id="m-startsimplearrowflight" /><code>{"void StartSimpleArrowFlight()"}</code> | <span className="api-desc">Starts the plain flight that only aligns the arrow with its velocity.</span> |
| <Link id="m-stopupdatingarrowflight" /><code>{"void StopUpdatingArrowFlight()"}</code> | <span className="api-desc">Stops the flight update and clears `HasBeenShot`. Called on hit, embed or destroy.</span> |

<details className="api-private">
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alignwithflightdirection" /><code>{"private void AlignWithFlightDirection()"}</code> | <span className="api-desc">Turns the rigidbody to face along its velocity.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks `StopArrowFlight` to the embeddable's `Embedded` event.</span> |
| <Link id="m-complexarrowflight" /><code>{"private void ComplexArrowFlight()"}</code> | <span className="api-desc">Fixed update for new-precision flight: sets velocity from `arrowSettings` with the arrow's own random state, then aligns it.</span> |
| <Link id="m-destroybyscene" /><code>{"private void DestroyByScene("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Stops the flight update when the entity is destroyed by the scene.</span> |
| <Link id="m-ensurearrowtip" /><code>{"private bool EnsureArrowTip()"}</code> | <span className="api-desc">Inspector helper: sets `arrowTip` to this entity if it is empty.</span> |
| <Link id="m-oncollided" /><code>{"private void Alta.Impact.IToolHitDependant.OnCollided(Collision collision, bool isHitting, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Stops the flight update when the arrow collides with something.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the flight update.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the flight path preview from `arrowSettings` using `randomSeed`.</span> |
| <Link id="m-onhit" /><code>{"private void Alta.Impact.IToolHitDependant.OnHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Stops the flight update when the arrow's tool hit lands.</span> |
| <Link id="m-simplearrowflight" /><code>{"private void SimpleArrowFlight()"}</code> | <span className="api-desc">Fixed update for old-style flight: only aligns the arrow with its velocity when fast enough.</span> |
| <Link id="m-startarrowflight" /><code>{"private void StartArrowFlight(Action method)"}</code> | <span className="api-desc">Registers the given fixed-update flight method, marks the arrow in flight and turns on continuous collision.</span> |
| <Link id="m-stoparrowflight" /><code>{"private void StopArrowFlight("}<Link to="/mod/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable)"}</code> | <span className="api-desc">Stops the flight update when the arrow embeds.</span> |
| <Link id="m-syncflight-2" /><code>{"private void SyncFlight("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-a-b/arrow-arrowflightsync">{"Arrow.ArrowFlightSync"}</Link>{" arguments)"}</code> | <span className="api-desc">Network handler for flight speed and seed. Clients start the same deviating flight the server did.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Arrow`:

<div className="api-used-in">

[`ThrowableArrow.arrow`](/mod/game-api/types/global-t-x/throwablearrow#m-arrow).

</div>
