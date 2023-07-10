/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Ability = {
  __typename?: 'Ability';
  characters?: Maybe<Array<Character>>;
  charactersCount?: Maybe<Scalars['Int']['output']>;
  cooldown?: Maybe<Scalars['Int']['output']>;
  damage?: Maybe<Scalars['Int']['output']>;
  defenseDown?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Ability_Description_Document>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  removeBuffs?: Maybe<Scalars['Boolean']['output']>;
  speedDown?: Maybe<Scalars['Int']['output']>;
  turnMeterReduce?: Maybe<Scalars['Int']['output']>;
};


export type AbilityCharactersArgs = {
  orderBy?: Array<CharacterOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CharacterWhereInput;
};


export type AbilityCharactersCountArgs = {
  where?: CharacterWhereInput;
};

export type AbilityCreateInput = {
  characters?: InputMaybe<CharacterRelateToManyForCreateInput>;
  cooldown?: InputMaybe<Scalars['Int']['input']>;
  damage?: InputMaybe<Scalars['Int']['input']>;
  defenseDown?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  removeBuffs?: InputMaybe<Scalars['Boolean']['input']>;
  speedDown?: InputMaybe<Scalars['Int']['input']>;
  turnMeterReduce?: InputMaybe<Scalars['Int']['input']>;
};

export type AbilityManyRelationFilter = {
  every?: InputMaybe<AbilityWhereInput>;
  none?: InputMaybe<AbilityWhereInput>;
  some?: InputMaybe<AbilityWhereInput>;
};

export type AbilityOrderByInput = {
  cooldown?: InputMaybe<OrderDirection>;
  damage?: InputMaybe<OrderDirection>;
  defenseDown?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  removeBuffs?: InputMaybe<OrderDirection>;
  speedDown?: InputMaybe<OrderDirection>;
  turnMeterReduce?: InputMaybe<OrderDirection>;
};

export type AbilityRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<AbilityWhereUniqueInput>>;
  create?: InputMaybe<Array<AbilityCreateInput>>;
};

export type AbilityRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<AbilityWhereUniqueInput>>;
  create?: InputMaybe<Array<AbilityCreateInput>>;
  disconnect?: InputMaybe<Array<AbilityWhereUniqueInput>>;
  set?: InputMaybe<Array<AbilityWhereUniqueInput>>;
};

export type AbilityUpdateArgs = {
  data: AbilityUpdateInput;
  where: AbilityWhereUniqueInput;
};

export type AbilityUpdateInput = {
  characters?: InputMaybe<CharacterRelateToManyForUpdateInput>;
  cooldown?: InputMaybe<Scalars['Int']['input']>;
  damage?: InputMaybe<Scalars['Int']['input']>;
  defenseDown?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  removeBuffs?: InputMaybe<Scalars['Boolean']['input']>;
  speedDown?: InputMaybe<Scalars['Int']['input']>;
  turnMeterReduce?: InputMaybe<Scalars['Int']['input']>;
};

export type AbilityWhereInput = {
  AND?: InputMaybe<Array<AbilityWhereInput>>;
  NOT?: InputMaybe<Array<AbilityWhereInput>>;
  OR?: InputMaybe<Array<AbilityWhereInput>>;
  characters?: InputMaybe<CharacterManyRelationFilter>;
  cooldown?: InputMaybe<IntNullableFilter>;
  damage?: InputMaybe<IntNullableFilter>;
  defenseDown?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  removeBuffs?: InputMaybe<BooleanFilter>;
  speedDown?: InputMaybe<IntNullableFilter>;
  turnMeterReduce?: InputMaybe<IntNullableFilter>;
};

export type AbilityWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Ability_Description_Document = {
  __typename?: 'Ability_description_Document';
  document: Scalars['JSON']['output'];
};


export type Ability_Description_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type AttackResult = {
  __typename?: 'AttackResult';
  opponentTurn?: Maybe<TurnSummary>;
  playerTurn?: Maybe<TurnSummary>;
};

export type AttemptCharacter = {
  __typename?: 'AttemptCharacter';
  abilities?: Maybe<Scalars['JSON']['output']>;
  attempt?: Maybe<BattleAttempt>;
  character?: Maybe<UserCharacter>;
  defeated?: Maybe<Scalars['Boolean']['output']>;
  effects?: Maybe<Scalars['String']['output']>;
  health?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  maxHealth?: Maybe<Scalars['Int']['output']>;
  turnMeter?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
};

export type AttemptCharacterCreateInput = {
  abilities?: InputMaybe<Scalars['JSON']['input']>;
  attempt?: InputMaybe<BattleAttemptRelateToOneForCreateInput>;
  character?: InputMaybe<UserCharacterRelateToOneForCreateInput>;
  defeated?: InputMaybe<Scalars['Boolean']['input']>;
  effects?: InputMaybe<Scalars['String']['input']>;
  health?: InputMaybe<Scalars['Int']['input']>;
  maxHealth?: InputMaybe<Scalars['Int']['input']>;
  turnMeter?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type AttemptCharacterManyRelationFilter = {
  every?: InputMaybe<AttemptCharacterWhereInput>;
  none?: InputMaybe<AttemptCharacterWhereInput>;
  some?: InputMaybe<AttemptCharacterWhereInput>;
};

export type AttemptCharacterOrOpponent = AttemptCharacter | AttemptOpponent;

export type AttemptCharacterOrderByInput = {
  defeated?: InputMaybe<OrderDirection>;
  effects?: InputMaybe<OrderDirection>;
  health?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  maxHealth?: InputMaybe<OrderDirection>;
  turnMeter?: InputMaybe<OrderDirection>;
};

export type AttemptCharacterRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<AttemptCharacterWhereUniqueInput>>;
  create?: InputMaybe<Array<AttemptCharacterCreateInput>>;
};

export type AttemptCharacterRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<AttemptCharacterWhereUniqueInput>>;
  create?: InputMaybe<Array<AttemptCharacterCreateInput>>;
  disconnect?: InputMaybe<Array<AttemptCharacterWhereUniqueInput>>;
  set?: InputMaybe<Array<AttemptCharacterWhereUniqueInput>>;
};

export type AttemptCharacterUpdateArgs = {
  data: AttemptCharacterUpdateInput;
  where: AttemptCharacterWhereUniqueInput;
};

export type AttemptCharacterUpdateInput = {
  abilities?: InputMaybe<Scalars['JSON']['input']>;
  attempt?: InputMaybe<BattleAttemptRelateToOneForUpdateInput>;
  character?: InputMaybe<UserCharacterRelateToOneForUpdateInput>;
  defeated?: InputMaybe<Scalars['Boolean']['input']>;
  effects?: InputMaybe<Scalars['String']['input']>;
  health?: InputMaybe<Scalars['Int']['input']>;
  maxHealth?: InputMaybe<Scalars['Int']['input']>;
  turnMeter?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type AttemptCharacterWhereInput = {
  AND?: InputMaybe<Array<AttemptCharacterWhereInput>>;
  NOT?: InputMaybe<Array<AttemptCharacterWhereInput>>;
  OR?: InputMaybe<Array<AttemptCharacterWhereInput>>;
  attempt?: InputMaybe<BattleAttemptWhereInput>;
  character?: InputMaybe<UserCharacterWhereInput>;
  defeated?: InputMaybe<BooleanFilter>;
  effects?: InputMaybe<StringFilter>;
  health?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IdFilter>;
  maxHealth?: InputMaybe<IntNullableFilter>;
  turnMeter?: InputMaybe<IntNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type AttemptCharacterWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AttemptOpponent = {
  __typename?: 'AttemptOpponent';
  abilities?: Maybe<Scalars['JSON']['output']>;
  attempt?: Maybe<BattleAttempt>;
  character?: Maybe<BattleOpponent>;
  defeated?: Maybe<Scalars['Boolean']['output']>;
  effects?: Maybe<Scalars['String']['output']>;
  health?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  maxHealth?: Maybe<Scalars['Int']['output']>;
  turnMeter?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
};

export type AttemptOpponentCreateInput = {
  abilities?: InputMaybe<Scalars['JSON']['input']>;
  attempt?: InputMaybe<BattleAttemptRelateToOneForCreateInput>;
  character?: InputMaybe<BattleOpponentRelateToOneForCreateInput>;
  defeated?: InputMaybe<Scalars['Boolean']['input']>;
  effects?: InputMaybe<Scalars['String']['input']>;
  health?: InputMaybe<Scalars['Int']['input']>;
  maxHealth?: InputMaybe<Scalars['Int']['input']>;
  turnMeter?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type AttemptOpponentManyRelationFilter = {
  every?: InputMaybe<AttemptOpponentWhereInput>;
  none?: InputMaybe<AttemptOpponentWhereInput>;
  some?: InputMaybe<AttemptOpponentWhereInput>;
};

export type AttemptOpponentOrderByInput = {
  defeated?: InputMaybe<OrderDirection>;
  effects?: InputMaybe<OrderDirection>;
  health?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  maxHealth?: InputMaybe<OrderDirection>;
  turnMeter?: InputMaybe<OrderDirection>;
};

export type AttemptOpponentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<AttemptOpponentWhereUniqueInput>>;
  create?: InputMaybe<Array<AttemptOpponentCreateInput>>;
};

export type AttemptOpponentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<AttemptOpponentWhereUniqueInput>>;
  create?: InputMaybe<Array<AttemptOpponentCreateInput>>;
  disconnect?: InputMaybe<Array<AttemptOpponentWhereUniqueInput>>;
  set?: InputMaybe<Array<AttemptOpponentWhereUniqueInput>>;
};

export type AttemptOpponentUpdateArgs = {
  data: AttemptOpponentUpdateInput;
  where: AttemptOpponentWhereUniqueInput;
};

export type AttemptOpponentUpdateInput = {
  abilities?: InputMaybe<Scalars['JSON']['input']>;
  attempt?: InputMaybe<BattleAttemptRelateToOneForUpdateInput>;
  character?: InputMaybe<BattleOpponentRelateToOneForUpdateInput>;
  defeated?: InputMaybe<Scalars['Boolean']['input']>;
  effects?: InputMaybe<Scalars['String']['input']>;
  health?: InputMaybe<Scalars['Int']['input']>;
  maxHealth?: InputMaybe<Scalars['Int']['input']>;
  turnMeter?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type AttemptOpponentWhereInput = {
  AND?: InputMaybe<Array<AttemptOpponentWhereInput>>;
  NOT?: InputMaybe<Array<AttemptOpponentWhereInput>>;
  OR?: InputMaybe<Array<AttemptOpponentWhereInput>>;
  attempt?: InputMaybe<BattleAttemptWhereInput>;
  character?: InputMaybe<BattleOpponentWhereInput>;
  defeated?: InputMaybe<BooleanFilter>;
  effects?: InputMaybe<StringFilter>;
  health?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IdFilter>;
  maxHealth?: InputMaybe<IntNullableFilter>;
  turnMeter?: InputMaybe<IntNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type AttemptOpponentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AuthenticatedItem = User;

export type Battle = {
  __typename?: 'Battle';
  category?: Maybe<BattleCategory>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  opponents?: Maybe<Array<BattleOpponent>>;
  opponentsCount?: Maybe<Scalars['Int']['output']>;
  tier?: Maybe<BattleTier>;
};


export type BattleOpponentsArgs = {
  orderBy?: Array<BattleOpponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BattleOpponentWhereInput;
};


export type BattleOpponentsCountArgs = {
  where?: BattleOpponentWhereInput;
};

export type BattleAttempt = {
  __typename?: 'BattleAttempt';
  battle?: Maybe<Battle>;
  firstUp?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  opponentTurn?: Maybe<Scalars['ID']['output']>;
  opponents?: Maybe<Array<AttemptOpponent>>;
  opponentsCount?: Maybe<Scalars['Int']['output']>;
  squad?: Maybe<Array<AttemptCharacter>>;
  squadCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
};


export type BattleAttemptOpponentsArgs = {
  orderBy?: Array<AttemptOpponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AttemptOpponentWhereInput;
};


export type BattleAttemptOpponentsCountArgs = {
  where?: AttemptOpponentWhereInput;
};


export type BattleAttemptSquadArgs = {
  orderBy?: Array<AttemptCharacterOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AttemptCharacterWhereInput;
};


export type BattleAttemptSquadCountArgs = {
  where?: AttemptCharacterWhereInput;
};

export type BattleAttemptCreateInput = {
  battle?: InputMaybe<BattleRelateToOneForCreateInput>;
  opponents?: InputMaybe<AttemptOpponentRelateToManyForCreateInput>;
  squad?: InputMaybe<AttemptCharacterRelateToManyForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type BattleAttemptOrderByInput = {
  id?: InputMaybe<OrderDirection>;
};

export type BattleAttemptRelateToOneForCreateInput = {
  connect?: InputMaybe<BattleAttemptWhereUniqueInput>;
  create?: InputMaybe<BattleAttemptCreateInput>;
};

export type BattleAttemptRelateToOneForUpdateInput = {
  connect?: InputMaybe<BattleAttemptWhereUniqueInput>;
  create?: InputMaybe<BattleAttemptCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BattleAttemptUpdateArgs = {
  data: BattleAttemptUpdateInput;
  where: BattleAttemptWhereUniqueInput;
};

export type BattleAttemptUpdateInput = {
  battle?: InputMaybe<BattleRelateToOneForUpdateInput>;
  opponents?: InputMaybe<AttemptOpponentRelateToManyForUpdateInput>;
  squad?: InputMaybe<AttemptCharacterRelateToManyForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type BattleAttemptWhereInput = {
  AND?: InputMaybe<Array<BattleAttemptWhereInput>>;
  NOT?: InputMaybe<Array<BattleAttemptWhereInput>>;
  OR?: InputMaybe<Array<BattleAttemptWhereInput>>;
  battle?: InputMaybe<BattleWhereInput>;
  id?: InputMaybe<IdFilter>;
  opponents?: InputMaybe<AttemptOpponentManyRelationFilter>;
  squad?: InputMaybe<AttemptCharacterManyRelationFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type BattleAttemptWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BattleCategory = {
  __typename?: 'BattleCategory';
  battles?: Maybe<Array<Battle>>;
  battlesCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  tiers?: Maybe<Array<BattleTier>>;
  tiersCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type BattleCategoryBattlesArgs = {
  orderBy?: Array<BattleOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BattleWhereInput;
};


export type BattleCategoryBattlesCountArgs = {
  where?: BattleWhereInput;
};


export type BattleCategoryTiersArgs = {
  orderBy?: Array<BattleTierOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BattleTierWhereInput;
};


export type BattleCategoryTiersCountArgs = {
  where?: BattleTierWhereInput;
};

export type BattleCategoryCreateInput = {
  battles?: InputMaybe<BattleRelateToManyForCreateInput>;
  tiers?: InputMaybe<BattleTierRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BattleCategoryOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type BattleCategoryRelateToOneForCreateInput = {
  connect?: InputMaybe<BattleCategoryWhereUniqueInput>;
  create?: InputMaybe<BattleCategoryCreateInput>;
};

export type BattleCategoryRelateToOneForUpdateInput = {
  connect?: InputMaybe<BattleCategoryWhereUniqueInput>;
  create?: InputMaybe<BattleCategoryCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BattleCategoryUpdateArgs = {
  data: BattleCategoryUpdateInput;
  where: BattleCategoryWhereUniqueInput;
};

export type BattleCategoryUpdateInput = {
  battles?: InputMaybe<BattleRelateToManyForUpdateInput>;
  tiers?: InputMaybe<BattleTierRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BattleCategoryWhereInput = {
  AND?: InputMaybe<Array<BattleCategoryWhereInput>>;
  NOT?: InputMaybe<Array<BattleCategoryWhereInput>>;
  OR?: InputMaybe<Array<BattleCategoryWhereInput>>;
  battles?: InputMaybe<BattleManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  tiers?: InputMaybe<BattleTierManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type BattleCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BattleCreateInput = {
  category?: InputMaybe<BattleCategoryRelateToOneForCreateInput>;
  label?: InputMaybe<Scalars['String']['input']>;
  opponents?: InputMaybe<BattleOpponentRelateToManyForCreateInput>;
  tier?: InputMaybe<BattleTierRelateToOneForCreateInput>;
};

export type BattleManyRelationFilter = {
  every?: InputMaybe<BattleWhereInput>;
  none?: InputMaybe<BattleWhereInput>;
  some?: InputMaybe<BattleWhereInput>;
};

export type BattleOpponent = {
  __typename?: 'BattleOpponent';
  battles?: Maybe<Array<Battle>>;
  battlesCount?: Maybe<Scalars['Int']['output']>;
  character?: Maybe<Character>;
  gearLevel?: Maybe<Scalars['Int']['output']>;
  health?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  level?: Maybe<Scalars['Int']['output']>;
  speed?: Maybe<Scalars['Float']['output']>;
  stars?: Maybe<Scalars['Int']['output']>;
};


export type BattleOpponentBattlesArgs = {
  orderBy?: Array<BattleOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BattleWhereInput;
};


export type BattleOpponentBattlesCountArgs = {
  where?: BattleWhereInput;
};

export type BattleOpponentCreateInput = {
  battles?: InputMaybe<BattleRelateToManyForCreateInput>;
  character?: InputMaybe<CharacterRelateToOneForCreateInput>;
  gearLevel?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  stars?: InputMaybe<Scalars['Int']['input']>;
};

export type BattleOpponentManyRelationFilter = {
  every?: InputMaybe<BattleOpponentWhereInput>;
  none?: InputMaybe<BattleOpponentWhereInput>;
  some?: InputMaybe<BattleOpponentWhereInput>;
};

export type BattleOpponentOrderByInput = {
  gearLevel?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  level?: InputMaybe<OrderDirection>;
  stars?: InputMaybe<OrderDirection>;
};

export type BattleOpponentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<BattleOpponentWhereUniqueInput>>;
  create?: InputMaybe<Array<BattleOpponentCreateInput>>;
};

export type BattleOpponentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<BattleOpponentWhereUniqueInput>>;
  create?: InputMaybe<Array<BattleOpponentCreateInput>>;
  disconnect?: InputMaybe<Array<BattleOpponentWhereUniqueInput>>;
  set?: InputMaybe<Array<BattleOpponentWhereUniqueInput>>;
};

export type BattleOpponentRelateToOneForCreateInput = {
  connect?: InputMaybe<BattleOpponentWhereUniqueInput>;
  create?: InputMaybe<BattleOpponentCreateInput>;
};

export type BattleOpponentRelateToOneForUpdateInput = {
  connect?: InputMaybe<BattleOpponentWhereUniqueInput>;
  create?: InputMaybe<BattleOpponentCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BattleOpponentUpdateArgs = {
  data: BattleOpponentUpdateInput;
  where: BattleOpponentWhereUniqueInput;
};

export type BattleOpponentUpdateInput = {
  battles?: InputMaybe<BattleRelateToManyForUpdateInput>;
  character?: InputMaybe<CharacterRelateToOneForUpdateInput>;
  gearLevel?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  stars?: InputMaybe<Scalars['Int']['input']>;
};

export type BattleOpponentWhereInput = {
  AND?: InputMaybe<Array<BattleOpponentWhereInput>>;
  NOT?: InputMaybe<Array<BattleOpponentWhereInput>>;
  OR?: InputMaybe<Array<BattleOpponentWhereInput>>;
  battles?: InputMaybe<BattleManyRelationFilter>;
  character?: InputMaybe<CharacterWhereInput>;
  gearLevel?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  level?: InputMaybe<IntFilter>;
  stars?: InputMaybe<IntFilter>;
};

export type BattleOpponentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BattleOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  label?: InputMaybe<OrderDirection>;
};

export type BattleRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<BattleWhereUniqueInput>>;
  create?: InputMaybe<Array<BattleCreateInput>>;
};

export type BattleRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<BattleWhereUniqueInput>>;
  create?: InputMaybe<Array<BattleCreateInput>>;
  disconnect?: InputMaybe<Array<BattleWhereUniqueInput>>;
  set?: InputMaybe<Array<BattleWhereUniqueInput>>;
};

export type BattleRelateToOneForCreateInput = {
  connect?: InputMaybe<BattleWhereUniqueInput>;
  create?: InputMaybe<BattleCreateInput>;
};

export type BattleRelateToOneForUpdateInput = {
  connect?: InputMaybe<BattleWhereUniqueInput>;
  create?: InputMaybe<BattleCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BattleTier = {
  __typename?: 'BattleTier';
  battles?: Maybe<Array<Battle>>;
  battlesCount?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<BattleCategory>;
  id: Scalars['ID']['output'];
  tier?: Maybe<Scalars['Int']['output']>;
};


export type BattleTierBattlesArgs = {
  orderBy?: Array<BattleOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BattleWhereInput;
};


export type BattleTierBattlesCountArgs = {
  where?: BattleWhereInput;
};

export type BattleTierCreateInput = {
  battles?: InputMaybe<BattleRelateToManyForCreateInput>;
  category?: InputMaybe<BattleCategoryRelateToOneForCreateInput>;
  tier?: InputMaybe<Scalars['Int']['input']>;
};

export type BattleTierManyRelationFilter = {
  every?: InputMaybe<BattleTierWhereInput>;
  none?: InputMaybe<BattleTierWhereInput>;
  some?: InputMaybe<BattleTierWhereInput>;
};

export type BattleTierOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  tier?: InputMaybe<OrderDirection>;
};

export type BattleTierRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<BattleTierWhereUniqueInput>>;
  create?: InputMaybe<Array<BattleTierCreateInput>>;
};

export type BattleTierRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<BattleTierWhereUniqueInput>>;
  create?: InputMaybe<Array<BattleTierCreateInput>>;
  disconnect?: InputMaybe<Array<BattleTierWhereUniqueInput>>;
  set?: InputMaybe<Array<BattleTierWhereUniqueInput>>;
};

export type BattleTierRelateToOneForCreateInput = {
  connect?: InputMaybe<BattleTierWhereUniqueInput>;
  create?: InputMaybe<BattleTierCreateInput>;
};

export type BattleTierRelateToOneForUpdateInput = {
  connect?: InputMaybe<BattleTierWhereUniqueInput>;
  create?: InputMaybe<BattleTierCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BattleTierUpdateArgs = {
  data: BattleTierUpdateInput;
  where: BattleTierWhereUniqueInput;
};

export type BattleTierUpdateInput = {
  battles?: InputMaybe<BattleRelateToManyForUpdateInput>;
  category?: InputMaybe<BattleCategoryRelateToOneForUpdateInput>;
  tier?: InputMaybe<Scalars['Int']['input']>;
};

export type BattleTierWhereInput = {
  AND?: InputMaybe<Array<BattleTierWhereInput>>;
  NOT?: InputMaybe<Array<BattleTierWhereInput>>;
  OR?: InputMaybe<Array<BattleTierWhereInput>>;
  battles?: InputMaybe<BattleManyRelationFilter>;
  category?: InputMaybe<BattleCategoryWhereInput>;
  id?: InputMaybe<IdFilter>;
  tier?: InputMaybe<IntNullableFilter>;
};

export type BattleTierWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BattleUpdateArgs = {
  data: BattleUpdateInput;
  where: BattleWhereUniqueInput;
};

export type BattleUpdateInput = {
  category?: InputMaybe<BattleCategoryRelateToOneForUpdateInput>;
  label?: InputMaybe<Scalars['String']['input']>;
  opponents?: InputMaybe<BattleOpponentRelateToManyForUpdateInput>;
  tier?: InputMaybe<BattleTierRelateToOneForUpdateInput>;
};

export type BattleWhereInput = {
  AND?: InputMaybe<Array<BattleWhereInput>>;
  NOT?: InputMaybe<Array<BattleWhereInput>>;
  OR?: InputMaybe<Array<BattleWhereInput>>;
  category?: InputMaybe<BattleCategoryWhereInput>;
  id?: InputMaybe<IdFilter>;
  label?: InputMaybe<StringFilter>;
  opponents?: InputMaybe<BattleOpponentManyRelationFilter>;
  tier?: InputMaybe<BattleTierWhereInput>;
};

export type BattleWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilter>;
};

export type Character = {
  __typename?: 'Character';
  abilities?: Maybe<Array<Ability>>;
  abilitiesCount?: Maybe<Scalars['Int']['output']>;
  armor?: Maybe<Scalars['Int']['output']>;
  armorPenetration?: Maybe<Scalars['Int']['output']>;
  avatar?: Maybe<ImageFieldOutput>;
  critChance?: Maybe<Scalars['Float']['output']>;
  critDamage?: Maybe<Scalars['Float']['output']>;
  damage?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Character_Description_Document>;
  factions?: Maybe<Array<Faction>>;
  factionsCount?: Maybe<Scalars['Int']['output']>;
  health?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<ImageFieldOutput>;
  minimumStars?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  potency?: Maybe<Scalars['Float']['output']>;
  protection?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  specDamage?: Maybe<Scalars['Int']['output']>;
  speed?: Maybe<Scalars['Int']['output']>;
  tenacity?: Maybe<Scalars['Float']['output']>;
  userCharacters?: Maybe<Array<UserCharacter>>;
  userCharactersCount?: Maybe<Scalars['Int']['output']>;
};


export type CharacterAbilitiesArgs = {
  orderBy?: Array<AbilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AbilityWhereInput;
};


export type CharacterAbilitiesCountArgs = {
  where?: AbilityWhereInput;
};


export type CharacterFactionsArgs = {
  orderBy?: Array<FactionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FactionWhereInput;
};


export type CharacterFactionsCountArgs = {
  where?: FactionWhereInput;
};


export type CharacterUserCharactersArgs = {
  orderBy?: Array<UserCharacterOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserCharacterWhereInput;
};


export type CharacterUserCharactersCountArgs = {
  where?: UserCharacterWhereInput;
};

export type CharacterCreateInput = {
  abilities?: InputMaybe<AbilityRelateToManyForCreateInput>;
  armor?: InputMaybe<Scalars['Int']['input']>;
  armorPenetration?: InputMaybe<Scalars['Int']['input']>;
  avatar?: InputMaybe<ImageFieldInput>;
  critChance?: InputMaybe<Scalars['Float']['input']>;
  critDamage?: InputMaybe<Scalars['Float']['input']>;
  damage?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  factions?: InputMaybe<FactionRelateToManyForCreateInput>;
  health?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<ImageFieldInput>;
  minimumStars?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  potency?: InputMaybe<Scalars['Float']['input']>;
  protection?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  specDamage?: InputMaybe<Scalars['Int']['input']>;
  speed?: InputMaybe<Scalars['Int']['input']>;
  tenacity?: InputMaybe<Scalars['Float']['input']>;
  userCharacters?: InputMaybe<UserCharacterRelateToManyForCreateInput>;
};

export type CharacterManyRelationFilter = {
  every?: InputMaybe<CharacterWhereInput>;
  none?: InputMaybe<CharacterWhereInput>;
  some?: InputMaybe<CharacterWhereInput>;
};

export type CharacterOrderByInput = {
  armor?: InputMaybe<OrderDirection>;
  armorPenetration?: InputMaybe<OrderDirection>;
  critChance?: InputMaybe<OrderDirection>;
  critDamage?: InputMaybe<OrderDirection>;
  damage?: InputMaybe<OrderDirection>;
  health?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  minimumStars?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  potency?: InputMaybe<OrderDirection>;
  protection?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  specDamage?: InputMaybe<OrderDirection>;
  speed?: InputMaybe<OrderDirection>;
  tenacity?: InputMaybe<OrderDirection>;
};

export type CharacterRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CharacterWhereUniqueInput>>;
  create?: InputMaybe<Array<CharacterCreateInput>>;
};

export type CharacterRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CharacterWhereUniqueInput>>;
  create?: InputMaybe<Array<CharacterCreateInput>>;
  disconnect?: InputMaybe<Array<CharacterWhereUniqueInput>>;
  set?: InputMaybe<Array<CharacterWhereUniqueInput>>;
};

export type CharacterRelateToOneForCreateInput = {
  connect?: InputMaybe<CharacterWhereUniqueInput>;
  create?: InputMaybe<CharacterCreateInput>;
};

export type CharacterRelateToOneForUpdateInput = {
  connect?: InputMaybe<CharacterWhereUniqueInput>;
  create?: InputMaybe<CharacterCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CharacterUpdateArgs = {
  data: CharacterUpdateInput;
  where: CharacterWhereUniqueInput;
};

export type CharacterUpdateInput = {
  abilities?: InputMaybe<AbilityRelateToManyForUpdateInput>;
  armor?: InputMaybe<Scalars['Int']['input']>;
  armorPenetration?: InputMaybe<Scalars['Int']['input']>;
  avatar?: InputMaybe<ImageFieldInput>;
  critChance?: InputMaybe<Scalars['Float']['input']>;
  critDamage?: InputMaybe<Scalars['Float']['input']>;
  damage?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  factions?: InputMaybe<FactionRelateToManyForUpdateInput>;
  health?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<ImageFieldInput>;
  minimumStars?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  potency?: InputMaybe<Scalars['Float']['input']>;
  protection?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  specDamage?: InputMaybe<Scalars['Int']['input']>;
  speed?: InputMaybe<Scalars['Int']['input']>;
  tenacity?: InputMaybe<Scalars['Float']['input']>;
  userCharacters?: InputMaybe<UserCharacterRelateToManyForUpdateInput>;
};

export type CharacterWhereInput = {
  AND?: InputMaybe<Array<CharacterWhereInput>>;
  NOT?: InputMaybe<Array<CharacterWhereInput>>;
  OR?: InputMaybe<Array<CharacterWhereInput>>;
  abilities?: InputMaybe<AbilityManyRelationFilter>;
  armor?: InputMaybe<IntNullableFilter>;
  armorPenetration?: InputMaybe<IntNullableFilter>;
  critChance?: InputMaybe<FloatFilter>;
  critDamage?: InputMaybe<FloatNullableFilter>;
  damage?: InputMaybe<IntFilter>;
  factions?: InputMaybe<FactionManyRelationFilter>;
  health?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  minimumStars?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  potency?: InputMaybe<FloatNullableFilter>;
  protection?: InputMaybe<IntNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  specDamage?: InputMaybe<IntFilter>;
  speed?: InputMaybe<IntFilter>;
  tenacity?: InputMaybe<FloatNullableFilter>;
  userCharacters?: InputMaybe<UserCharacterManyRelationFilter>;
};

export type CharacterWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Character_Description_Document = {
  __typename?: 'Character_description_Document';
  document: Scalars['JSON']['output'];
};


export type Character_Description_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Faction = {
  __typename?: 'Faction';
  characters?: Maybe<Array<Character>>;
  charactersCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isPublished?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type FactionCharactersArgs = {
  orderBy?: Array<CharacterOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CharacterWhereInput;
};


export type FactionCharactersCountArgs = {
  where?: CharacterWhereInput;
};

export type FactionCreateInput = {
  characters?: InputMaybe<CharacterRelateToManyForCreateInput>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FactionManyRelationFilter = {
  every?: InputMaybe<FactionWhereInput>;
  none?: InputMaybe<FactionWhereInput>;
  some?: InputMaybe<FactionWhereInput>;
};

export type FactionOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  isPublished?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type FactionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<FactionWhereUniqueInput>>;
  create?: InputMaybe<Array<FactionCreateInput>>;
};

export type FactionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<FactionWhereUniqueInput>>;
  create?: InputMaybe<Array<FactionCreateInput>>;
  disconnect?: InputMaybe<Array<FactionWhereUniqueInput>>;
  set?: InputMaybe<Array<FactionWhereUniqueInput>>;
};

export type FactionUpdateArgs = {
  data: FactionUpdateInput;
  where: FactionWhereUniqueInput;
};

export type FactionUpdateInput = {
  characters?: InputMaybe<CharacterRelateToManyForUpdateInput>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FactionWhereInput = {
  AND?: InputMaybe<Array<FactionWhereInput>>;
  NOT?: InputMaybe<Array<FactionWhereInput>>;
  OR?: InputMaybe<Array<FactionWhereInput>>;
  characters?: InputMaybe<CharacterManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isPublished?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
};

export type FactionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  upload: Scalars['Upload']['input'];
};

export type ImageFieldOutput = {
  __typename?: 'ImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  attack?: Maybe<AttackResult>;
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createAbilities?: Maybe<Array<Maybe<Ability>>>;
  createAbility?: Maybe<Ability>;
  createAttemptCharacter?: Maybe<AttemptCharacter>;
  createAttemptCharacters?: Maybe<Array<Maybe<AttemptCharacter>>>;
  createAttemptOpponent?: Maybe<AttemptOpponent>;
  createAttemptOpponents?: Maybe<Array<Maybe<AttemptOpponent>>>;
  createBattle?: Maybe<Battle>;
  createBattleAttempt?: Maybe<BattleAttempt>;
  createBattleAttemptForBattle?: Maybe<BattleAttempt>;
  createBattleAttempts?: Maybe<Array<Maybe<BattleAttempt>>>;
  createBattleCategories?: Maybe<Array<Maybe<BattleCategory>>>;
  createBattleCategory?: Maybe<BattleCategory>;
  createBattleOpponent?: Maybe<BattleOpponent>;
  createBattleOpponents?: Maybe<Array<Maybe<BattleOpponent>>>;
  createBattleTier?: Maybe<BattleTier>;
  createBattleTiers?: Maybe<Array<Maybe<BattleTier>>>;
  createBattles?: Maybe<Array<Maybe<Battle>>>;
  createCharacter?: Maybe<Character>;
  createCharacters?: Maybe<Array<Maybe<Character>>>;
  createFaction?: Maybe<Faction>;
  createFactions?: Maybe<Array<Maybe<Faction>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createUser?: Maybe<User>;
  createUserCharacter?: Maybe<UserCharacter>;
  createUserCharacters?: Maybe<Array<Maybe<UserCharacter>>>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteAbilities?: Maybe<Array<Maybe<Ability>>>;
  deleteAbility?: Maybe<Ability>;
  deleteAttemptCharacter?: Maybe<AttemptCharacter>;
  deleteAttemptCharacters?: Maybe<Array<Maybe<AttemptCharacter>>>;
  deleteAttemptOpponent?: Maybe<AttemptOpponent>;
  deleteAttemptOpponents?: Maybe<Array<Maybe<AttemptOpponent>>>;
  deleteBattle?: Maybe<Battle>;
  deleteBattleAttempt?: Maybe<BattleAttempt>;
  deleteBattleAttempts?: Maybe<Array<Maybe<BattleAttempt>>>;
  deleteBattleCategories?: Maybe<Array<Maybe<BattleCategory>>>;
  deleteBattleCategory?: Maybe<BattleCategory>;
  deleteBattleOpponent?: Maybe<BattleOpponent>;
  deleteBattleOpponents?: Maybe<Array<Maybe<BattleOpponent>>>;
  deleteBattleTier?: Maybe<BattleTier>;
  deleteBattleTiers?: Maybe<Array<Maybe<BattleTier>>>;
  deleteBattles?: Maybe<Array<Maybe<Battle>>>;
  deleteCharacter?: Maybe<Character>;
  deleteCharacters?: Maybe<Array<Maybe<Character>>>;
  deleteFaction?: Maybe<Faction>;
  deleteFactions?: Maybe<Array<Maybe<Faction>>>;
  deleteUser?: Maybe<User>;
  deleteUserCharacter?: Maybe<UserCharacter>;
  deleteUserCharacters?: Maybe<Array<Maybe<UserCharacter>>>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  doBattle?: Maybe<BattleAttempt>;
  endSession: Scalars['Boolean']['output'];
  getWrecked?: Maybe<BattleAttempt>;
  updateAbilities?: Maybe<Array<Maybe<Ability>>>;
  updateAbility?: Maybe<Ability>;
  updateAttemptCharacter?: Maybe<AttemptCharacter>;
  updateAttemptCharacters?: Maybe<Array<Maybe<AttemptCharacter>>>;
  updateAttemptOpponent?: Maybe<AttemptOpponent>;
  updateAttemptOpponents?: Maybe<Array<Maybe<AttemptOpponent>>>;
  updateBattle?: Maybe<Battle>;
  updateBattleAttempt?: Maybe<BattleAttempt>;
  updateBattleAttempts?: Maybe<Array<Maybe<BattleAttempt>>>;
  updateBattleCategories?: Maybe<Array<Maybe<BattleCategory>>>;
  updateBattleCategory?: Maybe<BattleCategory>;
  updateBattleOpponent?: Maybe<BattleOpponent>;
  updateBattleOpponents?: Maybe<Array<Maybe<BattleOpponent>>>;
  updateBattleTier?: Maybe<BattleTier>;
  updateBattleTiers?: Maybe<Array<Maybe<BattleTier>>>;
  updateBattles?: Maybe<Array<Maybe<Battle>>>;
  updateCharacter?: Maybe<Character>;
  updateCharacters?: Maybe<Array<Maybe<Character>>>;
  updateFaction?: Maybe<Faction>;
  updateFactions?: Maybe<Array<Maybe<Faction>>>;
  updateUser?: Maybe<User>;
  updateUserCharacter?: Maybe<UserCharacter>;
  updateUserCharacters?: Maybe<Array<Maybe<UserCharacter>>>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAttackArgs = {
  ability: Scalars['ID']['input'];
  attempt: Scalars['ID']['input'];
  target: Scalars['ID']['input'];
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateAbilitiesArgs = {
  data: Array<AbilityCreateInput>;
};


export type MutationCreateAbilityArgs = {
  data: AbilityCreateInput;
};


export type MutationCreateAttemptCharacterArgs = {
  data: AttemptCharacterCreateInput;
};


export type MutationCreateAttemptCharactersArgs = {
  data: Array<AttemptCharacterCreateInput>;
};


export type MutationCreateAttemptOpponentArgs = {
  data: AttemptOpponentCreateInput;
};


export type MutationCreateAttemptOpponentsArgs = {
  data: Array<AttemptOpponentCreateInput>;
};


export type MutationCreateBattleArgs = {
  data: BattleCreateInput;
};


export type MutationCreateBattleAttemptArgs = {
  data: BattleAttemptCreateInput;
};


export type MutationCreateBattleAttemptForBattleArgs = {
  battle: Scalars['ID']['input'];
  user: Scalars['ID']['input'];
};


export type MutationCreateBattleAttemptsArgs = {
  data: Array<BattleAttemptCreateInput>;
};


export type MutationCreateBattleCategoriesArgs = {
  data: Array<BattleCategoryCreateInput>;
};


export type MutationCreateBattleCategoryArgs = {
  data: BattleCategoryCreateInput;
};


export type MutationCreateBattleOpponentArgs = {
  data: BattleOpponentCreateInput;
};


export type MutationCreateBattleOpponentsArgs = {
  data: Array<BattleOpponentCreateInput>;
};


export type MutationCreateBattleTierArgs = {
  data: BattleTierCreateInput;
};


export type MutationCreateBattleTiersArgs = {
  data: Array<BattleTierCreateInput>;
};


export type MutationCreateBattlesArgs = {
  data: Array<BattleCreateInput>;
};


export type MutationCreateCharacterArgs = {
  data: CharacterCreateInput;
};


export type MutationCreateCharactersArgs = {
  data: Array<CharacterCreateInput>;
};


export type MutationCreateFactionArgs = {
  data: FactionCreateInput;
};


export type MutationCreateFactionsArgs = {
  data: Array<FactionCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserCharacterArgs = {
  data: UserCharacterCreateInput;
};


export type MutationCreateUserCharactersArgs = {
  data: Array<UserCharacterCreateInput>;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteAbilitiesArgs = {
  where: Array<AbilityWhereUniqueInput>;
};


export type MutationDeleteAbilityArgs = {
  where: AbilityWhereUniqueInput;
};


export type MutationDeleteAttemptCharacterArgs = {
  where: AttemptCharacterWhereUniqueInput;
};


export type MutationDeleteAttemptCharactersArgs = {
  where: Array<AttemptCharacterWhereUniqueInput>;
};


export type MutationDeleteAttemptOpponentArgs = {
  where: AttemptOpponentWhereUniqueInput;
};


export type MutationDeleteAttemptOpponentsArgs = {
  where: Array<AttemptOpponentWhereUniqueInput>;
};


export type MutationDeleteBattleArgs = {
  where: BattleWhereUniqueInput;
};


export type MutationDeleteBattleAttemptArgs = {
  where: BattleAttemptWhereUniqueInput;
};


export type MutationDeleteBattleAttemptsArgs = {
  where: Array<BattleAttemptWhereUniqueInput>;
};


export type MutationDeleteBattleCategoriesArgs = {
  where: Array<BattleCategoryWhereUniqueInput>;
};


export type MutationDeleteBattleCategoryArgs = {
  where: BattleCategoryWhereUniqueInput;
};


export type MutationDeleteBattleOpponentArgs = {
  where: BattleOpponentWhereUniqueInput;
};


export type MutationDeleteBattleOpponentsArgs = {
  where: Array<BattleOpponentWhereUniqueInput>;
};


export type MutationDeleteBattleTierArgs = {
  where: BattleTierWhereUniqueInput;
};


export type MutationDeleteBattleTiersArgs = {
  where: Array<BattleTierWhereUniqueInput>;
};


export type MutationDeleteBattlesArgs = {
  where: Array<BattleWhereUniqueInput>;
};


export type MutationDeleteCharacterArgs = {
  where: CharacterWhereUniqueInput;
};


export type MutationDeleteCharactersArgs = {
  where: Array<CharacterWhereUniqueInput>;
};


export type MutationDeleteFactionArgs = {
  where: FactionWhereUniqueInput;
};


export type MutationDeleteFactionsArgs = {
  where: Array<FactionWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUserCharacterArgs = {
  where: UserCharacterWhereUniqueInput;
};


export type MutationDeleteUserCharactersArgs = {
  where: Array<UserCharacterWhereUniqueInput>;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationDoBattleArgs = {
  battle: Scalars['ID']['input'];
};


export type MutationGetWreckedArgs = {
  attempt: Scalars['ID']['input'];
};


export type MutationUpdateAbilitiesArgs = {
  data: Array<AbilityUpdateArgs>;
};


export type MutationUpdateAbilityArgs = {
  data: AbilityUpdateInput;
  where: AbilityWhereUniqueInput;
};


export type MutationUpdateAttemptCharacterArgs = {
  data: AttemptCharacterUpdateInput;
  where: AttemptCharacterWhereUniqueInput;
};


export type MutationUpdateAttemptCharactersArgs = {
  data: Array<AttemptCharacterUpdateArgs>;
};


export type MutationUpdateAttemptOpponentArgs = {
  data: AttemptOpponentUpdateInput;
  where: AttemptOpponentWhereUniqueInput;
};


export type MutationUpdateAttemptOpponentsArgs = {
  data: Array<AttemptOpponentUpdateArgs>;
};


export type MutationUpdateBattleArgs = {
  data: BattleUpdateInput;
  where: BattleWhereUniqueInput;
};


export type MutationUpdateBattleAttemptArgs = {
  data: BattleAttemptUpdateInput;
  where: BattleAttemptWhereUniqueInput;
};


export type MutationUpdateBattleAttemptsArgs = {
  data: Array<BattleAttemptUpdateArgs>;
};


export type MutationUpdateBattleCategoriesArgs = {
  data: Array<BattleCategoryUpdateArgs>;
};


export type MutationUpdateBattleCategoryArgs = {
  data: BattleCategoryUpdateInput;
  where: BattleCategoryWhereUniqueInput;
};


export type MutationUpdateBattleOpponentArgs = {
  data: BattleOpponentUpdateInput;
  where: BattleOpponentWhereUniqueInput;
};


export type MutationUpdateBattleOpponentsArgs = {
  data: Array<BattleOpponentUpdateArgs>;
};


export type MutationUpdateBattleTierArgs = {
  data: BattleTierUpdateInput;
  where: BattleTierWhereUniqueInput;
};


export type MutationUpdateBattleTiersArgs = {
  data: Array<BattleTierUpdateArgs>;
};


export type MutationUpdateBattlesArgs = {
  data: Array<BattleUpdateArgs>;
};


export type MutationUpdateCharacterArgs = {
  data: CharacterUpdateInput;
  where: CharacterWhereUniqueInput;
};


export type MutationUpdateCharactersArgs = {
  data: Array<CharacterUpdateArgs>;
};


export type MutationUpdateFactionArgs = {
  data: FactionUpdateInput;
  where: FactionWhereUniqueInput;
};


export type MutationUpdateFactionsArgs = {
  data: Array<FactionUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserCharacterArgs = {
  data: UserCharacterUpdateInput;
  where: UserCharacterWhereUniqueInput;
};


export type MutationUpdateUserCharactersArgs = {
  data: Array<UserCharacterUpdateArgs>;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  abilities?: Maybe<Array<Ability>>;
  abilitiesCount?: Maybe<Scalars['Int']['output']>;
  ability?: Maybe<Ability>;
  attemptCharacter?: Maybe<AttemptCharacter>;
  attemptCharacters?: Maybe<Array<AttemptCharacter>>;
  attemptCharactersCount?: Maybe<Scalars['Int']['output']>;
  attemptOpponent?: Maybe<AttemptOpponent>;
  attemptOpponents?: Maybe<Array<AttemptOpponent>>;
  attemptOpponentsCount?: Maybe<Scalars['Int']['output']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  battle?: Maybe<Battle>;
  battleAttempt?: Maybe<BattleAttempt>;
  battleAttempts?: Maybe<Array<BattleAttempt>>;
  battleAttemptsCount?: Maybe<Scalars['Int']['output']>;
  battleCategories?: Maybe<Array<BattleCategory>>;
  battleCategoriesCount?: Maybe<Scalars['Int']['output']>;
  battleCategory?: Maybe<BattleCategory>;
  battleOpponent?: Maybe<BattleOpponent>;
  battleOpponents?: Maybe<Array<BattleOpponent>>;
  battleOpponentsCount?: Maybe<Scalars['Int']['output']>;
  battleTier?: Maybe<BattleTier>;
  battleTiers?: Maybe<Array<BattleTier>>;
  battleTiersCount?: Maybe<Scalars['Int']['output']>;
  battles?: Maybe<Array<Battle>>;
  battlesCount?: Maybe<Scalars['Int']['output']>;
  character?: Maybe<Character>;
  characters?: Maybe<Array<Character>>;
  charactersCount?: Maybe<Scalars['Int']['output']>;
  faction?: Maybe<Faction>;
  factions?: Maybe<Array<Faction>>;
  factionsCount?: Maybe<Scalars['Int']['output']>;
  keystone: KeystoneMeta;
  user?: Maybe<User>;
  userCharacter?: Maybe<UserCharacter>;
  userCharacters?: Maybe<Array<UserCharacter>>;
  userCharactersCount?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};


export type QueryAbilitiesArgs = {
  orderBy?: Array<AbilityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AbilityWhereInput;
};


export type QueryAbilitiesCountArgs = {
  where?: AbilityWhereInput;
};


export type QueryAbilityArgs = {
  where: AbilityWhereUniqueInput;
};


export type QueryAttemptCharacterArgs = {
  where: AttemptCharacterWhereUniqueInput;
};


export type QueryAttemptCharactersArgs = {
  orderBy?: Array<AttemptCharacterOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AttemptCharacterWhereInput;
};


export type QueryAttemptCharactersCountArgs = {
  where?: AttemptCharacterWhereInput;
};


export type QueryAttemptOpponentArgs = {
  where: AttemptOpponentWhereUniqueInput;
};


export type QueryAttemptOpponentsArgs = {
  orderBy?: Array<AttemptOpponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AttemptOpponentWhereInput;
};


export type QueryAttemptOpponentsCountArgs = {
  where?: AttemptOpponentWhereInput;
};


export type QueryBattleArgs = {
  where: BattleWhereUniqueInput;
};


export type QueryBattleAttemptArgs = {
  where: BattleAttemptWhereUniqueInput;
};


export type QueryBattleAttemptsArgs = {
  orderBy?: Array<BattleAttemptOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BattleAttemptWhereInput;
};


export type QueryBattleAttemptsCountArgs = {
  where?: BattleAttemptWhereInput;
};


export type QueryBattleCategoriesArgs = {
  orderBy?: Array<BattleCategoryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BattleCategoryWhereInput;
};


export type QueryBattleCategoriesCountArgs = {
  where?: BattleCategoryWhereInput;
};


export type QueryBattleCategoryArgs = {
  where: BattleCategoryWhereUniqueInput;
};


export type QueryBattleOpponentArgs = {
  where: BattleOpponentWhereUniqueInput;
};


export type QueryBattleOpponentsArgs = {
  orderBy?: Array<BattleOpponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BattleOpponentWhereInput;
};


export type QueryBattleOpponentsCountArgs = {
  where?: BattleOpponentWhereInput;
};


export type QueryBattleTierArgs = {
  where: BattleTierWhereUniqueInput;
};


export type QueryBattleTiersArgs = {
  orderBy?: Array<BattleTierOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BattleTierWhereInput;
};


export type QueryBattleTiersCountArgs = {
  where?: BattleTierWhereInput;
};


export type QueryBattlesArgs = {
  orderBy?: Array<BattleOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BattleWhereInput;
};


export type QueryBattlesCountArgs = {
  where?: BattleWhereInput;
};


export type QueryCharacterArgs = {
  where: CharacterWhereUniqueInput;
};


export type QueryCharactersArgs = {
  orderBy?: Array<CharacterOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CharacterWhereInput;
};


export type QueryCharactersCountArgs = {
  where?: CharacterWhereInput;
};


export type QueryFactionArgs = {
  where: FactionWhereUniqueInput;
};


export type QueryFactionsArgs = {
  orderBy?: Array<FactionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FactionWhereInput;
};


export type QueryFactionsCountArgs = {
  where?: FactionWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserCharacterArgs = {
  where: UserCharacterWhereUniqueInput;
};


export type QueryUserCharactersArgs = {
  orderBy?: Array<UserCharacterOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserCharacterWhereInput;
};


export type QueryUserCharactersCountArgs = {
  where?: UserCharacterWhereInput;
};


export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TurnSummary = {
  __typename?: 'TurnSummary';
  attacker?: Maybe<AttemptCharacterOrOpponent>;
  crit?: Maybe<Scalars['Boolean']['output']>;
  damage?: Maybe<Scalars['Int']['output']>;
  target?: Maybe<AttemptCharacterOrOpponent>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<ImageFieldOutput>;
  battleSquad?: Maybe<Array<UserCharacter>>;
  battleSquadCount?: Maybe<Scalars['Int']['output']>;
  characters?: Maybe<Array<UserCharacter>>;
  charactersCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  credits?: Maybe<Scalars['Int']['output']>;
  crystals?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  energy?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  maxEnergy?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<PasswordState>;
  playerLevel?: Maybe<Scalars['Int']['output']>;
};


export type UserBattleSquadArgs = {
  orderBy?: Array<UserCharacterOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserCharacterWhereInput;
};


export type UserBattleSquadCountArgs = {
  where?: UserCharacterWhereInput;
};


export type UserCharactersArgs = {
  orderBy?: Array<UserCharacterOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserCharacterWhereInput;
};


export type UserCharactersCountArgs = {
  where?: UserCharacterWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCharacter = {
  __typename?: 'UserCharacter';
  character?: Maybe<Character>;
  gearLevel?: Maybe<Scalars['Int']['output']>;
  health?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  level?: Maybe<Scalars['Int']['output']>;
  speed?: Maybe<Scalars['Float']['output']>;
  stars?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
};

export type UserCharacterCreateInput = {
  character?: InputMaybe<CharacterRelateToOneForCreateInput>;
  gearLevel?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  stars?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type UserCharacterManyRelationFilter = {
  every?: InputMaybe<UserCharacterWhereInput>;
  none?: InputMaybe<UserCharacterWhereInput>;
  some?: InputMaybe<UserCharacterWhereInput>;
};

export type UserCharacterOrderByInput = {
  gearLevel?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  level?: InputMaybe<OrderDirection>;
  stars?: InputMaybe<OrderDirection>;
};

export type UserCharacterRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserCharacterWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCharacterCreateInput>>;
};

export type UserCharacterRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserCharacterWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCharacterCreateInput>>;
  disconnect?: InputMaybe<Array<UserCharacterWhereUniqueInput>>;
  set?: InputMaybe<Array<UserCharacterWhereUniqueInput>>;
};

export type UserCharacterRelateToOneForCreateInput = {
  connect?: InputMaybe<UserCharacterWhereUniqueInput>;
  create?: InputMaybe<UserCharacterCreateInput>;
};

export type UserCharacterRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserCharacterWhereUniqueInput>;
  create?: InputMaybe<UserCharacterCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCharacterUpdateArgs = {
  data: UserCharacterUpdateInput;
  where: UserCharacterWhereUniqueInput;
};

export type UserCharacterUpdateInput = {
  character?: InputMaybe<CharacterRelateToOneForUpdateInput>;
  gearLevel?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  stars?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type UserCharacterWhereInput = {
  AND?: InputMaybe<Array<UserCharacterWhereInput>>;
  NOT?: InputMaybe<Array<UserCharacterWhereInput>>;
  OR?: InputMaybe<Array<UserCharacterWhereInput>>;
  character?: InputMaybe<CharacterWhereInput>;
  gearLevel?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  level?: InputMaybe<IntFilter>;
  stars?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type UserCharacterWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserCreateInput = {
  avatar?: InputMaybe<ImageFieldInput>;
  battleSquad?: InputMaybe<UserCharacterRelateToManyForCreateInput>;
  characters?: InputMaybe<UserCharacterRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  credits?: InputMaybe<Scalars['Int']['input']>;
  crystals?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  energy?: InputMaybe<Scalars['Int']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  maxEnergy?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  playerLevel?: InputMaybe<Scalars['Int']['input']>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  credits?: InputMaybe<OrderDirection>;
  crystals?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  energy?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isAdmin?: InputMaybe<OrderDirection>;
  maxEnergy?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  playerLevel?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  avatar?: InputMaybe<ImageFieldInput>;
  battleSquad?: InputMaybe<UserCharacterRelateToManyForUpdateInput>;
  characters?: InputMaybe<UserCharacterRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  credits?: InputMaybe<Scalars['Int']['input']>;
  crystals?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  energy?: InputMaybe<Scalars['Int']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  maxEnergy?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  playerLevel?: InputMaybe<Scalars['Int']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  battleSquad?: InputMaybe<UserCharacterManyRelationFilter>;
  characters?: InputMaybe<UserCharacterManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  credits?: InputMaybe<IntNullableFilter>;
  crystals?: InputMaybe<IntNullableFilter>;
  email?: InputMaybe<StringFilter>;
  energy?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  maxEnergy?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  playerLevel?: InputMaybe<IntNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};
