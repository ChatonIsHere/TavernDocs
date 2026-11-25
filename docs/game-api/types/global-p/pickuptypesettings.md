---
title: "PickupTypeSettings"
description: "Global settings for held items: per-grip-type settings, damage popups, crafting line visuals, shrink and break effects, and stat definitions used for damage."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupTypeSettings

A **class** in `Root.Township`, no namespace.

Global settings for held items: per-grip-type settings, damage popups, crafting line visuals, shrink and break effects, and stat definitions used for damage. Get it with `GlobalSettings<PickupTypeSettings>.Instance`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`GlobalSettings<PickupTypeSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`PickupTypeSettings`](/game-api/types/global-p/pickuptypesettings), [`PickupTypeSettings.Create`](/game-api/types/global-p/pickuptypesettings-create)
- **Nested types** [`ChannelInneficientHardnessHitEffect`](/game-api/types/global-p/pickuptypesettings-channelinneficienthardnesshiteffect), [`Create`](/game-api/types/global-p/pickuptypesettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupTypeSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-damagemessage" /><code>{"static "}<Link to="/game-api/types/global-t-x/togglebool">{"ToggleBool"}</Link>{" DamageMessage"}</code> | Console toggle `damagemessage`: when on, the local player sees a "Damage:" message for each hit. |
| <Link id="m-haspopup" /><code>{"static "}<Link to="/game-api/types/global-t-x/togglebool">{"ToggleBool"}</Link>{" HasPopup"}</code> | Console toggle `damagepopup`: when on, hits show damage number popups for the local player. |
| <Link id="m-activelinecolor" /><code>{"private Color activeLineColor"}</code> |  |
| <Link id="m-androidactivelinecolor" /><code>{"private Color androidActiveLineColor"}</code> |  |
| <Link id="m-androidcraftinglineiterations" /><code>{"private int androidCraftingLineIterations"}</code> |  |
| <Link id="m-androiddefaultbreakeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidDefaultBreakEffect"}</code> |  |
| <Link id="m-androidnormallinecolor" /><code>{"private Color androidNormalLineColor"}</code> |  |
| <Link id="m-androidpickupdockmaterial" /><code>{"private Material androidPickupDockMaterial"}</code> |  |
| <Link id="m-attachedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" attachedEffect"}</code> |  |
| <Link id="m-blockchannel" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] blockChannel"}</code> |  |
| <Link id="m-craftinglineiterations" /><code>{"private int craftingLineIterations"}</code> |  |
| <Link id="m-craftinglinematerial" /><code>{"private Material craftingLineMaterial"}</code> |  |
| <Link id="m-craftinglinevelocity" /><code>{"private float craftingLineVelocity"}</code> |  |
| <Link id="m-crippledamageprotectiondefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" crippleDamageProtectionDefinition"}</code> |  |
| <Link id="m-cripplehealthdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" crippleHealthDefinition"}</code> |  |
| <Link id="m-damagedefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" damageDefinition"}</code> |  |
| <Link id="m-damagepopup" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" damagePopup"}</code> |  |
| <Link id="m-damageprotectiondefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" damageProtectionDefinition"}</code> |  |
| <Link id="m-debugbubbleinspectordefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" debugBubbleInspectorDefinition"}</code> |  |
| <Link id="m-defaultbreakeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" defaultBreakEffect"}</code> |  |
| <Link id="m-defaultbreaksound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" defaultBreakSound"}</code> |  |
| <Link id="m-dissolvingpagedefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" dissolvingPageDefinition"}</code> |  |
| <Link id="m-hitcooldown" /><code>{"private float hitCooldown"}</code> |  |
| <Link id="m-impactorarraysize" /><code>{"private int impactorArraySize"}</code> |  |
| <Link id="m-largertextpopup" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" largerTextPopup"}</code> |  |
| <Link id="m-linespooldefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" linesPoolDefinition"}</code> |  |
| <Link id="m-maxdistancetowaitinteractconfirmation" /><code>{"private float maxDistanceToWaitInteractConfirmation"}</code> |  |
| <Link id="m-maxrecorderpoolsize" /><code>{"private int maxRecorderPoolSize"}</code> |  |
| <Link id="m-minimumdistancetoteleportsquared" /><code>{"private float minimumDistanceToTeleportSquared"}</code> |  |
| <Link id="m-normallinecolor" /><code>{"private Color normalLineColor"}</code> |  |
| <Link id="m-perchannelhardnessinnefectivehiteffect" /><code>{"private "}<Link to="/game-api/types/global-p/pickuptypesettings-channelinneficienthardnesshiteffect">{"PickupTypeSettings.ChannelInneficientHardnessHitEffect"}</Link>{"[] perChannelHardnessInnefectiveHitEffect"}</code> |  |
| <Link id="m-pickupmovingghost" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pickupMovingGhost"}</code> |  |
| <Link id="m-pickupsettings" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{", "}<Link to="/game-api/types/global-p/pickuptypesetting">{"PickupTypeSetting"}</Link>{"> pickupSettings"}</code> |  |
| <Link id="m-pickuptypesettings" /><code>{"private "}<Link to="/game-api/types/global-p/pickuptypesetting">{"PickupTypeSetting"}</Link>{"[] pickupTypeSettings"}</code> |  |
| <Link id="m-recorders" /><code>{"private static Stack<"}<Link to="/game-api/types/global-p/positionrecorder">{"PositionRecorder"}</Link>{"> recorders"}</code> |  |
| <Link id="m-scaleupanimationduration" /><code>{"private float scaleUpAnimationDuration"}</code> |  |
| <Link id="m-shrinkingparticles" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" shrinkingParticles"}</code> |  |
| <Link id="m-shrunkendefaultvisual" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" shrunkenDefaultVisual"}</code> |  |
| <Link id="m-simpletextpopup" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" simpleTextPopup"}</code> |  |
| <Link id="m-sizeofshrunkenpickups" /><code>{"private float sizeOfShrunkenPickups"}</code> |  |
| <Link id="m-smoothlerp" /><code>{"private float smoothLerp"}</code> |  |
| <Link id="m-smoothlocomotionfollowdiscard" /><code>{"private float smoothLocomotionFollowDiscard"}</code> |  |
| <Link id="m-temperaturecolor" /><code>{"private Gradient temperatureColor"}</code> |  |
| <Link id="m-temperaturetocolorbias" /><code>{"private AnimationCurve temperatureToColorBias"}</code> |  |
| <Link id="m-visualdoubledefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" visualDoubleDefinition"}</code> |  |
| <Link id="m-weightmaxperhand" /><code>{"private float weightMaxPerHand"}</code> |  |
| <Link id="m-weightpenalty" /><code>{"private float weightPenalty"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activelinecolor-2" /><code>{"Color ActiveLineColor { get; }"}</code> | Colour of an active crafting guide line. |
| <Link id="m-attachedeffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" AttachedEffect { get; }"}</code> | Effect played where two crafting parts join. |
| <Link id="m-blockchannel-2" /><code><Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] BlockChannel { get; }"}</code> | Impact channels used for blocking hits. |
| <Link id="m-craftinglineiterations-2" /><code>{"int CraftingLineIterations { get; }"}</code> | Number of segments in a crafting guide line. |
| <Link id="m-craftinglinematerial-2" /><code>{"Material CraftingLineMaterial { get; }"}</code> | Material for crafting guide lines. |
| <Link id="m-craftinglinevelocity-2" /><code>{"float CraftingLineVelocity { get; }"}</code> | Speed of the crafting guide line animation. |
| <Link id="m-crippledamageprotectiondefinition-2" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" CrippleDamageProtectionDefinition { get; }"}</code> | Stat for cripple damage protection. |
| <Link id="m-cripplehealthdefinition-2" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" CrippleHealthDefinition { get; }"}</code> | Stat for cripple health. |
| <Link id="m-damagedefinition-2" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" DamageDefinition { get; }"}</code> | Stat for damage. |
| <Link id="m-damagepopup-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DamagePopup { get; }"}</code> | Pooled damage number popup. |
| <Link id="m-damagepopupmultiplier" /><code>{"float DamagePopupMultiplier { get; set; }"}</code> | Multiplier on numbers shown in damage popups. Default 1. |
| <Link id="m-damagepopupprecision" /><code>{"int DamagePopupPrecision { get; set; }"}</code> | Decimal places in damage popups. Default 2. |
| <Link id="m-damageprotectiondefinition-2" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" DamageProtectionDefinition { get; }"}</code> | Stat for damage protection. |
| <Link id="m-debugbubbleinspectordefinition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DebugBubbleInspectorDefinition { get; }"}</code> | Pooled debug bubble inspector. |
| <Link id="m-defaultbreakeffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DefaultBreakEffect { get; }"}</code> | Effect played when an item breaks, if it has none of its own. |
| <Link id="m-defaultbreaksound-2" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" DefaultBreakSound { get; }"}</code> | Sound played when an item breaks, if it has none of its own. |
| <Link id="m-dissolvingpagedefinition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DissolvingPageDefinition { get; }"}</code> | Pooled dissolving page effect. |
| <Link id="m-hitcooldown-2" /><code>{"float HitCooldown { get; }"}</code> | Seconds before the same tool can hit the same detector again. Default 0.1. |
| <Link id="m-impactorarraysize-2" /><code>{"int ImpactorArraySize { get; }"}</code> | Number of positions each position recorder keeps. Default 20. |
| <Link id="m-largertextpopup-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" LargerTextPopup { get; }"}</code> | Pooled larger text popup. |
| <Link id="m-linespooldefinition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" LinesPoolDefinition { get; }"}</code> | Pool for crafting guide lines. |
| <Link id="m-maxdistancetowaitinteractconfirmation-2" /><code>{"float MaxDistanceToWaitInteractConfirmation { get; }"}</code> | Distance within which an interaction waits for server confirmation. Default 0.2. |
| <Link id="m-minimumdistancetoteleportsquared-2" /><code>{"float MinimumDistanceToTeleportSquared { get; }"}</code> | Squared distance a grabbed pickup must be from the hand before it is moved into it. Default 0.25. |
| <Link id="m-normallinecolor-2" /><code>{"Color NormalLineColor { get; }"}</code> | Colour of an inactive crafting guide line. |
| <Link id="m-pickupmovingghost-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" PickupMovingGhost { get; }"}</code> | Pooled ghost shown when items move between docks. |
| <Link id="m-scaleupanimationduration-2" /><code>{"float ScaleUpAnimationDuration { get; }"}</code> | Seconds for a shrunken item to grow back. Default 0.3. |
| <Link id="m-shrinkingparticles-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ShrinkingParticles { get; }"}</code> | Particles played when an item shrinks. |
| <Link id="m-shrunkendefaultvisual-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ShrunkenDefaultVisual { get; }"}</code> | Default visual for a shrunken item. |
| <Link id="m-simpletextpopup-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" SimpleTextPopup { get; }"}</code> | Pooled simple text popup. |
| <Link id="m-sizeofshrunkenpickups-2" /><code>{"float SizeOfShrunkenPickups { get; }"}</code> | Size items shrink to. Default 0.1. |
| <Link id="m-smoothlerp-2" /><code>{"float SmoothLerp { get; }"}</code> | Smoothing used by position recorders. Default 0.1. |
| <Link id="m-smoothlocomotionfollowdiscard-2" /><code>{"float SmoothLocomotionFollowDiscard { get; }"}</code> | Scale on smooth movement passed to `LocomotionController.DistanceTravelled`. Default 0.8. |
| <Link id="m-visualdoubledefinition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" VisualDoubleDefinition { get; }"}</code> | Pooled visual double used by visual effects utilities. |
| <Link id="m-weightmaxperhand-2" /><code>{"float WeightMaxPerHand { get; }"}</code> | Default 8. Nothing in the server build reads it. |
| <Link id="m-weightpenalty-2" /><code>{"float WeightPenalty { get; }"}</code> | Default 0.075. Nothing in the server build reads it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethardnessinnefectivehiteffect" /><code><Link to="/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" GetHardnessInnefectiveHitEffect("}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" channel)"}</code> | Hit effect for a channel when the hit is too soft to work. Falls back to the first entry. |
| <Link id="m-getpickupsettings" /><code>{"T GetPickupSettings<T>("}<Link to="/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{" type)"}</code> | Settings for a grip type, cast to the given type. Logs an error and returns null if missing. |
| <Link id="m-getpositionrecorder" /><code>{"static void GetPositionRecorder(ref "}<Link to="/game-api/types/global-p/positionrecorder">{"PositionRecorder"}</Link>{" recorder)"}</code> | Takes a position recorder from the shared pool, or makes one. |
| <Link id="m-gettemperaturecolor" /><code>{"Color GetTemperatureColor(float temperature)"}</code> | Glow colour for a temperature, from the gradient and bias curve. |
| <Link id="m-releasepositionrecorder" /><code>{"static void ReleasePositionRecorder(ref "}<Link to="/game-api/types/global-p/positionrecorder">{"PositionRecorder"}</Link>{" recorder)"}</code> | Returns a position recorder to the pool, up to the pool limit. |
| <Link id="m-warmdictionary" /><code>{"void WarmDictionary()"}</code> | Builds the grip type lookup if it has not been built. |
| <Link id="m-filldictionary" /><code>{"private void FillDictionary()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PickupTypeSettings`:

[`JointInsert.settings`](/game-api/types/alta-crafting/jointinsert#m-settings).
