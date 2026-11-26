---
title: "GameAchievement"
description: "An achievement asset: a player progress flag that can play an effect and lists cosmetic SKUs to reward."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameAchievement

A **class** in `Root.Township`, the global namespace.

An achievement asset: a player progress flag that can play an effect and lists cosmetic SKUs to reward. Get all of them through `All`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`PlayerProgressFlag`](/mod/game-api/types/global-p/playerprogressflag)
- **Derived types** [`AchievementGroupAchievement`](/mod/game-api/types/global-a-b/achievementgroupachievement), [`AutoFestiveAchievement`](/mod/game-api/types/game-other-namespaces/autofestiveachievement), [`StatReachedAchievement`](/mod/game-api/types/global-s/statreachedachievement)
- **Attributes** `CreateAssetMenu`, `TypeConverter`
- **Documented in** [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameAchievement()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isshowingeffect" /><code>{"private bool isShowingEffect"}</code> | <span className="api-desc">Backing field for `IsShowingEffect`. If false, the local player gets no completion effect.</span> |
| <Link id="m-overridecompletedeffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" overrideCompletedEffectDefinition"}</code> | <span className="api-desc">Completion effect to use instead of the global achievement earned effect.</span> |
| <Link id="m-rewardskus" /><code>{"private List<string> rewardSkus"}</code> | <span className="api-desc">Backing field for `RewardSkus`: cosmetic SKUs given as rewards.</span> |
| <Link id="m-supporteronlyrewardskus" /><code>{"private List<string> supporterOnlyRewardSkus"}</code> | <span className="api-desc">Backing field for `SupporterOnlyRewardSkus`: cosmetic SKUs only supporters get.</span> |
| <Link id="m-unlockdelayinseconds" /><code>{"private float unlockDelayInSeconds"}</code> | <span className="api-desc">Backing field for `UnlockDelayInSeconds`: client wait before showing the completion effect.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-all" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{"> All { get; }"}</code> | <span className="api-desc">Every loaded `GameAchievement` asset.</span> |
| <Link id="m-effectdefinition" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" EffectDefinition { get; }"}</code> | <span className="api-desc">Effect played on completion: the override, or the default from `GameAchievementSettings`.</span> |
| <Link id="m-isshowingeffect-2" /><code>{"bool IsShowingEffect { get; }"}</code> | <span className="api-desc">Whether completing it plays the effect.</span> |
| <Link id="m-rewardskus-2" /><code>{"IEnumerable<string> RewardSkus { get; }"}</code> | <span className="api-desc">Cosmetic SKUs given as rewards.</span> |
| <Link id="m-supporteronlyrewardskus-2" /><code>{"IEnumerable<string> SupporterOnlyRewardSkus { get; }"}</code> | <span className="api-desc">Cosmetic SKUs given only to supporters.</span> |
| <Link id="m-unlockdelayinseconds-2" /><code>{"float UnlockDelayInSeconds { get; }"}</code> | <span className="api-desc">Configured delay before the unlock.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-completedbyplayer" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{"> CompletedByPlayer"}</code> | <span className="api-desc">Raised when a player completes the achievement.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-complete" /><code>{"virtual void Complete("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Raises `CompletedByPlayer` for the player. Subclasses can add their own checks.</span> |
| <Link id="m-initialize" /><code>{"virtual void Initialize()"}</code> | <span className="api-desc">Setup hook for subclasses. Empty by default.</span> |

## Used in

Members of other types that take, return or hold a `GameAchievement`:

<div className="api-used-in">

[`AchievementBoard.achievements`](/mod/game-api/types/global-a-b/achievementboard#m-achievements), [`AchievementBoard.UpdateAchievement`](/mod/game-api/types/global-a-b/achievementboard#m-updateachievement), [`AchievementEffectHandler.CallEffect`](/mod/game-api/types/global-a-b/achievementeffecthandler#m-calleffect), [`AchievementEffectHandler.effectQueue`](/mod/game-api/types/global-a-b/achievementeffecthandler#m-effectqueue), [`AchievementGroupAchievement.CheckCompletion`](/mod/game-api/types/global-a-b/achievementgroupachievement#m-checkcompletion), [`AchievementGroupAchievement.requiredAchievements`](/mod/game-api/types/global-a-b/achievementgroupachievement#m-requiredachievements), [`AchievementItem.achievement`](/mod/game-api/types/global-a-b/achievementitem#m-achievement), [`AchievementItem.SetAchievement`](/mod/game-api/types/global-a-b/achievementitem#m-setachievement), [`Landmark.findAction`](/mod/game-api/types/alta-world/landmark#m-findaction), [`LandmarkSaveData.FindAction`](/mod/game-api/types/alta-world/landmarksavedata#m-findaction), [`StaticAchievementTrigger.findAction`](/mod/game-api/types/alta-world/staticachievementtrigger#m-findaction), [`GameTaskManager.ClearAchievementForPlayer`](/mod/game-api/types/global-e-h/gametaskmanager#m-clearachievementforplayer), [`GameTaskManager.IsAchievementCompletedByPlayer`](/mod/game-api/types/global-e-h/gametaskmanager#m-isachievementcompletedbyplayer), [`GameTaskManager.IsAchievementLocallyCompleted`](/mod/game-api/types/global-e-h/gametaskmanager#m-isachievementlocallycompleted), [`GameTaskManager.LocalCompletedAchievement`](/mod/game-api/types/global-e-h/gametaskmanager#m-localcompletedachievement), [`GameTaskManager.OnPlayerCompletedAchievement`](/mod/game-api/types/global-e-h/gametaskmanager#m-onplayercompletedachievement), [`IAchievementItem.SetAchievement`](/mod/game-api/types/global-i-l/iachievementitem#m-setachievement), [`PlayerTracker.CompletedAchievements`](/mod/game-api/types/global-p/playertracker#m-completedachievements), [`ProfessionSkill.targetAchievement`](/mod/game-api/types/global-p/professionskill#m-targetachievement), [`ProgressionSettings.get8SkillsAchievement`](/mod/game-api/types/global-p/progressionsettings#m-get8skillsachievement), [`ProgressionSettings.Get8SkillsAchievement`](/mod/game-api/types/global-p/progressionsettings#m-get8skillsachievement-2), [`QuestBoard.activeQuest`](/mod/game-api/types/global-q-r/questboard#m-activequest), [`ServerAchievementEvent.CompletedAchievement`](/mod/game-api/types/global-s/serverachievementevent#m-completedachievement), [`ServerAchievementEvent.targetAchievement`](/mod/game-api/types/global-s/serverachievementevent#m-targetachievement), [`TaskCompletedEvent.CheckCompleteTask`](/mod/game-api/types/global-t-x/taskcompletedevent#m-checkcompletetask), [`TaskCompletedEvent.SetAchievement`](/mod/game-api/types/global-t-x/taskcompletedevent#m-setachievement), [`TaskCompletedEvent.targetAchievement`](/mod/game-api/types/global-t-x/taskcompletedevent#m-targetachievement).

</div>
