import { useEffect, useMemo, useRef } from "react";

const ChatWidget = () => {
  const chatBoxRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Persistent session id
  const sessionId = useMemo(() => {
    const existing = localStorage.getItem("chatSession");
    if (existing) return existing;
    const id = Math.random().toString(36).substr(2, 10);
    localStorage.setItem("chatSession", id);
    return id;
  }, []);

  useEffect(() => {
    const webhookUrl = "https://teaguewins.app.n8n.cloud/webhook/5a04f6d1-1670-44b6-89fe-e00e36de87ac/chat";
    const suggestedMessages = [
      "What services do you offer?",
      "Can I schedule a call?",
      "Tell me about pricing.",
    ];

    const root = document;
    const chatWidget = root.getElementById("chatWidget");
    const chatBox = root.getElementById("chatBox");
    const inputBar = root.getElementById("inputBar");
    const preChatForm = root.getElementById("preChatForm");
    const chatToggle = root.getElementById("chatToggle");
    const inputName = root.getElementById("inputName") as HTMLInputElement | null;
    const inputEmail = root.getElementById("inputEmail") as HTMLInputElement | null;
    const inputPhone = root.getElementById("inputPhone") as HTMLInputElement | null;
    const chatInput = root.getElementById("chatInput") as HTMLInputElement | null;

    let typingIndicator: HTMLDivElement | null = null;

    function appendMessage(text: string, type: "user" | "bot") {
      if (!chatBox) return;
      const div = root.createElement("div");
      div.className = "message " + type;
      div.textContent = text;
      chatBox.appendChild(div);
      chatBox.scrollTop = chatBox.scrollHeight;
    }

    function showTyping() {
      if (!chatBox) return;
      typingIndicator = root.createElement("div");
      typingIndicator.className = "message bot";
      typingIndicator.textContent = "…";
      chatBox.appendChild(typingIndicator);
      chatBox.scrollTop = chatBox.scrollHeight;
    }

    function hideTyping() {
      if (typingIndicator) {
        typingIndicator.remove();
        typingIndicator = null;
      }
    }

    function hideSuggestions() {
      const row = root.querySelector(".suggestionRow");
      if (row) row.remove();
    }

    function showSuggestions() {
      if (!chatBox) return;
      const row = root.createElement("div");
      row.className = "suggestionRow";
      suggestedMessages.forEach((text) => {
        const btn = root.createElement("button");
        btn.className = "suggestionBubble";
        btn.textContent = text;
        btn.onclick = () => {
          hideSuggestions();
          sendMessage(text);
        };
        row.appendChild(btn);
      });
      chatBox.appendChild(row);
    }

    function hideForm() {
      if (preChatForm) preChatForm.setAttribute("style", "display:none");
      if (chatBox) chatBox.setAttribute("style", "display:block");
      if (inputBar) inputBar.setAttribute("style", "display:flex");
    }

    async function startChat() {
      if (!inputName || !inputEmail || !inputPhone) return;
      let ok = true;
      [inputName, inputEmail, inputPhone].forEach((el) => {
        el.classList.remove("invalid");
        if (!el.value.trim()) {
          el.classList.add("invalid");
          ok = false;
        }
      });
      if (!ok) return;
      const intro = `User joined:
Name: ${inputName.value.trim()}
Email: ${inputEmail.value.trim()}
Phone: ${inputPhone.value.trim()}`;
      hideForm();
      appendMessage(intro, "user");
      showTyping();
      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chatInput: intro,
            sessionId,
            timestamp: new Date().toISOString(),
          }),
        });
        const data = await res.json();
        hideTyping();
        appendMessage(data.reply || "👾 Welcome! How can I assist you today?", "bot");
        showSuggestions();
      } catch {
        hideTyping();
        appendMessage("🔴 Connection lost. Retry?", "bot");
      }
    }

    async function sendMessage(optional = "") {
      if (!chatInput) return;
      const msg = optional || chatInput.value.trim();
      if (!msg) return;
      if (!optional) hideSuggestions();
      appendMessage(msg, "user");
      if (!optional) chatInput.value = "";
      showTyping();
      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chatInput: msg,
            sessionId,
            timestamp: new Date().toISOString(),
          }),
        });
        const data = await res.json();
        hideTyping();
        appendMessage(data.reply || "⚠️ No response received.", "bot");
      } catch {
        hideTyping();
        appendMessage("🔴 Connection lost. Retry?", "bot");
      }
    }

    // Wire up listeners
    const onToggle = () => {
      if (!chatWidget) return;
      const open = chatWidget.classList.toggle("open");
      if (!open) setTimeout(() => (chatWidget.style.display = "none"), 300);
      else chatWidget.style.display = "flex";
    };

    const onEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") sendMessage();
    };

    const onStartClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.getAttribute("data-chat-start") === "1") {
        startChat();
      }
    };

    chatToggle?.addEventListener("click", onToggle);
    chatInput?.addEventListener("keydown", onEnter);
    preChatForm?.addEventListener("click", onStartClick);

    // Cleanup
    return () => {
      chatToggle?.removeEventListener("click", onToggle);
      chatInput?.removeEventListener("keydown", onEnter);
      preChatForm?.removeEventListener("click", onStartClick);
    };
  }, [sessionId]);

  return (
    <>
      <style>{`/* ===== GREEN MINIMAL WIDGET (WHITE BACKGROUND) ===== */
html, body{ background:#fff; margin:0; padding:0; }
:root{
  --surface:#fafafa;
  --accent:#0f9616;
  --accent-glow:#1ebe1a;
  --text:#111;
  --placeholder:#777;
  --font:"Segoe UI",sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0;font-family:var(--font)}
#chatToggle{
  position:fixed;bottom:20px;right:20px;width:50px;height:50px;
  border:none;border-radius:50%;background:var(--accent);color:#fff;
  font-size:22px;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.3);
  z-index:999;
}
#chatWidget{
  position:fixed;bottom:80px;right:20px;width:340px;height:480px;
  background:var(--surface);border:1px solid var(--accent);
  border-radius:8px;display:none;flex-direction:column;overflow:hidden;
  box-shadow:0 4px 14px rgba(0,0,0,.2);
  opacity:0;transform:scale(.95);transform-origin:bottom right;
  transition:opacity .3s ease,transform .3s ease;z-index:998;
}
#chatWidget.open{display:flex;opacity:1;transform:scale(1)}
.chatHeader{
  padding:12px 18px;font-weight:600;font-size:15px;
  background:var(--accent);color:#fff;
}
#preChatForm{
  flex:1;display:flex;flex-direction:column;justify-content:center;
  gap:20px;padding:30px 25px;
}
#preChatForm label{font-size:13px;color:var(--text)}
#preChatForm input{
  padding:12px;border:1px solid #ddd;border-radius:6px;
  background:#fff;color:#text;outline:none;
  transition:border .2s,box-shadow .2s;
}
@keyframes ring{
  0%  {box-shadow:0 0 0 0 var(--accent-glow);}
  50% {box-shadow:0 0 0 5px rgba(15,150,22,.35);}
  100%{box-shadow:0 0 0 0 var(--accent-glow);}
}
#preChatForm input.invalid{
  animation:ring .8s ease-in-out infinite;
}
#preChatForm input::placeholder{color:var(--placeholder)}
#preChatForm button{
  padding:14px;border:none;border-radius:6px;background:var(--accent);
  color:#fff;font-weight:600;cursor:pointer;
}
#preChatForm button:hover{background:var(--accent-glow)}
.chatBox{flex:1;padding:20px;overflow-y:auto;background:#fff;border-top:1px solid #eee}
.message{margin:0 0 14px;max-width:75%;padding:10px 14px;border-radius:6px;font-size:14px}
.message.user{margin-left:auto;background:var(--accent);color:#fff}
.message.bot{margin-right:auto;background:#f5f5f5;color:#111;border:1px solid #ddd}
.suggestionRow{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0 0}
.suggestionBubble{background:#fff;color:var(--accent);border:1px solid var(--accent);border-radius:18px;padding:6px 10px;font-size:13px;cursor:pointer}
.suggestionBubble:hover{background:var(--accent);color:#fff}
.inputBar{display:flex;align-items:center;padding:10px 14px;background:#f5f5f5;border-top:1px solid #ddd;gap:8px}
.inputBar input{flex:1;padding:10px;border:1px solid #ccc;border-radius:4px;background:#fff;color:#111}
.inputBar button{padding:8px 16px;border:none;border-radius:4px;background:var(--accent);color:#fff;cursor:pointer}
.inputBar button:hover{background:var(--accent-glow)}
/* ===== /END WIDGET ===== */`}</style>

      <button id="chatToggle" aria-label="Open chat">💬</button>
      <div id="chatWidget" role="dialog" aria-label="Chat widget">
        <div className="chatHeader">Green&Gleam</div>
        <div id="preChatForm">
          <label>Name</label>
          <input id="inputName" placeholder="Your full name" required />
          <label>Email</label>
          <input id="inputEmail" placeholder="example@example.com" type="email" required />
          <label>Phone</label>
          <input id="inputPhone" placeholder="+1234567890" required />
          <button data-chat-start="1">Start Messaging</button>
        </div>
        <div className="chatBox" id="chatBox" style={{ display: "none" }} ref={chatBoxRef}></div>
        <div className="inputBar" id="inputBar" style={{ display: "none" }}>
          <input id="chatInput" placeholder="Type your message…" ref={inputRef} />
          <button onClick={() => { /* click handled by effect via Enter key; optional hook */ }}>Send</button>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;