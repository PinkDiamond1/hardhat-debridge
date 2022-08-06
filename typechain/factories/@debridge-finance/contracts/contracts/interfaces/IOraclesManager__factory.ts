/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOraclesManager,
  IOraclesManagerInterface,
} from "../../../../../@debridge-finance/contracts/contracts/interfaces/IOraclesManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "required",
        type: "bool",
      },
    ],
    name: "AddOracle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "deployId",
        type: "bytes32",
      },
    ],
    name: "DeployApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "submissionId",
        type: "bytes32",
      },
    ],
    name: "SubmissionApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "required",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isValid",
        type: "bool",
      },
    ],
    name: "UpdateOracle",
    type: "event",
  },
];

export class IOraclesManager__factory {
  static readonly abi = _abi;
  static createInterface(): IOraclesManagerInterface {
    return new utils.Interface(_abi) as IOraclesManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOraclesManager {
    return new Contract(address, _abi, signerOrProvider) as IOraclesManager;
  }
}