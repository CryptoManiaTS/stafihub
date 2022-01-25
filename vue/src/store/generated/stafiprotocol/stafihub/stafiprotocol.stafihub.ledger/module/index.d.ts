import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSetCommission } from "./types/ledger/tx";
import { MsgSetReceiver } from "./types/ledger/tx";
import { MsgClearCurrentEraSnapShots } from "./types/ledger/tx";
import { MsgSubmitSignature } from "./types/ledger/tx";
import { MsgSetUnbondFee } from "./types/ledger/tx";
import { MsgSetInitBond } from "./types/ledger/tx";
import { MsgLiquidityUnbond } from "./types/ledger/tx";
import { MsgSetPoolDetail } from "./types/ledger/tx";
import { MsgSetEraUnbondLimit } from "./types/ledger/tx";
import { MsgAddNewPool } from "./types/ledger/tx";
import { MsgRemovePool } from "./types/ledger/tx";
import { MsgSetLeastBond } from "./types/ledger/tx";
import { MsgSetUnbondCommission } from "./types/ledger/tx";
import { MsgSetChainBondingDuration } from "./types/ledger/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgSetCommission: (data: MsgSetCommission) => EncodeObject;
    msgSetReceiver: (data: MsgSetReceiver) => EncodeObject;
    msgClearCurrentEraSnapShots: (data: MsgClearCurrentEraSnapShots) => EncodeObject;
    msgSubmitSignature: (data: MsgSubmitSignature) => EncodeObject;
    msgSetUnbondFee: (data: MsgSetUnbondFee) => EncodeObject;
    msgSetInitBond: (data: MsgSetInitBond) => EncodeObject;
    msgLiquidityUnbond: (data: MsgLiquidityUnbond) => EncodeObject;
    msgSetPoolDetail: (data: MsgSetPoolDetail) => EncodeObject;
    msgSetEraUnbondLimit: (data: MsgSetEraUnbondLimit) => EncodeObject;
    msgAddNewPool: (data: MsgAddNewPool) => EncodeObject;
    msgRemovePool: (data: MsgRemovePool) => EncodeObject;
    msgSetLeastBond: (data: MsgSetLeastBond) => EncodeObject;
    msgSetUnbondCommission: (data: MsgSetUnbondCommission) => EncodeObject;
    msgSetChainBondingDuration: (data: MsgSetChainBondingDuration) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
