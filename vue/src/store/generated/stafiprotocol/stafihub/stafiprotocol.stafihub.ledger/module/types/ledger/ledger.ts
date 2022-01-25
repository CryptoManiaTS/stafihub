/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'stafiprotocol.stafihub.ledger'

export enum PoolBondState {
  ERA_UPDATED = 0,
  BOND_REPORTED = 1,
  ACTIVE_REPORTED = 2,
  WITHDRAW_SKIPPED = 3,
  WITHDRAW_REPORTED = 4,
  TRANSFER_REPORTED = 5,
  UNRECOGNIZED = -1
}

export function poolBondStateFromJSON(object: any): PoolBondState {
  switch (object) {
    case 0:
    case 'ERA_UPDATED':
      return PoolBondState.ERA_UPDATED
    case 1:
    case 'BOND_REPORTED':
      return PoolBondState.BOND_REPORTED
    case 2:
    case 'ACTIVE_REPORTED':
      return PoolBondState.ACTIVE_REPORTED
    case 3:
    case 'WITHDRAW_SKIPPED':
      return PoolBondState.WITHDRAW_SKIPPED
    case 4:
    case 'WITHDRAW_REPORTED':
      return PoolBondState.WITHDRAW_REPORTED
    case 5:
    case 'TRANSFER_REPORTED':
      return PoolBondState.TRANSFER_REPORTED
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PoolBondState.UNRECOGNIZED
  }
}

export function poolBondStateToJSON(object: PoolBondState): string {
  switch (object) {
    case PoolBondState.ERA_UPDATED:
      return 'ERA_UPDATED'
    case PoolBondState.BOND_REPORTED:
      return 'BOND_REPORTED'
    case PoolBondState.ACTIVE_REPORTED:
      return 'ACTIVE_REPORTED'
    case PoolBondState.WITHDRAW_SKIPPED:
      return 'WITHDRAW_SKIPPED'
    case PoolBondState.WITHDRAW_REPORTED:
      return 'WITHDRAW_REPORTED'
    case PoolBondState.TRANSFER_REPORTED:
      return 'TRANSFER_REPORTED'
    default:
      return 'UNKNOWN'
  }
}

export enum BondAction {
  BOND_ONLY = 0,
  UNBOND_ONLY = 1,
  BOTH_BOND_UNBOND = 2,
  EITHER_BOND_UNBOND = 3,
  INTER_DEDUCT = 4,
  UNRECOGNIZED = -1
}

export function bondActionFromJSON(object: any): BondAction {
  switch (object) {
    case 0:
    case 'BOND_ONLY':
      return BondAction.BOND_ONLY
    case 1:
    case 'UNBOND_ONLY':
      return BondAction.UNBOND_ONLY
    case 2:
    case 'BOTH_BOND_UNBOND':
      return BondAction.BOTH_BOND_UNBOND
    case 3:
    case 'EITHER_BOND_UNBOND':
      return BondAction.EITHER_BOND_UNBOND
    case 4:
    case 'INTER_DEDUCT':
      return BondAction.INTER_DEDUCT
    case -1:
    case 'UNRECOGNIZED':
    default:
      return BondAction.UNRECOGNIZED
  }
}

export function bondActionToJSON(object: BondAction): string {
  switch (object) {
    case BondAction.BOND_ONLY:
      return 'BOND_ONLY'
    case BondAction.UNBOND_ONLY:
      return 'UNBOND_ONLY'
    case BondAction.BOTH_BOND_UNBOND:
      return 'BOTH_BOND_UNBOND'
    case BondAction.EITHER_BOND_UNBOND:
      return 'EITHER_BOND_UNBOND'
    case BondAction.INTER_DEDUCT:
      return 'INTER_DEDUCT'
    default:
      return 'UNKNOWN'
  }
}

/** OriginalTxType enumerates the tx type of a signature. */
export enum OriginalTxType {
  ORIGINAL_TX_TYPE_TRANSFER = 0,
  ORIGINAL_TX_TYPE_BOND = 1,
  ORIGINAL_TX_TYPE_UNBOND = 2,
  ORIGINAL_TX_TYPE_WITHDRAW = 3,
  ORIGINAL_TX_TYPE_CLAIM = 4,
  UNRECOGNIZED = -1
}

export function originalTxTypeFromJSON(object: any): OriginalTxType {
  switch (object) {
    case 0:
    case 'ORIGINAL_TX_TYPE_TRANSFER':
      return OriginalTxType.ORIGINAL_TX_TYPE_TRANSFER
    case 1:
    case 'ORIGINAL_TX_TYPE_BOND':
      return OriginalTxType.ORIGINAL_TX_TYPE_BOND
    case 2:
    case 'ORIGINAL_TX_TYPE_UNBOND':
      return OriginalTxType.ORIGINAL_TX_TYPE_UNBOND
    case 3:
    case 'ORIGINAL_TX_TYPE_WITHDRAW':
      return OriginalTxType.ORIGINAL_TX_TYPE_WITHDRAW
    case 4:
    case 'ORIGINAL_TX_TYPE_CLAIM':
      return OriginalTxType.ORIGINAL_TX_TYPE_CLAIM
    case -1:
    case 'UNRECOGNIZED':
    default:
      return OriginalTxType.UNRECOGNIZED
  }
}

export function originalTxTypeToJSON(object: OriginalTxType): string {
  switch (object) {
    case OriginalTxType.ORIGINAL_TX_TYPE_TRANSFER:
      return 'ORIGINAL_TX_TYPE_TRANSFER'
    case OriginalTxType.ORIGINAL_TX_TYPE_BOND:
      return 'ORIGINAL_TX_TYPE_BOND'
    case OriginalTxType.ORIGINAL_TX_TYPE_UNBOND:
      return 'ORIGINAL_TX_TYPE_UNBOND'
    case OriginalTxType.ORIGINAL_TX_TYPE_WITHDRAW:
      return 'ORIGINAL_TX_TYPE_WITHDRAW'
    case OriginalTxType.ORIGINAL_TX_TYPE_CLAIM:
      return 'ORIGINAL_TX_TYPE_CLAIM'
    default:
      return 'UNKNOWN'
  }
}

export interface ChainEra {
  denom: string
  era: number
}

export interface ChainBondingDuration {
  denom: string
  era: number
}

export interface Pool {
  denom: string
  addrs: { [key: string]: boolean }
}

export interface Pool_AddrsEntry {
  key: string
  value: boolean
}

export interface TotalExpectedActive {
  denom: string
  era: string
  amount: string
}

export interface BondPipeline {
  denom: string
  pool: string
  chunk: LinkChunk | undefined
}

export interface EraSnapshot {
  denom: string
  shotIds: Uint8Array[]
}

export interface PoolUnbond {
  denom: string
  pool: string
  era: number
  unbondings: Unbonding[]
}

export interface EraUnbondLimit {
  denom: string
  limit: number
}

export interface PoolDetail {
  denom: string
  pool: string
  subAccounts: string[]
  threshold: number
}

export interface LeastBond {
  denom: string
  amount: string
}

export interface LinkChunk {
  bond: string
  unbond: string
  active: string
}

export interface BondSnapshot {
  denom: string
  pool: string
  era: number
  chunk: LinkChunk | undefined
  lastVoter: string
  bondState: PoolBondState
}

export interface ExchangeRate {
  denom: string
  value: string
}

export interface EraExchangeRate {
  denom: string
  era: number
  value: string
}

export interface UnbondFee {
  value: string
}

export interface Unbonding {
  unbonder: string
  amount: string
  recipient: string
}

export interface UserUnlockChunk {
  pool: string
  unlockEra: number
  value: string
  recipient: string
}

export interface AccountUnbond {
  unbonder: string
  denom: string
  chunks: UserUnlockChunk[]
}

export interface BondRecord {
  denom: string
  bonder: string
  pool: string
  blockhash: string
  txhash: string
  amount: string
}

export interface Signature {
  denom: string
  era: number
  pool: string
  txType: OriginalTxType
  propId: Uint8Array
  sigs: string[]
  signers: { [key: string]: string }
}

export interface Signature_SignersEntry {
  key: string
  value: string
}

const baseChainEra: object = { denom: '', era: 0 }

export const ChainEra = {
  encode(message: ChainEra, writer: Writer = Writer.create()): Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom)
    }
    if (message.era !== 0) {
      writer.uint32(16).uint32(message.era)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): ChainEra {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseChainEra } as ChainEra
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string()
          break
        case 2:
          message.era = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ChainEra {
    const message = { ...baseChainEra } as ChainEra
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.era !== undefined && object.era !== null) {
      message.era = Number(object.era)
    } else {
      message.era = 0
    }
    return message
  },

  toJSON(message: ChainEra): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom)
    message.era !== undefined && (obj.era = message.era)
    return obj
  },

  fromPartial(object: DeepPartial<ChainEra>): ChainEra {
    const message = { ...baseChainEra } as ChainEra
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.era !== undefined && object.era !== null) {
      message.era = object.era
    } else {
      message.era = 0
    }
    return message
  }
}

const baseChainBondingDuration: object = { denom: '', era: 0 }

export const ChainBondingDuration = {
  encode(message: ChainBondingDuration, writer: Writer = Writer.create()): Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom)
    }
    if (message.era !== 0) {
      writer.uint32(16).uint32(message.era)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): ChainBondingDuration {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseChainBondingDuration } as ChainBondingDuration
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string()
          break
        case 2:
          message.era = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ChainBondingDuration {
    const message = { ...baseChainBondingDuration } as ChainBondingDuration
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.era !== undefined && object.era !== null) {
      message.era = Number(object.era)
    } else {
      message.era = 0
    }
    return message
  },

  toJSON(message: ChainBondingDuration): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom)
    message.era !== undefined && (obj.era = message.era)
    return obj
  },

  fromPartial(object: DeepPartial<ChainBondingDuration>): ChainBondingDuration {
    const message = { ...baseChainBondingDuration } as ChainBondingDuration
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.era !== undefined && object.era !== null) {
      message.era = object.era
    } else {
      message.era = 0
    }
    return message
  }
}

const basePool: object = { denom: '' }

export const Pool = {
  encode(message: Pool, writer: Writer = Writer.create()): Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom)
    }
    Object.entries(message.addrs).forEach(([key, value]) => {
      Pool_AddrsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim()
    })
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePool } as Pool
    message.addrs = {}
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string()
          break
        case 2:
          const entry2 = Pool_AddrsEntry.decode(reader, reader.uint32())
          if (entry2.value !== undefined) {
            message.addrs[entry2.key] = entry2.value
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Pool {
    const message = { ...basePool } as Pool
    message.addrs = {}
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.addrs !== undefined && object.addrs !== null) {
      Object.entries(object.addrs).forEach(([key, value]) => {
        message.addrs[key] = Boolean(value)
      })
    }
    return message
  },

  toJSON(message: Pool): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom)
    obj.addrs = {}
    if (message.addrs) {
      Object.entries(message.addrs).forEach(([k, v]) => {
        obj.addrs[k] = v
      })
    }
    return obj
  },

  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = { ...basePool } as Pool
    message.addrs = {}
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.addrs !== undefined && object.addrs !== null) {
      Object.entries(object.addrs).forEach(([key, value]) => {
        if (value !== undefined) {
          message.addrs[key] = Boolean(value)
        }
      })
    }
    return message
  }
}

const basePool_AddrsEntry: object = { key: '', value: false }

export const Pool_AddrsEntry = {
  encode(message: Pool_AddrsEntry, writer: Writer = Writer.create()): Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key)
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Pool_AddrsEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePool_AddrsEntry } as Pool_AddrsEntry
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string()
          break
        case 2:
          message.value = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Pool_AddrsEntry {
    const message = { ...basePool_AddrsEntry } as Pool_AddrsEntry
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key)
    } else {
      message.key = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value)
    } else {
      message.value = false
    }
    return message
  },

  toJSON(message: Pool_AddrsEntry): unknown {
    const obj: any = {}
    message.key !== undefined && (obj.key = message.key)
    message.value !== undefined && (obj.value = message.value)
    return obj
  },

  fromPartial(object: DeepPartial<Pool_AddrsEntry>): Pool_AddrsEntry {
    const message = { ...basePool_AddrsEntry } as Pool_AddrsEntry
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key
    } else {
      message.key = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value
    } else {
      message.value = false
    }
    return message
  }
}

const baseTotalExpectedActive: object = { denom: '', era: '', amount: '' }

export const TotalExpectedActive = {
  encode(message: TotalExpectedActive, writer: Writer = Writer.create()): Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom)
    }
    if (message.era !== '') {
      writer.uint32(18).string(message.era)
    }
    if (message.amount !== '') {
      writer.uint32(26).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): TotalExpectedActive {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseTotalExpectedActive } as TotalExpectedActive
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string()
          break
        case 2:
          message.era = reader.string()
          break
        case 3:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): TotalExpectedActive {
    const message = { ...baseTotalExpectedActive } as TotalExpectedActive
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.era !== undefined && object.era !== null) {
      message.era = String(object.era)
    } else {
      message.era = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: TotalExpectedActive): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom)
    message.era !== undefined && (obj.era = message.era)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<TotalExpectedActive>): TotalExpectedActive {
    const message = { ...baseTotalExpectedActive } as TotalExpectedActive
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.era !== undefined && object.era !== null) {
      message.era = object.era
    } else {
      message.era = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseBondPipeline: object = { denom: '', pool: '' }

export const BondPipeline = {
  encode(message: BondPipeline, writer: Writer = Writer.create()): Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom)
    }
    if (message.pool !== '') {
      writer.uint32(18).string(message.pool)
    }
    if (message.chunk !== undefined) {
      LinkChunk.encode(message.chunk, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): BondPipeline {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseBondPipeline } as BondPipeline
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string()
          break
        case 2:
          message.pool = reader.string()
          break
        case 3:
          message.chunk = LinkChunk.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): BondPipeline {
    const message = { ...baseBondPipeline } as BondPipeline
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = String(object.pool)
    } else {
      message.pool = ''
    }
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = LinkChunk.fromJSON(object.chunk)
    } else {
      message.chunk = undefined
    }
    return message
  },

  toJSON(message: BondPipeline): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom)
    message.pool !== undefined && (obj.pool = message.pool)
    message.chunk !== undefined && (obj.chunk = message.chunk ? LinkChunk.toJSON(message.chunk) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<BondPipeline>): BondPipeline {
    const message = { ...baseBondPipeline } as BondPipeline
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = object.pool
    } else {
      message.pool = ''
    }
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = LinkChunk.fromPartial(object.chunk)
    } else {
      message.chunk = undefined
    }
    return message
  }
}

const baseEraSnapshot: object = { denom: '' }

export const EraSnapshot = {
  encode(message: EraSnapshot, writer: Writer = Writer.create()): Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom)
    }
    for (const v of message.shotIds) {
      writer.uint32(26).bytes(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EraSnapshot {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseEraSnapshot } as EraSnapshot
    message.shotIds = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string()
          break
        case 3:
          message.shotIds.push(reader.bytes())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EraSnapshot {
    const message = { ...baseEraSnapshot } as EraSnapshot
    message.shotIds = []
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.shotIds !== undefined && object.shotIds !== null) {
      for (const e of object.shotIds) {
        message.shotIds.push(bytesFromBase64(e))
      }
    }
    return message
  },

  toJSON(message: EraSnapshot): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom)
    if (message.shotIds) {
      obj.shotIds = message.shotIds.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()))
    } else {
      obj.shotIds = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<EraSnapshot>): EraSnapshot {
    const message = { ...baseEraSnapshot } as EraSnapshot
    message.shotIds = []
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.shotIds !== undefined && object.shotIds !== null) {
      for (const e of object.shotIds) {
        message.shotIds.push(e)
      }
    }
    return message
  }
}

const basePoolUnbond: object = { denom: '', pool: '', era: 0 }

export const PoolUnbond = {
  encode(message: PoolUnbond, writer: Writer = Writer.create()): Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom)
    }
    if (message.pool !== '') {
      writer.uint32(18).string(message.pool)
    }
    if (message.era !== 0) {
      writer.uint32(24).uint32(message.era)
    }
    for (const v of message.unbondings) {
      Unbonding.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): PoolUnbond {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePoolUnbond } as PoolUnbond
    message.unbondings = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string()
          break
        case 2:
          message.pool = reader.string()
          break
        case 3:
          message.era = reader.uint32()
          break
        case 4:
          message.unbondings.push(Unbonding.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PoolUnbond {
    const message = { ...basePoolUnbond } as PoolUnbond
    message.unbondings = []
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = String(object.pool)
    } else {
      message.pool = ''
    }
    if (object.era !== undefined && object.era !== null) {
      message.era = Number(object.era)
    } else {
      message.era = 0
    }
    if (object.unbondings !== undefined && object.unbondings !== null) {
      for (const e of object.unbondings) {
        message.unbondings.push(Unbonding.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: PoolUnbond): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom)
    message.pool !== undefined && (obj.pool = message.pool)
    message.era !== undefined && (obj.era = message.era)
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map((e) => (e ? Unbonding.toJSON(e) : undefined))
    } else {
      obj.unbondings = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<PoolUnbond>): PoolUnbond {
    const message = { ...basePoolUnbond } as PoolUnbond
    message.unbondings = []
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = object.pool
    } else {
      message.pool = ''
    }
    if (object.era !== undefined && object.era !== null) {
      message.era = object.era
    } else {
      message.era = 0
    }
    if (object.unbondings !== undefined && object.unbondings !== null) {
      for (const e of object.unbondings) {
        message.unbondings.push(Unbonding.fromPartial(e))
      }
    }
    return message
  }
}

const baseEraUnbondLimit: object = { denom: '', limit: 0 }

export const EraUnbondLimit = {
  encode(message: EraUnbondLimit, writer: Writer = Writer.create()): Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom)
    }
    if (message.limit !== 0) {
      writer.uint32(16).uint32(message.limit)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EraUnbondLimit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseEraUnbondLimit } as EraUnbondLimit
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string()
          break
        case 2:
          message.limit = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EraUnbondLimit {
    const message = { ...baseEraUnbondLimit } as EraUnbondLimit
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Number(object.limit)
    } else {
      message.limit = 0
    }
    return message
  },

  toJSON(message: EraUnbondLimit): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom)
    message.limit !== undefined && (obj.limit = message.limit)
    return obj
  },

  fromPartial(object: DeepPartial<EraUnbondLimit>): EraUnbondLimit {
    const message = { ...baseEraUnbondLimit } as EraUnbondLimit
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit
    } else {
      message.limit = 0
    }
    return message
  }
}

const basePoolDetail: object = { denom: '', pool: '', subAccounts: '', threshold: 0 }

export const PoolDetail = {
  encode(message: PoolDetail, writer: Writer = Writer.create()): Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom)
    }
    if (message.pool !== '') {
      writer.uint32(18).string(message.pool)
    }
    for (const v of message.subAccounts) {
      writer.uint32(26).string(v!)
    }
    if (message.threshold !== 0) {
      writer.uint32(32).uint32(message.threshold)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): PoolDetail {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePoolDetail } as PoolDetail
    message.subAccounts = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string()
          break
        case 2:
          message.pool = reader.string()
          break
        case 3:
          message.subAccounts.push(reader.string())
          break
        case 4:
          message.threshold = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PoolDetail {
    const message = { ...basePoolDetail } as PoolDetail
    message.subAccounts = []
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = String(object.pool)
    } else {
      message.pool = ''
    }
    if (object.subAccounts !== undefined && object.subAccounts !== null) {
      for (const e of object.subAccounts) {
        message.subAccounts.push(String(e))
      }
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = Number(object.threshold)
    } else {
      message.threshold = 0
    }
    return message
  },

  toJSON(message: PoolDetail): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom)
    message.pool !== undefined && (obj.pool = message.pool)
    if (message.subAccounts) {
      obj.subAccounts = message.subAccounts.map((e) => e)
    } else {
      obj.subAccounts = []
    }
    message.threshold !== undefined && (obj.threshold = message.threshold)
    return obj
  },

  fromPartial(object: DeepPartial<PoolDetail>): PoolDetail {
    const message = { ...basePoolDetail } as PoolDetail
    message.subAccounts = []
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = object.pool
    } else {
      message.pool = ''
    }
    if (object.subAccounts !== undefined && object.subAccounts !== null) {
      for (const e of object.subAccounts) {
        message.subAccounts.push(e)
      }
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold
    } else {
      message.threshold = 0
    }
    return message
  }
}

const baseLeastBond: object = { denom: '', amount: '' }

export const LeastBond = {
  encode(message: LeastBond, writer: Writer = Writer.create()): Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom)
    }
    if (message.amount !== '') {
      writer.uint32(18).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): LeastBond {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseLeastBond } as LeastBond
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string()
          break
        case 2:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): LeastBond {
    const message = { ...baseLeastBond } as LeastBond
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: LeastBond): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<LeastBond>): LeastBond {
    const message = { ...baseLeastBond } as LeastBond
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseLinkChunk: object = { bond: '', unbond: '', active: '' }

export const LinkChunk = {
  encode(message: LinkChunk, writer: Writer = Writer.create()): Writer {
    if (message.bond !== '') {
      writer.uint32(10).string(message.bond)
    }
    if (message.unbond !== '') {
      writer.uint32(18).string(message.unbond)
    }
    if (message.active !== '') {
      writer.uint32(26).string(message.active)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): LinkChunk {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseLinkChunk } as LinkChunk
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.bond = reader.string()
          break
        case 2:
          message.unbond = reader.string()
          break
        case 3:
          message.active = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): LinkChunk {
    const message = { ...baseLinkChunk } as LinkChunk
    if (object.bond !== undefined && object.bond !== null) {
      message.bond = String(object.bond)
    } else {
      message.bond = ''
    }
    if (object.unbond !== undefined && object.unbond !== null) {
      message.unbond = String(object.unbond)
    } else {
      message.unbond = ''
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = String(object.active)
    } else {
      message.active = ''
    }
    return message
  },

  toJSON(message: LinkChunk): unknown {
    const obj: any = {}
    message.bond !== undefined && (obj.bond = message.bond)
    message.unbond !== undefined && (obj.unbond = message.unbond)
    message.active !== undefined && (obj.active = message.active)
    return obj
  },

  fromPartial(object: DeepPartial<LinkChunk>): LinkChunk {
    const message = { ...baseLinkChunk } as LinkChunk
    if (object.bond !== undefined && object.bond !== null) {
      message.bond = object.bond
    } else {
      message.bond = ''
    }
    if (object.unbond !== undefined && object.unbond !== null) {
      message.unbond = object.unbond
    } else {
      message.unbond = ''
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active
    } else {
      message.active = ''
    }
    return message
  }
}

const baseBondSnapshot: object = { denom: '', pool: '', era: 0, lastVoter: '', bondState: 0 }

export const BondSnapshot = {
  encode(message: BondSnapshot, writer: Writer = Writer.create()): Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom)
    }
    if (message.pool !== '') {
      writer.uint32(18).string(message.pool)
    }
    if (message.era !== 0) {
      writer.uint32(24).uint32(message.era)
    }
    if (message.chunk !== undefined) {
      LinkChunk.encode(message.chunk, writer.uint32(34).fork()).ldelim()
    }
    if (message.lastVoter !== '') {
      writer.uint32(42).string(message.lastVoter)
    }
    if (message.bondState !== 0) {
      writer.uint32(48).int32(message.bondState)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): BondSnapshot {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseBondSnapshot } as BondSnapshot
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string()
          break
        case 2:
          message.pool = reader.string()
          break
        case 3:
          message.era = reader.uint32()
          break
        case 4:
          message.chunk = LinkChunk.decode(reader, reader.uint32())
          break
        case 5:
          message.lastVoter = reader.string()
          break
        case 6:
          message.bondState = reader.int32() as any
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): BondSnapshot {
    const message = { ...baseBondSnapshot } as BondSnapshot
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = String(object.pool)
    } else {
      message.pool = ''
    }
    if (object.era !== undefined && object.era !== null) {
      message.era = Number(object.era)
    } else {
      message.era = 0
    }
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = LinkChunk.fromJSON(object.chunk)
    } else {
      message.chunk = undefined
    }
    if (object.lastVoter !== undefined && object.lastVoter !== null) {
      message.lastVoter = String(object.lastVoter)
    } else {
      message.lastVoter = ''
    }
    if (object.bondState !== undefined && object.bondState !== null) {
      message.bondState = poolBondStateFromJSON(object.bondState)
    } else {
      message.bondState = 0
    }
    return message
  },

  toJSON(message: BondSnapshot): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom)
    message.pool !== undefined && (obj.pool = message.pool)
    message.era !== undefined && (obj.era = message.era)
    message.chunk !== undefined && (obj.chunk = message.chunk ? LinkChunk.toJSON(message.chunk) : undefined)
    message.lastVoter !== undefined && (obj.lastVoter = message.lastVoter)
    message.bondState !== undefined && (obj.bondState = poolBondStateToJSON(message.bondState))
    return obj
  },

  fromPartial(object: DeepPartial<BondSnapshot>): BondSnapshot {
    const message = { ...baseBondSnapshot } as BondSnapshot
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = object.pool
    } else {
      message.pool = ''
    }
    if (object.era !== undefined && object.era !== null) {
      message.era = object.era
    } else {
      message.era = 0
    }
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = LinkChunk.fromPartial(object.chunk)
    } else {
      message.chunk = undefined
    }
    if (object.lastVoter !== undefined && object.lastVoter !== null) {
      message.lastVoter = object.lastVoter
    } else {
      message.lastVoter = ''
    }
    if (object.bondState !== undefined && object.bondState !== null) {
      message.bondState = object.bondState
    } else {
      message.bondState = 0
    }
    return message
  }
}

const baseExchangeRate: object = { denom: '', value: '' }

export const ExchangeRate = {
  encode(message: ExchangeRate, writer: Writer = Writer.create()): Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom)
    }
    if (message.value !== '') {
      writer.uint32(18).string(message.value)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): ExchangeRate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseExchangeRate } as ExchangeRate
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string()
          break
        case 2:
          message.value = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ExchangeRate {
    const message = { ...baseExchangeRate } as ExchangeRate
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value)
    } else {
      message.value = ''
    }
    return message
  },

  toJSON(message: ExchangeRate): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom)
    message.value !== undefined && (obj.value = message.value)
    return obj
  },

  fromPartial(object: DeepPartial<ExchangeRate>): ExchangeRate {
    const message = { ...baseExchangeRate } as ExchangeRate
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value
    } else {
      message.value = ''
    }
    return message
  }
}

const baseEraExchangeRate: object = { denom: '', era: 0, value: '' }

export const EraExchangeRate = {
  encode(message: EraExchangeRate, writer: Writer = Writer.create()): Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom)
    }
    if (message.era !== 0) {
      writer.uint32(16).uint32(message.era)
    }
    if (message.value !== '') {
      writer.uint32(26).string(message.value)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EraExchangeRate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseEraExchangeRate } as EraExchangeRate
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string()
          break
        case 2:
          message.era = reader.uint32()
          break
        case 3:
          message.value = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EraExchangeRate {
    const message = { ...baseEraExchangeRate } as EraExchangeRate
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.era !== undefined && object.era !== null) {
      message.era = Number(object.era)
    } else {
      message.era = 0
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value)
    } else {
      message.value = ''
    }
    return message
  },

  toJSON(message: EraExchangeRate): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom)
    message.era !== undefined && (obj.era = message.era)
    message.value !== undefined && (obj.value = message.value)
    return obj
  },

  fromPartial(object: DeepPartial<EraExchangeRate>): EraExchangeRate {
    const message = { ...baseEraExchangeRate } as EraExchangeRate
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.era !== undefined && object.era !== null) {
      message.era = object.era
    } else {
      message.era = 0
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value
    } else {
      message.value = ''
    }
    return message
  }
}

const baseUnbondFee: object = { value: '' }

export const UnbondFee = {
  encode(message: UnbondFee, writer: Writer = Writer.create()): Writer {
    if (message.value !== '') {
      writer.uint32(10).string(message.value)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): UnbondFee {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseUnbondFee } as UnbondFee
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): UnbondFee {
    const message = { ...baseUnbondFee } as UnbondFee
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value)
    } else {
      message.value = ''
    }
    return message
  },

  toJSON(message: UnbondFee): unknown {
    const obj: any = {}
    message.value !== undefined && (obj.value = message.value)
    return obj
  },

  fromPartial(object: DeepPartial<UnbondFee>): UnbondFee {
    const message = { ...baseUnbondFee } as UnbondFee
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value
    } else {
      message.value = ''
    }
    return message
  }
}

const baseUnbonding: object = { unbonder: '', amount: '', recipient: '' }

export const Unbonding = {
  encode(message: Unbonding, writer: Writer = Writer.create()): Writer {
    if (message.unbonder !== '') {
      writer.uint32(10).string(message.unbonder)
    }
    if (message.amount !== '') {
      writer.uint32(18).string(message.amount)
    }
    if (message.recipient !== '') {
      writer.uint32(26).string(message.recipient)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Unbonding {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseUnbonding } as Unbonding
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.unbonder = reader.string()
          break
        case 2:
          message.amount = reader.string()
          break
        case 3:
          message.recipient = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Unbonding {
    const message = { ...baseUnbonding } as Unbonding
    if (object.unbonder !== undefined && object.unbonder !== null) {
      message.unbonder = String(object.unbonder)
    } else {
      message.unbonder = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient)
    } else {
      message.recipient = ''
    }
    return message
  },

  toJSON(message: Unbonding): unknown {
    const obj: any = {}
    message.unbonder !== undefined && (obj.unbonder = message.unbonder)
    message.amount !== undefined && (obj.amount = message.amount)
    message.recipient !== undefined && (obj.recipient = message.recipient)
    return obj
  },

  fromPartial(object: DeepPartial<Unbonding>): Unbonding {
    const message = { ...baseUnbonding } as Unbonding
    if (object.unbonder !== undefined && object.unbonder !== null) {
      message.unbonder = object.unbonder
    } else {
      message.unbonder = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient
    } else {
      message.recipient = ''
    }
    return message
  }
}

const baseUserUnlockChunk: object = { pool: '', unlockEra: 0, value: '', recipient: '' }

export const UserUnlockChunk = {
  encode(message: UserUnlockChunk, writer: Writer = Writer.create()): Writer {
    if (message.pool !== '') {
      writer.uint32(10).string(message.pool)
    }
    if (message.unlockEra !== 0) {
      writer.uint32(16).uint32(message.unlockEra)
    }
    if (message.value !== '') {
      writer.uint32(26).string(message.value)
    }
    if (message.recipient !== '') {
      writer.uint32(34).string(message.recipient)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): UserUnlockChunk {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseUserUnlockChunk } as UserUnlockChunk
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pool = reader.string()
          break
        case 2:
          message.unlockEra = reader.uint32()
          break
        case 3:
          message.value = reader.string()
          break
        case 4:
          message.recipient = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): UserUnlockChunk {
    const message = { ...baseUserUnlockChunk } as UserUnlockChunk
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = String(object.pool)
    } else {
      message.pool = ''
    }
    if (object.unlockEra !== undefined && object.unlockEra !== null) {
      message.unlockEra = Number(object.unlockEra)
    } else {
      message.unlockEra = 0
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value)
    } else {
      message.value = ''
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient)
    } else {
      message.recipient = ''
    }
    return message
  },

  toJSON(message: UserUnlockChunk): unknown {
    const obj: any = {}
    message.pool !== undefined && (obj.pool = message.pool)
    message.unlockEra !== undefined && (obj.unlockEra = message.unlockEra)
    message.value !== undefined && (obj.value = message.value)
    message.recipient !== undefined && (obj.recipient = message.recipient)
    return obj
  },

  fromPartial(object: DeepPartial<UserUnlockChunk>): UserUnlockChunk {
    const message = { ...baseUserUnlockChunk } as UserUnlockChunk
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = object.pool
    } else {
      message.pool = ''
    }
    if (object.unlockEra !== undefined && object.unlockEra !== null) {
      message.unlockEra = object.unlockEra
    } else {
      message.unlockEra = 0
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value
    } else {
      message.value = ''
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient
    } else {
      message.recipient = ''
    }
    return message
  }
}

const baseAccountUnbond: object = { unbonder: '', denom: '' }

export const AccountUnbond = {
  encode(message: AccountUnbond, writer: Writer = Writer.create()): Writer {
    if (message.unbonder !== '') {
      writer.uint32(10).string(message.unbonder)
    }
    if (message.denom !== '') {
      writer.uint32(18).string(message.denom)
    }
    for (const v of message.chunks) {
      UserUnlockChunk.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): AccountUnbond {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseAccountUnbond } as AccountUnbond
    message.chunks = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.unbonder = reader.string()
          break
        case 2:
          message.denom = reader.string()
          break
        case 3:
          message.chunks.push(UserUnlockChunk.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): AccountUnbond {
    const message = { ...baseAccountUnbond } as AccountUnbond
    message.chunks = []
    if (object.unbonder !== undefined && object.unbonder !== null) {
      message.unbonder = String(object.unbonder)
    } else {
      message.unbonder = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.chunks !== undefined && object.chunks !== null) {
      for (const e of object.chunks) {
        message.chunks.push(UserUnlockChunk.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: AccountUnbond): unknown {
    const obj: any = {}
    message.unbonder !== undefined && (obj.unbonder = message.unbonder)
    message.denom !== undefined && (obj.denom = message.denom)
    if (message.chunks) {
      obj.chunks = message.chunks.map((e) => (e ? UserUnlockChunk.toJSON(e) : undefined))
    } else {
      obj.chunks = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<AccountUnbond>): AccountUnbond {
    const message = { ...baseAccountUnbond } as AccountUnbond
    message.chunks = []
    if (object.unbonder !== undefined && object.unbonder !== null) {
      message.unbonder = object.unbonder
    } else {
      message.unbonder = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.chunks !== undefined && object.chunks !== null) {
      for (const e of object.chunks) {
        message.chunks.push(UserUnlockChunk.fromPartial(e))
      }
    }
    return message
  }
}

const baseBondRecord: object = { denom: '', bonder: '', pool: '', blockhash: '', txhash: '', amount: '' }

export const BondRecord = {
  encode(message: BondRecord, writer: Writer = Writer.create()): Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom)
    }
    if (message.bonder !== '') {
      writer.uint32(18).string(message.bonder)
    }
    if (message.pool !== '') {
      writer.uint32(26).string(message.pool)
    }
    if (message.blockhash !== '') {
      writer.uint32(34).string(message.blockhash)
    }
    if (message.txhash !== '') {
      writer.uint32(42).string(message.txhash)
    }
    if (message.amount !== '') {
      writer.uint32(50).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): BondRecord {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseBondRecord } as BondRecord
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string()
          break
        case 2:
          message.bonder = reader.string()
          break
        case 3:
          message.pool = reader.string()
          break
        case 4:
          message.blockhash = reader.string()
          break
        case 5:
          message.txhash = reader.string()
          break
        case 6:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): BondRecord {
    const message = { ...baseBondRecord } as BondRecord
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.bonder !== undefined && object.bonder !== null) {
      message.bonder = String(object.bonder)
    } else {
      message.bonder = ''
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = String(object.pool)
    } else {
      message.pool = ''
    }
    if (object.blockhash !== undefined && object.blockhash !== null) {
      message.blockhash = String(object.blockhash)
    } else {
      message.blockhash = ''
    }
    if (object.txhash !== undefined && object.txhash !== null) {
      message.txhash = String(object.txhash)
    } else {
      message.txhash = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: BondRecord): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom)
    message.bonder !== undefined && (obj.bonder = message.bonder)
    message.pool !== undefined && (obj.pool = message.pool)
    message.blockhash !== undefined && (obj.blockhash = message.blockhash)
    message.txhash !== undefined && (obj.txhash = message.txhash)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<BondRecord>): BondRecord {
    const message = { ...baseBondRecord } as BondRecord
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.bonder !== undefined && object.bonder !== null) {
      message.bonder = object.bonder
    } else {
      message.bonder = ''
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = object.pool
    } else {
      message.pool = ''
    }
    if (object.blockhash !== undefined && object.blockhash !== null) {
      message.blockhash = object.blockhash
    } else {
      message.blockhash = ''
    }
    if (object.txhash !== undefined && object.txhash !== null) {
      message.txhash = object.txhash
    } else {
      message.txhash = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseSignature: object = { denom: '', era: 0, pool: '', txType: 0, sigs: '' }

export const Signature = {
  encode(message: Signature, writer: Writer = Writer.create()): Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom)
    }
    if (message.era !== 0) {
      writer.uint32(16).uint32(message.era)
    }
    if (message.pool !== '') {
      writer.uint32(26).string(message.pool)
    }
    if (message.txType !== 0) {
      writer.uint32(32).int32(message.txType)
    }
    if (message.propId.length !== 0) {
      writer.uint32(42).bytes(message.propId)
    }
    for (const v of message.sigs) {
      writer.uint32(50).string(v!)
    }
    Object.entries(message.signers).forEach(([key, value]) => {
      Signature_SignersEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).ldelim()
    })
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Signature {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseSignature } as Signature
    message.sigs = []
    message.signers = {}
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string()
          break
        case 2:
          message.era = reader.uint32()
          break
        case 3:
          message.pool = reader.string()
          break
        case 4:
          message.txType = reader.int32() as any
          break
        case 5:
          message.propId = reader.bytes()
          break
        case 6:
          message.sigs.push(reader.string())
          break
        case 7:
          const entry7 = Signature_SignersEntry.decode(reader, reader.uint32())
          if (entry7.value !== undefined) {
            message.signers[entry7.key] = entry7.value
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Signature {
    const message = { ...baseSignature } as Signature
    message.sigs = []
    message.signers = {}
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.era !== undefined && object.era !== null) {
      message.era = Number(object.era)
    } else {
      message.era = 0
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = String(object.pool)
    } else {
      message.pool = ''
    }
    if (object.txType !== undefined && object.txType !== null) {
      message.txType = originalTxTypeFromJSON(object.txType)
    } else {
      message.txType = 0
    }
    if (object.propId !== undefined && object.propId !== null) {
      message.propId = bytesFromBase64(object.propId)
    }
    if (object.sigs !== undefined && object.sigs !== null) {
      for (const e of object.sigs) {
        message.sigs.push(String(e))
      }
    }
    if (object.signers !== undefined && object.signers !== null) {
      Object.entries(object.signers).forEach(([key, value]) => {
        message.signers[key] = String(value)
      })
    }
    return message
  },

  toJSON(message: Signature): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom)
    message.era !== undefined && (obj.era = message.era)
    message.pool !== undefined && (obj.pool = message.pool)
    message.txType !== undefined && (obj.txType = originalTxTypeToJSON(message.txType))
    message.propId !== undefined && (obj.propId = base64FromBytes(message.propId !== undefined ? message.propId : new Uint8Array()))
    if (message.sigs) {
      obj.sigs = message.sigs.map((e) => e)
    } else {
      obj.sigs = []
    }
    obj.signers = {}
    if (message.signers) {
      Object.entries(message.signers).forEach(([k, v]) => {
        obj.signers[k] = v
      })
    }
    return obj
  },

  fromPartial(object: DeepPartial<Signature>): Signature {
    const message = { ...baseSignature } as Signature
    message.sigs = []
    message.signers = {}
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.era !== undefined && object.era !== null) {
      message.era = object.era
    } else {
      message.era = 0
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = object.pool
    } else {
      message.pool = ''
    }
    if (object.txType !== undefined && object.txType !== null) {
      message.txType = object.txType
    } else {
      message.txType = 0
    }
    if (object.propId !== undefined && object.propId !== null) {
      message.propId = object.propId
    } else {
      message.propId = new Uint8Array()
    }
    if (object.sigs !== undefined && object.sigs !== null) {
      for (const e of object.sigs) {
        message.sigs.push(e)
      }
    }
    if (object.signers !== undefined && object.signers !== null) {
      Object.entries(object.signers).forEach(([key, value]) => {
        if (value !== undefined) {
          message.signers[key] = String(value)
        }
      })
    }
    return message
  }
}

const baseSignature_SignersEntry: object = { key: '', value: '' }

export const Signature_SignersEntry = {
  encode(message: Signature_SignersEntry, writer: Writer = Writer.create()): Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key)
    }
    if (message.value !== '') {
      writer.uint32(18).string(message.value)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Signature_SignersEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseSignature_SignersEntry } as Signature_SignersEntry
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string()
          break
        case 2:
          message.value = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Signature_SignersEntry {
    const message = { ...baseSignature_SignersEntry } as Signature_SignersEntry
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key)
    } else {
      message.key = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value)
    } else {
      message.value = ''
    }
    return message
  },

  toJSON(message: Signature_SignersEntry): unknown {
    const obj: any = {}
    message.key !== undefined && (obj.key = message.key)
    message.value !== undefined && (obj.value = message.value)
    return obj
  },

  fromPartial(object: DeepPartial<Signature_SignersEntry>): Signature_SignersEntry {
    const message = { ...baseSignature_SignersEntry } as Signature_SignersEntry
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key
    } else {
      message.key = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value
    } else {
      message.value = ''
    }
    return message
  }
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

const atob: (b64: string) => string = globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'))
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64)
  const arr = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i)
  }
  return arr
}

const btoa: (bin: string) => string = globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'))
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = []
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]))
  }
  return btoa(bin.join(''))
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
