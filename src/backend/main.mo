import Array "mo:core/Array";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type UseCase = {
    #Banking;
    #Gambling;
    #Content;
  };

  module UseCase {
    public func compare(a : UseCase, b : UseCase) : Order.Order {
      switch (a, b) {
        case (#Banking, #Banking) { #equal };
        case (#Banking, _) { #less };
        case (#Gambling, #Gambling) { #equal };
        case (#Gambling, #Banking) { #greater };
        case (#Gambling, #Content) { #less };
        case (#Content, #Content) { #equal };
        case (#Content, _) { #greater };
      };
    };
  };

  type Submission = {
    phoneNumber : Text;
    useCase : UseCase;
  };

  type VerificationResult = {
    verified : Bool;
    timestamp : Int;
  };

  let submissions = Map.empty<Text, Submission>();
  let verificationCounts = Map.empty<UseCase, Nat>();

  public shared ({ caller }) func submitPhoneNumber(phoneNumber : Text, useCase : UseCase) : async VerificationResult {
    if (submissions.containsKey(phoneNumber)) { Runtime.trap("Phone number already submitted") };

    let submission : Submission = {
      phoneNumber;
      useCase;
    };

    submissions.add(phoneNumber, submission);

    let currentCount : Nat = switch (verificationCounts.get(useCase)) {
      case (null) { 0 };
      case (?count) { count };
    };
    verificationCounts.add(useCase, currentCount + 1);

    {
      verified = true;
      timestamp = 0;
    };
  };

  public query ({ caller }) func getSubmissionsByUseCase(useCase : UseCase) : async [Submission] {
    submissions.values().toArray().filter(
      func(sub) { sub.useCase == useCase }
    );
  };

  public query ({ caller }) func getVerificationCount(useCase : UseCase) : async Nat {
    switch (verificationCounts.get(useCase)) {
      case (null) { 0 };
      case (?count) { count };
    };
  };
};
