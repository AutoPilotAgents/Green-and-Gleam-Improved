import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Define the functions used in the chat widget
  const hideForm = () => {
    const preChatForm = document.getElementById('preChatForm');
    const chatBox = document.getElementById('chatBox');
    const inputBar = document.getElementById('inputBar');
    
    if (preChatForm) preChatForm.style.display = 'none';
    if (chatBox) chatBox.style.display = 'block';
    if (inputBar) inputBar.style.display = 'flex';
  };

  const appendMessage = (text: string, type: string) => {
    const box = document.getElementById('chatBox');
    if (!box) return;
    
    const div = document.createElement('div');
    div.className = `message ${type}`;
    div.textContent = text;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
  };

  const showTyping = () => {
    const box = document.getElementById('chatBox');
    if (!box) return;
    
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'message bot';
    typingIndicator.textContent = '…';
    box.appendChild(typingIndicator);
    box.scrollTop = box.scrollHeight;
  };

  const hideSuggestions = () => {
    const row = document.querySelector('.suggestionRow');
    if (row) row.remove();
  };

  const showSuggestions = () => {
    const box = document.getElementById('chatBox');
    if (!box) return;
    
    const suggestedMessages = ["What services do you offer?", "Can I schedule a call?", "Tell me about pricing."];
    
    const row = document.createElement('div');
    row.className = 'suggestionRow';
    
    suggestedMessages.forEach(text => {
      const btn = document.createElement('button');
      btn.className = 'suggestionBubble';
      btn.textContent = text;
      btn.onclick = () => {
        hideSuggestions();
        sendMessageToWebhook(text);
      };
      row.appendChild(btn);
    });
    
    box.appendChild(row);
  };

  const sendMessageToWebhook = async (msg: string) => {
    const webhookUrl = 'https://teaguewins.app.n8n.cloud/webhook/091748d5-ef40-4a83-a1d9-c1a5eb8f0089/chat';
    let sessionId = localStorage.getItem('chatSession') || (() => {
      const id = Math.random().toString(36).substr(2, 10);
      localStorage.setItem('chatSession', id);
      return id;
    })();
    
    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chatInput: msg,
          sessionId,
          timestamp: new Date().toISOString()
        })
      });
      
      const data = await res.json();
      const box = document.getElementById('chatBox');
      if (box) {
        const typingIndicator = box.querySelector('.message.bot');
        if (typingIndicator) typingIndicator.remove();
      }
      
      appendMessage(data.reply || '👾 Welcome! How can I assist you today?', 'bot');
      
      if (!document.querySelector('.suggestionRow')) {
        showSuggestions();
      }
    } catch {
      const box = document.getElementById('chatBox');
      if (box) {
        const typingIndicator = box.querySelector('.message.bot');
        if (typingIndicator) typingIndicator.remove();
      }
      appendMessage('🔴 Connection lost. Retry?', 'bot');
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Cal.com scripts for scheduling */}
          <script type="text/javascript">
            {`
              (function (C, A, L) { 
                let p = function (a, ar) { a.q.push(ar); }; 
                let d = C.document; 
                C.Cal = C.Cal || function () { 
                  let cal = C.Cal; 
                  let ar = arguments; 
                  if (!cal.loaded) { 
                    cal.ns = {}; 
                    cal.q = cal.q || []; 
                    d.head.appendChild(d.createElement("script")).src = A; 
                    cal.loaded = true; 
                  } 
                  if (ar[0] === L) { 
                    const api = function () { p(api, arguments); }; 
                    const namespace = ar[1]; 
                    api.q = api.q || []; 
                    if(typeof namespace === "string"){
                      cal.ns[namespace] = cal.ns[namespace] || api;
                      p(cal.ns[namespace], ar);
                      p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar); 
                    return;
                  } 
                  p(cal, ar); 
                }; 
              })(window, "https://app.cal.com/embed/embed.js", "init");
              Cal("init", "gutter-cleaning", {origin:"https://app.cal.com"});
              Cal.ns["gutter-cleaning"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
            `}
          </script>
          <script type="text/javascript">
            {`
              (function (C, A, L) { 
                let p = function (a, ar) { a.q.push(ar); }; 
                let d = C.document; 
                C.Cal = C.Cal || function () { 
                  let cal = C.Cal; 
                  let ar = arguments; 
                  if (!cal.loaded) { 
                    cal.ns = {}; 
                    cal.q = cal.q || []; 
                    d.head.appendChild(d.createElement("script")).src = A; 
                    cal.loaded = true; 
                  } 
                  if (ar[0] === L) { 
                    const api = function () { p(api, arguments); }; 
                    const namespace = ar[1]; 
                    api.q = api.q || []; 
                    if(typeof namespace === "string"){
                      cal.ns[namespace] = cal.ns[namespace] || api;
                      p(cal.ns[namespace], ar);
                      p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar); 
                    return;
                  } 
                  p(cal, ar); 
                }; 
              })(window, "https://app.cal.com/embed/embed.js", "init");
              Cal("init", "lawn-mow", {origin:"https://app.cal.com"});
              Cal.ns["lawn-mow"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
            `}
          </script>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          {/* Chatbot Widget */}
          <>
            <style>
              {`
                /* page-wide white background */
                html, body{
                  background:#fff; margin:0; padding:0;
                }
                :root{
                  --surface:#fafafa;
                  --accent:#0f9616;
                  --accent-glow:#1ebe1a;
                  --text:#111;
                  --placeholder:#777;
                  --font:"Segoe UI",sans-serif;
                }
                @import url("https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;600&display=swap");
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
                  background:#fff;color:var(--text);outline:none;
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
              `}
            </style>

            <button id="chatToggle">💬</button>
            <div id="chatWidget">
              <div className="chatHeader">AutoPilotAgents</div>
              <div id="preChatForm">
                <label>Name</label>
                <input id="inputName" placeholder="Your full name" required />
                <label>Email</label>
                <input id="inputEmail" placeholder="example@example.com" type="email" required />
                <label>Phone</label>
                <input id="inputPhone" placeholder="+1234567890" required />
                <button onClick={() => {
                  const name = document.getElementById('inputName') as HTMLInputElement;
                  const email = document.getElementById('inputEmail') as HTMLInputElement;
                  const phone = document.getElementById('inputPhone') as HTMLInputElement;
                  let ok = true;
                  [name, email, phone].forEach(el => {
                    el.classList.remove('invalid');
                    if (!el.value.trim()) {
                      el.classList.add('invalid');
                      ok = false;
                    }
                  });
                  if (!ok) return;
                  const intro = `User joined:\nName: ${name.value.trim()}\nEmail: ${email.value.trim()}\nPhone: ${phone.value.trim()}`;
                  hideForm();
                  appendMessage(intro, 'user');
                  showTyping();
                  sendMessageToWebhook(intro);
                }}>Start Messaging</button>
              </div>
              <div className="chatBox" id="chatBox" style={{ display: 'none' }}></div>
              <div className="inputBar" id="inputBar" style={{ display: 'none' }}>
                <input id="chatInput" placeholder="Type your message…" />
                <button onClick={() => {
                  const input = document.getElementById('chatInput') as HTMLInputElement;
                  const msg = input.value.trim();
                  if (!msg) return;
                  hideSuggestions();
                  appendMessage(msg, 'user');
                  input.value = '';
                  showTyping();
                  sendMessageToWebhook(msg);
                }}>Send</button>
              </div>
            </div>

            <script>
              {`
                document.getElementById('chatToggle').addEventListener('click',()=>{
                  const w=document.getElementById('chatWidget');
                  const open=w.classList.toggle('open');
                  if(!open)setTimeout(()=>w.style.display='none',300);else w.style.display='flex';
                });
                document.getElementById('chatInput').addEventListener('keydown',e=>{if(e.key==='Enter') {
                  const input = document.getElementById('chatInput');
                  const msg = input.value.trim();
                  if (!msg) return;
                  hideSuggestions();
                  appendMessage(msg, 'user');
                  input.value = '';
                  showTyping();
                  sendMessageToWebhook(msg);
                }});
              `}
            </script>
          </>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;