---
title: "PlayerProgressionManager"
description: "Per-player component that holds experience, levels and unlocked skill slots for each progression path, and saves them in the player save."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerProgressionManager

A **class** in `Root.Township`, no namespace.

Per-player component that holds experience, levels and unlocked skill slots for each progression path, and saves them in the player save. Reach it through `Player.ProgressionManager`; experience is only granted on the server.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PlayerComponent`](/game-api/types/global-p/playercomponent)
- **Nested types** [`PracticeTuple`](/game-api/types/global-p/playerprogressionmanager-practicetuple)
- **Documented in** [Progression](/game-api/game-systems/progression#playerprogressionmanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerProgressionManager()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canbuymoreskills" /><code>{"private bool canBuyMoreSkills"}</code> | False once the owned skill count reaches the global `MaxBoughtSkills` limit (when that limit is set). |
| <Link id="m-currentlyownedskillscount" /><code>{"private int currentlyOwnedSkillsCount"}</code> | Number of skill slots the player owns. Counts towards the max bought skills limit. |
| <Link id="m-experiencebooststat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" experienceBoostStat"}</code> | The character's experience boost stat. `GainExperience` multiplies gained experience by its value. |
| <Link id="m-experiencepopup" /><code>{"private static "}<Link to="/game-api/types/global-t-x/togglebool">{"ToggleBool"}</Link>{" experiencePopup"}</code> | `xppopup` console toggle that shows a floating text popup when a player gains experience. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-sendingskill" /><code>{"private "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" sendingSkill"}</code> | Skill whose message is being sent, held while `skillMessage` serializes. |
| <Link id="m-skilllevel" /><code>{"private Dictionary<uint, int> skillLevel"}</code> | Skill hash to level: how many owned or practiced slots grant that skill. 0 or missing means locked. |
| <Link id="m-skillmessage" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" skillMessage"}</code> | Method sync that carries a skill's custom message (`SendMessage`, `SendMessageToPlayer`). |
| <Link id="m-synclevelupeffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncLevelUpEffect"}</code> | Method sync for the level-up effect. |
| <Link id="m-syncpracticedfull" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPracticedFull"}</code> | Method sync that sends all practiced slots to a player (`SyncPracticedToPlayer`). |
| <Link id="m-syncslotpractice" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/global-p/playerprogressionmanager-practicetuple">{"PlayerProgressionManager.PracticeTuple"}</Link>{"> syncSlotPractice"}</code> | Method sync the server uses to tell clients a single slot was practiced. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pathexperiences" /><code>{"Dictionary<"}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{", "}<Link to="/game-api/types/global-p/pathexperience">{"PathExperience"}</Link>{"> PathExperiences { get; }"}</code> | Experience state per progression path. Entries are created on first use. |
| <Link id="m-practicingorb" /><code><Link to="/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" PracticingOrb { get; private set; }"}</code> | The skill orb currently being practised, or null. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onpracticingchanged" /><code>{"event "}<Link to="/game-api/types/global-s/skillorbdelegate">{"SkillOrbDelegate"}</Link>{" OnPracticingChanged"}</code> | Raised when practising of a skill orb starts or stops. |
| <Link id="m-onslotpracticed" /><code>{"event Action<bool> OnSlotPracticed"}</code> | Raised by `MarkSlotPracticed` with whether the slot was newly practised. |
| <Link id="m-updatedfreepoints" /><code>{"event Action<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{", "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{"> UpdatedFreePoints"}</code> | Raised when free points on a path change. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-endpractice" /><code>{"void EndPractice()"}</code> | Stops practising the current skill orb and locks the skill again if practice was the only thing unlocking it. |
| <Link id="m-experiencelog" /><code>{"IEnumerable<string> ExperienceLog() (iterator)"}</code> | One text line per path with level, free points and experience, for debug output. |
| <Link id="m-gainexperience" /><code>{"static void GainExperience("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" targetPlayer, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, float experience)"}</code> | Server: static. Adds experience to a player's path, scaled by their experience boost stat. Does nothing for disabled paths or amounts of zero or less. |
| <Link id="m-gainexperience-2" /><code>{"static bool GainExperience("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" targetPlayer, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, int experience)"}</code> | Server: static. Adds experience to a player's path, scaled by their experience boost stat. Does nothing for disabled paths or amounts of zero or less. |
| <Link id="m-gainsharedexperience" /><code>{"static void GainSharedExperience("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" mainPlayer, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" supportPlayer, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, float experience)"}</code> | Server: static. Splits experience between a main and a supporting player using the shared multipliers from `ProgressionSettings`. |
| <Link id="m-getfreepoints" /><code>{"int GetFreePoints("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Unspent skill points the player has on a path. |
| <Link id="m-getlevel" /><code>{"int GetLevel("}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | For a `ProfessionSkill`, how many times it is unlocked (0 when not). For a path, the player's current level. |
| <Link id="m-getlevel-2" /><code>{"uint GetLevel("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | For a `ProfessionSkill`, how many times it is unlocked (0 when not). For a path, the player's current level. |
| <Link id="m-getpaths" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{"> GetPaths() (iterator)"}</code> | Yields each path once per slot unlocked on it. |
| <Link id="m-getpercentagetonextlevel" /><code>{"float GetPercentageToNextLevel("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Current experience on a path as a fraction of what the current level needs. |
| <Link id="m-getslots" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> GetSlots() (iterator)"}</code> | Every skill tree slot the player has unlocked, across all paths. |
| <Link id="m-isslotavailable" /><code><Link to="/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" IsSlotAvailable("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> | The `SkillStatus` of a slot for this player (owned, allowed, can't buy, and testing variants while it is being practised). |
| <Link id="m-isslotpracticed" /><code>{"bool IsSlotPracticed("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> | Whether the slot has been practised. Always true unless the server setting `CanOnlyBuySkillsAfterPracticing` is on. |
| <Link id="m-loadfrom" /><code>{"void LoadFrom("}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | Reads path experience and practised slots from a `PlayerSave`. |
| <Link id="m-lockslot" /><code>{"void LockSlot("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> | Removes an unlocked slot and lowers the skill's level, letting the player buy skills again if they were at the cap. |
| <Link id="m-markslotpracticed" /><code>{"bool MarkSlotPracticed("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, uint slotHash)"}</code> | Marks a slot as practised and raises `OnSlotPracticed`. On the server it also syncs that to clients. |
| <Link id="m-practiceslot" /><code>{"void PracticeSlot("}<Link to="/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb)"}</code> | Starts practising a skill orb at a shrine. The skill is unlocked for the player while they practise it. |
| <Link id="m-saveto" /><code>{"void SaveTo("}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | Writes path experience and practised slots into a `PlayerSave`. |
| <Link id="m-sendmessage" /><code>{"void SendMessage("}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, params "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"[] except)"}</code> | Sends a skill's network message to everyone in the player's chunks, except the listed players. |
| <Link id="m-sendmessagetoplayer" /><code>{"void SendMessageToPlayer("}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends a skill's network message to one player. |
| <Link id="m-skillunlocked" /><code>{"bool SkillUnlocked("}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | True when the player has the skill at any level, including while practising it. |
| <Link id="m-syncpracticedtoplayer" /><code>{"void SyncPracticedToPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends all practised slots to one player; called when that player connects. |
| <Link id="m-unlockslot" /><code>{"void UnlockSlot("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, bool isConsumingPoints = true, bool isFromLoad = false)"}</code> | Unlocks a slot, spending points unless told not to. Refuses (and logs) when dependencies are missing, except when loading. |
| <Link id="m-updatecounts" /><code>{"void UpdateCounts()"}</code> | Rebuilds the owned skill count and skill levels from the unlocked slots. |

<details>
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks `Initialize` to the player's initialization finishing. |
| <Link id="m-characterdied" /><code>{"private void CharacterDied("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" killingBlow)"}</code> | Server: takes the configured fraction of unspent experience from every path when the character dies. |
| <Link id="m-createpathexperience" /><code>{"private "}<Link to="/game-api/types/global-p/pathexperience">{"PathExperience"}</Link>{" CreatePathExperience("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Makes a new `PathExperience` for a path, wired to the level-up and free-points callbacks. |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Creates the method syncs. On the server, also hooks `RegisterStat` to the player getting a character. |
| <Link id="m-networklevelupeffect" /><code>{"private void NetworkLevelUpEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isLevelCap)"}</code> | Method sync handler: plays the level-up effect on receivers, with a flag for hitting the level cap. |
| <Link id="m-networkskillmessage" /><code>{"private void NetworkSkillMessage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" connectionPlayer, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync handler: writes or reads the sending skill's hash, then lets that skill serialize its own message. |
| <Link id="m-onleveledup" /><code>{"private void OnLeveledUp(bool isLevelCap)"}</code> | Plays the level-up effect on non-headless builds. The server also sends it to nearby clients. |
| <Link id="m-onupdatedpoints" /><code>{"private void OnUpdatedPoints("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Raises `UpdatedFreePoints` for a path when its free points change. |
| <Link id="m-registerstat" /><code>{"private void RegisterStat("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter)"}</code> | Server: finds the character's experience boost stat, and hooks `CharacterDied` if the server takes experience on death. |
| <Link id="m-saveserialize" /><code>{"private void SaveSerialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes every path's experience and practiced slots, for player saves. |
| <Link id="m-serializeallpracticedslots" /><code>{"private void SerializeAllPracticedSlots("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes each path's practiced slots. Used for saves and the full practice sync. |
| <Link id="m-syncpracticedfull-2" /><code>{"private void SyncPracticedFull("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync handler that sends all practiced slots. Refuses incoming data on the server. |
| <Link id="m-syncslotpracticed" /><code>{"private void SyncSlotPracticed("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-p/playerprogressionmanager-practicetuple">{"PlayerProgressionManager.PracticeTuple"}</Link>{" arguments)"}</code> | Method sync handler for one practiced slot. Clients mark the slot practiced when it arrives. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerProgressionManager`:

[`IPlayer.ProgressionManager`](/game-api/types/alta-networking/iplayer#m-progressionmanager), [`BoughtSkillOrbReplacer.Operate`](/game-api/types/global-a-b/boughtskillorbreplacer#m-operate), [`BoughtSkillOrbReplacer.UpdateDependencyLock`](/game-api/types/global-a-b/boughtskillorbreplacer#m-updatedependencylock), [`BoughtSkillVisualizer.manager`](/game-api/types/global-a-b/boughtskillvisualizer#m-manager), [`BoughtSkillVisualizer.PrepareOnServer`](/game-api/types/global-a-b/boughtskillvisualizer#m-prepareonserver), [`BoughtSkillVisualizer.Serialize`](/game-api/types/global-a-b/boughtskillvisualizer#m-serialize), [`BoughtSkillVisualizer.UpdateOrbsOnServer`](/game-api/types/global-a-b/boughtskillvisualizer#m-updateorbsonserver), [`ExperienceFillVisualizer.PrepareOnServer`](/game-api/types/global-e-h/experiencefillvisualizer#m-prepareonserver), [`ExperienceFillVisualizer.Serialize`](/game-api/types/global-e-h/experiencefillvisualizer#m-serialize), [`PathExperience.PathExperience`](/game-api/types/global-p/pathexperience#m-ctor), [`PathExperience.targetPlayer`](/game-api/types/global-p/pathexperience#m-targetplayer), [`PathModelDisplay.PrepareOnServer`](/game-api/types/global-p/pathmodeldisplay#m-prepareonserver), [`PathModelDisplay.Serialize`](/game-api/types/global-p/pathmodeldisplay#m-serialize), [`PickupBasedSkill.Lock`](/game-api/types/global-p/pickupbasedskill#m-lock), [`PickupBasedSkill.Unlock`](/game-api/types/global-p/pickupbasedskill#m-unlock), [`PickupBasedSkillModifier.Lock`](/game-api/types/global-p/pickupbasedskillmodifier#m-lock), [`PickupBasedSkillModifier.Unlock`](/game-api/types/global-p/pickupbasedskillmodifier#m-unlock), [`Player.progressionManager`](/game-api/types/global-p/player#m-progressionmanager), [`Player.ProgressionManager`](/game-api/types/global-p/player#m-progressionmanager-2), [`ProfessionSkill.CompleteTargetAchievement`](/game-api/types/global-p/professionskill#m-completetargetachievement), [`ProfessionSkill.Lock`](/game-api/types/global-p/professionskill#m-lock), [`ProfessionSkill.Unlock`](/game-api/types/global-p/professionskill#m-unlock), [`ProfessionSkill<T>.PlayerLevel`](/game-api/types/global-p/professionskill-t#m-playerlevel-2), [`ProfessionSkill<T>.PlayerUnlocked`](/game-api/types/global-p/professionskill-t#m-playerunlocked-2), [`ProfessionSkill<T>.Unlock`](/game-api/types/global-p/professionskill-t#m-unlock), [`ProgressionShrine.currentManager`](/game-api/types/global-p/progressionshrine#m-currentmanager), [`ProgressionShrine.CurrentManager`](/game-api/types/global-p/progressionshrine#m-currentmanager-2), [`ProgressionShrine.Open`](/game-api/types/global-p/progressionshrine#m-open-2), [`ProgressionSlotContainer.Operate`](/game-api/types/global-p/progressionslotcontainer#m-operate), [`SkillOrbDelegate.BeginInvoke`](/game-api/types/global-s/skillorbdelegate#m-begininvoke), [`SkillOrbDelegate.Invoke`](/game-api/types/global-s/skillorbdelegate#m-invoke), [`SkillOrbReplacer.Operate`](/game-api/types/global-s/skillorbreplacer#m-operate), [`SkillOrbScaler.PrepareOnServer`](/game-api/types/global-s/skillorbscaler#m-prepareonserver), [`SkillOrbScaler.Serialize`](/game-api/types/global-s/skillorbscaler#m-serialize), [`SkillShrine.UpdatePracticing`](/game-api/types/global-s/skillshrine#m-updatepracticing), [`SkillShrineVisualizer.PrepareOnServer`](/game-api/types/global-s/skillshrinevisualizer#m-prepareonserver), [`SkillShrineVisualizer.Serialize`](/game-api/types/global-s/skillshrinevisualizer#m-serialize), [`StatBonusSkill.Lock`](/game-api/types/global-s/statbonusskill#m-lock), [`StatBonusSkill.Unlock`](/game-api/types/global-s/statbonusskill#m-unlock).
