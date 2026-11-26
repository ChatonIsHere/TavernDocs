---
title: "UltimateRope"
description: "Third-party Ultimate Rope Editor component: builds a physics rope from jointed rigidbody links (procedural mesh, linked objects or imported bones), with..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UltimateRope

A **class** in `Root.Township`, the global namespace.

Third-party Ultimate Rope Editor component: builds a physics rope from jointed rigidbody links (procedural mesh, linked objects or imported bones), with optional coil and extension. Runs in edit mode too.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`EAxis`](/mod/game-api/types/global-t-x/ultimaterope-eaxis), [`EColliderType`](/mod/game-api/types/global-t-x/ultimaterope-ecollidertype), [`ERopeExtensionMode`](/mod/game-api/types/global-t-x/ultimaterope-eropeextensionmode), [`ERopeType`](/mod/game-api/types/global-t-x/ultimaterope-eropetype), [`RopeBone`](/mod/game-api/types/global-t-x/ultimaterope-ropebone), [`RopeBreakEventInfo`](/mod/game-api/types/global-t-x/ultimaterope-ropebreakeventinfo), [`RopeNode`](/mod/game-api/types/global-t-x/ultimaterope-ropenode)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UltimateRope()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-autoregenerate" /><code>{"bool AutoRegenerate"}</code> | <span className="api-desc">Editor option to rebuild the rope when settings change.</span> |
| <Link id="m-boneaxis" /><code><Link to="/mod/game-api/types/global-t-x/ultimaterope-eaxis">{"UltimateRope.EAxis"}</Link>{" BoneAxis"}</code> | <span className="api-desc">Axis along each imported bone, for `ImportBones` ropes.</span> |
| <Link id="m-bonecolliderdiameter" /><code>{"float BoneColliderDiameter"}</code> | <span className="api-desc">Collider diameter for imported bones.</span> |
| <Link id="m-bonecolliderlength" /><code>{"float BoneColliderLength"}</code> | <span className="api-desc">Collider length as a fraction of each imported bone's length.</span> |
| <Link id="m-bonecollideroffset" /><code>{"float BoneColliderOffset"}</code> | <span className="api-desc">Collider offset along the bone, as a fraction of the collider length.</span> |
| <Link id="m-bonecolliderskip" /><code>{"int BoneColliderSkip"}</code> | <span className="api-desc">Copied to each node's collider skip count, probably how many links to skip between colliders.</span> |
| <Link id="m-bonecollidertype" /><code><Link to="/mod/game-api/types/global-t-x/ultimaterope-ecollidertype">{"UltimateRope.EColliderType"}</Link>{" BoneColliderType"}</code> | <span className="api-desc">Collider shape for imported bones. Default capsule.</span> |
| <Link id="m-bonefirst" /><code>{"GameObject BoneFirst"}</code> | <span className="api-desc">First bone of an imported bone chain. Its name must end in digits.</span> |
| <Link id="m-bonelast" /><code>{"GameObject BoneLast"}</code> | <span className="api-desc">Last bone of an imported bone chain. Its name must end in digits.</span> |
| <Link id="m-bonelistnamesnocolliders" /><code>{"string BoneListNamesNoColliders"}</code> | <span className="api-desc">Comma list of bone numbers or ranges (like `1-3`) that get no collider.</span> |
| <Link id="m-bonelistnamesstatic" /><code>{"string BoneListNamesStatic"}</code> | <span className="api-desc">Comma list of bone numbers or ranges that stay static.</span> |
| <Link id="m-coilaxisright" /><code><Link to="/mod/game-api/types/global-t-x/ultimaterope-eaxis">{"UltimateRope.EAxis"}</Link>{" CoilAxisRight"}</code> | <span className="api-desc">Coil object axis the coil turns around. Default x.</span> |
| <Link id="m-coilaxisup" /><code><Link to="/mod/game-api/types/global-t-x/ultimaterope-eaxis">{"UltimateRope.EAxis"}</Link>{" CoilAxisUp"}</code> | <span className="api-desc">Coil object up axis. Default y.</span> |
| <Link id="m-coildiameter" /><code>{"float CoilDiameter"}</code> | <span className="api-desc">Diameter of the coil's core.</span> |
| <Link id="m-coilnumbones" /><code>{"int CoilNumBones"}</code> | <span className="api-desc">Number of bones used to wrap rope around the coil. Default 50.</span> |
| <Link id="m-coilobject" /><code>{"GameObject CoilObject"}</code> | <span className="api-desc">Object the rope winds around when `HasACoil` is on.</span> |
| <Link id="m-coilwidth" /><code>{"float CoilWidth"}</code> | <span className="api-desc">Width of the coil across its axis.</span> |
| <Link id="m-deleted" /><code>{"bool Deleted"}</code> | <span className="api-desc">True when the rope has no generated links; setup methods skip deleted ropes.</span> |
| <Link id="m-enableprefabusage" /><code>{"bool EnablePrefabUsage"}</code> | <span className="api-desc">Rope editor option for saving the rope in a prefab. Not read by game code.</span> |
| <Link id="m-eventsobjectreceiver" /><code>{"GameObject EventsObjectReceiver"}</code> | <span className="api-desc">Object that gets `OnBreakMethodName` sent to it when a link breaks.</span> |
| <Link id="m-extensiblelength" /><code>{"float ExtensibleLength"}</code> | <span className="api-desc">Maximum extra length an extensible rope can pay out.</span> |
| <Link id="m-hasacoil" /><code>{"bool HasACoil"}</code> | <span className="api-desc">Whether an extensible procedural rope winds onto `CoilObject`.</span> |
| <Link id="m-importedbones" /><code><Link to="/mod/game-api/types/global-t-x/ultimaterope-ropebone">{"UltimateRope.RopeBone"}</Link>{"[] ImportedBones"}</code> | <span className="api-desc">The bone chain used by an `ImportBones` rope.</span> |
| <Link id="m-isextensible" /><code>{"bool IsExtensible"}</code> | <span className="api-desc">Whether the rope can be extended at runtime with `ExtendRope`.</span> |
| <Link id="m-linkaxis" /><code><Link to="/mod/game-api/types/global-t-x/ultimaterope-eaxis">{"UltimateRope.EAxis"}</Link>{" LinkAxis"}</code> | <span className="api-desc">Axis along the link mesh, for linked-object ropes. Default z.</span> |
| <Link id="m-linkjointangularxlimit" /><code>{"float LinkJointAngularXLimit"}</code> | <span className="api-desc">Joint swing limit in degrees around x. Zero locks it.</span> |
| <Link id="m-linkjointangularylimit" /><code>{"float LinkJointAngularYLimit"}</code> | <span className="api-desc">Joint swing limit in degrees around y. Zero locks it.</span> |
| <Link id="m-linkjointangularzlimit" /><code>{"float LinkJointAngularZLimit"}</code> | <span className="api-desc">Joint twist limit in degrees around z. Zero locks it.</span> |
| <Link id="m-linkjointbreakforce" /><code>{"float LinkJointBreakForce"}</code> | <span className="api-desc">Force at which link joints break (infinite by default).</span> |
| <Link id="m-linkjointbreaktorque" /><code>{"float LinkJointBreakTorque"}</code> | <span className="api-desc">Torque at which link joints break (infinite by default).</span> |
| <Link id="m-linkjointdampervalue" /><code>{"float LinkJointDamperValue"}</code> | <span className="api-desc">Damper of the joints' angular drive.</span> |
| <Link id="m-linkjointmaxforcevalue" /><code>{"float LinkJointMaxForceValue"}</code> | <span className="api-desc">Maximum force of the joints' angular drive.</span> |
| <Link id="m-linkjointspringvalue" /><code>{"float LinkJointSpringValue"}</code> | <span className="api-desc">Spring strength of the joints' angular drive.</span> |
| <Link id="m-linklengths" /><code>{"float[] LinkLengths"}</code> | <span className="api-desc">Length of each link in order, filled when the rope is built.</span> |
| <Link id="m-linkmass" /><code>{"float LinkMass"}</code> | <span className="api-desc">Mass of each link rigidbody.</span> |
| <Link id="m-linkobject" /><code>{"GameObject LinkObject"}</code> | <span className="api-desc">Prefab used for each link of a linked-objects rope.</span> |
| <Link id="m-linkoffsetobject" /><code>{"float LinkOffsetObject"}</code> | <span className="api-desc">Gap between linked objects, as a fraction of segment length.</span> |
| <Link id="m-linksolveriterationcount" /><code>{"int LinkSolverIterationCount"}</code> | <span className="api-desc">Physics solver iterations for each link rigidbody.</span> |
| <Link id="m-linktwistangleincrement" /><code>{"float LinkTwistAngleIncrement"}</code> | <span className="api-desc">Extra twist in degrees added to each next link, for chain-like ropes.</span> |
| <Link id="m-linktwistanglestart" /><code>{"float LinkTwistAngleStart"}</code> | <span className="api-desc">Twist in degrees of the first link object.</span> |
| <Link id="m-lockstartendinzaxis" /><code>{"bool LockStartEndInZAxis"}</code> | <span className="api-desc">Locks each segment's end links to the node rotations instead of aiming them along the segment.</span> |
| <Link id="m-m-afcoilboneangles" /><code>{"float[] m_afCoilBoneAngles"}</code> | <span className="api-desc">Angle of each coil bone around the coil.</span> |
| <Link id="m-m-afcoilboneradiuses" /><code>{"float[] m_afCoilBoneRadiuses"}</code> | <span className="api-desc">Radius of each coil bone from the coil centre.</span> |
| <Link id="m-m-afcoilbonex" /><code>{"float[] m_afCoilBoneX"}</code> | <span className="api-desc">Position of each coil bone across the coil's width.</span> |
| <Link id="m-m-bbonesareimported" /><code>{"bool m_bBonesAreImported"}</code> | <span className="api-desc">Whether the bone chain has been imported.</span> |
| <Link id="m-m-blaststatusiserror" /><code>{"bool m_bLastStatusIsError"}</code> | <span className="api-desc">Whether the last `Regenerate` failed. Read by `IsLastStatusError`.</span> |
| <Link id="m-m-bropestartinitialorientationinitialized" /><code>{"bool m_bRopeStartInitialOrientationInitialized"}</code> | <span className="api-desc">Whether the rope start's first position, rotation and scale have been saved.</span> |
| <Link id="m-m-fcurrentcoillength" /><code>{"float m_fCurrentCoilLength"}</code> | <span className="api-desc">Length of rope currently wound on the coil.</span> |
| <Link id="m-m-fcurrentcoilroperadius" /><code>{"float m_fCurrentCoilRopeRadius"}</code> | <span className="api-desc">Current radius the rope winds at, used to turn coil rotation into length.</span> |
| <Link id="m-m-fcurrentcoilturnsleft" /><code>{"float m_fCurrentCoilTurnsLeft"}</code> | <span className="api-desc">Turns of rope left on the coil.</span> |
| <Link id="m-m-fcurrentextension" /><code>{"float m_fCurrentExtension"}</code> | <span className="api-desc">How far the rope is currently extended, between 0 and `ExtensibleLength`.</span> |
| <Link id="m-m-fcurrentextensioninput" /><code>{"float m_fCurrentExtensionInput"}</code> | <span className="api-desc">Extension value set from input, starts equal to `m_fCurrentExtension`.</span> |
| <Link id="m-m-nfirstnoncoilnode" /><code>{"int m_nFirstNonCoilNode"}</code> | <span className="api-desc">Index of the first node that is not the coil: 1 with a coil, 0 without.</span> |
| <Link id="m-m-qinitialropestartlocalrot" /><code>{"Quaternion m_qInitialRopeStartLocalRot"}</code> | <span className="api-desc">Saved local rotation of the rope start.</span> |
| <Link id="m-m-strassetfile" /><code>{"string m_strAssetFile"}</code> | <span className="api-desc">Probably the asset file the rope mesh was saved to by the editor.</span> |
| <Link id="m-m-strstatus" /><code>{"string m_strStatus"}</code> | <span className="api-desc">Last status message. Backing field for `Status`.</span> |
| <Link id="m-m-v3initialropestartlocalpos" /><code>{"Vector3 m_v3InitialRopeStartLocalPos"}</code> | <span className="api-desc">Saved local position of the rope start.</span> |
| <Link id="m-m-v3initialropestartlocalscale" /><code>{"Vector3 m_v3InitialRopeStartLocalScale"}</code> | <span className="api-desc">Saved local scale of the rope start.</span> |
| <Link id="m-onbreakmethodname" /><code>{"string OnBreakMethodName"}</code> | <span className="api-desc">Method name sent to `EventsObjectReceiver` with break info when a link breaks.</span> |
| <Link id="m-persistafterplaymode" /><code>{"bool PersistAfterPlayMode"}</code> | <span className="api-desc">Rope editor option to keep changes made in play mode. Not read by game code.</span> |
| <Link id="m-ropediameter" /><code>{"float RopeDiameter"}</code> | <span className="api-desc">Rope thickness (at least 0.01).</span> |
| <Link id="m-ropediameterscalex" /><code>{"float RopeDiameterScaleX"}</code> | <span className="api-desc">Scales the procedural rope's width on x, for flat ropes. At least 0.01.</span> |
| <Link id="m-ropediameterscaley" /><code>{"float RopeDiameterScaleY"}</code> | <span className="api-desc">Scales the procedural rope's width on y. At least 0.01.</span> |
| <Link id="m-ropelayer" /><code>{"int RopeLayer"}</code> | <span className="api-desc">Layer the rope and its links use.</span> |
| <Link id="m-ropematerial" /><code>{"Material RopeMaterial"}</code> | <span className="api-desc">Material for the procedural rope's surface.</span> |
| <Link id="m-ropenodes" /><code>{"List<"}<Link to="/mod/game-api/types/global-t-x/ultimaterope-ropenode">{"UltimateRope.RopeNode"}</Link>{"> RopeNodes"}</code> | <span className="api-desc">The rope's segments, each ending at a node object.</span> |
| <Link id="m-ropephysicsmaterial" /><code>{"PhysicMaterial RopePhysicsMaterial"}</code> | <span className="api-desc">Physic material put on link colliders.</span> |
| <Link id="m-ropesectionmaterial" /><code>{"Material RopeSectionMaterial"}</code> | <span className="api-desc">Material for the procedural rope's end caps and broken ends.</span> |
| <Link id="m-ropesegmentsides" /><code>{"int RopeSegmentSides"}</code> | <span className="api-desc">Number of sides around the procedural rope. Default 8.</span> |
| <Link id="m-ropestart" /><code>{"GameObject RopeStart"}</code> | <span className="api-desc">Object the rope starts from.</span> |
| <Link id="m-ropetexturesectiontilemeters" /><code>{"float RopeTextureSectionTileMeters"}</code> | <span className="api-desc">Texture tiling size for the end cap material.</span> |
| <Link id="m-ropetexturetilemeters" /><code>{"float RopeTextureTileMeters"}</code> | <span className="api-desc">Metres of rope per texture repeat along its length.</span> |
| <Link id="m-ropetype" /><code><Link to="/mod/game-api/types/global-t-x/ultimaterope-eropetype">{"UltimateRope.ERopeType"}</Link>{" RopeType"}</code> | <span className="api-desc">How the rope is built: procedural mesh, linked objects or imported bones.</span> |
| <Link id="m-sendevents" /><code>{"bool SendEvents"}</code> | <span className="api-desc">Whether link breaks are sent to `EventsObjectReceiver`.</span> |
| <Link id="m-totallinks" /><code>{"int TotalLinks"}</code> | <span className="api-desc">Number of links across all segments.</span> |
| <Link id="m-totalropelength" /><code>{"float TotalRopeLength"}</code> | <span className="api-desc">Length of all segments together.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-status" /><code>{"string Status { get; set; }"}</code> | <span className="api-desc">Message from the last build or change.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-afterimportedbonesobjectrespawn" /><code>{"void AfterImportedBonesObjectRespawn()"}</code> | <span className="api-desc">Puts imported bones back under the rope (or their non-bone parent if static) after the object respawns.</span> |
| <Link id="m-beforeimportedbonesobjectrespawn" /><code>{"void BeforeImportedBonesObjectRespawn()"}</code> | <span className="api-desc">Puts imported bones back under their original parents before the object respawns.</span> |
| <Link id="m-buildstaticmeshobject" /><code>{"GameObject BuildStaticMeshObject(out string strStatusMessage)"}</code> | <span className="api-desc">Bakes the rope into a static mesh object. Fails in editor play mode; returns a status message.</span> |
| <Link id="m-changeropediameter" /><code>{"bool ChangeRopeDiameter(float fNewDiameter, float fNewScaleX, float fNewScaleY)"}</code> | <span className="api-desc">Changes a procedural rope's diameter and scale and rebuilds its mesh. False for other rope types.</span> |
| <Link id="m-changeropesegmentsides" /><code>{"bool ChangeRopeSegmentSides(int nNewSegmentSides)"}</code> | <span className="api-desc">Changes how many sides a procedural rope's cross-section has. False for other rope types.</span> |
| <Link id="m-checkneedsstartexitlockz" /><code>{"void CheckNeedsStartExitLockZ()"}</code> | <span className="api-desc">For procedural ropes, locks the first and last link of each segment to the node rotations when `LockStartEndInZAxis` is set.</span> |
| <Link id="m-createnewnode" /><code>{"void CreateNewNode(int nNode)"}</code> | <span className="api-desc">Inserts an empty rope node after the given index.</span> |
| <Link id="m-deleterope" /><code>{"void DeleteRope(bool bResetNodePositions = false, bool bDestroySkin = true)"}</code> | <span className="api-desc">Removes the rope's links and joints, optionally resetting node transforms.</span> |
| <Link id="m-deleteropelinks" /><code>{"void DeleteRopeLinks()"}</code> | <span className="api-desc">Destroys the generated link objects. Does nothing for imported bones.</span> |
| <Link id="m-extendrope" /><code>{"void ExtendRope("}<Link to="/mod/game-api/types/global-t-x/ultimaterope-eropeextensionmode">{"UltimateRope.ERopeExtensionMode"}</Link>{" eRopeExtensionMode, float fIncrement)"}</code> | <span className="api-desc">Extends or retracts an extensible rope, linearly or by turning the coil. Logs an error if not allowed.</span> |
| <Link id="m-filllinkmeshindicesrope" /><code>{"void FillLinkMeshIndicesRope(int nLinearLinkIndex, int nTotalLinks, ref int[] indices, bool bBreakable, bool bBrokenLink = false)"}</code> | <span className="api-desc">Writes the triangle indices for one link's rope surface. For broken links it leaves the gap open.</span> |
| <Link id="m-filllinkmeshindicessections" /><code>{"void FillLinkMeshIndicesSections(int nLinearLinkIndex, int nTotalLinks, ref int[] indices, bool bBreakable, bool bBrokenLink = false)"}</code> | <span className="api-desc">Writes the triangle indices for the end caps of a link, or of the whole rope when not breakable.</span> |
| <Link id="m-firstnodeiscoil" /><code>{"bool FirstNodeIsCoil()"}</code> | <span className="api-desc">Whether the first rope node is the coil.</span> |
| <Link id="m-hasdynamicsegmentnodes" /><code>{"bool HasDynamicSegmentNodes()"}</code> | <span className="api-desc">True if any node object has a non-kinematic rigidbody.</span> |
| <Link id="m-islaststatuserror" /><code>{"bool IsLastStatusError()"}</code> | <span className="api-desc">Whether the last build ended with an error in `Status`.</span> |
| <Link id="m-movenodedown" /><code>{"void MoveNodeDown(int nNode)"}</code> | <span className="api-desc">Swaps a rope node with the next one.</span> |
| <Link id="m-movenodeup" /><code>{"void MoveNodeUp(int nNode)"}</code> | <span className="api-desc">Swaps a rope node with the previous one.</span> |
| <Link id="m-recomputecoil" /><code>{"void RecomputeCoil()"}</code> | <span className="api-desc">Rebuilds the coil bones for the current coil length.</span> |
| <Link id="m-regenerate" /><code>{"bool Regenerate(bool bResetNodePositions = false)"}</code> | <span className="api-desc">Deletes and rebuilds the whole rope. Returns false and sets `Status` on bad settings.</span> |
| <Link id="m-removenode" /><code>{"void RemoveNode(int nNode)"}</code> | <span className="api-desc">Removes a rope node.</span> |
| <Link id="m-setupropejoints" /><code>{"void SetupRopeJoints()"}</code> | <span className="api-desc">Creates the joints between links from the current settings.</span> |
| <Link id="m-setupropelinks" /><code>{"void SetupRopeLinks()"}</code> | <span className="api-desc">Sets up link colliders, rigidbodies and layer from the current settings.</span> |
| <Link id="m-setupropematerials" /><code>{"void SetupRopeMaterials()"}</code> | <span className="api-desc">Assigns the rope and section materials on a procedural rope's skinned renderer.</span> |

<details className="api-private">
<summary>24 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">In play mode, makes the joints between links, sets up the links, and lays out the coil if the rope has one.</span> |
| <Link id="m-buildbonehashstring2gameobject" /><code>{"private bool BuildBoneHashString2GameObject(GameObject goRoot, GameObject goCurrent, ref Dictionary<string, GameObject> outHashString2GameObjects, ref string strErrorMessage)"}</code> | <span className="api-desc">Maps every object name in a hierarchy to its object, failing if a name is used twice.</span> |
| <Link id="m-buildimportedbonelist" /><code>{"private bool BuildImportedBoneList(GameObject goBoneFirst, GameObject goBoneLast, List<int> ListImportBonesStatic, List<int> ListImportBonesNoCollider, out List<"}<Link to="/mod/game-api/types/global-t-x/ultimaterope-ropebone">{"UltimateRope.RopeBone"}</Link>{"> outListImportedBones, out string strErrorMessage)"}</code> | <span className="api-desc">Works out the bone name pattern from the first and last bone names and builds the imported bone list.</span> |
| <Link id="m-buildimportedbonelisttry" /><code>{"private bool BuildImportedBoneListTry(GameObject goRoot, string strPrefix, int nIndexFirst, int nIndexLast, int nDigitsFirst, int nDigitsLast, List<int> ListImportBonesStatic, List<int> ListImportBonesNoCollider, out List<"}<Link to="/mod/game-api/types/global-t-x/ultimaterope-ropebone">{"UltimateRope.RopeBone"}</Link>{"> outListImportedBones, ref string strErrorMessage)"}</code> | <span className="api-desc">Tries one name pattern and digit count to find each numbered bone, used by `BuildImportedBoneList`.</span> |
| <Link id="m-checkaddcoilnode" /><code>{"private void CheckAddCoilNode()"}</code> | <span className="api-desc">For extensible procedural ropes with a coil, inserts a coil node at the start of `RopeNodes`.</span> |
| <Link id="m-checkdelcoilnode" /><code>{"private void CheckDelCoilNode()"}</code> | <span className="api-desc">Removes the coil node from the start of `RopeNodes` if there is one.</span> |
| <Link id="m-createjoint" /><code>{"private ConfigurableJoint CreateJoint(GameObject goObject, GameObject goConnectedTo, Vector3 v3Pivot)"}</code> | <span className="api-desc">Adds a configurable joint to an object, connects it to another's rigidbody and sets its pivot.</span> |
| <Link id="m-createropejoints" /><code>{"private void CreateRopeJoints(bool bCheckIfBroken = false)"}</code> | <span className="api-desc">Makes the joints between all links. When asked, skips joints that had broken.</span> |
| <Link id="m-extendropelinear" /><code>{"private float ExtendRopeLinear(float fLinearIncrement)"}</code> | <span className="api-desc">Moves links in or out of the rope end to extend or retract it, and returns the length actually changed.</span> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Checks for broken joints, cuts the procedural mesh there, sends the break message, and stops the rest of that segment breaking.</span> |
| <Link id="m-getaxisvector" /><code>{"private Vector3 GetAxisVector("}<Link to="/mod/game-api/types/global-t-x/ultimaterope-eaxis">{"UltimateRope.EAxis"}</Link>{" eAxis, float fLength)"}</code> | <span className="api-desc">Returns a vector of the given length along an `EAxis`.</span> |
| <Link id="m-getlinkaxisindex" /><code>{"private int GetLinkAxisIndex()"}</code> | <span className="api-desc">Returns 0, 1 or 2 for the axis links lie along (x, y or z).</span> |
| <Link id="m-getlinkaxisoffset" /><code>{"private Vector3 GetLinkAxisOffset(float fValue)"}</code> | <span className="api-desc">Returns an offset along the link axis for the rope type.</span> |
| <Link id="m-getlinkboxcollidercenterandsize" /><code>{"private bool GetLinkBoxColliderCenterAndSize(float fLinkLength, float fRopeDiameter, ref Vector3 v3CenterInOut, ref Vector3 v3SizeInOut)"}</code> | <span className="api-desc">Works out a box collider's centre and size for one link.</span> |
| <Link id="m-getlinkdiameter" /><code>{"private float GetLinkDiameter()"}</code> | <span className="api-desc">Returns the rope's thickness: the procedural diameter, the link mesh's width, or the bone collider diameter.</span> |
| <Link id="m-getlinkedobjectlocalrotation" /><code>{"private Quaternion GetLinkedObjectLocalRotation(float fTwistAngle = 0)"}</code> | <span className="api-desc">Rotation that lines a link object up with `LinkAxis`, twisted by an angle.</span> |
| <Link id="m-getlinkedobjectscale" /><code>{"private float GetLinkedObjectScale(float fSegmentLength, int nNumLinks)"}</code> | <span className="api-desc">Scale for link objects so they fill a segment's length, allowing for `LinkOffsetObject`.</span> |
| <Link id="m-ongui" /><code>{"private void OnGUI()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-parseboneindices" /><code>{"private bool ParseBoneIndices(string strBoneList, out List<int> outListBoneIndices, out string strErrorMessage)"}</code> | <span className="api-desc">Parses a comma list of bone numbers and ranges into a list of indices.</span> |
| <Link id="m-setextensiblelinktokinematic" /><code>{"private void SetExtensibleLinkToKinematic(GameObject link, bool bKinematic)"}</code> | <span className="api-desc">Makes a link kinematic (and unbreakable, collider off) while it is pulled in, or physical again when let out.</span> |
| <Link id="m-setupcoilbones" /><code>{"private void SetupCoilBones(float fCoilLength)"}</code> | <span className="api-desc">Lays the coil node's bones around the coil for a given wound length.</span> |
| <Link id="m-setupjoint" /><code>{"private void SetupJoint(ConfigurableJoint joint)"}</code> | <span className="api-desc">Applies the link joint limits, drive and break force settings to a configurable joint.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Copies the current extension to the extension input.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Empty.</span> |

</details>

## Used in

Members of other types that take, return or hold a `UltimateRope`:

<div className="api-used-in">

[`RopePersistManager.ComputeTransformInfo`](/mod/game-api/types/global-q-r/ropepersistmanager#m-computetransforminfo), [`RopePersistManager.RopeData.m_rope`](/mod/game-api/types/global-q-r/ropepersistmanager-ropedata#m-m-rope), [`RopePersistManager.RopeData.RopeData`](/mod/game-api/types/global-q-r/ropepersistmanager-ropedata#m-ctor), [`UltimateRope.RopeBreakEventInfo.rope`](/mod/game-api/types/global-t-x/ultimaterope-ropebreakeventinfo#m-rope).

</div>
