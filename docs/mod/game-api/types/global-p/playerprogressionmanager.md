---
title: "PlayerProgressionManager"
description: "Per-player component that holds experience, levels and unlocked skill slots for each progression path, and saves them in the player save."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerProgressionManager

A **class** in `Root.Township`, the global namespace.

Per-player component that holds experience, levels and unlocked skill slots for each progression path, and saves them in the player save. Reach it through `Player.ProgressionManager`; experience is only granted on the server.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PlayerComponent`](/mod/game-api/types/global-p/playercomponent)
- **Nested types** [`PracticeTuple`](/mod/game-api/types/global-p/playerprogressionmanager-practicetuple)
- **Documented in** [Progression](/mod/game-api/game-systems/progression#playerprogressionmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerProgressionManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canbuymoreskills" /><code>{"private bool canBuyMoreSkills"}</code> | <span className="api-desc">False once the owned skill count reaches the global `MaxBoughtSkills` limit (when that limit is set).</span> |
| <Link id="m-currentlyownedskillscount" /><code>{"private int currentlyOwnedSkillsCount"}</code> | <span className="api-desc">Number of skill slots the player owns. Counts towards the max bought skills limit.</span> |
| <Link id="m-experiencebooststat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" experienceBoostStat"}</code> | <span className="api-desc">The character's experience boost stat. `GainExperience` multiplies gained experience by its value.</span> |
| <Link id="m-experiencepopup" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/togglebool">{"ToggleBool"}</Link>{" experiencePopup"}</code> | <span className="api-desc">`xppopup` console toggle that shows a floating text popup when a player gains experience.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-sendingskill" /><code>{"private "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" sendingSkill"}</code> | <span className="api-desc">Skill whose message is being sent, held while `skillMessage` serializes.</span> |
| <Link id="m-skilllevel" /><code>{"private Dictionary<uint, int> skillLevel"}</code> | <span className="api-desc">Skill hash to level: how many owned or practiced slots grant that skill. 0 or missing means locked.</span> |
| <Link id="m-skillmessage" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" skillMessage"}</code> | <span className="api-desc">Method sync that carries a skill's custom message (`SendMessage`, `SendMessageToPlayer`).</span> |
| <Link id="m-synclevelupeffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncLevelUpEffect"}</code> | <span className="api-desc">Method sync for the level-up effect.</span> |
| <Link id="m-syncpracticedfull" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPracticedFull"}</code> | <span className="api-desc">Method sync that sends all practiced slots to a player (`SyncPracticedToPlayer`).</span> |
| <Link id="m-syncslotpractice" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/mod/game-api/types/global-p/playerprogressionmanager-practicetuple">{"PlayerProgressionManager.PracticeTuple"}</Link>{"> syncSlotPractice"}</code> | <span className="api-desc">Method sync the server uses to tell clients a single slot was practiced.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pathexperiences" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{", "}<Link to="/mod/game-api/types/global-p/pathexperience">{"PathExperience"}</Link>{"> PathExperiences { get; }"}</code> | <span className="api-desc">Experience state per progression path. Entries are created on first use.</span> |
| <Link id="m-practicingorb" /><code><Link to="/mod/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" PracticingOrb { get; private set; }"}</code> | <span className="api-desc">The skill orb currently being practised, or null.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onpracticingchanged" /><code>{"event "}<Link to="/mod/game-api/types/global-s/skillorbdelegate">{"SkillOrbDelegate"}</Link>{" OnPracticingChanged"}</code> | <span className="api-desc">Raised when practising of a skill orb starts or stops.</span> |
| <Link id="m-onslotpracticed" /><code>{"event Action<bool> OnSlotPracticed"}</code> | <span className="api-desc">Raised by `MarkSlotPracticed` with whether the slot was newly practised.</span> |
| <Link id="m-updatedfreepoints" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{", "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{"> UpdatedFreePoints"}</code> | <span className="api-desc">Raised when free points on a path change.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-endpractice" /><code>{"void EndPractice()"}</code> | <span className="api-desc">Stops practising the current skill orb and locks the skill again if practice was the only thing unlocking it.</span> |
| <Link id="m-experiencelog" /><code>{"IEnumerable<string> ExperienceLog() (iterator)"}</code> | <span className="api-desc">One text line per path with level, free points and experience, for debug output.</span> |
| <Link id="m-gainexperience" /><code>{"static void GainExperience("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" targetPlayer, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, float experience)"}</code> | <span className="api-desc">Server: static. Adds experience to a player's path, scaled by their experience boost stat. Does nothing for disabled paths or amounts of zero or less.</span> |
| <Link id="m-gainexperience-2" /><code>{"static bool GainExperience("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" targetPlayer, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, int experience)"}</code> | <span className="api-desc">Server: static. Adds experience to a player's path, scaled by their experience boost stat. Does nothing for disabled paths or amounts of zero or less.</span> |
| <Link id="m-gainsharedexperience" /><code>{"static void GainSharedExperience("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" mainPlayer, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" supportPlayer, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, float experience)"}</code> | <span className="api-desc">Server: static. Splits experience between a main and a supporting player using the shared multipliers from `ProgressionSettings`.</span> |
| <Link id="m-getfreepoints" /><code>{"int GetFreePoints("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">Unspent skill points the player has on a path.</span> |
| <Link id="m-getlevel" /><code>{"int GetLevel("}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">For a `ProfessionSkill`, how many times it is unlocked (0 when not). For a path, the player's current level.</span> |
| <Link id="m-getlevel-2" /><code>{"uint GetLevel("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">For a `ProfessionSkill`, how many times it is unlocked (0 when not). For a path, the player's current level.</span> |
| <Link id="m-getpaths" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{"> GetPaths() (iterator)"}</code> | <span className="api-desc">Yields each path once per slot unlocked on it.</span> |
| <Link id="m-getpercentagetonextlevel" /><code>{"float GetPercentageToNextLevel("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">Current experience on a path as a fraction of what the current level needs.</span> |
| <Link id="m-getslots" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> GetSlots() (iterator)"}</code> | <span className="api-desc">Every skill tree slot the player has unlocked, across all paths.</span> |
| <Link id="m-isslotavailable" /><code><Link to="/mod/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" IsSlotAvailable("}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> | <span className="api-desc">The `SkillStatus` of a slot for this player (owned, allowed, can't buy, and testing variants while it is being practised).</span> |
| <Link id="m-isslotpracticed" /><code>{"bool IsSlotPracticed("}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> | <span className="api-desc">Whether the slot has been practised. Always true unless the server setting `CanOnlyBuySkillsAfterPracticing` is on.</span> |
| <Link id="m-loadfrom" /><code>{"void LoadFrom("}<Link to="/mod/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | <span className="api-desc">Reads path experience and practised slots from a `PlayerSave`.</span> |
| <Link id="m-lockslot" /><code>{"void LockSlot("}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> | <span className="api-desc">Removes an unlocked slot and lowers the skill's level, letting the player buy skills again if they were at the cap.</span> |
| <Link id="m-markslotpracticed" /><code>{"bool MarkSlotPracticed("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, uint slotHash)"}</code> | <span className="api-desc">Marks a slot as practised and raises `OnSlotPracticed`. On the server it also syncs that to clients.</span> |
| <Link id="m-practiceslot" /><code>{"void PracticeSlot("}<Link to="/mod/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb)"}</code> | <span className="api-desc">Starts practising a skill orb at a shrine. The skill is unlocked for the player while they practise it.</span> |
| <Link id="m-saveto" /><code>{"void SaveTo("}<Link to="/mod/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | <span className="api-desc">Writes path experience and practised slots into a `PlayerSave`.</span> |
| <Link id="m-sendmessage" /><code>{"void SendMessage("}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, params "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"[] except)"}</code> | <span className="api-desc">Sends a skill's network message to everyone in the player's chunks, except the listed players.</span> |
| <Link id="m-sendmessagetoplayer" /><code>{"void SendMessageToPlayer("}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends a skill's network message to one player.</span> |
| <Link id="m-skillunlocked" /><code>{"bool SkillUnlocked("}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">True when the player has the skill at any level, including while practising it.</span> |
| <Link id="m-syncpracticedtoplayer" /><code>{"void SyncPracticedToPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends all practised slots to one player; called when that player connects.</span> |
| <Link id="m-unlockslot" /><code>{"void UnlockSlot("}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, bool isConsumingPoints = true, bool isFromLoad = false)"}</code> | <span className="api-desc">Unlocks a slot, spending points unless told not to. Refuses (and logs) when dependencies are missing, except when loading.</span> |
| <Link id="m-updatecounts" /><code>{"void UpdateCounts()"}</code> | <span className="api-desc">Rebuilds the owned skill count and skill levels from the unlocked slots.</span> |

<details className="api-private">
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks `Initialize` to the player's initialization finishing.</span> |
| <Link id="m-characterdied" /><code>{"private void CharacterDied("}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" killingBlow)"}</code> | <span className="api-desc">Server: takes the configured fraction of unspent experience from every path when the character dies.</span> |
| <Link id="m-createpathexperience" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pathexperience">{"PathExperience"}</Link>{" CreatePathExperience("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">Makes a new `PathExperience` for a path, wired to the level-up and free-points callbacks.</span> |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Creates the method syncs. On the server, also hooks `RegisterStat` to the player getting a character.</span> |
| <Link id="m-networklevelupeffect" /><code>{"private void NetworkLevelUpEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isLevelCap)"}</code> | <span className="api-desc">Method sync handler: plays the level-up effect on receivers, with a flag for hitting the level cap.</span> |
| <Link id="m-networkskillmessage" /><code>{"private void NetworkSkillMessage("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" connectionPlayer, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync handler: writes or reads the sending skill's hash, then lets that skill serialize its own message.</span> |
| <Link id="m-onleveledup" /><code>{"private void OnLeveledUp(bool isLevelCap)"}</code> | <span className="api-desc">Plays the level-up effect on non-headless builds. The server also sends it to nearby clients.</span> |
| <Link id="m-onupdatedpoints" /><code>{"private void OnUpdatedPoints("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">Raises `UpdatedFreePoints` for a path when its free points change.</span> |
| <Link id="m-registerstat" /><code>{"private void RegisterStat("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter)"}</code> | <span className="api-desc">Server: finds the character's experience boost stat, and hooks `CharacterDied` if the server takes experience on death.</span> |
| <Link id="m-saveserialize" /><code>{"private void SaveSerialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes every path's experience and practiced slots, for player saves.</span> |
| <Link id="m-serializeallpracticedslots" /><code>{"private void SerializeAllPracticedSlots("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes each path's practiced slots. Used for saves and the full practice sync.</span> |
| <Link id="m-syncpracticedfull-2" /><code>{"private void SyncPracticedFull("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync handler that sends all practiced slots. Refuses incoming data on the server.</span> |
| <Link id="m-syncslotpracticed" /><code>{"private void SyncSlotPracticed("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-p/playerprogressionmanager-practicetuple">{"PlayerProgressionManager.PracticeTuple"}</Link>{" arguments)"}</code> | <span className="api-desc">Method sync handler for one practiced slot. Clients mark the slot practiced when it arrives.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerProgressionManager`:

<div className="api-used-in">

[`IPlayer.ProgressionManager`](/mod/game-api/types/alta-networking/iplayer#m-progressionmanager), [`BoughtSkillOrbReplacer.Operate`](/mod/game-api/types/global-a-b/boughtskillorbreplacer#m-operate), [`BoughtSkillOrbReplacer.UpdateDependencyLock`](/mod/game-api/types/global-a-b/boughtskillorbreplacer#m-updatedependencylock), [`BoughtSkillVisualizer.manager`](/mod/game-api/types/global-a-b/boughtskillvisualizer#m-manager), [`BoughtSkillVisualizer.PrepareOnServer`](/mod/game-api/types/global-a-b/boughtskillvisualizer#m-prepareonserver), [`BoughtSkillVisualizer.Serialize`](/mod/game-api/types/global-a-b/boughtskillvisualizer#m-serialize), [`BoughtSkillVisualizer.UpdateOrbsOnServer`](/mod/game-api/types/global-a-b/boughtskillvisualizer#m-updateorbsonserver), [`ExperienceFillVisualizer.PrepareOnServer`](/mod/game-api/types/global-e-h/experiencefillvisualizer#m-prepareonserver), [`ExperienceFillVisualizer.Serialize`](/mod/game-api/types/global-e-h/experiencefillvisualizer#m-serialize), [`PathExperience.PathExperience`](/mod/game-api/types/global-p/pathexperience#m-ctor), [`PathExperience.targetPlayer`](/mod/game-api/types/global-p/pathexperience#m-targetplayer), [`PathModelDisplay.PrepareOnServer`](/mod/game-api/types/global-p/pathmodeldisplay#m-prepareonserver), [`PathModelDisplay.Serialize`](/mod/game-api/types/global-p/pathmodeldisplay#m-serialize), [`PickupBasedSkill.Lock`](/mod/game-api/types/global-p/pickupbasedskill#m-lock), [`PickupBasedSkill.Unlock`](/mod/game-api/types/global-p/pickupbasedskill#m-unlock), [`PickupBasedSkillModifier.Lock`](/mod/game-api/types/global-p/pickupbasedskillmodifier#m-lock), [`PickupBasedSkillModifier.Unlock`](/mod/game-api/types/global-p/pickupbasedskillmodifier#m-unlock), [`Player.progressionManager`](/mod/game-api/types/global-p/player#m-progressionmanager), [`Player.ProgressionManager`](/mod/game-api/types/global-p/player#m-progressionmanager-2), [`ProfessionSkill.CompleteTargetAchievement`](/mod/game-api/types/global-p/professionskill#m-completetargetachievement), [`ProfessionSkill.Lock`](/mod/game-api/types/global-p/professionskill#m-lock), [`ProfessionSkill.Unlock`](/mod/game-api/types/global-p/professionskill#m-unlock), [`ProfessionSkill<T>.PlayerLevel`](/mod/game-api/types/global-p/professionskill-t#m-playerlevel-2), [`ProfessionSkill<T>.PlayerUnlocked`](/mod/game-api/types/global-p/professionskill-t#m-playerunlocked-2), [`ProfessionSkill<T>.Unlock`](/mod/game-api/types/global-p/professionskill-t#m-unlock), [`ProgressionShrine.currentManager`](/mod/game-api/types/global-p/progressionshrine#m-currentmanager), [`ProgressionShrine.CurrentManager`](/mod/game-api/types/global-p/progressionshrine#m-currentmanager-2), [`ProgressionShrine.Open`](/mod/game-api/types/global-p/progressionshrine#m-open-2), [`ProgressionSlotContainer.Operate`](/mod/game-api/types/global-p/progressionslotcontainer#m-operate), [`SkillOrbDelegate.BeginInvoke`](/mod/game-api/types/global-s/skillorbdelegate#m-begininvoke), [`SkillOrbDelegate.Invoke`](/mod/game-api/types/global-s/skillorbdelegate#m-invoke), [`SkillOrbReplacer.Operate`](/mod/game-api/types/global-s/skillorbreplacer#m-operate), [`SkillOrbScaler.PrepareOnServer`](/mod/game-api/types/global-s/skillorbscaler#m-prepareonserver), [`SkillOrbScaler.Serialize`](/mod/game-api/types/global-s/skillorbscaler#m-serialize), [`SkillShrine.UpdatePracticing`](/mod/game-api/types/global-s/skillshrine#m-updatepracticing), [`SkillShrineVisualizer.PrepareOnServer`](/mod/game-api/types/global-s/skillshrinevisualizer#m-prepareonserver), [`SkillShrineVisualizer.Serialize`](/mod/game-api/types/global-s/skillshrinevisualizer#m-serialize), [`StatBonusSkill.Lock`](/mod/game-api/types/global-s/statbonusskill#m-lock), [`StatBonusSkill.Unlock`](/mod/game-api/types/global-s/statbonusskill#m-unlock).

</div>
