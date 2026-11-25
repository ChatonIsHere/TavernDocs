---
title: "GameAchievement"
description: "An achievement asset: a player progress flag that can play an effect and lists cosmetic SKUs to reward."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameAchievement

A **class** in `Root.Township`, no namespace.

An achievement asset: a player progress flag that can play an effect and lists cosmetic SKUs to reward. Get all of them through `All`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PlayerProgressFlag`](/game-api/types/global-p/playerprogressflag)
- **Derived types** [`AchievementGroupAchievement`](/game-api/types/global-a-b/achievementgroupachievement), [`AutoFestiveAchievement`](/game-api/types/game-other-namespaces/autofestiveachievement), [`StatReachedAchievement`](/game-api/types/global-s/statreachedachievement)
- **Attributes** `CreateAssetMenu`, `TypeConverter`
- **Documented in** [Arguments and results](/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GameAchievement()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isshowingeffect" /><code>{"private bool isShowingEffect"}</code> |
| <Link id="m-overridecompletedeffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" overrideCompletedEffectDefinition"}</code> |
| <Link id="m-rewardskus" /><code>{"private List<string> rewardSkus"}</code> |
| <Link id="m-supporteronlyrewardskus" /><code>{"private List<string> supporterOnlyRewardSkus"}</code> |
| <Link id="m-unlockdelayinseconds" /><code>{"private float unlockDelayInSeconds"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-all" /><code>{"static IEnumerable<"}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{"> All { get; }"}</code> | Every loaded `GameAchievement` asset. |
| <Link id="m-effectdefinition" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" EffectDefinition { get; }"}</code> | Effect played on completion: the override, or the default from `GameAchievementSettings`. |
| <Link id="m-isshowingeffect-2" /><code>{"bool IsShowingEffect { get; }"}</code> | Whether completing it plays the effect. |
| <Link id="m-rewardskus-2" /><code>{"IEnumerable<string> RewardSkus { get; }"}</code> | Cosmetic SKUs given as rewards. |
| <Link id="m-supporteronlyrewardskus-2" /><code>{"IEnumerable<string> SupporterOnlyRewardSkus { get; }"}</code> | Cosmetic SKUs given only to supporters. |
| <Link id="m-unlockdelayinseconds-2" /><code>{"float UnlockDelayInSeconds { get; }"}</code> | Configured delay before the unlock. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-completedbyplayer" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{"> CompletedByPlayer"}</code> | Raised when a player completes the achievement. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-complete" /><code>{"virtual void Complete("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Raises `CompletedByPlayer` for the player. Subclasses can add their own checks. |
| <Link id="m-initialize" /><code>{"virtual void Initialize()"}</code> | Setup hook for subclasses. Empty by default. |

## Used in

Members of other types that take, return or hold a `GameAchievement`:

[`AchievementBoard.achievements`](/game-api/types/global-a-b/achievementboard#m-achievements), [`AchievementBoard.UpdateAchievement`](/game-api/types/global-a-b/achievementboard#m-updateachievement), [`AchievementEffectHandler.CallEffect`](/game-api/types/global-a-b/achievementeffecthandler#m-calleffect), [`AchievementEffectHandler.effectQueue`](/game-api/types/global-a-b/achievementeffecthandler#m-effectqueue), [`AchievementGroupAchievement.CheckCompletion`](/game-api/types/global-a-b/achievementgroupachievement#m-checkcompletion), [`AchievementGroupAchievement.requiredAchievements`](/game-api/types/global-a-b/achievementgroupachievement#m-requiredachievements), [`AchievementItem.achievement`](/game-api/types/global-a-b/achievementitem#m-achievement), [`AchievementItem.SetAchievement`](/game-api/types/global-a-b/achievementitem#m-setachievement), [`Landmark.findAction`](/game-api/types/alta-world/landmark#m-findaction), [`LandmarkSaveData.FindAction`](/game-api/types/alta-world/landmarksavedata#m-findaction), [`StaticAchievementTrigger.findAction`](/game-api/types/alta-world/staticachievementtrigger#m-findaction), [`GameTaskManager.ClearAchievementForPlayer`](/game-api/types/global-e-h/gametaskmanager#m-clearachievementforplayer), [`GameTaskManager.IsAchievementCompletedByPlayer`](/game-api/types/global-e-h/gametaskmanager#m-isachievementcompletedbyplayer), [`GameTaskManager.IsAchievementLocallyCompleted`](/game-api/types/global-e-h/gametaskmanager#m-isachievementlocallycompleted), [`GameTaskManager.LocalCompletedAchievement`](/game-api/types/global-e-h/gametaskmanager#m-localcompletedachievement), [`GameTaskManager.OnPlayerCompletedAchievement`](/game-api/types/global-e-h/gametaskmanager#m-onplayercompletedachievement), [`IAchievementItem.SetAchievement`](/game-api/types/global-i-l/iachievementitem#m-setachievement), [`PlayerTracker.CompletedAchievements`](/game-api/types/global-p/playertracker#m-completedachievements), [`ProfessionSkill.targetAchievement`](/game-api/types/global-p/professionskill#m-targetachievement), [`ProgressionSettings.get8SkillsAchievement`](/game-api/types/global-p/progressionsettings#m-get8skillsachievement), [`ProgressionSettings.Get8SkillsAchievement`](/game-api/types/global-p/progressionsettings#m-get8skillsachievement-2), [`QuestBoard.activeQuest`](/game-api/types/global-q-r/questboard#m-activequest), [`ServerAchievementEvent.CompletedAchievement`](/game-api/types/global-s/serverachievementevent#m-completedachievement), [`ServerAchievementEvent.targetAchievement`](/game-api/types/global-s/serverachievementevent#m-targetachievement), [`TaskCompletedEvent.CheckCompleteTask`](/game-api/types/global-t-x/taskcompletedevent#m-checkcompletetask), [`TaskCompletedEvent.SetAchievement`](/game-api/types/global-t-x/taskcompletedevent#m-setachievement), [`TaskCompletedEvent.targetAchievement`](/game-api/types/global-t-x/taskcompletedevent#m-targetachievement).
