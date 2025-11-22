import React, { useState } from "react";

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  profile: string;
  section: "FOUNDERS" | "ADVISORS" | "FRIENDS";
}

interface TeamModalsProps {
  teamMembers: TeamMember[];
}

const renderProfilePopup = (
  member: TeamMember,
  activeProfileId: string | null,
  closeProfile: () => void
) => (
  <div
    key={`popup-${member.id}`}
    id={`profile-${member.id}`}
    className="profile-popup"
    style={{ display: activeProfileId === member.id ? "block" : "none" }}
  >
    <div className="popup-content">
      <span className="close" onClick={closeProfile}>
        &times;
      </span>
      <div className="profile-details">
        <div className="profile-content">
          <div className="profile-picture1">
            <img
              src={member.image}
              alt={member.name}
              style={{ width: "100%" }}
            />
          </div>
          <div
            className="profile-text"
            dangerouslySetInnerHTML={{ __html: member.profile }}
          ></div>
        </div>
      </div>
    </div>
  </div>
);

const renderTeamSection = (
  title: string,
  members: TeamMember[],
  bgColor: string,
  openProfile: (id: string) => void
) => (
  <section
    className="meet-the-founders"
    style={{ paddingTop: "50px", backgroundColor: bgColor }}
  >
    <div className="container">
      <h2
        className="text-center"
        style={{ color: "orange", fontWeight: "bold", paddingBottom: "80px" }}
      >
        {title}
      </h2>
      <div className="row" style={{ paddingBottom: "80px" }}>
        {members.map((member) => (
          <div key={member.id} className="col-md-6 col-lg-4 col-xl-3">
            <div className="founder text-center">
              <div className="profile-popup">
                <div
                  className="profile-card"
                  onClick={() => openProfile(member.id)}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="profile-picture"
                  />
                  <div className="profile-title">
                    <div>{member.name}</div>
                    {member.title
                      .split(",")
                      .map((line: string, index: number) => (
                        <div key={index}>{line.trim()}</div>
                      ))}
                  </div>
                  <span className="view-profile">View Profile</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TeamModals: React.FC<TeamModalsProps> = ({ teamMembers }) => {
  const [activeProfileId, setActiveProfileId] = useState<string | null>(null);

  const openProfile = (id: string) => {
    setActiveProfileId(id);
  };

  const closeProfile = () => {
    setActiveProfileId(null);
  };

  const founders = teamMembers.filter((m) => m.section === "FOUNDERS");
  const advisors = teamMembers.filter((m) => m.section === "ADVISORS");
  const friends = teamMembers.filter((m) => m.section === "FRIENDS");

  return (
    <>
      {renderTeamSection("MEET THE FOUNDERS", founders, "#f2f2f2", openProfile)}
      {renderTeamSection("BOARD OF ADVISORS", advisors, "white", openProfile)}
      {renderTeamSection("FRIENDS OF AJF", friends, "#f2f2f2", openProfile)}

      {/* Render all popups, only the active one will be visible */}
      {teamMembers.map((member) =>
        renderProfilePopup(member, activeProfileId, closeProfile)
      )}
    </>
  );
};

export default TeamModals;
