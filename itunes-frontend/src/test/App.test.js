import React from "react";
//import App from "../App";
import renderer from 'react-test-renderer';
//import Song from "../components/Song";
import Header from "../components/Header";

it("App Snapshot test", () => {
    const tree = renderer
    .create(<Header/>)
    expect(tree.toJSON).toMatchSnapshot();
})