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
| <Link id="m-ctor" /><code>{"PickupTypeSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-damagemessage" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/togglebool">{"ToggleBool"}</Link>{" DamageMessage"}</code> | Console toggle `damagemessage`: when on, the local player sees a "Damage:" message for each hit. |
| <Link id="m-haspopup" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/togglebool">{"ToggleBool"}</Link>{" HasPopup"}</code> | Console toggle `damagepopup`: when on, hits show damage number popups for the local player. |

<details>
<summary>45 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activelinecolor" /><code>{"private Color activeLineColor"}</code> | Backing field for `ActiveLineColor`. |
| <Link id="m-androidactivelinecolor" /><code>{"private Color androidActiveLineColor"}</code> | Android version of the active crafting line colour. Nothing reads it in the server build. |
| <Link id="m-androidcraftinglineiterations" /><code>{"private int androidCraftingLineIterations"}</code> | Android version of `craftingLineIterations`. Nothing reads it in the server build. |
| <Link id="m-androiddefaultbreakeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidDefaultBreakEffect"}</code> | Android version of the default break effect. Nothing reads it in the server build. |
| <Link id="m-androidnormallinecolor" /><code>{"private Color androidNormalLineColor"}</code> | Android version of the normal crafting line colour. Nothing reads it in the server build. |
| <Link id="m-androidpickupdockmaterial" /><code>{"private Material androidPickupDockMaterial"}</code> | Android dock material. Nothing reads it in the server build. |
| <Link id="m-attachedeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" attachedEffect"}</code> | Backing field for `AttachedEffect`. |
| <Link id="m-blockchannel" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] blockChannel"}</code> | Backing field for `BlockChannel`. |
| <Link id="m-craftinglineiterations" /><code>{"private int craftingLineIterations"}</code> | Backing field for `CraftingLineIterations`. |
| <Link id="m-craftinglinematerial" /><code>{"private Material craftingLineMaterial"}</code> | Backing field for `CraftingLineMaterial`. |
| <Link id="m-craftinglinevelocity" /><code>{"private float craftingLineVelocity"}</code> | Backing field for `CraftingLineVelocity`. |
| <Link id="m-crippledamageprotectiondefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" crippleDamageProtectionDefinition"}</code> | Backing field for `CrippleDamageProtectionDefinition`. |
| <Link id="m-cripplehealthdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" crippleHealthDefinition"}</code> | Backing field for `CrippleHealthDefinition`. |
| <Link id="m-damagedefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" damageDefinition"}</code> | Backing field for `DamageDefinition`. |
| <Link id="m-damagepopup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" damagePopup"}</code> | Backing field for `DamagePopup`. |
| <Link id="m-damageprotectiondefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" damageProtectionDefinition"}</code> | Backing field for `DamageProtectionDefinition`. |
| <Link id="m-debugbubbleinspectordefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" debugBubbleInspectorDefinition"}</code> | Backing field for `DebugBubbleInspectorDefinition`. |
| <Link id="m-defaultbreakeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" defaultBreakEffect"}</code> | Backing field for `DefaultBreakEffect`. |
| <Link id="m-defaultbreaksound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" defaultBreakSound"}</code> | Backing field for `DefaultBreakSound`. |
| <Link id="m-dissolvingpagedefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" dissolvingPageDefinition"}</code> | Backing field for `DissolvingPageDefinition`. |
| <Link id="m-hitcooldown" /><code>{"private float hitCooldown"}</code> | Backing field for `HitCooldown`. |
| <Link id="m-impactorarraysize" /><code>{"private int impactorArraySize"}</code> | Backing field for `ImpactorArraySize`. |
| <Link id="m-largertextpopup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" largerTextPopup"}</code> | Backing field for `LargerTextPopup`. |
| <Link id="m-linespooldefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" linesPoolDefinition"}</code> | Backing field for `LinesPoolDefinition`. |
| <Link id="m-maxdistancetowaitinteractconfirmation" /><code>{"private float maxDistanceToWaitInteractConfirmation"}</code> | Backing field for `MaxDistanceToWaitInteractConfirmation`. |
| <Link id="m-maxrecorderpoolsize" /><code>{"private int maxRecorderPoolSize"}</code> | Most `PositionRecorder` objects kept in the pool; extra ones released are dropped. |
| <Link id="m-minimumdistancetoteleportsquared" /><code>{"private float minimumDistanceToTeleportSquared"}</code> | Backing field for `MinimumDistanceToTeleportSquared`, stored squared. |
| <Link id="m-normallinecolor" /><code>{"private Color normalLineColor"}</code> | Backing field for `NormalLineColor`. |
| <Link id="m-perchannelhardnessinnefectivehiteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickuptypesettings-channelinneficienthardnesshiteffect">{"PickupTypeSettings.ChannelInneficientHardnessHitEffect"}</Link>{"[] perChannelHardnessInnefectiveHitEffect"}</code> | Impact effects for hits too soft to work, per impact channel. The first entry is the fallback. |
| <Link id="m-pickupmovingghost" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pickupMovingGhost"}</code> | Backing field for `PickupMovingGhost`. |
| <Link id="m-pickupsettings" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{", "}<Link to="/mod/game-api/types/global-p/pickuptypesetting">{"PickupTypeSetting"}</Link>{"> pickupSettings"}</code> | Lookup from joint type to its `PickupTypeSetting`, built on first use. |
| <Link id="m-pickuptypesettings" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickuptypesetting">{"PickupTypeSetting"}</Link>{"[] pickupTypeSettings"}</code> | The per joint type pickup settings, as set in the asset. |
| <Link id="m-recorders" /><code>{"private static Stack<"}<Link to="/mod/game-api/types/global-p/positionrecorder">{"PositionRecorder"}</Link>{"> recorders"}</code> | Static pool of `PositionRecorder` objects used by `GetPositionRecorder` and `ReleasePositionRecorder`. |
| <Link id="m-scaleupanimationduration" /><code>{"private float scaleUpAnimationDuration"}</code> | Backing field for `ScaleUpAnimationDuration`. |
| <Link id="m-shrinkingparticles" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" shrinkingParticles"}</code> | Backing field for `ShrinkingParticles`. |
| <Link id="m-shrunkendefaultvisual" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" shrunkenDefaultVisual"}</code> | Backing field for `ShrunkenDefaultVisual`. |
| <Link id="m-simpletextpopup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" simpleTextPopup"}</code> | Backing field for `SimpleTextPopup`. |
| <Link id="m-sizeofshrunkenpickups" /><code>{"private float sizeOfShrunkenPickups"}</code> | Backing field for `SizeOfShrunkenPickups`. |
| <Link id="m-smoothlerp" /><code>{"private float smoothLerp"}</code> | Backing field for `SmoothLerp`. |
| <Link id="m-smoothlocomotionfollowdiscard" /><code>{"private float smoothLocomotionFollowDiscard"}</code> | Backing field for `SmoothLocomotionFollowDiscard`. |
| <Link id="m-temperaturecolor" /><code>{"private Gradient temperatureColor"}</code> | Gradient used by `GetTemperatureColor`. |
| <Link id="m-temperaturetocolorbias" /><code>{"private AnimationCurve temperatureToColorBias"}</code> | Curve that maps temperature to a point on `temperatureColor`. |
| <Link id="m-visualdoubledefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" visualDoubleDefinition"}</code> | Backing field for `VisualDoubleDefinition`. |
| <Link id="m-weightmaxperhand" /><code>{"private float weightMaxPerHand"}</code> | Backing field for `WeightMaxPerHand`. |
| <Link id="m-weightpenalty" /><code>{"private float weightPenalty"}</code> | Backing field for `WeightPenalty`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activelinecolor-2" /><code>{"Color ActiveLineColor { get; }"}</code> | Colour of an active crafting guide line. |
| <Link id="m-attachedeffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" AttachedEffect { get; }"}</code> | Effect played where two crafting parts join. |
| <Link id="m-blockchannel-2" /><code><Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] BlockChannel { get; }"}</code> | Impact channels used for blocking hits. |
| <Link id="m-craftinglineiterations-2" /><code>{"int CraftingLineIterations { get; }"}</code> | Number of segments in a crafting guide line. |
| <Link id="m-craftinglinematerial-2" /><code>{"Material CraftingLineMaterial { get; }"}</code> | Material for crafting guide lines. |
| <Link id="m-craftinglinevelocity-2" /><code>{"float CraftingLineVelocity { get; }"}</code> | Speed of the crafting guide line animation. |
| <Link id="m-crippledamageprotectiondefinition-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" CrippleDamageProtectionDefinition { get; }"}</code> | Stat for cripple damage protection. |
| <Link id="m-cripplehealthdefinition-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" CrippleHealthDefinition { get; }"}</code> | Stat for cripple health. |
| <Link id="m-damagedefinition-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" DamageDefinition { get; }"}</code> | Stat for damage. |
| <Link id="m-damagepopup-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DamagePopup { get; }"}</code> | Pooled damage number popup. |
| <Link id="m-damagepopupmultiplier" /><code>{"float DamagePopupMultiplier { get; set; }"}</code> | Multiplier on numbers shown in damage popups. Default 1. |
| <Link id="m-damagepopupprecision" /><code>{"int DamagePopupPrecision { get; set; }"}</code> | Decimal places in damage popups. Default 2. |
| <Link id="m-damageprotectiondefinition-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" DamageProtectionDefinition { get; }"}</code> | Stat for damage protection. |
| <Link id="m-debugbubbleinspectordefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DebugBubbleInspectorDefinition { get; }"}</code> | Pooled debug bubble inspector. |
| <Link id="m-defaultbreakeffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DefaultBreakEffect { get; }"}</code> | Effect played when an item breaks, if it has none of its own. |
| <Link id="m-defaultbreaksound-2" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" DefaultBreakSound { get; }"}</code> | Sound played when an item breaks, if it has none of its own. |
| <Link id="m-dissolvingpagedefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DissolvingPageDefinition { get; }"}</code> | Pooled dissolving page effect. |
| <Link id="m-hitcooldown-2" /><code>{"float HitCooldown { get; }"}</code> | Seconds before the same tool can hit the same detector again. Default 0.1. |
| <Link id="m-impactorarraysize-2" /><code>{"int ImpactorArraySize { get; }"}</code> | Number of positions each position recorder keeps. Default 20. |
| <Link id="m-largertextpopup-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" LargerTextPopup { get; }"}</code> | Pooled larger text popup. |
| <Link id="m-linespooldefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" LinesPoolDefinition { get; }"}</code> | Pool for crafting guide lines. |
| <Link id="m-maxdistancetowaitinteractconfirmation-2" /><code>{"float MaxDistanceToWaitInteractConfirmation { get; }"}</code> | Distance within which an interaction waits for server confirmation. Default 0.2. |
| <Link id="m-minimumdistancetoteleportsquared-2" /><code>{"float MinimumDistanceToTeleportSquared { get; }"}</code> | Squared distance a grabbed pickup must be from the hand before it is moved into it. Default 0.25. |
| <Link id="m-normallinecolor-2" /><code>{"Color NormalLineColor { get; }"}</code> | Colour of an inactive crafting guide line. |
| <Link id="m-pickupmovingghost-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" PickupMovingGhost { get; }"}</code> | Pooled ghost shown when items move between docks. |
| <Link id="m-scaleupanimationduration-2" /><code>{"float ScaleUpAnimationDuration { get; }"}</code> | Seconds for a shrunken item to grow back. Default 0.3. |
| <Link id="m-shrinkingparticles-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ShrinkingParticles { get; }"}</code> | Particles played when an item shrinks. |
| <Link id="m-shrunkendefaultvisual-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ShrunkenDefaultVisual { get; }"}</code> | Default visual for a shrunken item. |
| <Link id="m-simpletextpopup-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" SimpleTextPopup { get; }"}</code> | Pooled simple text popup. |
| <Link id="m-sizeofshrunkenpickups-2" /><code>{"float SizeOfShrunkenPickups { get; }"}</code> | Size items shrink to. Default 0.1. |
| <Link id="m-smoothlerp-2" /><code>{"float SmoothLerp { get; }"}</code> | Smoothing used by position recorders. Default 0.1. |
| <Link id="m-smoothlocomotionfollowdiscard-2" /><code>{"float SmoothLocomotionFollowDiscard { get; }"}</code> | Scale on smooth movement passed to `LocomotionController.DistanceTravelled`. Default 0.8. |
| <Link id="m-visualdoubledefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" VisualDoubleDefinition { get; }"}</code> | Pooled visual double used by visual effects utilities. |
| <Link id="m-weightmaxperhand-2" /><code>{"float WeightMaxPerHand { get; }"}</code> | Default 8. Nothing in the server build reads it. |
| <Link id="m-weightpenalty-2" /><code>{"float WeightPenalty { get; }"}</code> | Default 0.075. Nothing in the server build reads it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethardnessinnefectivehiteffect" /><code><Link to="/mod/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" GetHardnessInnefectiveHitEffect("}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" channel)"}</code> | Hit effect for a channel when the hit is too soft to work. Falls back to the first entry. |
| <Link id="m-getpickupsettings" /><code>{"T GetPickupSettings<T>("}<Link to="/mod/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{" type)"}</code> | Settings for a grip type, cast to the given type. Logs an error and returns null if missing. |
| <Link id="m-getpositionrecorder" /><code>{"static void GetPositionRecorder(ref "}<Link to="/mod/game-api/types/global-p/positionrecorder">{"PositionRecorder"}</Link>{" recorder)"}</code> | Takes a position recorder from the shared pool, or makes one. |
| <Link id="m-gettemperaturecolor" /><code>{"Color GetTemperatureColor(float temperature)"}</code> | Glow colour for a temperature, from the gradient and bias curve. |
| <Link id="m-releasepositionrecorder" /><code>{"static void ReleasePositionRecorder(ref "}<Link to="/mod/game-api/types/global-p/positionrecorder">{"PositionRecorder"}</Link>{" recorder)"}</code> | Returns a position recorder to the pool, up to the pool limit. |
| <Link id="m-warmdictionary" /><code>{"void WarmDictionary()"}</code> | Builds the grip type lookup if it has not been built. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filldictionary" /><code>{"private void FillDictionary()"}</code> | Builds the joint type lookup from `pickupTypeSettings`, logging an error for duplicate types. |

</details>

## Used in

Members of other types that take, return or hold a `PickupTypeSettings`:

[`JointInsert.settings`](/mod/game-api/types/alta-crafting/jointinsert#m-settings).
