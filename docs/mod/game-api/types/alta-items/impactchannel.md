---
title: "ImpactChannel"
description: "Asset naming a damage channel that impactors can deal on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactChannel

A **class** in `Root.Township`, `Alta.Impact`.

Asset naming a damage channel that impactors can deal on.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ImpactChannel.Create`](/mod/game-api/types/alta-items/impactchannel-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-items/impactchannel-create)
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactChannel()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-popupcolor" /><code>{"private Color popUpColor"}</code> | <span className="api-desc">Backing field for `PopupColor`. Grey by default.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-popupcolor-2" /><code>{"Color PopupColor { get; }"}</code> | <span className="api-desc">Colour of the damage popup for this channel. Grey by default.</span> |

## Used in

Members of other types that take, return or hold a `ImpactChannel`:

<div className="api-used-in">

[`ImpactDetector.channels`](/mod/game-api/types/alta-items/impactdetector#m-channels), [`ImpactDetector.Channels`](/mod/game-api/types/alta-items/impactdetector#m-channels-2), [`ImpactGenerator.Channels`](/mod/game-api/types/alta-items/impactgenerator#m-channels), [`ImpactHitWithTool.FirstChannel`](/mod/game-api/types/alta-items/impacthitwithtool#m-firstchannel), [`ImpactHitWithTool.ImpactHitWithTool`](/mod/game-api/types/alta-items/impacthitwithtool#m-ctor-2), [`ImpactorValues.channels`](/mod/game-api/types/alta-items/impactorvalues#m-channels), [`ImpactorValues.Channels`](/mod/game-api/types/alta-items/impactorvalues#m-channels-2), [`ImpactTool.Channels`](/mod/game-api/types/alta-items/impacttool#m-channels), [`ImpactTool.GenerateHit`](/mod/game-api/types/alta-items/impacttool#m-generatehit), [`ImpactTool.GetFullTriggerHit`](/mod/game-api/types/alta-items/impacttool#m-getfulltriggerhit), [`ImpactTool.GetOverlapChannel`](/mod/game-api/types/alta-items/impacttool#m-getoverlapchannel), [`ImpactTool.GetTriggerHit`](/mod/game-api/types/alta-items/impacttool#m-gettriggerhit), [`ParticleImpactor.channel`](/mod/game-api/types/alta-items/particleimpactor#m-channel), [`ParticleImpactor.Channel`](/mod/game-api/types/alta-items/particleimpactor#m-channel-2), [`SparkSecondaryDetector.sparkChannels`](/mod/game-api/types/alta-items/sparksecondarydetector#m-sparkchannels), [`TriggerImpactDetector.channels`](/mod/game-api/types/alta-items/triggerimpactdetector#m-channels), [`TriggerImpactDetectorBase.channels`](/mod/game-api/types/alta-items/triggerimpactdetectorbase#m-channels), [`DamagePopup.UpdateValue`](/mod/game-api/types/alta-utilities/damagepopup#m-updatevalue), [`AreaAttackSkill.targetChannels`](/mod/game-api/types/global-a-b/areaattackskill#m-targetchannels), [`AreaAttackSkill.toolRequiredChannels`](/mod/game-api/types/global-a-b/areaattackskill#m-toolrequiredchannels), [`BaseImpactChannelProgressionFilter.channel`](/mod/game-api/types/global-a-b/baseimpactchannelprogressionfilter#m-channel), [`BaseImpactChannelProgressionFilter.Channel`](/mod/game-api/types/global-a-b/baseimpactchannelprogressionfilter#m-channel-2), [`DiggingImpactorSettings.diggingChannels`](/mod/game-api/types/global-c-d/diggingimpactorsettings#m-diggingchannels), [`DiggingImpactorSettings.DiggingChannels`](/mod/game-api/types/global-c-d/diggingimpactorsettings#m-diggingchannels-2), [`Explosive.channels`](/mod/game-api/types/global-e-h/explosive#m-channels), [`HeartCall.targetChannel`](/mod/game-api/types/global-e-h/heartcall#m-targetchannel), [`HebiosEnchant.targetImpactChannel`](/mod/game-api/types/global-e-h/hebiosenchant#m-targetimpactchannel), [`MiningEcho.targetChannels`](/mod/game-api/types/global-m-o/miningecho#m-targetchannels), [`PickupTypeSettings.blockChannel`](/mod/game-api/types/global-p/pickuptypesettings#m-blockchannel), [`PickupTypeSettings.BlockChannel`](/mod/game-api/types/global-p/pickuptypesettings#m-blockchannel-2), [`PickupTypeSettings.GetHardnessInnefectiveHitEffect`](/mod/game-api/types/global-p/pickuptypesettings#m-gethardnessinnefectivehiteffect), [`PickupTypeSettings.ChannelInneficientHardnessHitEffect.channel`](/mod/game-api/types/global-p/pickuptypesettings-channelinneficienthardnesshiteffect#m-channel), [`PowerCrossSlash.targetChannel`](/mod/game-api/types/global-p/powercrossslash#m-targetchannel), [`PowerHit.targetImpactChannel`](/mod/game-api/types/global-p/powerhit#m-targetimpactchannel), [`PowerStinger.targetChannel`](/mod/game-api/types/global-p/powerstinger#m-targetchannel), [`PowerStinger.targetChannels`](/mod/game-api/types/global-p/powerstinger#m-targetchannels), [`ProgressionSettings.pathImpactChannelMap`](/mod/game-api/types/global-p/progressionsettings#m-pathimpactchannelmap), [`ProgressionSettings.PathImpactChannel.channel`](/mod/game-api/types/global-p/progressionsettings-pathimpactchannel#m-channel), [`ProgressionSettings.PathImpactChannel.Channel`](/mod/game-api/types/global-p/progressionsettings-pathimpactchannel#m-channel-2), [`StrikeSuccessionInputStructure.targetChannel`](/mod/game-api/types/global-s/strikesuccessioninputstructure#m-targetchannel), [`StrikeSuccessionInputStructure.TargetChannel`](/mod/game-api/types/global-s/strikesuccessioninputstructure#m-targetchannel-2), [`TemperatureCheckInputStructure.targetChannels`](/mod/game-api/types/global-t-x/temperaturecheckinputstructure#m-targetchannels).

</div>
