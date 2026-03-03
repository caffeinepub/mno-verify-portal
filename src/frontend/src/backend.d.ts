import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface VerificationResult {
    verified: boolean;
    timestamp: bigint;
}
export interface Submission {
    useCase: UseCase;
    phoneNumber: string;
}
export enum UseCase {
    Banking = "Banking",
    Content = "Content",
    Gambling = "Gambling"
}
export interface backendInterface {
    getSubmissionsByUseCase(useCase: UseCase): Promise<Array<Submission>>;
    getVerificationCount(useCase: UseCase): Promise<bigint>;
    submitPhoneNumber(phoneNumber: string, useCase: UseCase): Promise<VerificationResult>;
}
