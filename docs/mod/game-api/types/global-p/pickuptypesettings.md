---
title: "PickupTypeSettings"
description: "Global settings for held items: per-grip-type settings, damage popups, crafting line visuals, shrink and break effects, and stat definitions used for damage."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupTypeSettings

A **class** in `Root.Township`, the global namespace.

Global settings for held items: per-grip-type settings, damage popups, crafting line visuals, shrink and break effects, and stat definitions used for damage. Get it with `GlobalSettings<PickupTypeSettings>.Instance`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`GlobalSettings<PickupTypeSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`PickupTypeSettings`](/mod/game-api/types/global-p/pickuptypesettings), [`PickupTypeSettings.Create`](/mod/game-api/types/global-p/pickuptypesettings-create)
- **Nested types** [`ChannelInneficientHardnessHitEffect`](/mod/game-api/types/global-p/pickuptypesettings-channelinneficienthardnesshiteffect), [`Create`](/mod/game-api/types/global-p/pickuptypesettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupTypeSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-damagemessage" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/togglebool">{"ToggleBool"}</Link>{" DamageMessage"}</code> | <span className="api-desc">Console toggle `damagemessage`: when on, the local player sees a "Damage:" message for each hit.</span> |
| <Link id="m-haspopup" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/togglebool">{"ToggleBool"}</Link>{" HasPopup"}</code> | <span className="api-desc">Console toggle `damagepopup`: when on, hits show damage number popups for the local player.</span> |

<details className="api-private">
<summary>45 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activelinecolor" /><code>{"private Color activeLineColor"}</code> | <span className="api-desc">Backing field for `ActiveLineColor`.</span> |
| <Link id="m-androidactivelinecolor" /><code>{"private Color androidActiveLineColor"}</code> | <span className="api-desc">Android version of the active crafting line colour. Nothing reads it in the server build.</span> |
| <Link id="m-androidcraftinglineiterations" /><code>{"private int androidCraftingLineIterations"}</code> | <span className="api-desc">Android version of `craftingLineIterations`. Nothing reads it in the server build.</span> |
| <Link id="m-androiddefaultbreakeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidDefaultBreakEffect"}</code> | <span className="api-desc">Android version of the default break effect. Nothing reads it in the server build.</span> |
| <Link id="m-androidnormallinecolor" /><code>{"private Color androidNormalLineColor"}</code> | <span className="api-desc">Android version of the normal crafting line colour. Nothing reads it in the server build.</span> |
| <Link id="m-androidpickupdockmaterial" /><code>{"private Material androidPickupDockMaterial"}</code> | <span className="api-desc">Android dock material. Nothing reads it in the server build.</span> |
| <Link id="m-attachedeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" attachedEffect"}</code> | <span className="api-desc">Backing field for `AttachedEffect`.</span> |
| <Link id="m-blockchannel" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] blockChannel"}</code> | <span className="api-desc">Backing field for `BlockChannel`.</span> |
| <Link id="m-craftinglineiterations" /><code>{"private int craftingLineIterations"}</code> | <span className="api-desc">Backing field for `CraftingLineIterations`.</span> |
| <Link id="m-craftinglinematerial" /><code>{"private Material craftingLineMaterial"}</code> | <span className="api-desc">Backing field for `CraftingLineMaterial`.</span> |
| <Link id="m-craftinglinevelocity" /><code>{"private float craftingLineVelocity"}</code> | <span className="api-desc">Backing field for `CraftingLineVelocity`.</span> |
| <Link id="m-crippledamageprotectiondefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" crippleDamageProtectionDefinition"}</code> | <span className="api-desc">Backing field for `CrippleDamageProtectionDefinition`.</span> |
| <Link id="m-cripplehealthdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" crippleHealthDefinition"}</code> | <span className="api-desc">Backing field for `CrippleHealthDefinition`.</span> |
| <Link id="m-damagedefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" damageDefinition"}</code> | <span className="api-desc">Backing field for `DamageDefinition`.</span> |
| <Link id="m-damagepopup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" damagePopup"}</code> | <span className="api-desc">Backing field for `DamagePopup`.</span> |
| <Link id="m-damageprotectiondefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" damageProtectionDefinition"}</code> | <span className="api-desc">Backing field for `DamageProtectionDefinition`.</span> |
| <Link id="m-debugbubbleinspectordefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" debugBubbleInspectorDefinition"}</code> | <span className="api-desc">Backing field for `DebugBubbleInspectorDefinition`.</span> |
| <Link id="m-defaultbreakeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" defaultBreakEffect"}</code> | <span className="api-desc">Backing field for `DefaultBreakEffect`.</span> |
| <Link id="m-defaultbreaksound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" defaultBreakSound"}</code> | <span className="api-desc">Backing field for `DefaultBreakSound`.</span> |
| <Link id="m-dissolvingpagedefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" dissolvingPageDefinition"}</code> | <span className="api-desc">Backing field for `DissolvingPageDefinition`.</span> |
| <Link id="m-hitcooldown" /><code>{"private float hitCooldown"}</code> | <span className="api-desc">Backing field for `HitCooldown`.</span> |
| <Link id="m-impactorarraysize" /><code>{"private int impactorArraySize"}</code> | <span className="api-desc">Backing field for `ImpactorArraySize`.</span> |
| <Link id="m-largertextpopup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" largerTextPopup"}</code> | <span className="api-desc">Backing field for `LargerTextPopup`.</span> |
| <Link id="m-linespooldefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" linesPoolDefinition"}</code> | <span className="api-desc">Backing field for `LinesPoolDefinition`.</span> |
| <Link id="m-maxdistancetowaitinteractconfirmation" /><code>{"private float maxDistanceToWaitInteractConfirmation"}</code> | <span className="api-desc">Backing field for `MaxDistanceToWaitInteractConfirmation`.</span> |
| <Link id="m-maxrecorderpoolsize" /><code>{"private int maxRecorderPoolSize"}</code> | <span className="api-desc">Most `PositionRecorder` objects kept in the pool; extra ones released are dropped.</span> |
| <Link id="m-minimumdistancetoteleportsquared" /><code>{"private float minimumDistanceToTeleportSquared"}</code> | <span className="api-desc">Backing field for `MinimumDistanceToTeleportSquared`, stored squared.</span> |
| <Link id="m-normallinecolor" /><code>{"private Color normalLineColor"}</code> | <span className="api-desc">Backing field for `NormalLineColor`.</span> |
| <Link id="m-perchannelhardnessinnefectivehiteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickuptypesettings-channelinneficienthardnesshiteffect">{"PickupTypeSettings.ChannelInneficientHardnessHitEffect"}</Link>{"[] perChannelHardnessInnefectiveHitEffect"}</code> | <span className="api-desc">Impact effects for hits too soft to work, per impact channel. The first entry is the fallback.</span> |
| <Link id="m-pickupmovingghost" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pickupMovingGhost"}</code> | <span className="api-desc">Backing field for `PickupMovingGhost`.</span> |
| <Link id="m-pickupsettings" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{", "}<Link to="/mod/game-api/types/global-p/pickuptypesetting">{"PickupTypeSetting"}</Link>{"> pickupSettings"}</code> | <span className="api-desc">Lookup from joint type to its `PickupTypeSetting`, built on first use.</span> |
| <Link id="m-pickuptypesettings" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickuptypesetting">{"PickupTypeSetting"}</Link>{"[] pickupTypeSettings"}</code> | <span className="api-desc">The per joint type pickup settings, as set in the asset.</span> |
| <Link id="m-recorders" /><code>{"private static Stack<"}<Link to="/mod/game-api/types/global-p/positionrecorder">{"PositionRecorder"}</Link>{"> recorders"}</code> | <span className="api-desc">Static pool of `PositionRecorder` objects used by `GetPositionRecorder` and `ReleasePositionRecorder`.</span> |
| <Link id="m-scaleupanimationduration" /><code>{"private float scaleUpAnimationDuration"}</code> | <span className="api-desc">Backing field for `ScaleUpAnimationDuration`.</span> |
| <Link id="m-shrinkingparticles" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" shrinkingParticles"}</code> | <span className="api-desc">Backing field for `ShrinkingParticles`.</span> |
| <Link id="m-shrunkendefaultvisual" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" shrunkenDefaultVisual"}</code> | <span className="api-desc">Backing field for `ShrunkenDefaultVisual`.</span> |
| <Link id="m-simpletextpopup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" simpleTextPopup"}</code> | <span className="api-desc">Backing field for `SimpleTextPopup`.</span> |
| <Link id="m-sizeofshrunkenpickups" /><code>{"private float sizeOfShrunkenPickups"}</code> | <span className="api-desc">Backing field for `SizeOfShrunkenPickups`.</span> |
| <Link id="m-smoothlerp" /><code>{"private float smoothLerp"}</code> | <span className="api-desc">Backing field for `SmoothLerp`.</span> |
| <Link id="m-smoothlocomotionfollowdiscard" /><code>{"private float smoothLocomotionFollowDiscard"}</code> | <span className="api-desc">Backing field for `SmoothLocomotionFollowDiscard`.</span> |
| <Link id="m-temperaturecolor" /><code>{"private Gradient temperatureColor"}</code> | <span className="api-desc">Gradient used by `GetTemperatureColor`.</span> |
| <Link id="m-temperaturetocolorbias" /><code>{"private AnimationCurve temperatureToColorBias"}</code> | <span className="api-desc">Curve that maps temperature to a point on `temperatureColor`.</span> |
| <Link id="m-visualdoubledefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" visualDoubleDefinition"}</code> | <span className="api-desc">Backing field for `VisualDoubleDefinition`.</span> |
| <Link id="m-weightmaxperhand" /><code>{"private float weightMaxPerHand"}</code> | <span className="api-desc">Backing field for `WeightMaxPerHand`.</span> |
| <Link id="m-weightpenalty" /><code>{"private float weightPenalty"}</code> | <span className="api-desc">Backing field for `WeightPenalty`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activelinecolor-2" /><code>{"Color ActiveLineColor { get; }"}</code> | <span className="api-desc">Colour of an active crafting guide line.</span> |
| <Link id="m-attachedeffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" AttachedEffect { get; }"}</code> | <span className="api-desc">Effect played where two crafting parts join.</span> |
| <Link id="m-blockchannel-2" /><code><Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] BlockChannel { get; }"}</code> | <span className="api-desc">Impact channels used for blocking hits.</span> |
| <Link id="m-craftinglineiterations-2" /><code>{"int CraftingLineIterations { get; }"}</code> | <span className="api-desc">Number of segments in a crafting guide line.</span> |
| <Link id="m-craftinglinematerial-2" /><code>{"Material CraftingLineMaterial { get; }"}</code> | <span className="api-desc">Material for crafting guide lines.</span> |
| <Link id="m-craftinglinevelocity-2" /><code>{"float CraftingLineVelocity { get; }"}</code> | <span className="api-desc">Speed of the crafting guide line animation.</span> |
| <Link id="m-crippledamageprotectiondefinition-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" CrippleDamageProtectionDefinition { get; }"}</code> | <span className="api-desc">Stat for cripple damage protection.</span> |
| <Link id="m-cripplehealthdefinition-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" CrippleHealthDefinition { get; }"}</code> | <span className="api-desc">Stat for cripple health.</span> |
| <Link id="m-damagedefinition-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" DamageDefinition { get; }"}</code> | <span className="api-desc">Stat for damage.</span> |
| <Link id="m-damagepopup-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DamagePopup { get; }"}</code> | <span className="api-desc">Pooled damage number popup.</span> |
| <Link id="m-damagepopupmultiplier" /><code>{"float DamagePopupMultiplier { get; set; }"}</code> | <span className="api-desc">Multiplier on numbers shown in damage popups. Default 1.</span> |
| <Link id="m-damagepopupprecision" /><code>{"int DamagePopupPrecision { get; set; }"}</code> | <span className="api-desc">Decimal places in damage popups. Default 2.</span> |
| <Link id="m-damageprotectiondefinition-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" DamageProtectionDefinition { get; }"}</code> | <span className="api-desc">Stat for damage protection.</span> |
| <Link id="m-debugbubbleinspectordefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DebugBubbleInspectorDefinition { get; }"}</code> | <span className="api-desc">Pooled debug bubble inspector.</span> |
| <Link id="m-defaultbreakeffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DefaultBreakEffect { get; }"}</code> | <span className="api-desc">Effect played when an item breaks, if it has none of its own.</span> |
| <Link id="m-defaultbreaksound-2" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" DefaultBreakSound { get; }"}</code> | <span className="api-desc">Sound played when an item breaks, if it has none of its own.</span> |
| <Link id="m-dissolvingpagedefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DissolvingPageDefinition { get; }"}</code> | <span className="api-desc">Pooled dissolving page effect.</span> |
| <Link id="m-hitcooldown-2" /><code>{"float HitCooldown { get; }"}</code> | <span className="api-desc">Seconds before the same tool can hit the same detector again. Default 0.1.</span> |
| <Link id="m-impactorarraysize-2" /><code>{"int ImpactorArraySize { get; }"}</code> | <span className="api-desc">Number of positions each position recorder keeps. Default 20.</span> |
| <Link id="m-largertextpopup-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" LargerTextPopup { get; }"}</code> | <span className="api-desc">Pooled larger text popup.</span> |
| <Link id="m-linespooldefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" LinesPoolDefinition { get; }"}</code> | <span className="api-desc">Pool for crafting guide lines.</span> |
| <Link id="m-maxdistancetowaitinteractconfirmation-2" /><code>{"float MaxDistanceToWaitInteractConfirmation { get; }"}</code> | <span className="api-desc">Distance within which an interaction waits for server confirmation. Default 0.2.</span> |
| <Link id="m-minimumdistancetoteleportsquared-2" /><code>{"float MinimumDistanceToTeleportSquared { get; }"}</code> | <span className="api-desc">Squared distance a grabbed pickup must be from the hand before it is moved into it. Default 0.25.</span> |
| <Link id="m-normallinecolor-2" /><code>{"Color NormalLineColor { get; }"}</code> | <span className="api-desc">Colour of an inactive crafting guide line.</span> |
| <Link id="m-pickupmovingghost-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" PickupMovingGhost { get; }"}</code> | <span className="api-desc">Pooled ghost shown when items move between docks.</span> |
| <Link id="m-scaleupanimationduration-2" /><code>{"float ScaleUpAnimationDuration { get; }"}</code> | <span className="api-desc">Seconds for a shrunken item to grow back. Default 0.3.</span> |
| <Link id="m-shrinkingparticles-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ShrinkingParticles { get; }"}</code> | <span className="api-desc">Particles played when an item shrinks.</span> |
| <Link id="m-shrunkendefaultvisual-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ShrunkenDefaultVisual { get; }"}</code> | <span className="api-desc">Default visual for a shrunken item.</span> |
| <Link id="m-simpletextpopup-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" SimpleTextPopup { get; }"}</code> | <span className="api-desc">Pooled simple text popup.</span> |
| <Link id="m-sizeofshrunkenpickups-2" /><code>{"float SizeOfShrunkenPickups { get; }"}</code> | <span className="api-desc">Size items shrink to. Default 0.1.</span> |
| <Link id="m-smoothlerp-2" /><code>{"float SmoothLerp { get; }"}</code> | <span className="api-desc">Smoothing used by position recorders. Default 0.1.</span> |
| <Link id="m-smoothlocomotionfollowdiscard-2" /><code>{"float SmoothLocomotionFollowDiscard { get; }"}</code> | <span className="api-desc">Scale on smooth movement passed to `LocomotionController.DistanceTravelled`. Default 0.8.</span> |
| <Link id="m-visualdoubledefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" VisualDoubleDefinition { get; }"}</code> | <span className="api-desc">Pooled visual double used by visual effects utilities.</span> |
| <Link id="m-weightmaxperhand-2" /><code>{"float WeightMaxPerHand { get; }"}</code> | <span className="api-desc">Default 8. Nothing in the server build reads it.</span> |
| <Link id="m-weightpenalty-2" /><code>{"float WeightPenalty { get; }"}</code> | <span className="api-desc">Default 0.075. Nothing in the server build reads it.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethardnessinnefectivehiteffect" /><code><Link to="/mod/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" GetHardnessInnefectiveHitEffect("}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" channel)"}</code> | <span className="api-desc">Hit effect for a channel when the hit is too soft to work. Falls back to the first entry.</span> |
| <Link id="m-getpickupsettings" /><code>{"T GetPickupSettings<T>("}<Link to="/mod/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{" type)"}</code> | <span className="api-desc">Settings for a grip type, cast to the given type. Logs an error and returns null if missing.</span> |
| <Link id="m-getpositionrecorder" /><code>{"static void GetPositionRecorder(ref "}<Link to="/mod/game-api/types/global-p/positionrecorder">{"PositionRecorder"}</Link>{" recorder)"}</code> | <span className="api-desc">Takes a position recorder from the shared pool, or makes one.</span> |
| <Link id="m-gettemperaturecolor" /><code>{"Color GetTemperatureColor(float temperature)"}</code> | <span className="api-desc">Glow colour for a temperature, from the gradient and bias curve.</span> |
| <Link id="m-releasepositionrecorder" /><code>{"static void ReleasePositionRecorder(ref "}<Link to="/mod/game-api/types/global-p/positionrecorder">{"PositionRecorder"}</Link>{" recorder)"}</code> | <span className="api-desc">Returns a position recorder to the pool, up to the pool limit.</span> |
| <Link id="m-warmdictionary" /><code>{"void WarmDictionary()"}</code> | <span className="api-desc">Builds the grip type lookup if it has not been built.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filldictionary" /><code>{"private void FillDictionary()"}</code> | <span className="api-desc">Builds the joint type lookup from `pickupTypeSettings`, logging an error for duplicate types.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PickupTypeSettings`:

<div className="api-used-in">

[`JointInsert.settings`](/mod/game-api/types/alta-crafting/jointinsert#m-settings).

</div>
