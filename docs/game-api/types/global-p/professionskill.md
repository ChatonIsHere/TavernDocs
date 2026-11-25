---
title: "ProfessionSkill"
description: "Base for a skill in a progression tree: a hashed asset that players unlock and practise."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfessionSkill

An **abstract class** in `Root.Township`, no namespace.

Base for a skill in a progression tree: a hashed asset that players unlock and practise. Subclasses `ProfessionSkill<T>` keep a static `Instance` for checks like `PlayerUnlocked`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`HashedGeneralValue<ProfessionSkill>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`MiningEchoIntensity`](/game-api/types/global-m-o/miningechointensity), [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill), [`PickupBasedSkillModifier`](/game-api/types/global-p/pickupbasedskillmodifier), [`ProfessionSkill`](/game-api/types/global-p/professionskill), [`ProfessionSkill<T>`](/game-api/types/global-p/professionskill-t), [`StatBonusSkill`](/game-api/types/global-s/statbonusskill)
- **Nested types** [`ActiveEffect`](/game-api/types/global-p/professionskill-activeeffect)
- **Documented in** [Skills and unlocks](/game-api/game-systems/skills-and-unlocks)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ProfessionSkill()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | NLog logger shared by profession skills. |

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-activeeffects" /><code>{"private static Dictionary<uint, "}<Link to="/game-api/types/global-p/professionskill-activeeffect">{"ProfessionSkill.ActiveEffect"}</Link>{"> activeEffects"}</code> |
| <Link id="m-dynamiccontentprefabs" /><code>{"private List<"}<Link to="/game-api/types/global-p/positionednetworkprefab">{"PositionedNetworkPrefab"}</Link>{"> dynamicContentPrefabs"}</code> |
| <Link id="m-practiceglyphsprites" /><code>{"private Sprite[] practiceGlyphSprites"}</code> |
| <Link id="m-skillpracticetrigger" /><code>{"private uint skillPracticeTrigger"}</code> |
| <Link id="m-staticcontentprefabs" /><code>{"private List<"}<Link to="/game-api/types/global-p/positionedstaticprefab">{"PositionedStaticPrefab"}</Link>{"> staticContentPrefabs"}</code> |
| <Link id="m-targetachievement" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" targetAchievement"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dynamiccontentprefabs-2" /><code>{"List<"}<Link to="/game-api/types/global-p/positionednetworkprefab">{"PositionedNetworkPrefab"}</Link>{"> DynamicContentPrefabs { get; }"}</code> | Network prefabs a skill shrine testing area spawns when this skill's orb is opened. |
| <Link id="m-practiceglyphsprites-2" /><code>{"Sprite[] PracticeGlyphSprites { get; }"}</code> | Glyph images shown to show the player how to practise the skill. |
| <Link id="m-skillpracticetrigger-2" /><code>{"uint SkillPracticeTrigger { get; }"}</code> | Hash of the skill whose execution counts as practice for this one. Defaults to this skill's own hash. |
| <Link id="m-staticcontentprefabs-2" /><code>{"List<"}<Link to="/game-api/types/global-p/positionedstaticprefab">{"PositionedStaticPrefab"}</Link>{"> StaticContentPrefabs { get; }"}</code> | Static prefabs a skill shrine testing area places when this skill's orb is opened. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onskillexecuted" /><code>{"static event "}<Link to="/game-api/types/global-p/professionskilldelegate">{"ProfessionSkillDelegate"}</Link>{" OnSkillExecuted"}</code> | Static event raised whenever any skill fires; skill shrines use it to count practice. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-completetargetachievement" /><code>{"void CompleteTargetAchievement("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" player)"}</code> | Server: completes this skill's linked achievement for the player. |
| <Link id="m-lock" /><code>{"virtual void Lock("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" player)"}</code> | Called when a player loses the skill. Empty in the base class. |
| <Link id="m-releaseeffect" /><code>{"static void ReleaseEffect("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | Static: drops one skill's request for the shared tool effect on an entity. The effect goes when no skill still wants it. |
| <Link id="m-releaseeffect-2" /><code>{"static void ReleaseEffect(uint identifier, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, bool isForced = false)"}</code> | Static: drops one skill's request for the shared tool effect on an entity. The effect goes when no skill still wants it. |
| <Link id="m-requesteffect" /><code>{"static void RequestEffect("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, out "}<Link to="/game-api/types/global-t-x/toolbasedeffectbase">{"ToolBasedEffectBase"}</Link>{" effect)"}</code> | Static: gets the shared tool glow effect for an entity, creating it if needed. Extra skills get a dissipate effect instead. |
| <Link id="m-sendserializedmessage" /><code>{"virtual void SendSerializedMessage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes extra skill data in a progression skill message to one player. Empty in the base class. |
| <Link id="m-unlock" /><code>{"virtual void Unlock("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" player)"}</code> | Called when a player gains the skill. In `ProfessionSkill<T>` this also sets the static `Instance`. |
| <Link id="m-executeskill" /><code>{"protected void ExecuteSkill("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Raises `OnSkillExecuted` for the player. Subclasses call it when the skill fires. |
| <Link id="m-releasetooleffect" /><code>{"protected virtual void ReleaseToolEffect("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Releases this skill's tool effect on an entity. |
| <Link id="m-requesttooleffect" /><code>{"protected virtual void RequestToolEffect("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Requests the tool effect for an entity and starts it. |

## Used in

Members of other types that take, return or hold a `ProfessionSkill`:

[`ActionGlyphsPlacer.ActiveSkill`](/game-api/types/global-a-b/actionglyphsplacer#m-activeskill), [`BowStringPullbackInputMethod.ReceiveHit`](/game-api/types/global-a-b/bowstringpullbackinputmethod#m-receivehit), [`BowStringPullbackInputMethod.RegisterHandler`](/game-api/types/global-a-b/bowstringpullbackinputmethod#m-registerhandler), [`DownwardSwingInput.ReceiveHit`](/game-api/types/global-c-d/downwardswinginput#m-receivehit), [`DownwardSwingInput.RegisterHandler`](/game-api/types/global-c-d/downwardswinginput#m-registerhandler), [`HandPositionInput.ReceiveHit`](/game-api/types/global-e-h/handpositioninput#m-receivehit), [`HandPositionInput.RegisterHandler`](/game-api/types/global-e-h/handpositioninput#m-registerhandler), [`IInputBasedSkill.Skill`](/game-api/types/global-i-l/iinputbasedskill#m-skill), [`IProfessionSkillTester.InitializeForPlayer`](/game-api/types/global-i-l/iprofessionskilltester#m-initializeforplayer), [`ISkillInputMethod.ReceiveHit`](/game-api/types/global-i-l/iskillinputmethod#m-receivehit), [`ISkillInputMethod.RegisterHandler`](/game-api/types/global-i-l/iskillinputmethod#m-registerhandler), [`PickupBasedSkill.IInputBasedSkill.Skill`](/game-api/types/global-p/pickupbasedskill#m-iinputbasedskill-skill), [`PickupBasedSkillModifier.IInputBasedSkill.Skill`](/game-api/types/global-p/pickupbasedskillmodifier#m-iinputbasedskill-skill), [`PickupGrabInputMethod.ReceiveHit`](/game-api/types/global-p/pickupgrabinputmethod#m-receivehit), [`PickupGrabInputMethod.RegisterHandler`](/game-api/types/global-p/pickupgrabinputmethod#m-registerhandler), [`PlayerProgressionManager.GetLevel`](/game-api/types/global-p/playerprogressionmanager#m-getlevel), [`PlayerProgressionManager.sendingSkill`](/game-api/types/global-p/playerprogressionmanager#m-sendingskill), [`PlayerProgressionManager.SendMessage`](/game-api/types/global-p/playerprogressionmanager#m-sendmessage), [`PlayerProgressionManager.SendMessageToPlayer`](/game-api/types/global-p/playerprogressionmanager#m-sendmessagetoplayer), [`PlayerProgressionManager.SkillUnlocked`](/game-api/types/global-p/playerprogressionmanager#m-skillunlocked), [`PowerStrikeTester.InitializeForPlayer`](/game-api/types/global-p/powerstriketester#m-initializeforplayer), [`PowerStrikeTester.skill`](/game-api/types/global-p/powerstriketester#m-skill), [`PowerStrikeTester.UpdateCount`](/game-api/types/global-p/powerstriketester#m-updatecount), [`ProfessionSkill.ActiveEffect.Release`](/game-api/types/global-p/professionskill-activeeffect#m-release), [`ProfessionSkill.ActiveEffect.Request`](/game-api/types/global-p/professionskill-activeeffect#m-request), [`ProfessionSkill.ActiveEffect.requestedSkills`](/game-api/types/global-p/professionskill-activeeffect#m-requestedskills), [`ProfessionSkillDelegate.BeginInvoke`](/game-api/types/global-p/professionskilldelegate#m-begininvoke), [`ProfessionSkillDelegate.Invoke`](/game-api/types/global-p/professionskilldelegate#m-invoke), [`ProgressionSlot.ProgressionSlot`](/game-api/types/global-p/progressionslot#m-ctor-2), [`ProgressionSlot.skill`](/game-api/types/global-p/progressionslot#m-skill), [`ProgressionSlot.Skill`](/game-api/types/global-p/progressionslot#m-skill-2), [`ShakeInput.ReceiveHit`](/game-api/types/global-s/shakeinput#m-receivehit), [`ShakeInput.RegisterHandler`](/game-api/types/global-s/shakeinput#m-registerhandler), [`SkillOrb.InitializeSkill`](/game-api/types/global-s/skillorb#m-initializeskill), [`SkillOrb.Skill`](/game-api/types/global-s/skillorb#m-skill), [`SkillShrine.SkillPracticed`](/game-api/types/global-s/skillshrine#m-skillpracticed), [`StrikeSuccessionInput.ReceiveHit`](/game-api/types/global-s/strikesuccessioninput#m-receivehit), [`StrikeSuccessionInput.RegisterHandler`](/game-api/types/global-s/strikesuccessioninput#m-registerhandler), [`StrikeSuccessionInputStructure.GetStrikeCount`](/game-api/types/global-s/strikesuccessioninputstructure#m-getstrikecount), [`SuccessionStrikeDelegate.BeginInvoke`](/game-api/types/global-s/successionstrikedelegate#m-begininvoke), [`SuccessionStrikeDelegate.Invoke`](/game-api/types/global-s/successionstrikedelegate#m-invoke), [`TemperatureCheckInput.ReceiveHit`](/game-api/types/global-t-x/temperaturecheckinput#m-receivehit), [`TemperatureCheckInput.RegisterHandler`](/game-api/types/global-t-x/temperaturecheckinput#m-registerhandler).
