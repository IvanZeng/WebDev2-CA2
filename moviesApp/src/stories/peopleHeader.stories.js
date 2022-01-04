import React from "react";
import PeopleHeader from "../components/headerPeople";
import SamplePeople from "./samplePeopleData";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Actors Page/PeopleHeader",
  component: PeopleHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <PeopleHeader people={SamplePeople} />;

Basic.storyName = "Default";