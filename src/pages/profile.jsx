import { useStat useRef } from "react";
import "./Profile.css";

function Profile({onNavigate}) {
  const [isEditing, setIsEditing] = useState(false);
const [profileImage, setProfileImage] = useState(null);
const fileInputRef = useRef(null);

const handleImageChange = (event) => {
  const file = event.target.files[0];

  if (file) {
    setProfileImage(URL.createObjectURL(file));
  }
};
  return (
    <>

<div className="screen-block">
  <div className="screen-label">4.3 - Profile</div>
  <div className="phone">
    <div className="bg"></div>
    <div className="status">
      <span>9:41</span>
      <div className="notch"></div>
      <div className="status-icons">
        <svg viewBox="0 0 20 14" fill="white"><rect x="0" y="8" width="3" height="6" rx="1"/><rect x="4.5" y="5" width="3" height="9" rx="1"/><rect x="9" y="2" width="3" height="12" rx="1"/><rect x="13.5" y="0" width="3" height="14" rx="1" opacity=".3"/></svg>
        <svg viewBox="0 0 20 14" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round"><path d="M1 5 Q10 -1 19 5"/><path d="M3.5 8 Q10 4 16.5 8"/><path d="M6.5 11 Q10 9 13.5 11"/><circle cx="10" cy="13" r="1" fill="white"/></svg>
        <svg viewBox="0 0 24 12" fill="none"><rect x="0.5" y="0.5" width="20" height="11" rx="2.5" stroke="white" strokeOpacity=".4"/><rect x="2" y="2" width="15" height="8" rx="1.5" fill="white"/><path d="M22 4v4a2 2 0 0 0 0-4z" fill="white" opacity=".4"/></svg>
      </div>
    </div>

    <button type="button" className="p43-settings" aria-label="Settings">
      <svg viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" strokeWidth="2.2" strokeLinecap="round">
        <line x1="4" y1="7" x2="20" y2="7"/>
        <line x1="4" y1="12" x2="20" y2="12"/>
        <line x1="4" y1="17" x2="20" y2="17"/>
      </svg>
    </button>

<input
  type="file"
  accept="image/*"
  ref={fileInputRef}
  onChange={handleImageChange}
  style={{ display: "none" }}
/>
    <div className="p43-body">
      <div
  className="p43-avatar"
  onClick={() => fileInputRef.current?.click()}
>
         
{profileImage ? (
  <img
    src={profileImage}
    alt="Profile"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%"
    }}
  />
) : (
  <svg
    viewBox="0 0 24 24"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)}
      
      </div>
      <div className="p43-name">Marcus Bronley</div>
      <div className="p43-handle-row">
        <div className="p43-handle">@marcus_bronley</div>
        <div className="p43-stats">
          <div className="p43-stat">
            <div className="p43-stat-num">6</div>
            <div className="p43-stat-label">followers</div>
          </div>
          <div className="p43-stat">
            <div className="p43-stat-num">83</div>
            <div className="p43-stat-label">following</div>
          </div>
        </div>
      </div>
      <div className="p43-bio">Builder· CritiqueMe · Ideas over noise</div>
      <div className="p43-actions">
        <button
  type="button"
  className="p43-btn"
  onClick={async () => {
    const profileUrl = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: "My CRIT ME Profile",
        text: "Check out my profile on CRIT ME!",
        url: profileUrl,
      });
    } else {
      await navigator.clipboard.writeText(profileUrl);
      alert("Profile link copied!");
    }
  }}
>
  Share Profile
</button>
        <button
  type="button"
  className="p43-btn"
  onClick={() => setIsEditing(true)}
>
  Edit Profile</button>
      </div>
    </div>

    <div className="nav">
      <div className="ni">
        <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        <span>Home</span>
      </div>
      <div className="ni">
        <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        <span>Friends</span>
      </div>
      <div className="ni">
        <div className="ni-post">
          <svg viewBox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
        </div>
      </div>
      <div
  className="ni"
  onClick={() => onNavigate("inbox")}
  role="button"
  tabIndex={0}
>
        <svg fill="none" stroke="rgba(255,255,255,.75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M17 8h1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1v2.5l-2.5-2.5"/>
          <path d="M3 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H8l-3 3v-3H6a3 3 0 0 1-3-3z"/>
        </svg>
        <span>Chat</span>
      </div>
      <div className="ni active">
        <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <span>Profile</span>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Profile;
