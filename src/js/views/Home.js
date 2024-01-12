import React from "react";
import JoinedChat from "../components/JoinedChats";
import AvailableChats from "../components/AvailableChats";
import ViewTitle from "../components/shared/ViewTitle";

export default function Home() {
    return (
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          <JoinedChat />
        </div>
        <div className="col-9 fh">
          <ViewTitle />
          <div className="container-fluid">
            <AvailableChats />
          </div>
        </div>
      </div>
    )
}