import React from "react";
import { create } from "react-test-renderer";
// import { act } from "@testing-library/react";
import ProfileStatus from "./ProfileStatus";


  describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
      const component = create(<ProfileStatus status="some status" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("some status");
    });

    // test("after creation <span> should be displayed", () => {
    //   const component = create(<ProfileStatus status="some status" />);
    //   const root = component.root;
    //   let span = root.findByType("span");
    //   expect(span.length).toBe(1);
    // });

    // test("after creation <span> should contains correct status", () => {
    //   const component = create(<ProfileStatus status="some status" />);
    //   const root = component.root;
    //   let span = root.findByType("span");
    //   expect(span.innerText).toBe("some status");
    // });
  });
