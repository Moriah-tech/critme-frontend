import React from 'react';
import './Notification.css';

function Notification() {
  return (
    <>

<div className="screen-block">
  <div className="screen-label">4.2 â€” Notifications</div>
  <div className="phone">
    <div className="bg"></div>
    <div className="status">
      <span>9:41</span>
      <div className="notch"></div>
      <div className="status-icons">
        <svg viewBox="0 0 20 14" fill="white"><rect x="0" y="8" width="3" height="6" rx="1"/><rect x="4.5" y="5" width="3" height="9" rx="1"/><rect x="9" y="2" width="3" height="12" rx="1"/><rect x="13.5" y="0" width="3" height="14" rx="1" opacity=".3"/></svg>
        <svg viewBox="0 0 20 14" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round"><path d="M1 5 Q10 -1 19 5"/><path d="M3.5 8 Q10 4 16.5 8"/><path d="M6.5 11 Q10 9 13.5 11"/><circle cx="10" cy="13" r="1" fill="white"/></svg>
        <svg viewBox="0 0 24 12" fill="none"><rect x="0.5" y="0.5" width="20" height="11" rx="2.5" stroke="white" stroke-opacity=".4"/><rect x="2" y="2" width="15" height="8" rx="1.5" fill="white"/><path d="M22 4v4a2 2 0 0 0 0-4z" fill="white" opacity=".4"/></svg>
      </div>
    </div>
    <div className="inbox-header">
      <div className="inbox-titles">
        <button type="button" className="inbox-btn" data-inbox-tab="chats">Chats</button>
        <button type="button" className="inbox-btn is-active" data-inbox-tab="notifications">Notifications</button>
      </div>
      <button className="inbox-settings" type="button" aria-label="Settings">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      </button>
    </div>
    <div className="inbox-search-wrap">
      <div className="inbox-search-field">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>
        <span>Search</span>
      </div>
    </div>
    
    <div className="n42-body">
      <div className="n42-contents-label">Contents</div>
      <div className="n42-row">
        <button type="button" className="n42-thumb" aria-label="Play video"></button>
        <button type="button" className="n42-title">"Elon on solar city"</button>
      </div>
      <div className="n42-sep"></div>
      <div className="n42-row">
        <button type="button" className="n42-thumb" style="background:linear-gradient(145deg,#2a1a3a,#150d20);border:none;" aria-label="Play video"></button>
        <button type="button" className="n42-title">"My VC Funding Journey"</button>
      </div>
      <button type="button" className="n42-see-more">â€” See More â€”</button>
      <div className="n42-activity">Activity</div>
      <div className="n42-act-row">
        <div className="n42-act-av"></div>
        <div className="n42-act-text">Marcos started following you</div>
      </div>
      <div className="n42-act-row">
        <div className="n42-act-av"></div>
        <div className="n42-act-text">Lucas shared your video</div>
        <div className="n42-act-thumb"></div>
      </div>
    </div>

    <div className="nav">
      <div className="ni"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><span>Home</span></div>
      <div className="ni"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><span>Friends</span></div>
      <div className="ni"><div className="ni-post"><svg viewBox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg></div></div>
      <div className="ni active"><svg fill="none" stroke="rgba(255,255,255,.95)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" viewBox="0 0 24 24"><path d="M17 8h1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1v2.5l-2.5-2.5"/><path d="M3 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H8l-3 3v-3H6a3 3 0 0 1-3-3z"/></svg><span>Chat</span></div>
      <div className="ni"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>Profile</span></div>
    </div>
  </div>
</div>

    </>
  );
}

export default Notification;
