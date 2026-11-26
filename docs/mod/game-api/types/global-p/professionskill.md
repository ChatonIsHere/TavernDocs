---
title: "ProfessionSkill"
description: "Base for a skill in a progression tree: a hashed asset that players unlock and practise."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfessionSkill

An **abstract class** in `Root.Township`, the global namespace.

Base for a skill in a progression tree: a hashed asset that players unlock and practise. Subclasses `ProfessionSkill<T>` keep a static `Instance` for checks like `PlayerUnlocked`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`HashedGeneralValue<ProfessionSkill>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`MiningEchoIntensity`](/mod/game-api/types/global-m-o/miningechointensity), [`PickupBasedSkill`](/mod/game-api/types/global-p/pickupbasedskill), [`PickupBasedSkillModifier`](/mod/game-api/types/global-p/pickupbasedskillmodifier), [`ProfessionSkill`](/mod/game-api/types/global-p/professionskill), [`ProfessionSkill<T>`](/mod/game-api/types/global-p/professionskill-t), [`StatBonusSkill`](/mod/game-api/types/global-s/statbonusskill)
- **Nested types** [`ActiveEffect`](/mod/game-api/types/global-p/professionskill-activeeffect)
- **Documented in** [Skills and unlocks](/mod/game-api/game-systems/skills-and-unlocks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ProfessionSkill()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | <span className="api-desc">NLog logger shared by profession skills.</span> |

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeeffects" /><code>{"private static Dictionary<uint, "}<Link to="/mod/game-api/types/global-p/professionskill-activeeffect">{"ProfessionSkill.ActiveEffect"}</Link>{"> activeEffects"}</code> | <span className="api-desc">Shared map of entity identifier to its pooled tool effect, so several skills can share one effect on a tool.</span> |
| <Link id="m-dynamiccontentprefabs" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/positionednetworkprefab">{"PositionedNetworkPrefab"}</Link>{"> dynamicContentPrefabs"}</code> | <span className="api-desc">Backing field for `DynamicContentPrefabs`.</span> |
| <Link id="m-practiceglyphsprites" /><code>{"private Sprite[] practiceGlyphSprites"}</code> | <span className="api-desc">Backing field for `PracticeGlyphSprites`.</span> |
| <Link id="m-skillpracticetrigger" /><code>{"private uint skillPracticeTrigger"}</code> | <span className="api-desc">Hash of the skill whose practice counts for this one. 0 means this skill's own hash.</span> |
| <Link id="m-staticcontentprefabs" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/positionedstaticprefab">{"PositionedStaticPrefab"}</Link>{"> staticContentPrefabs"}</code> | <span className="api-desc">Backing field for `StaticContentPrefabs`.</span> |
| <Link id="m-targetachievement" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" targetAchievement"}</code> | <span className="api-desc">Achievement completed for the player by `CompleteTargetAchievement` (server only).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dynamiccontentprefabs-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-p/positionednetworkprefab">{"PositionedNetworkPrefab"}</Link>{"> DynamicContentPrefabs { get; }"}</code> | <span className="api-desc">Network prefabs a skill shrine testing area spawns when this skill's orb is opened.</span> |
| <Link id="m-practiceglyphsprites-2" /><code>{"Sprite[] PracticeGlyphSprites { get; }"}</code> | <span className="api-desc">Glyph images shown to show the player how to practise the skill.</span> |
| <Link id="m-skillpracticetrigger-2" /><code>{"uint SkillPracticeTrigger { get; }"}</code> | <span className="api-desc">Hash of the skill whose execution counts as practice for this one. Defaults to this skill's own hash.</span> |
| <Link id="m-staticcontentprefabs-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-p/positionedstaticprefab">{"PositionedStaticPrefab"}</Link>{"> StaticContentPrefabs { get; }"}</code> | <span className="api-desc">Static prefabs a skill shrine testing area places when this skill's orb is opened.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onskillexecuted" /><code>{"static event "}<Link to="/mod/game-api/types/global-p/professionskilldelegate">{"ProfessionSkillDelegate"}</Link>{" OnSkillExecuted"}</code> | <span className="api-desc">Static event raised whenever any skill fires; skill shrines use it to count practice.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-completetargetachievement" /><code>{"void CompleteTargetAchievement("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" player)"}</code> | <span className="api-desc">Server: completes this skill's linked achievement for the player.</span> |
| <Link id="m-lock" /><code>{"virtual void Lock("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" player)"}</code> | <span className="api-desc">Called when a player loses the skill. Empty in the base class.</span> |
| <Link id="m-releaseeffect" /><code>{"static void ReleaseEffect("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Static: drops one skill's request for the shared tool effect on an entity. The effect goes when no skill still wants it.</span> |
| <Link id="m-releaseeffect-2" /><code>{"static void ReleaseEffect(uint identifier, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, bool isForced = false)"}</code> | <span className="api-desc">Static: drops one skill's request for the shared tool effect on an entity. The effect goes when no skill still wants it.</span> |
| <Link id="m-requesteffect" /><code>{"static void RequestEffect("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, out "}<Link to="/mod/game-api/types/global-t-x/toolbasedeffectbase">{"ToolBasedEffectBase"}</Link>{" effect)"}</code> | <span className="api-desc">Static: gets the shared tool glow effect for an entity, creating it if needed. Extra skills get a dissipate effect instead.</span> |
| <Link id="m-sendserializedmessage" /><code>{"virtual void SendSerializedMessage("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes extra skill data in a progression skill message to one player. Empty in the base class.</span> |
| <Link id="m-unlock" /><code>{"virtual void Unlock("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" player)"}</code> | <span className="api-desc">Called when a player gains the skill. In `ProfessionSkill<T>` this also sets the static `Instance`.</span> |
| <Link id="m-executeskill" /><code>{"protected void ExecuteSkill("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Raises `OnSkillExecuted` for the player. Subclasses call it when the skill fires.</span> |
| <Link id="m-releasetooleffect" /><code>{"protected virtual void ReleaseToolEffect("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Releases this skill's tool effect on an entity.</span> |
| <Link id="m-requesttooleffect" /><code>{"protected virtual void RequestToolEffect("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Requests the tool effect for an entity and starts it.</span> |

## Used in

Members of other types that take, return or hold a `ProfessionSkill`:

<div className="api-used-in">

[`ActionGlyphsPlacer.ActiveSkill`](/mod/game-api/types/global-a-b/actionglyphsplacer#m-activeskill), [`BowStringPullbackInputMethod.ReceiveHit`](/mod/game-api/types/global-a-b/bowstringpullbackinputmethod#m-receivehit), [`BowStringPullbackInputMethod.RegisterHandler`](/mod/game-api/types/global-a-b/bowstringpullbackinputmethod#m-registerhandler), [`DownwardSwingInput.ReceiveHit`](/mod/game-api/types/global-c-d/downwardswinginput#m-receivehit), [`DownwardSwingInput.RegisterHandler`](/mod/game-api/types/global-c-d/downwardswinginput#m-registerhandler), [`HandPositionInput.ReceiveHit`](/mod/game-api/types/global-e-h/handpositioninput#m-receivehit), [`HandPositionInput.RegisterHandler`](/mod/game-api/types/global-e-h/handpositioninput#m-registerhandler), [`IInputBasedSkill.Skill`](/mod/game-api/types/global-i-l/iinputbasedskill#m-skill), [`IProfessionSkillTester.InitializeForPlayer`](/mod/game-api/types/global-i-l/iprofessionskilltester#m-initializeforplayer), [`ISkillInputMethod.ReceiveHit`](/mod/game-api/types/global-i-l/iskillinputmethod#m-receivehit), [`ISkillInputMethod.RegisterHandler`](/mod/game-api/types/global-i-l/iskillinputmethod#m-registerhandler), [`PickupBasedSkill.IInputBasedSkill.Skill`](/mod/game-api/types/global-p/pickupbasedskill#m-iinputbasedskill-skill), [`PickupBasedSkillModifier.IInputBasedSkill.Skill`](/mod/game-api/types/global-p/pickupbasedskillmodifier#m-iinputbasedskill-skill), [`PickupGrabInputMethod.ReceiveHit`](/mod/game-api/types/global-p/pickupgrabinputmethod#m-receivehit), [`PickupGrabInputMethod.RegisterHandler`](/mod/game-api/types/global-p/pickupgrabinputmethod#m-registerhandler), [`PlayerProgressionManager.GetLevel`](/mod/game-api/types/global-p/playerprogressionmanager#m-getlevel), [`PlayerProgressionManager.sendingSkill`](/mod/game-api/types/global-p/playerprogressionmanager#m-sendingskill), [`PlayerProgressionManager.SendMessage`](/mod/game-api/types/global-p/playerprogressionmanager#m-sendmessage), [`PlayerProgressionManager.SendMessageToPlayer`](/mod/game-api/types/global-p/playerprogressionmanager#m-sendmessagetoplayer), [`PlayerProgressionManager.SkillUnlocked`](/mod/game-api/types/global-p/playerprogressionmanager#m-skillunlocked), [`PowerStrikeTester.InitializeForPlayer`](/mod/game-api/types/global-p/powerstriketester#m-initializeforplayer), [`PowerStrikeTester.skill`](/mod/game-api/types/global-p/powerstriketester#m-skill), [`PowerStrikeTester.UpdateCount`](/mod/game-api/types/global-p/powerstriketester#m-updatecount), [`ProfessionSkill.ActiveEffect.Release`](/mod/game-api/types/global-p/professionskill-activeeffect#m-release), [`ProfessionSkill.ActiveEffect.Request`](/mod/game-api/types/global-p/professionskill-activeeffect#m-request), [`ProfessionSkill.ActiveEffect.requestedSkills`](/mod/game-api/types/global-p/professionskill-activeeffect#m-requestedskills), [`ProfessionSkillDelegate.BeginInvoke`](/mod/game-api/types/global-p/professionskilldelegate#m-begininvoke), [`ProfessionSkillDelegate.Invoke`](/mod/game-api/types/global-p/professionskilldelegate#m-invoke), [`ProgressionSlot.ProgressionSlot`](/mod/game-api/types/global-p/progressionslot#m-ctor-2), [`ProgressionSlot.skill`](/mod/game-api/types/global-p/progressionslot#m-skill), [`ProgressionSlot.Skill`](/mod/game-api/types/global-p/progressionslot#m-skill-2), [`ShakeInput.ReceiveHit`](/mod/game-api/types/global-s/shakeinput#m-receivehit), [`ShakeInput.RegisterHandler`](/mod/game-api/types/global-s/shakeinput#m-registerhandler), [`SkillOrb.InitializeSkill`](/mod/game-api/types/global-s/skillorb#m-initializeskill), [`SkillOrb.Skill`](/mod/game-api/types/global-s/skillorb#m-skill), [`SkillShrine.SkillPracticed`](/mod/game-api/types/global-s/skillshrine#m-skillpracticed), [`StrikeSuccessionInput.ReceiveHit`](/mod/game-api/types/global-s/strikesuccessioninput#m-receivehit), [`StrikeSuccessionInput.RegisterHandler`](/mod/game-api/types/global-s/strikesuccessioninput#m-registerhandler), [`StrikeSuccessionInputStructure.GetStrikeCount`](/mod/game-api/types/global-s/strikesuccessioninputstructure#m-getstrikecount), [`SuccessionStrikeDelegate.BeginInvoke`](/mod/game-api/types/global-s/successionstrikedelegate#m-begininvoke), [`SuccessionStrikeDelegate.Invoke`](/mod/game-api/types/global-s/successionstrikedelegate#m-invoke), [`TemperatureCheckInput.ReceiveHit`](/mod/game-api/types/global-t-x/temperaturecheckinput#m-receivehit), [`TemperatureCheckInput.RegisterHandler`](/mod/game-api/types/global-t-x/temperaturecheckinput#m-registerhandler).

</div>
